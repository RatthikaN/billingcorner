import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Billing Corner Blog | Latest Insights and Updates',
  description: 'Stay updated with the latest trends in billing, GST compliance, and business management from the Billing Corner team.',
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
