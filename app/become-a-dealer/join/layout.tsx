import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Join as a Dealer | Partner with Billing Corner',
  description: 'Fill out the form to join our exclusive dealer network and start offering the best billing software in your region.',
};

export default function DealerJoinLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
