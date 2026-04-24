import React from 'react';
import { motion } from 'motion/react';
import { Rocket, Eye, Megaphone, CreditCard, Accessibility, Users, Heart, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
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
            <h1 className="text-xl md:text-2xl lg:text-3xl font-headline font-extrabold text-on-surface leading-tight tracking-tight mb-8">Who We Are</h1>
            <p className="text-sm text-on-surface-variant leading-relaxed mx-auto">
              A dedicated community committed to transforming the lives of children living with cerebral palsy through specialized care, strong advocacy, and unwavering support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-10 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col border-l-4 border-primary pl-6"
            >
              <h2 className="text-sm font-bold text-on-surface mb-4 flex items-center gap-3">
                <Rocket className="text-on-surface" size={20} />
                Our Mission
              </h2>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                To provide comprehensive clinical care, therapeutic support, and assistive technology to children with cerebral palsy, ensuring they lead dignified, fulfilling, and independent lives.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col border-l-4 border-primary pl-6"
            >
              <h2 className="text-sm font-bold text-on-surface mb-4 flex items-center gap-3">
                <Eye className="text-on-surface" size={20} />
                Our Vision
              </h2>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                A world where every child with cerebral palsy has equitable access to the resources and community they need to thrive, free from the barriers of stigma and poverty.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section id="challenges" className="py-10 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-on-surface mb-6">The Challenges We Tackle</h2>
            <p className="text-sm text-on-surface-variant leading-relaxed">Beyond the diagnosis, families face a complex landscape of structural and social barriers. We exist to bridge these gaps.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Megaphone size={20} />, title: "Lack of Awareness", desc: "Misunderstandings about cerebral palsy often lead to delayed diagnoses and missed opportunities for early intervention." },
              { icon: <CreditCard size={20} />, title: "High Medical Costs", desc: "Long-term therapy and surgeries are prohibitively expensive for most families in underserved communities." },
              { icon: <Accessibility size={20} />, title: "Limited Access", desc: "Essential assistive devices like wheelchairs and braces are often unavailable or poorly fitted." },
              { icon: <Users size={20} />, title: "Social Stigma", desc: "Children and families face exclusion and discrimination, impacting mental health and community integration." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 bg-surface-container-lowest rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 mb-6 rounded-xl bg-primary/10 flex items-center justify-center text-primary transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-sm font-bold mb-3">{item.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-10 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-on-surface mb-4">Our Core Values</h2>
              <p className="text-sm text-on-surface-variant leading-relaxed">The principles that guide every session, every sponsorship, and every breakthrough.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: <Heart fill="currentColor" size={20} />, title: "Compassion", color: "bg-primary-fixed text-primary", desc: "We lead with our hearts, ensuring every family feels heard, seen, and valued throughout their journey." },
              { icon: <Users fill="currentColor" size={20} />, title: "Inclusion", color: "bg-primary-fixed text-primary", desc: "Every child belongs. We actively break down barriers to ensure full participation in all aspects of life." },
              { icon: <Rocket fill="currentColor" size={20} />, title: "Empowerment", color: "bg-primary-fixed text-primary", desc: "We provide the tools and confidence for children and their caregivers to advocate for their own rights." },
              { icon: <ShieldCheck fill="currentColor" size={20} />, title: "Integrity", color: "bg-primary-fixed text-primary", desc: "Transparency in our operations and radical honesty in our advocacy define our professional standard." }
            ].map((value, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex gap-6 p-8 rounded-2xl bg-surface-container-low"
              >
                <div className="flex-shrink-0">
                  <div className={`w-10 h-10 rounded-full ${value.color} flex items-center justify-center`}>
                    {value.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-bold mb-2">{value.title}</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Orange Style */}
      <section className="py-12 px-8">
        <div className="max-w-5xl mx-auto bg-[#FF6321] rounded-[3rem] py-6 md:py-10 px-8 text-center relative overflow-hidden shadow-xl shadow-[#FF6321]/20">
          <div className="absolute top-0 left-0 w-64 h-64 bg-black/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold font-headline text-white mb-6">Be the change in a child's life</h2>
            <p className="text-sm text-white/80 max-w-lg mx-auto mb-8 leading-relaxed">Whether you bring clinical expertise, organizational skills, or a passion for service, there's a place for you in our mission.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/donate" className="bg-secondary text-on-secondary px-8 py-3 rounded-full font-bold text-base hover:bg-on-secondary-fixed-variant transition-all duration-300 shadow-md inline-block">Donate Now</Link>
              <Link to="/sponsor" className="bg-white/10 text-white border-2 border-white/20 px-8 py-3 rounded-full font-bold text-base hover:bg-white/20 transition-all inline-block">Become a Sponsor</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
