import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Become a Dealer | Partner with Billing Corner',
  description: 'Join our dealer network and help businesses in your region digitize their operations with Billing Corner.',
};

export default function DealerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
