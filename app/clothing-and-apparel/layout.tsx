import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Billing Software for Clothing & Apparel Stores | Billing Corner',
  description: 'Manage sizes, colors, and variants with ease using our specialized apparel billing and inventory software.',
};

export default function ApparelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
