import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Magic Touch - Bridal Services',
  description: 'Professional bridal makeup, saree draping, and mehendi art services',
  keywords: ['bridal makeup', 'saree draping', 'mehendi', 'wedding services'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  );
}