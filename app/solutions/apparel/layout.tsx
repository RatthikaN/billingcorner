import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Apparel Industry Solutions | Billing Corner',
  description: 'Size, color, and variant tracking for clothing stores and boutiques.',
};

export default function ApparelSolutionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
