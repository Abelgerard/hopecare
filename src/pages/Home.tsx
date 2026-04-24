import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, animate, useInView } from 'motion/react';
import { ArrowRight, Heart, ChevronRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const Counter = ({ value, suffix = "" }: { value: number, suffix?: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      animate(count, value, { duration: 2, ease: "easeOut" });
    }
  }, [isInView, value, count]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};

export default function Home() {
  const testimonials = [
    {
      quote: "Hope Care didn't just give my son a wheelchair; they gave him a voice and a community. The therapy sessions have been transformative for his mobility and our family's spirit.",
      author: "Sarah, mother of Leo",
      type: "Parent",
      image: "https://lh3.googleusercontent.com/d/1LlDlj9N_6GTPUhcF7E3OdplHxOWK7UHa"
    },
    {
      quote: "I used to feel left out at school, but with my new walker and the friends I made at the foundation, I feel like I can do anything. I even started playing adaptive soccer!",
      author: "Kofi, 12 years old",
      type: "Child",
      image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      quote: "The emotional support groups for parents were a lifeline. Knowing we weren't alone in this journey changed everything. Maya is now thriving in her early intervention program.",
      author: "Elena, mother of Maya",
      type: "Parent",
      image: "https://lh3.googleusercontent.com/d/1a3vbmE95Libumh_etbAYFdDeSL81HwW6"
    },
    {
      quote: "I love the painting classes! They taught me that my hands can create beautiful things. The teachers are so patient and always make me feel special.",
      author: "Zainab, 10 years old",
      type: "Child",
      image: "https://lh3.googleusercontent.com/d/1EjZHXNrs_5bSlsnfPdtbj4XcVhx7ZpwK"
    }
  ];

  const teamMembers = [
    {
      name: "Dr. John Okoro",
      role: "Executive Director & Founder",
      image: "https://lh3.googleusercontent.com/d/1mf9RsAf3agzkSaIa67benF9JX3IXSVKy"
    },
    {
      name: "Dr. David Mensah",
      role: "Lead Physical Therapist",
      image: "https://lh3.googleusercontent.com/d/1TOvMI-D1WNP56WMdBvcaEAyT3MYY631o"
    },
    {
      name: "Sarah Boateng",
      role: "Community Outreach Coordinator",
      image: "https://lh3.googleusercontent.com/d/1X5J0S9dm09o9ZmcBOAx_tehHmLkWsFm6"
    },
    {
      name: "Michael Tetteh",
      role: "Pediatric Specialist",
      image: "https://lh3.googleusercontent.com/d/1qgtzRdwC16YD5V6P4q0fBnzeVc6fI9E_"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-surface border-b border-outline-variant/10 flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 w-full grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-6 z-10 text-center md:text-left"
          >
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-headline font-extrabold text-on-surface leading-tight tracking-tight mb-8">
              Every Child Deserves a Chance to <span className="text-secondary">Soar</span>.
            </h1>
            <p className="text-sm text-on-surface-variant max-w-2xl mb-8 leading-relaxed mx-auto md:mx-0">
              Dedicated to transforming the lives of children with cerebral palsy through personalized care, specialized therapy, and unwavering community support.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Link to="/donate" className="bg-secondary text-on-secondary px-6 md:px-8 py-2 md:py-3 rounded-full font-bold text-base hover:bg-on-secondary-fixed-variant transition-all duration-300 shadow-md">
                Donate Now
              </Link>
              <Link to="/sponsor" className="flex items-center gap-2 px-6 md:px-8 py-2 md:py-3 rounded-full font-bold text-base border-2 border-on-surface text-on-surface hover:bg-on-surface/5 transition-all duration-300">
                Become a Sponsor <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-6 relative h-[250px] md:h-[300px] lg:h-[350px] flex items-center justify-center"
          >
            <img 
              alt="Cheerful child in a wheelchair" 
              className="absolute inset-0 w-full h-full object-contain z-0" 
              src="https://lh3.googleusercontent.com/d/1iAqn9Wm6buJcSE8rlMyEng_vMRi3NGuU"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>


      {/* Impact Statistics */}
      <section className="py-10 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8">
            {[
              { number: 180, suffix: "+", label: "Therapy Sessions Provided" },
              { number: 100, suffix: "+", label: "Children Supported" },
              { number: 50, suffix: "+", label: "Assistive Devices Distributed" },
              { number: 5, suffix: "+", label: "Specialized Programs" }
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 bg-surface-container-lowest rounded-xl text-center transition-all hover:shadow-sm border border-transparent hover:border-outline-variant/15"
              >
                <div className="text-3xl md:text-4xl font-bold text-on-surface mb-3 font-headline">
                  <Counter value={stat.number} suffix={stat.suffix} />
                </div>
                <p className="text-on-surface-variant font-medium text-sm leading-tight">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Mission Preview */}
      <section className="py-12 bg-surface">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-4 lg:gap-8 items-center">
          <div className="md:col-span-2 w-full h-[300px] md:h-[400px] flex items-center justify-center rounded-xl overflow-hidden">
            <img 
              alt="Cheerful child in a wheelchair" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/d/1BMcFqHjO7Vt1Cg8GCql3l0fd_0gXXlX7"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="md:col-span-2 w-full flex flex-col items-start">
            <div className="mb-0">
              <h2 className="text-xl md:text-3xl font-headline font-extrabold text-on-surface mb-4 leading-tight w-full text-left">Our Mission</h2>
              <p className="text-sm text-on-surface-variant mb-6 leading-relaxed text-left max-w-xl">
                At Hope Care Foundation, we believe that cerebral palsy does not define a child’s horizon or limit their future. We are committed to providing comprehensive clinical support, compassionate care, emotional empowerment, and strong advocacy to ensure every child has the opportunity to reach their fullest potential and live a meaningful, dignified life.
              </p>
              <div className="flex justify-start w-full">
                <Link to="/about#challenges" className="inline-flex items-center gap-2 text-secondary font-bold text-base hover:gap-4 transition-all">
                  Learn More <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-surface-container-lowest relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, var(--primary) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-on-surface mb-6 font-headline">Heartfelt Stories</h2>
            <p className="text-sm text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              The true measure of our impact is seen in the lives of the children and families we serve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-surface rounded-[2rem] p-8 border border-outline-variant/10 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between relative overflow-hidden text-center md:text-left"
              >
                {/* Quote icon background */}
                <div className="absolute -top-4 -right-4 opacity-[0.05] transition-opacity duration-500">
                  <Quote size={60} className="text-secondary" />
                </div>

                <div className="relative z-10">
                  <p className="text-sm text-on-surface leading-relaxed italic mb-8">
                    "{t.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-outline-variant/10 relative z-10 justify-center md:justify-start">
                  {t.image ? (
                    <div className="w-10 h-10 rounded-xl overflow-hidden border border-secondary/20 transition-colors duration-500">
                      <img 
                        src={t.image} 
                        alt={t.author} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary font-bold text-base border border-secondary/20 transition-colors duration-500">
                      {t.author[0]}
                    </div>
                  )}
                  <div>
                    <div className="font-bold text-sm text-on-surface transition-colors duration-500">{t.author}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="pt-12 pb-6 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-on-surface mb-6 font-headline">Meet Our Team</h2>
            <p className="text-sm text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              Our team of experts is committed to providing the highest level of care and support for every child.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 w-full">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group bg-surface-container-low rounded-2xl p-4 lg:p-8 text-center hover:shadow-xl transition-all duration-500 border border-outline-variant/10 flex flex-col items-center"
              >
                <div className="relative w-32 h-32 lg:w-48 lg:h-48 mx-auto mb-4 lg:mb-8 rounded-full overflow-hidden border-4 border-white shadow-xl transition-transform duration-500 ring-4 ring-secondary/10 group-hover:ring-secondary/30">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-sm font-bold text-on-surface mb-1 lg:mb-2 font-headline">{member.name}</h3>
                <p className="text-primary font-bold text-sm uppercase tracking-wider mb-2 lg:mb-4">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Orange Style */}
      <section className="py-12 px-8">
        <div className="max-w-5xl mx-auto bg-[#FF6321] rounded-[3rem] py-6 md:py-10 px-8 text-center relative overflow-hidden shadow-xl shadow-[#FF6321]/20">
          <div className="absolute top-0 left-0 w-64 h-64 bg-black/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold font-headline text-white mb-6">Be the catalyst for a child's success</h2>
            <p className="text-sm text-white/80 max-w-lg mx-auto mb-8 leading-relaxed">
              Join our community to stay updated on our impact and learn how you can get involved.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/donate" className="bg-secondary text-on-secondary px-8 py-3 rounded-full font-bold text-base hover:bg-on-secondary-fixed-variant transition-all duration-300 shadow-md">
                Donate Now
              </Link>
              <Link to="/sponsor" className="bg-white/10 text-white border-2 border-white/20 px-8 py-3 rounded-full font-bold text-base hover:bg-white/20 transition-all inline-block">
                Become a Sponsor
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
