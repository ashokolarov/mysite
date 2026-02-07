import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import Navigation from './components/Navigation';
import './globals.css';


export const metadata: Metadata = {
    title: 'Aleksandar Shokolarov',
    description: 'Thoughts on topics I find interesting.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/katex@0.16.4/dist/katex.min.css"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;600;700&display=swap"
                    rel="stylesheet"
                />
                {/* Favicons */}
                <link rel="icon" type="image/svg+xml" href="/favicon.svg?v=2" />
                <link rel="icon" type="image/png" href="/favicon.png?v=2" />
                <link rel="icon" type="image/x-icon" href="/favicon.ico?v=2" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=2" />
                <meta name="theme-color" content="#ffffff" />
            </head>
            <body>
                <Navigation />
                <main className="pt-16">{children}</main>
                <Analytics />
            </body>
        </html>
    );
}
