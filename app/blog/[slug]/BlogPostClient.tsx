'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { Calendar, ArrowLeft, ArrowRight, Share2, Facebook, Twitter, Linkedin, Clock } from 'lucide-react';
import { BlogPost } from '@/src/data/blogPosts';

interface BlogPostClientProps {
    post: BlogPost;
    relatedPosts: BlogPost[];
}

export default function BlogPostClient({ post, relatedPosts }: BlogPostClientProps) {
    return (
        <div className="pb-24">
            {/* Article Hero */}
            <section className="pt-20 pb-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-primary font-bold text-sm mb-12 hover:-translate-x-1 transition-transform group"
                    >
                        <ArrowLeft size={18} />
                        Back to Blog Listing
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-6"
                    >
                        <span className="px-4 py-2 bg-primary/5 rounded-full text-xs font-bold text-primary">
                            {post.category}
                        </span>
                        <h1 className="text-3xl md:text-4xl xl:text-5xl font-medium text-slate-900  leading-tight">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-8 py-8 border-y border-slate-100">
                            <div className="flex items-center gap-3">
                                <img
                                    src={post.author.avatar}
                                    alt={post.author.name}
                                    className="w-12 h-12 rounded-2xl object-cover border border-slate-200 shadow-sm"
                                />
                                <div>
                                    <p className="font-bold text-slate-900 text-sm">{post.author.name}</p>
                                    <p className="text-slate-500 text-xs">{post.author.role}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6 text-slate-400 text-sm ml-auto">
                                <span className="flex items-center gap-1.5">
                                    <Calendar size={16} />
                                    {post.date}
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <Clock size={16} />
                                    5 min read
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Main Image */}
            <section className="px-6 mb-16">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="rounded-[3rem] overflow-hidden shadow-2xl border border-slate-200 aspect-[21/9]"
                    >
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="px-6 mb-24">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
                    {/* Main Article Content */}
                    <article className="max-w-4xl mx-auto lg:mx-0 flex-grow">
                        <div
                            className="prose prose-slate prose-lg max-w-none 
                prose-headings:text-slate-900 prose-headings:font-bold 
                prose-p:text-slate-600 prose-p:leading-relaxed
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                prose-strong:text-slate-900
                prose-img:rounded-[2rem] prose-img:shadow-xl"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    </article>

                    {/* Sidebar / Social Share */}
                    <aside className="lg:w-80 shrink-0">
                        <div className="sticky top-32 space-y-12">
                            <div className="bg-slate-50 rounded-[2rem] p-8 border border-slate-100">
                                <h4 className="text-slate-900 font-bold mb-6 flex items-center gap-2">
                                    <Share2 size={18} className="text-primary" />
                                    Share Article
                                </h4>
                                <div className="flex flex-wrap gap-3">
                                    <button className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all shadow-sm">
                                        <Facebook size={20} />
                                    </button>
                                    <button className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all shadow-sm">
                                        <Twitter size={20} />
                                    </button>
                                    <button className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all shadow-sm">
                                        <Linkedin size={20} />
                                    </button>
                                </div>
                            </div>

                            <div className="bg-primary rounded-[2rem] p-8 text-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16" />
                                <h4 className="text-xl font-bold mb-4 relative z-10">Start Billing with Ease</h4>
                                <p className="text-white/80 text-sm mb-8 relative z-10 leading-relaxed">
                                    Join thousands of businesses managing their finances with Billing Corner.
                                </p>
                                <Link
                                    href="/download"
                                    className="inline-block w-full text-center bg-white text-primary font-bold py-4 rounded-xl hover:bg-slate-50 transition-colors relative z-10"
                                >
                                    Start with just ₹1
                                </Link>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>

            {/* More Related Posts */}
            <section className="px-6 py-24 bg-slate-50 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-end mb-16">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">More Stories</h2>
                            <p className="text-slate-500">Other insights you might find interesting.</p>
                        </div>
                        <Link href="/blog" className="hidden sm:flex items-center gap-2 text-primary font-bold">
                            View All Posts <ArrowRight size={20} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {relatedPosts.map((item, i) => (
                            <Link
                                key={item.slug}
                                href={`/blog/${item.slug}`}
                                className="bg-white rounded-[2rem] p-6 border border-slate-100 hover:shadow-xl transition-all group"
                            >
                                <div className="aspect-video rounded-2xl overflow-hidden mb-6">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                    {item.title}
                                </h4>
                                <p className="text-slate-500 text-sm line-clamp-2">{item.excerpt}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
