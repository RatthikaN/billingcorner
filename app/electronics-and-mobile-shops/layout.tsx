import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Billing Software for Electronics & Mobile Shops | Billing Corner',
  description: 'Track IMEI and serial numbers with precision using our electronics-focused billing and inventory solution.',
};

export default function ElectronicsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
