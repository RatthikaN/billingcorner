import { featureList } from '@/src/data/features';
import FeatureClient from './FeatureClient';
import { notFound } from 'next/navigation';

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
