import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import rehypeKatex from 'rehype-katex';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

const postsDirectory = path.join(process.cwd(), 'app/blog/posts');

export interface BlogPost {
    id: string;
    title: string;
    date: string;
    summary: string;
    tags: string[];
    content: string;
}

export interface BlogPostMetadata {
    id: string;
    title: string;
    date: string;
    summary: string;
    tags: string[];
}

async function parseMarkdown(content: string): Promise<string> {
    const file = await unified()
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkMath)
        .use(remarkRehype)
        .use(rehypeKatex)
        .use(rehypeStringify)
        .process(content);

    return String(file);
}

export async function getAllPosts(): Promise<BlogPostMetadata[]> {
    if (!fs.existsSync(postsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const posts: BlogPostMetadata[] = [];

    for (const fileName of fileNames) {
        if (!fileName.endsWith('.md')) continue;

        const filePath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContents);

        posts.push({
            id: fileName.replace(/\.md$/, ''),
            title: data.title || 'Untitled',
            date: data.date || new Date().toISOString(),
            summary: data.summary || '',
            tags: data.tags || [],
        });
    }

    // Sort by date, newest first
    posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    return posts;
}

export async function getPostById(id: string): Promise<BlogPost | null> {
    const filePath = path.join(postsDirectory, `${id}.md`);

    if (!fs.existsSync(filePath)) {
        return null;
    }

    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    const htmlContent = await parseMarkdown(content);

    return {
        id,
        title: data.title || 'Untitled',
        date: data.date || new Date().toISOString(),
        summary: data.summary || '',
        tags: data.tags || [],
        content: htmlContent,
    };
}

export function getAllTags(): Promise<string[]> {
    return getAllPosts().then((posts) => {
        const tags = new Set<string>();
        posts.forEach((post) => {
            post.tags.forEach((tag) => tags.add(tag));
        });
        return Array.from(tags).sort();
    });
}
