import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Simple & Transparent Pricing | Billing Corner',
  description: 'Choose the best plan for your business. Transparent pricing with no hidden costs for our premium billing and inventory solutions.',
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
