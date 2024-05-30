import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
    title: 'Classroom Quiz App',
    description: 'Gamify the learning experience',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className='bg-red-100'>{children}</body>
        </html>
    );
}
