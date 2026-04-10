import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Desktop Billing Software | Faster Offline & Online Billing',
  description: 'Experience the power of offline billing with seamless online synchronization. The most reliable billing software for your PC.',
};

export default function DesktopBillingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
