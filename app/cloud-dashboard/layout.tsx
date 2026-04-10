import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cloud Dashboard | Manage Your Business Anywhere',
  description: 'Access real-time reports, monitor multiple stores, and manage your inventory from any web browser with our secure Cloud Dashboard.',
};

export default function CloudDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
