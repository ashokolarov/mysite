'use client';

import Link from 'next/link';

export default function Navigation() {
    return (
        <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
            <div className="max-w-3xl mx-auto px-6 py-4 flex items-center gap-6">
                <Link href="/" className="text-sm text-gray-600 hover:text-gray-900 transition">
                    Home
                </Link>
                <Link href="/blog" className="text-sm text-gray-600 hover:text-gray-900 transition">
                    Blog
                </Link>
            </div>
        </nav>
    );
}
