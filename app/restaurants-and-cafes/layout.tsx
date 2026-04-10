import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Billing Software for Restaurants & Cafes | Billing Corner',
  description: 'Manage table orders, KOT, and payments effortlessly with our specialized restaurant billing solution.',
};

export default function RestaurantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
