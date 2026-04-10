import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mobile Billing App | Manage Your Business on the Go',
  description: 'Create invoices, check inventory, and manage sales directly from your smartphone with the Billing Corner mobile app.',
};

export default function MobileAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
