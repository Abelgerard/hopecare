import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, ArrowRight, Tag, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface NewsPost {
  id: string;
  title: string;
  date: string;
  category: 'Activity Updates' | 'Events' | 'Success Stories' | 'Education' | 'Announcements';
  summary: string;
  content: string;
  image: string;
  author: string;
}

export const newsPosts: NewsPost[] = [
  {
    id: '1',
    title: 'Wheelchairs Donation This Month',
    date: 'March 15, 2026',
    category: 'Activity Updates',
    summary: 'Our latest initiative has successfully provided specialized wheelchairs to 10 children in need, enhancing their mobility and independence.',
    content: 'We are thrilled to announce that through the generous support of our donors, we have successfully distributed 10 specialized wheelchairs to children living with cerebral palsy this month. These wheelchairs are custom-fitted to provide the necessary postural support, allowing these children to engage more fully with their environment and families. This milestone is a testament to what we can achieve together. Each wheelchair represents a new chapter of mobility and dignity for a child.',
    image: 'https://lh3.googleusercontent.com/d/1AfU0VYma7XFml3Y6vduVIt3NY19Fb3ZX',
    author: 'Admin'
  },
  {
    id: '2',
    title: 'Charity Walk to Support Children with CP',
    date: 'March 10, 2026',
    category: 'Events',
    summary: 'Join us for our annual charity walk as we raise awareness and funds for specialized therapy programs.',
    content: 'Our upcoming Charity Walk is more than just an event; it\'s a movement. We invite everyone to join us on April 5th for a 5km walk through the city center. All proceeds will go directly towards our therapy clinic, which provides essential services to over 50 children every week. Come walk with us, share stories, and help us build a more inclusive community for children with cerebral palsy.',
    image: 'https://lh3.googleusercontent.com/d/1Z7jLhsajBc2oQ9yTrGAtcyFCNea8aOuV',
    author: 'Events Team'
  },
  {
    id: '5',
    title: 'New Partnership with Local Health Clinic',
    date: 'February 20, 2026',
    category: 'Announcements',
    summary: 'We are excited to announce a new partnership that will expand our reach and provide more comprehensive care.',
    content: 'We have officially partnered with the City Health Center to provide integrated care for our children. This partnership means that our beneficiaries will have easier access to general pediatric care, nutritional support, and specialized consultations. By working together, we can ensure that every child receives the holistic care they deserve. This is a major step forward in our mission to provide comprehensive support to the CP community.',
    image: 'https://lh3.googleusercontent.com/d/1UvNo2piFad3ViyVAJpfMA8VRFSUcjywY',
    author: 'Director'
  }
];

export default function News() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = newsPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="overflow-hidden">
      {/* Hero Header */}
      <header className="h-[300px] bg-primary/5 border-b border-outline-variant/10 flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-xl md:text-3xl font-headline font-extrabold text-on-surface leading-tight tracking-tight mb-8">Latest News</h1>

            <p className="text-sm text-on-surface-variant leading-relaxed mx-auto">
              Stay informed about our activities, events, and the incredible stories of the children we serve. Your support makes this news possible.
            </p>
          </motion.div>
        </div>
      </header>

      {/* News Section */}
      <section className="py-12 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto mb-12">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant w-5 h-5" />
            <input
              type="text"
              placeholder="Search news articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-surface-container-low rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 shadow-md border border-outline-variant/10"
            />
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-surface-container-low overflow-hidden transition-all duration-300 flex flex-col h-full"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-sm font-bold text-on-surface mb-3 transition-colors line-clamp-2 font-headline">
                    {post.title}
                  </h3>
                  
                  <p className="text-sm text-on-surface-variant leading-relaxed mb-6 line-clamp-3 flex-grow">
                    {post.summary}
                  </p>
                  
                  <Link 
                    to={`/news/${post.id}`}
                    className="inline-flex items-center gap-2 text-secondary font-bold text-sm group/link"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-on-surface-variant italic">No news articles found matching your criteria.</p>
              <button 
                onClick={() => setSearchQuery('')}
                className="mt-4 text-secondary font-bold hover:underline"
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-20 bg-secondary/5">
        <div className="max-w-7xl mx-auto px-8">
          <div className="bg-[#FF6321] rounded-[2rem] py-6 md:py-10 px-12 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
            
            <div className="relative z-10">
              <h2 className="text-xl md:text-3xl font-extrabold font-headline text-white mb-6">Never miss an update</h2>
              <p className="text-sm text-white/80 max-w-lg mx-auto mb-8 leading-relaxed">
                Join our community to receive the latest news, success stories, and event invitations directly in your inbox.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Your email address"
                  className="bg-white px-6 py-3 rounded-full text-on-surface focus:outline-none flex-grow text-sm"
                />
                <button className="bg-secondary text-on-secondary px-8 py-3 rounded-full font-bold text-base hover:bg-on-secondary-fixed-variant transition-all duration-300 shadow-md">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
