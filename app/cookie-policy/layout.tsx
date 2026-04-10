import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy | Billing Corner',
  description: 'How we use cookies to improve your experience on our platform.',
};

export default function CookieLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
