import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refund Policy | Billing Corner',
  description: 'Our policy regarding refunds for our software and services.',
};

export default function RefundLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
