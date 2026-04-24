import React from 'react';
import { motion } from 'motion/react';
import { Stethoscope, Accessibility, Users, Copy, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Donate() {
  const [copied, setCopied] = React.useState(false);

  const bankDetails = {
    accountName: "Hope Care Foundation",
    accountNumber: "1234567890",
    bankName: "Community Bank",
    swiftCode: "GCBGHAC"
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <header className="h-[300px] bg-primary/5 border-b border-outline-variant/10 flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-xl md:text-2xl lg:text-3xl font-headline font-extrabold text-on-background leading-[1.1] mb-6 tracking-tight">
              Be a Lifeline for a <span className="text-on-background">Child</span> Today
            </h1>
            <p className="text-sm text-on-surface-variant max-w-xl mb-10 leading-relaxed mx-auto">
              Your contribution isn't just a gift; it's a lifeline. Help us turn "impossible" into "I can" for children navigating the challenges of cerebral palsy.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Donation Info Section */}
      <section className="py-10 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            {/* Persuasive Sidebar */}
            <div className="space-y-12 mb-16">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-headline font-bold text-on-background text-center">Your support changes lives</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { icon: <Stethoscope size={20} />, title: "Medical Care", desc: "Funding essential surgeries and long-term medication plans." },
                  { icon: <Accessibility size={20} />, title: "Physical Therapy", desc: "Intensive sessions to help children gain mobility and independence." },
                  { icon: <Users size={20} />, title: "Parent Support", desc: "Counseling and training for families navigating the journey." }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group bg-white p-8 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 flex flex-col h-full border border-outline-variant/10"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 transition-colors">
                      {item.icon}
                    </div>
                    <h4 className="text-sm font-headline font-bold text-on-surface mb-4">{item.title}</h4>
                    <p className="text-sm text-on-surface-variant leading-relaxed mb-8 flex-grow">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Bank Transfer Details */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 max-w-3xl mx-auto bg-surface-container rounded-3xl p-8 md:p-10 border border-outline-variant/10"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-headline font-extrabold tracking-tight text-on-surface mb-2">Direct Bank Transfer</h3>
              <p className="text-sm text-on-surface-variant">You can also donate directly via bank transfer using the details below.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-outline mb-1">Account Name</p>
                  <p className="text-on-surface font-medium">{bankDetails.accountName}</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-outline mb-1">Bank Name</p>
                  <p className="text-on-surface font-medium">{bankDetails.bankName}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-outline mb-1">Account Number</p>
                  <div className="flex items-center gap-2">
                    <p className="text-on-surface font-headline font-bold text-xl">{bankDetails.accountNumber}</p>
                    <button 
                      onClick={() => copyToClipboard(bankDetails.accountNumber)}
                      className="p-2 hover:bg-primary/10 rounded-lg text-primary transition-colors"
                      title="Copy Account Number"
                    >
                      {copied ? <Check size={16} /> : <Copy size={16} />}
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-outline mb-1">SWIFT / BIC Code</p>
                  <p className="text-on-surface font-medium">{bankDetails.swiftCode}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-primary/5 rounded-xl border border-primary/10">
              <p className="text-xs text-on-surface-variant leading-relaxed">
                <span className="font-bold text-primary">Note:</span> Please use your full name or phone number as the transaction reference so we can acknowledge your gift.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA - Orange Style */}
      <section className="py-12 px-8">
        <div className="max-w-5xl mx-auto bg-[#FF6321] rounded-[3rem] py-6 md:py-10 px-8 text-center relative overflow-hidden shadow-xl shadow-[#FF6321]/20">
          <div className="absolute top-0 left-0 w-64 h-64 bg-black/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold font-headline text-white mb-6">Your contribution creates a brighter future</h2>
            <p className="text-sm text-white/80 max-w-lg mx-auto mb-8 leading-relaxed">
              Your support provides the essential tools, therapy, and care that change lives forever.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/sponsor" className="bg-secondary text-on-secondary px-8 py-3 rounded-full font-bold text-base hover:bg-on-secondary-fixed-variant transition-all duration-300 shadow-md inline-block">
                Sponsor a Child
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
