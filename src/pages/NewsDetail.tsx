import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { User, ArrowLeft, Facebook, MessageCircle } from 'lucide-react';
import { newsPosts } from './News';

export default function NewsDetail() {
  const { id } = useParams<{ id: string }>();
  const post = newsPosts.find(p => p.id === id);

  if (!post) {
    return <Navigate to="/news" replace />;
  }

  const shareUrl = window.location.href;
  const shareText = `Check out this news from our community: ${post.title}`;

  return (
    <div className="overflow-hidden bg-surface">
      {/* Main Content Section */}
      <section className="pt-20 pb-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left Column: Image, Title, and Content */}
            <div className="lg:col-span-8">
              {/* Image */}
              <div className="relative h-[250px] md:h-[350px] overflow-hidden mb-12">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              
              {/* Title */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-12"
              >
                <h1 className="text-xl md:text-2xl lg:text-3xl font-headline font-extrabold text-on-surface leading-tight tracking-tight">
                  {post.title}
                </h1>
              </motion.div>

              {/* Article Body */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="prose prose-lg max-w-none text-on-surface-variant leading-relaxed space-y-6 text-sm"
              >
                <p className="text-base font-medium text-on-surface leading-relaxed border-l-4 border-secondary pl-6 italic">
                  {post.summary}
                </p>
                
                <div className="whitespace-pre-wrap">
                  {post.content}
                </div>
                
                <div className="pt-12 border-t border-outline-variant/20">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-on-surface mb-6 font-headline">Share this story</h3>
                  <div className="flex flex-wrap gap-4">
                    <button className="flex items-center gap-2 bg-[#1877F2] text-white px-6 py-2 rounded-full font-bold text-sm hover:opacity-90 transition-opacity">
                      <Facebook className="w-4 h-4" />
                      Facebook
                    </button>
                    <button className="flex items-center gap-2 bg-[#25D366] text-white px-6 py-2 rounded-full font-bold text-sm hover:opacity-90 transition-opacity">
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Sidebar */}
            <aside className="lg:col-span-4 space-y-12">
              {/* Recent Updates Widget */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-on-surface mb-6 font-headline">Recent Updates</h3>
                <div className="space-y-6">
                  {newsPosts.filter(p => p.id !== id).slice(0, 3).map(p => (
                    <Link key={p.id} to={`/news/${p.id}`} className="group flex gap-4 items-start">
                      <div className="w-20 h-20 overflow-hidden flex-shrink-0">
                        <img 
                          src={p.image} 
                          alt={p.title}
                          className="w-full h-full object-cover transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-on-surface transition-colors line-clamp-2 mb-1">
                          {p.title}
                        </h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA Widget */}
              <div className="bg-secondary/5 rounded-3xl p-8">
                <h3 className="text-xl md:text-2xl font-bold text-on-surface mb-4 font-headline">Support our work</h3>
                <p className="text-sm text-on-surface-variant mb-8 leading-relaxed">
                  Your donations directly fund the therapy sessions, wheelchairs, and support programs mentioned in our news.
                </p>
                <Link 
                  to="/donate"
                  className="block w-full text-center bg-secondary text-on-secondary px-8 py-3 rounded-full font-bold text-base hover:bg-on-secondary-fixed-variant transition-all shadow-md mb-4"
                >
                  Donate Now
                </Link>
                <Link 
                  to="/sponsor"
                  className="block w-full text-center bg-secondary/10 text-secondary px-8 py-3 rounded-full font-bold text-base hover:bg-secondary/20 transition-all"
                >
                  Sponsor a Child
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
