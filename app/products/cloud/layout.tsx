import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cloud Billing Solution | Billing Corner',
  description: 'Scale your business with our secure, real-time cloud-based billing and inventory management solution.',
};

export default function ProductsCloudLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
