'use client';

import { BlogPostMetadata } from '@/app/lib/blog';
import Link from 'next/link';
import { useMemo, useState } from 'react';

interface BlogListProps {
    posts: BlogPostMetadata[];
    allTags: string[];
}

export default function BlogList({ posts, allTags }: BlogListProps) {
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    const filteredPosts = useMemo(() => {
        if (!selectedTag) return posts;
        return posts.filter((post) => post.tags.includes(selectedTag));
    }, [posts, selectedTag]);

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    return (
        <div className="max-w-3xl mx-auto px-6 py-12">
            {/* Tag filters */}
            {allTags.length > 0 && (
                <div className="mb-8">
                    <div className="flex flex-wrap gap-2">
                        <button
                            onClick={() => setSelectedTag(null)}
                            className={`px-3 py-1 rounded text-sm transition ${selectedTag === null
                                ? 'bg-gray-900 text-white'
                                : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                                }`}
                        >
                            All
                        </button>
                        {allTags.map((tag) => (
                            <button
                                key={tag}
                                onClick={() => setSelectedTag(tag)}
                                className={`px-3 py-1 rounded text-sm transition ${selectedTag === tag
                                    ? 'bg-gray-900 text-white'
                                    : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                                    }`}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Blog posts */}
            <div className="space-y-6">
                {filteredPosts.length === 0 ? (
                    <p className="text-gray-500">No posts found.</p>
                ) : (
                    filteredPosts.map((post) => (
                        <article key={post.id} className="border-b border-gray-200 pb-8">
                            <Link href={`/blog/${post.id}`} className="group">
                                <h2 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition">
                                    {post.title}
                                </h2>
                            </Link>
                            <p className="text-sm text-gray-500 mb-3">{formatDate(post.date)}</p>
                            <p className="text-gray-700">{post.summary}</p>
                            {post.tags.length > 0 && (
                                <div className="flex flex-wrap gap-2 mt-3">
                                    {post.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </article>
                    ))
                )}
            </div>
        </div>
    );
}
