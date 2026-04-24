import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Heart, Users, Activity, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const galleryData = [
  {
    id: 29,
    category: 'Impact',
    title: 'Personalized Support',
    description: 'The child, who previously had limited balance and depended entirely on support for movement, is now developing improved coordination, stability, and increasing independence through guided physiotherapy.',
    image: 'https://lh3.googleusercontent.com/d/1uL-oXliXCCobnovVkjUswiwJ41V7l6ag',
    type: 'Impact'
  },
  {
    id: 23,
    category: 'Impact',
    title: 'Specialized Care',
    description: 'Facing severe mobility limitations that once seemed insurmountable, this child is now mastering assisted walking, gaining the confidence to explore their world with the help of continuous therapy.',
    image: 'https://lh3.googleusercontent.com/d/1h8xK9lP-eTtPtiKcHd0ZVXDozAAFenib',
    type: 'Impact'
  },
  {
    id: 24,
    category: 'Impact',
    title: 'Empowerment through Play',
    description: "By providing a customized wheelchair where there was once no mobility support, we've opened the doors to education and social inclusion, allowing this child to attend school and play with peers.",
    image: 'https://lh3.googleusercontent.com/d/1duHpube3JZMYNUavx6Zo4Q21o4l2BxYR',
    type: 'Impact'
  },
  {
    id: 26,
    category: 'Impact',
    title: 'Community Support',
    description: 'Breaking the cycle of social isolation, our community programs foster a deep sense of belonging and joy, proving that every child deserves a supportive network to grow and thrive.',
    image: 'https://lh3.googleusercontent.com/d/1_ryQxcS5e23fcLPMv-F0w13JtWaWpkIs',
    type: 'Impact'
  },
  {
    id: 27,
    category: 'Impact',
    title: 'Clinical Excellence',
    description: 'Bridging the gap in medical access, we provide high-quality clinical care and specialized assessments that were previously out of reach for families in underserved communities.',
    image: 'https://lh3.googleusercontent.com/d/1xo7XiiJp9M-rG1Yw3wLihCIppeXu_Guc',
    type: 'Impact'
  },
  {
    id: 28,
    category: 'Impact',
    title: 'Joyful Achievement',
    description: 'Overcoming significant challenges with coordination, this child is now hitting developmental milestones through play-based therapy that turns every small victory into a joyful celebration.',
    image: 'https://lh3.googleusercontent.com/d/1gAEQ0J_HdGvJPZ1xvNXcOuRuOzOcZoLs',
    type: 'Impact'
  },
  {
    id: 22,
    category: 'Impact',
    title: 'Therapeutic Progress',
    description: 'Once unable to take a single step without assistance, this determined child has achieved the incredible milestone of walking independently, a testament to their resilience and our intensive therapy program.',
    image: 'https://lh3.googleusercontent.com/d/1XyQRtUXTF9yOdoa9PIlYdjm-uWUATjsn',
    type: 'Impact'
  },
  {
    id: 30,
    category: 'Impact',
    title: 'Strength and Resilience',
    description: 'Transforming physical barriers into opportunities for growth, our intensive therapy sessions help children build the physical strength and mental resilience needed to face daily challenges.',
    image: 'https://lh3.googleusercontent.com/d/1kPFa3MfGLmGr5Kl0uZAKIOGwEIhKwFat',
    type: 'Impact'
  },
  {
    id: 31,
    category: 'Impact',
    title: 'Holistic Care',
    description: 'Moving beyond basic medical needs, our holistic approach ensures that every child receives the emotional, social, and physical support required to truly thrive in all aspects of life.',
    image: 'https://lh3.googleusercontent.com/d/1dM7jsBES8Iho9iaenlbVz0UAmwMuGc-H',
    type: 'Impact'
  },
  {
    id: 16,
    category: 'Events',
    title: 'Event Highlight',
    description: 'Empowering the heart of the home, our workshops teach parents the specialized care techniques needed to support their children\'s development and well-being with confidence.',
    image: 'https://lh3.googleusercontent.com/d/1jXJr8GJ3wKxB8ZPOGkJAXaV2Luxz9tWu',
    type: 'Events'
  },
  {
    id: 17,
    category: 'Events',
    title: 'Community Gathering',
    description: 'Creating a sanctuary for connection, these gatherings allow families to share their journeys, exchange wisdom, and build a powerful support network that reminds them they are never alone.',
    image: 'https://lh3.googleusercontent.com/d/1ZvS86-zvmsMYeN7Tyx-F3lGLD-If0Etx',
    type: 'Events'
  },
  {
    id: 18,
    category: 'Events',
    title: 'Joyful Moments',
    description: 'A moment of pure triumph as the entire community gathers to cheer on a child\'s first steps, celebrating the collective effort and love that makes such milestones possible.',
    image: 'https://lh3.googleusercontent.com/d/1XAgvukaUEYo_XA7Kj4qBWw3ImevkfjPR',
    type: 'Events'
  },
  {
    id: 19,
    category: 'Events',
    title: 'Event Support',
    description: 'Our dedicated specialists provide personalized, one-on-one guidance to parents during our workshops, ensuring they have the specific tools and knowledge to care for their child\'s unique needs.',
    image: 'https://lh3.googleusercontent.com/d/1IPIkBD3aaL-CeVHZGATQUfSj27-dBP6A',
    type: 'Events'
  },
  {
    id: 20,
    category: 'Events',
    title: 'Event Celebration',
    description: 'Laughter and music fill the air as we celebrate the completion of a successful therapy cycle, honoring the hard work of the children and the unwavering support of their families.',
    image: 'https://lh3.googleusercontent.com/d/1F_39YhAzITo0HiVbSjcXDdaqbHSkTb5A',
    type: 'Events'
  },
  {
    id: 21,
    category: 'Events',
    title: 'Community Support',
    description: 'In our interactive group sessions, we demonstrate how adaptive tools can transform daily activities, turning routine tasks into opportunities for independence and success.',
    image: 'https://lh3.googleusercontent.com/d/1-bHhNH0dxMoKIVTv3FfyDex2fedSkwSQ',
    type: 'Events'
  },
  {
    id: 32,
    category: 'Events',
    title: 'Charity Walk',
    description: 'Walking together for a brighter future, our annual charity event brings the community together to raise awareness and vital funds for the specialized programs that change lives every day.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
    type: 'Events'
  }
];

const categories = ['Impact', 'Events'];

export default function Gallery() {
  const [filter, setFilter] = useState('Impact');

  const filteredItems = galleryData.filter(item => item.category === filter);

  return (
    <div className="min-h-screen bg-surface">
      {/* Hero Header */}
      <header className="h-[300px] bg-primary/5 border-b border-outline-variant/10 flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-xl md:text-3xl font-headline font-extrabold text-on-surface leading-tight tracking-tight mb-8">Our Impact Gallery</h1>
            <p className="text-sm text-on-surface-variant leading-relaxed mx-auto">
              A visual journey through the lives we've touched, the events we host, and the community we've built.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Filter Section */}
      <section className="py-12 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-nowrap overflow-x-auto pb-4 md:pb-0 justify-start md:justify-center gap-2 md:gap-4 mb-12 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-base font-bold transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                  filter === cat 
                    ? 'bg-secondary text-white shadow-lg scale-105' 
                    : 'bg-surface-container-low text-on-surface-variant hover:bg-primary/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative rounded-[2.5rem] overflow-hidden bg-surface-container-low border border-outline-variant/10 shadow-sm hover:shadow-xl transition-all duration-500"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  
                  {/* Overlay Content */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-white/80 text-sm leading-relaxed font-body">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Static Content (Visible on mobile/no-hover) */}
                  <div className="p-6 md:hidden">
                    <p className="text-on-surface-variant text-sm font-body">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Orange Style */}
      <section className="py-20 px-8">
        <div className="max-w-5xl mx-auto bg-[#FF6321] rounded-[3rem] py-6 md:py-10 px-8 text-center relative overflow-hidden shadow-xl shadow-[#FF6321]/20">
          <div className="absolute top-0 left-0 w-64 h-64 bg-black/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-xl md:text-3xl font-extrabold font-headline text-white mb-6">Help us create more smiles</h2>
            <p className="text-sm text-white/80 max-w-lg mx-auto mb-8 leading-relaxed">
              Every donation helps us provide more equipment, more therapy, and more support to children in need.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/donate" className="bg-secondary text-on-secondary px-8 py-3 rounded-full font-bold text-base hover:bg-on-secondary-fixed-variant transition-all duration-300 shadow-md inline-block">
                Donate Now
              </Link>
              <Link to="/contact" className="bg-white/10 text-white border-2 border-white/20 px-8 py-3 rounded-full font-bold text-base hover:bg-white/20 transition-all inline-block">
                Volunteer With Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
