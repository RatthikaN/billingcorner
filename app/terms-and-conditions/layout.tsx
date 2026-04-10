import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Billing Corner',
  description: 'Please read our terms and conditions carefully before using Billing Corner software and services.',
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
