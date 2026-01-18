import Link from 'next/link';

export default function Home() {
    return (
        <div className="pt-24">
            <div className="max-w-3xl mx-auto px-6">
                {/* Main heading */}
                <h1 className="text-xl font-bold mb-4">Aleksandar Shokolarov</h1>

                {/* Navigation links */}
                <div className="mb-5 space-y-2">
                    <p>
                        <Link href="/blog" className="text-gray-600 hover:underline">
                            Blog
                        </Link>
                    </p>
                    <p>
                        <Link href="https://github.com/ashokolarov" className="text-gray-600 hover:underline">
                            Code
                        </Link>
                    </p>
                    <p>
                        <Link href="https://www.linkedin.com/in/ashokolarov/" className="text-gray-600 hover:underline">
                            LinkedIn
                        </Link>
                    </p>
                </div>

                {/* Contact info */}
                <p className="text-gray-600 font-mono text-sm">ashokolarov@gmail.com</p>
            </div>
        </div>
    );
}
