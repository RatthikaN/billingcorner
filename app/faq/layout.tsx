import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Billing Corner Support',
  description: 'Find answers to common questions about Billing Corner features, pricing, and technical support.',
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
