import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mobile Billing Solution | Billing Corner',
  description: 'Manage your business on the move with our powerful and intuitive mobile billing application.',
};

export default function ProductsMobileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
