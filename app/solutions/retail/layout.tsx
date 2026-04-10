import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Retail Industry Solutions | Billing Corner',
  description: 'Specialized billing and inventory solutions for retail shops and grocery stores.',
};

export default function RetailSolutionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
