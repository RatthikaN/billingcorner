import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Checkout | Billing Corner',
  description: 'Complete your purchase and start using Billing Corner today for your business needs.',
};

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
