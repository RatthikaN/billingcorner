import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Desktop Billing Solution | Billing Corner',
  description: 'Fast, secure, and reliable desktop billing software designed for peak performance for any business type.',
};

export default function ProductsDesktopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
