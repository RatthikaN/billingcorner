import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Restaurant Industry Solutions | Billing Corner',
  description: 'Powerful KOT and table management for restaurants, cafes, and food outlets.',
};

export default function RestaurantSolutionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
