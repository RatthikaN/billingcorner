import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'E-commerce Billing Solution | Billing Corner',
  description: 'Synchronize your online and offline sales with our comprehensive e-commerce billing and inventory integration.',
};

export default function ProductsEcommerceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
