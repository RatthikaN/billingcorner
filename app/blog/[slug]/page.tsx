import { blogPosts } from '@/src/data/blogPosts';
import BlogPostClient from './BlogPostClient';
import Link from 'next/link';

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-6">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Post Not Found</h1>
        <p className="text-slate-600 mb-8 text-center max-w-md">
          The blog post you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/blog" className="btn-primary">
          Back to Blog
        </Link>
      </div>
    );
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug);

  return <BlogPostClient post={post} relatedPosts={relatedPosts} />;
}
