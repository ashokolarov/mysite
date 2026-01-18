import BlogList from '@/app/components/BlogList';
import { getAllPosts, getAllTags } from '@/app/lib/blog';

export const metadata = {
    title: 'Blog | Aleksandar Shokolarov',
    description: 'Thoughts on machine learning, mathematicsm, finance and other.',
};

export default async function BlogPage() {
    const posts = await getAllPosts();
    const allTags = await getAllTags();

    return <BlogList posts={posts} allTags={allTags} />;
}
