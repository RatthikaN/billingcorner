import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Electronics Industry Solutions | Billing Corner',
  description: 'IMEI tracking and warranty management for electronics and mobile retailers.',
};

export default function ElectronicsSolutionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
