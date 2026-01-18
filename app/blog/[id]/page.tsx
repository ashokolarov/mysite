import { getAllPosts, getPostById } from '@/app/lib/blog';
import { notFound } from 'next/navigation';

interface Params {
    params: {
        id: string;
    };
}

export async function generateMetadata({ params }: Params) {
    const post = await getPostById(params.id);

    if (!post) {
        return {
            title: 'Post not found',
        };
    }

    return {
        title: `${post.title} | Gregory Gundersen`,
        description: post.summary,
    };
}

export async function generateStaticParams() {
    const posts = await getAllPosts();
    return posts.map((post) => ({
        id: post.id,
    }));
}

export default async function BlogPostPage({ params }: Params) {
    const post = await getPostById(params.id);

    if (!post) {
        notFound();
    }

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    return (
        <>
            <div className="w-full border-b border-gray-200">
                <article className="max-w-3xl mx-auto px-6 py-12">
                    {/* Title and metadata */}
                    <header className="mb-0">
                        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
                        <p className="text-gray-700 font-semibold mb-4">{post.summary}</p>
                        <time className="text-gray-500">{formatDate(post.date)}</time>
                    </header>
                </article>
            </div>

            <article className="max-w-3xl mx-auto px-6 py-12">
                {/* Content */}
                <div
                    className="prose prose-sm max-w-none"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </article>

            {/* Tags */}
            {post.tags.length > 0 && (
                <div className="w-full border-t border-gray-200">
                    <article className="max-w-3xl mx-auto px-6 py-8">
                        <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag) => (
                                <span key={tag} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </article>
                </div>
            )}
        </>
    );
}
