import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Inventory Management Solution | Billing Corner',
  description: 'Take full control of your stock with automated tracking, low-stock alerts, and multi-location inventory management.',
};

export default function ProductsInventoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
