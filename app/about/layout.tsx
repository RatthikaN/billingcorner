import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Billing Corner | Our Mission and Vision',
  description: 'We are on a mission to simplify billing, inventory management, and GST compliance for millions of businesses across Bharat.',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
