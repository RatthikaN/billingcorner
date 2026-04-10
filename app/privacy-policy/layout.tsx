import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Billing Corner',
  description: 'Your privacy is important to us. Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
