import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Info, 
  Activity, 
  Brain, 
  Stethoscope, 
  HeartPulse, 
  Baby, 
  Accessibility, 
  Users,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

const InfographicCard = ({ 
  icon: Icon, 
  title, 
  description, 
  color = "primary",
  delay = 0 
}: { 
  icon: any, 
  title: string, 
  description: string, 
  color?: string,
  delay?: number
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="group p-8 bg-surface-container-lowest rounded-xl hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col h-full border border-outline-variant/10"
  >
    <div className={`w-12 h-12 rounded-lg bg-${color}/10 flex items-center justify-center mb-6 transition-colors`}>
      <Icon className={`w-5 h-5 text-${color}`} />
    </div>
    <h3 className="text-sm font-bold text-on-surface mb-3 font-headline">{title}</h3>
    <p className="text-sm text-on-surface-variant leading-relaxed font-body">{description}</p>
  </motion.div>
);

export default function Guide() {
  return (
    <div className="bg-surface min-h-screen overflow-hidden">
      {/* Hero Header */}
      <header className="h-[300px] bg-primary/5 border-b border-outline-variant/10 flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-xl md:text-2xl lg:text-3xl font-headline font-extrabold text-on-surface leading-tight tracking-tight mb-8">Cerebral Palsy <span className="text-on-surface italic">Guide</span></h1>
            <p className="text-sm text-on-surface-variant leading-relaxed mx-auto">
              Cerebral palsy (CP) is a group of disorders that affect a person's ability to move and maintain balance and posture. It is the most common motor disability in childhood. Explore the detailed information in the cards below to understand the causes, types, and early signs of this condition.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Quick Stats Infographic - Causes Focus */}
      <section className="py-12 bg-white px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "Pre-birth Factors", value: "Gene Mutations", sub: "Pre-birth Factors caused due to Irregular brain development", icon: Brain },
              { label: "Maternal Health", value: "Infections", sub: "Maternal health issues occurring during pregnancy", icon: Users },
              { label: "Birth Complications", value: "Oxygen Supply", sub: "Restricted oxygen flow during the delivery process", icon: HeartPulse },
              { label: "Acquired Injury", value: "Brain Trauma", sub: "Head injuries or infant infections after birth", icon: AlertCircle },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 bg-surface-container-lowest rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 mb-6 rounded-lg bg-primary/10 flex items-center justify-center text-primary transition-colors">
                  <stat.icon className="w-5 h-5" />
                </div>
                <div className="text-sm font-black text-on-surface mb-1 font-headline">{stat.value}</div>
                <div className="text-sm text-on-surface-variant leading-relaxed">{stat.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of CP */}
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-4xl">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-on-surface font-headline mb-6 md:whitespace-nowrap">
                Types of <span className="text-on-surface italic">Movement Disorders</span>
              </h2>
              <p className="text-sm text-on-surface-variant leading-relaxed font-body">
                CP is classified according to the main type of movement disorder involved. Depending on which areas of the brain are affected, one or more of the following movement disorders can occur.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <InfographicCard 
              icon={Activity}
              title="Spastic CP"
              description="The most common type. People have increased muscle tone, meaning their muscles are stiff and, as a result, their movements can be awkward."
              color="primary"
              delay={0.1}
            />
            <InfographicCard 
              icon={Accessibility}
              title="Dyskinetic CP"
              description="People have trouble controlling the movement of their hands, arms, feet, and legs, making it difficult to sit and walk."
              color="primary"
              delay={0.2}
            />
            <InfographicCard 
              icon={Stethoscope}
              title="Ataxic CP"
              description="People have problems with balance and coordination. They might be unsteady when they walk or have a hard time with quick movements."
              color="primary"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Early Signs Section */}
      <section className="py-16 bg-surface-container-low px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-on-surface font-headline mb-8">
              Early Signs & <span className="text-on-surface italic">Development</span>
            </h2>
            <div className="space-y-6">
              {[
                "Developmental milestones (sitting, crawling, mobility)",
                "Abnormal muscle tone (too stiff or too floppy)",
                "Favoring one side of the body",
                "Difficulty with fine motor skills",
                "Delayed speech development",
                "Excessive drooling or problems with swallowing"
              ].map((sign, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="mt-1 bg-secondary/20 p-1 rounded-full">
                    <CheckCircle2 className="w-3 h-3 text-secondary" />
                  </div>
                  <p className="text-sm text-on-surface-variant leading-relaxed font-body">{sign}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative max-w-lg mx-auto"
          >
            <div className="rounded-[3rem] overflow-hidden bg-primary/10 flex items-center justify-center p-8 md:p-12 min-h-[450px]">
              <div className="text-center">
                <AlertCircle className="w-14 h-14 text-primary mx-auto mb-4 opacity-50" />
                <h3 className="text-sm font-bold text-primary mb-3 font-headline">Important Note</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed font-body">
                  Signs of CP vary greatly because CP is a group of disorders. A person with CP might need use of special equipment to walk, or might not be able to walk at all and might need lifelong care.
                </p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </section>

      {/* Management & Support */}
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-on-surface font-headline mb-4">Management & Support</h2>
          <p className="text-sm text-on-surface-variant max-w-2xl mx-auto leading-relaxed font-body">
            While there is no cure for CP, treatment can improve the lives of those who have the condition. It is important to begin a treatment program as early as possible.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: "Physical Therapy", desc: "Helps with muscle strength, flexibility, and motor development.", icon: Activity },
            { title: "Occupational Therapy", desc: "Focuses on daily activities like dressing and eating.", icon: Accessibility },
            { title: "Speech Therapy", desc: "Helps with communication and swallowing difficulties.", icon: Info },
            { title: "Assistive Technology", desc: "Devices like mobility aids, wheelchairs, and communication boards.", icon: Stethoscope },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex gap-6 p-6 rounded-xl bg-surface-container-lowest border border-outline-variant/10 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="text-sm font-bold text-on-surface mb-1 font-headline">{item.title}</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed font-body">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action - Orange Style */}
      <section className="py-20 px-8">
        <div className="max-w-5xl mx-auto bg-[#FF6321] rounded-[3rem] py-6 md:py-10 px-8 text-center relative overflow-hidden shadow-xl shadow-[#FF6321]/20">
          <div className="absolute top-0 left-0 w-64 h-64 bg-black/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold font-headline text-white mb-6">Want to learn more or help?</h2>
            <p className="text-sm text-white/80 max-w-lg mx-auto mb-8 leading-relaxed">
              We provide support, resources, and specialized care for children with CP and their families.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/programs" className="bg-secondary text-on-secondary px-8 py-3 rounded-full font-bold text-[15px] hover:bg-on-secondary-fixed-variant transition-all duration-300 shadow-md inline-block">
                Our Programs
              </Link>
              <Link to="/donate" className="bg-white/10 text-white border-2 border-white/20 px-8 py-3 rounded-full font-bold text-base hover:bg-white/20 transition-all inline-block">
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
