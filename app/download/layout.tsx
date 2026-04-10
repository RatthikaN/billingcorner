import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Download Billing Corner | Get Started Today',
  description: 'Download the Billing Corner app for Windows, Android, or iOS and start managing your business smarter today.',
};

export default function DownloadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
