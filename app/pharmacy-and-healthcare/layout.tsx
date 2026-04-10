import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Billing Software for Pharmacy & Healthcare | Billing Corner',
  description: 'Manage batch expiry dates, schedules, and healthcare inventory with our specialized pharmacy billing software.',
};

export default function PharmacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
