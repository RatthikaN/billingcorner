import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Billing Software for Fresh Produce & Vegetable Stores | Billing Corner',
  description: 'Manage weighing scales, perishables, and inventory with our specialized fresh produce billing solution.',
};

export default function FreshProduceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
