import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Billing Software for Retail & Supermarkets | Billing Corner',
  description: 'Boost your retail business with our fast POS, inventory tracking, and GST reporting software.',
};

export default function RetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
