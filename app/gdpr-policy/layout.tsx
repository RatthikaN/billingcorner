import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GDPR Policy | Billing Corner',
  description: 'Our commitment to data protection and compliance with GDPR regulations.',
};

export default function GDPRLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
