import { featureList } from '@/src/data/features';
import FeatureClient from './FeatureClient';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const feature = featureList.find((f) => f.id === id);

  if (!feature) {
    return {
      title: 'Feature Not Found | Billing Corner',
    };
  }

  return {
    title: `${feature.title} | Billing Corner Features`,
    description: feature.desc || `Explore our ${feature.title} feature to grow your business.`,
  };
}

export async function generateStaticParams() {
  return featureList.map((feature) => ({
    id: feature.id,
  }));
}

export default async function FeaturePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const feature = featureList.find((f) => f.id === id);

  if (!feature) {
    notFound();
  }

  return <FeatureClient feature={feature} />;
}
