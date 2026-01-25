import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import Navigation from './components/Navigation';
import './globals.css';


export const metadata: Metadata = {
    title: 'Aleksandar Shokolarov',
    description: 'Thoughts on topics I find interesting',
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
            </head>
            <head>
                <link rel="icon" href="/favicon.png?v=2" />
            </head>
            <body>
                <Navigation />
                <main className="pt-16">{children}</main>
                <Analytics />
            </body>
        </html>
    );
}
