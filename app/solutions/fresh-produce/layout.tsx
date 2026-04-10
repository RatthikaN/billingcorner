import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fresh Produce Industry Solutions | Billing Corner',
  description: 'Weighing scale integration and perishable goods management for vegetable and fruit sellers.',
};

export default function FreshProduceSolutionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
