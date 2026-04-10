import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pharmacy Industry Solutions | Billing Corner',
  description: 'Schedule tracking and batch management for pharmacies and healthcare providers.',
};

export default function PharmacySolutionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
