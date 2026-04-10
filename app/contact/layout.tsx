import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Get in Touch with Billing Corner',
  description: 'Have questions? Our team is here to help. Contact Billing Corner for support, sales, or partnership inquiries.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
