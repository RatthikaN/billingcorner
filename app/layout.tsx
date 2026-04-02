import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import '../src/index.css';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata: Metadata = {
  title: 'Billing Corner | Smart Billing Software for Modern Businesses',
  description: 'A comprehensive billing, inventory management, and GST compliance software for Indian merchants.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} font-sans text-slate-900 bg-white min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
