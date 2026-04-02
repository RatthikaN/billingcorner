'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { blogPosts } from '@/src/data/blogPosts';

export default function BlogListing() {
  return (
    <div className="pb-24">
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-semibold text-slate-900 mb-8"
          >
            Billing Corner <span className="text-primary">Blog</span>
          </motion.h1>
          <p className="text-slate-600 text-xl max-w-2xl mx-auto">
            Expert insights, business strategies, and product updates to help you grow your business and master billing efficiency.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:border-primary/20 transition-all duration-500 overflow-hidden flex flex-col"
              >
                {/* Image Container */}
                <Link href={`/blog/${post.slug}`} className="relative h-64 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-primary shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </Link>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-slate-400 text-xs mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <User size={14} />
                      {post.author.name}
                    </span>
                  </div>

                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                  </Link>

                  <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto pt-6 border-t border-slate-50">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-primary font-bold text-sm group/link"
                    >
                      Read Article
                      <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="px-6">
        <div className="max-w-5xl mx-auto bg-slate-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -ml-32 -mb-32" />
          
          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">Stay Ahead of the Curve</h2>
            <p className="text-slate-400 mb-10">
              Get the latest business tips, tax updates, and product features delivered straight to your inbox once a week.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-slate-500 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all"
              />
              <button type="button" className="btn-primary py-4 px-8 whitespace-nowrap">
                Subscribe Now
              </button>
            </form>
            <p className="text-[10px] text-slate-500 mt-6 font-medium uppercase tracking-widest">
              Join 5,000+ business owners reading our weekly digest.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
