import React from 'react';
import { motion } from 'motion/react';
import { Activity, Stethoscope, Users, Accessibility, Megaphone, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Programs() {
  const programs = [
    {
      icon: <Activity size={20} />,
      title: "Therapy Support Program",
      desc: "Specialized physiotherapy, occupational therapy, and speech therapy sessions tailored to each child's unique mobility and communication needs.",
      impactLabel: "Impact",
      impactValue: "1,200+ Annual sessions"
    },
    {
      icon: <Stethoscope size={20} />,
      title: "Medical Support",
      desc: "Access to regular pediatric consultations, neurological assessments, and essential medications for families in underserved communities.",
      impactLabel: "Impact",
      impactValue: "450 Children reached"
    },
    {
      icon: <Users size={20} />,
      title: "Parent Education",
      desc: "Workshops designed to equip caregivers with home-based care techniques, nutritional guidance, and mental health resources.",
      impactLabel: "Impact",
      impactValue: "85% Improved care outcomes"
    },
    {
      icon: <Accessibility size={20} />,
      title: "Assistive Devices",
      desc: "Provision of customized wheelchairs, walkers, and communication aids that bridge the gap between limitation and participation.",
      impactLabel: "Impact",
      impactValue: "Over 50 devices distributed"
    },
    {
      icon: <Megaphone size={20} />,
      title: "Awareness Campaign",
      desc: "Reducing stigma through community engagement, school programs, and digital storytelling to foster a truly inclusive society.",
      impactLabel: "Impact",
      impactValue: "15+ Schools engaged"
    },
    {
      icon: <Heart size={20} />,
      title: "Sponsorship Program",
      desc: "Connecting compassionate donors directly with children in need, covering their long-term therapy and educational expenses.",
      impactLabel: "Impact",
      impactValue: "120 Children sponsored"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Header */}
      <section className="h-[300px] bg-secondary/5 border-b border-outline-variant/10 flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-xl md:text-3xl font-headline font-extrabold text-on-surface leading-tight tracking-tight mb-8">Our Programs</h1>
            <p className="text-sm text-on-surface-variant leading-relaxed mx-auto">
              Empowering children with cerebral palsy through a holistic ecosystem of medical care, emotional support, and educational initiatives. We don't just provide services; we build pathways to independence.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white p-8 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 flex flex-col h-full border border-outline-variant/10"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 transition-colors">
                {program.icon}
              </div>
              <h3 className="text-sm font-headline font-bold text-on-surface mb-4">{program.title}</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-8 flex-grow">{program.desc}</p>
              <div className="pt-6 border-t border-outline-variant/20">
                <span className="text-xs uppercase tracking-widest font-label font-bold text-primary mb-1 block">{program.impactLabel}</span>
                <p className="text-lg font-headline font-bold text-on-surface">{program.impactValue}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-12 max-w-5xl mx-auto px-8">
        <div className="relative rounded-[3rem] overflow-hidden bg-[#FF6321] text-white py-6 md:py-10 px-8 text-center shadow-xl shadow-[#FF6321]/20">
          <div className="absolute top-0 left-0 w-64 h-64 bg-black/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-xl md:text-3xl font-extrabold font-headline text-white mb-6">Every child deserves a chance to shine.</h2>
            <p className="text-sm text-white/80 max-w-lg mx-auto mb-8 leading-relaxed">Your support provides the essential tools, therapy, and care that change lives forever. Choose a program to support today.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/sponsor" className="bg-secondary text-on-secondary px-8 py-3 rounded-full font-bold text-base hover:bg-on-secondary-fixed-variant transition-all duration-300 shadow-md inline-block">
                Sponsor a Child
              </Link>
              <Link to="/donate" className="bg-white/10 text-white border-2 border-white/20 px-8 py-3 rounded-full font-bold text-base hover:bg-white/20 transition-all inline-block">
                Donate Now to a Program
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
