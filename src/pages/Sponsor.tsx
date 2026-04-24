import React from 'react';
import { motion } from 'motion/react';
import { Heart, Users, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Sponsor() {
  return (
    <div className="overflow-hidden">
      <header className="relative h-[300px] bg-secondary/5 border-b border-outline-variant/10 flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 w-full flex items-center justify-center text-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-12 z-10 text-center"
          >
            <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-on-surface leading-[1.1] mb-6">
              Become a Sponsor
            </h1>
            <p className="text-sm text-on-surface-variant max-w-2xl mx-auto mb-8 leading-relaxed">
              Sponsorship is a unique way to build a personal connection with a child and provide them with the consistent support they need to thrive.
            </p>
            <div className="flex justify-center flex-wrap gap-4">
              {/* View Profiles button removed */}
            </div>
          </motion.div>
        </div>
      </header>

      <section id="profiles" className="py-16 max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-headline font-extrabold text-on-background mb-4 tracking-tight">Children in need of Sponsorship</h2>
          <p className="text-sm text-on-surface-variant max-w-2xl mx-auto leading-relaxed">Your monthly commitment provides therapy, education, and medical care.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { name: "Liam", img: "https://lh3.googleusercontent.com/d/1s4t1kMs13fL4DWKFHw53tN2pnIyyb6ap", desc: "The child needs specialized physical therapy and adaptive seating support to improve his trunk stability and overall physical independence." },
            { name: "Samuel", img: "https://lh3.googleusercontent.com/d/1v7eHMmSF1VCi8mv0cgygeHmN32gmvZeK", desc: "The child needs specialized occupational therapy and fine motor skill development to improve her hand-eye coordination and artistic expression." },
            { name: "Aria", img: "https://lh3.googleusercontent.com/d/1Uh5IjFPLJGU-6ZX1lmeL5zvG_HxUNWag", desc: "The child needs intensive speech therapy and communication resources to help him articulate his thoughts and engage more fully in social and intellectual activities." }
          ].map((child, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 3) * 0.1 }}
              className="group bg-surface-container-low rounded-3xl overflow-hidden hover:bg-surface-container-lowest transition-all duration-300"
            >
              <div className="aspect-[3/4] overflow-hidden relative">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  src={child.img}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <div className="mb-4">
                  <h3 className="text-sm font-headline font-bold">{child.name}</h3>
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                  {child.desc}
                </p>
                <Link to="/contact" className="w-full py-3 bg-secondary text-on-secondary rounded-full font-bold text-base hover:bg-on-secondary-fixed-variant transition-all duration-300 shadow-md text-center block">
                  Sponsor {child.name}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA - Orange Style */}
      <section className="py-10 px-8">
        <div className="max-w-5xl mx-auto bg-[#FF6321] rounded-[3rem] py-6 md:py-10 px-8 text-center relative overflow-hidden shadow-xl shadow-[#FF6321]/20">
          <div className="absolute top-0 left-0 w-64 h-64 bg-black/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold font-headline text-white mb-6">Join our mission</h2>
            <p className="text-sm text-white/80 max-w-lg mx-auto mb-8 leading-relaxed">
              Whether you sponsor a child or donate to a program, you're making a lasting impact.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="bg-secondary text-on-secondary px-8 py-3 rounded-full font-bold text-base hover:bg-on-secondary-fixed-variant transition-all duration-300 shadow-md inline-block">
                Donate Now
              </Link>
              <Link to="/contact" className="bg-white/10 text-white border-2 border-white/20 px-8 py-3 rounded-full font-bold text-base hover:bg-white/20 transition-all inline-block">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
