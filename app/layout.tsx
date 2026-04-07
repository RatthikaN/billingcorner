import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import Script from 'next/script';
import '../src/index.css';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import WhatsAppButton from '../src/components/WhatsAppButton';

const GA_MEASUREMENT_ID = 'G-LQ8G3JQTSX';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata: Metadata = {
  title: 'Billing Corner | Smart Billing Software for Modern Businesses',
  description: 'A comprehensive billing, inventory management, and GST compliance software for Indian merchants.',
  icons: {
    icon: '/images/b_logo.jpeg',
    apple: '/images/b_logo.jpeg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body className={`${inter.variable} ${outfit.variable} font-sans text-slate-900 bg-white min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
