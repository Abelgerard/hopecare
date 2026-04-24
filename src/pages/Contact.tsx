import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Copy, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = React.useState(false);
  const [copiedPhone, setCopiedPhone] = React.useState(false);
  const [status, setStatus] = React.useState<'IDLE' | 'SUBMITTING' | 'SUCCESS' | 'ERROR'>('IDLE');

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('SUBMITTING');
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('https://formspree.io/f/xykbvoyn', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('SUCCESS');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('ERROR');
      }
    } catch (error) {
      setStatus('ERROR');
    }
  };

  return (
    <div className="overflow-hidden">
      <header className="h-[300px] bg-primary/5 border-b border-outline-variant/10 flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xl md:text-2xl lg:text-3xl font-headline font-extrabold text-on-surface leading-tight tracking-tight mb-8"
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-sm text-on-surface-variant leading-relaxed max-w-2xl mx-auto"
          >
            Have questions about our programs or want to get involved? We're here to help.
          </motion.p>
        </div>
      </header>

      <section className="py-12 max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-stretch">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col h-full"
          >
            <div className="space-y-8 mb-10">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-headline font-bold text-on-surface">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-on-surface text-sm">Email Us</h4>
                    <div className="flex items-center gap-2">
                      <p className="text-sm text-on-surface-variant leading-relaxed">info@hopecarefoundation.org</p>
                      <button 
                        onClick={() => copyToClipboard('info@hopecarefoundation.org', 'email')}
                        className="p-1 hover:bg-primary/10 rounded text-primary transition-colors"
                        title="Copy Email"
                      >
                        {copiedEmail ? <Check size={14} /> : <Copy size={14} />}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-on-surface text-sm">Call Us</h4>
                    <div className="flex items-center gap-2">
                      <p className="text-sm text-on-surface-variant leading-relaxed">(555) 123-4567</p>
                      <button 
                        onClick={() => copyToClipboard('(555) 123-4567', 'phone')}
                        className="p-1 hover:bg-primary/10 rounded text-primary transition-colors"
                        title="Copy Phone"
                      >
                        {copiedPhone ? <Check size={14} /> : <Copy size={14} />}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-on-surface text-sm">Visit Us</h4>
                    <p className="text-sm text-on-surface-variant leading-relaxed">19 ST hope, community city</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-10">
              <h3 className="text-sm font-headline font-bold text-on-surface mb-4">Support Hours</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-1">Monday - Friday: 09:00 - 18:00</p>
              <p className="text-sm text-on-surface-variant leading-relaxed">Saturday: 10:00 - 14:00</p>
            </div>

            <div className="mb-10">
              <h3 className="text-sm font-headline font-bold text-on-surface mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 transition-all shadow-sm hover:shadow-md hover:-translate-y-1 hover:bg-[#1877F2] hover:text-white">
                  <Facebook size={16} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 transition-all shadow-sm hover:shadow-md hover:-translate-y-1 hover:bg-[#1877F2] hover:text-white">
                  <Instagram size={16} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 transition-all shadow-sm hover:shadow-md hover:-translate-y-1 hover:bg-[#1877F2] hover:text-white">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.294 19.497h2.039L6.486 3.24H4.298L17.607 20.65z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-surface-container-lowest p-8 md:p-10 rounded-3xl shadow-sm border border-outline-variant/20"
          >
            {status === 'SUCCESS' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check size={32} />
                </div>
                <h3 className="text-xl font-headline font-bold text-on-surface mb-2">Message Sent!</h3>
                <p className="text-sm text-on-surface-variant mb-8">Thank you for reaching out. We'll get back to you as soon as possible.</p>
                <button 
                  onClick={() => setStatus('IDLE')}
                  className="text-secondary font-bold hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-on-surface-variant">First Name</label>
                    <input 
                      name="firstName"
                      required
                      className="w-full bg-surface-container-low border-none rounded-xl p-3 focus:ring-2 focus:ring-primary/20" 
                      type="text" 
                      placeholder="John" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-on-surface-variant">Last Name</label>
                    <input 
                      name="lastName"
                      required
                      className="w-full bg-surface-container-low border-none rounded-xl p-3 focus:ring-2 focus:ring-primary/20" 
                      type="text" 
                      placeholder="Doe" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-on-surface-variant">Email Address</label>
                  <input 
                    name="email"
                    required
                    className="w-full bg-surface-container-low border-none rounded-xl p-3 focus:ring-2 focus:ring-primary/20" 
                    type="email" 
                    placeholder="john@example.com" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-on-surface-variant">Subject</label>
                  <select 
                    name="subject"
                    className="w-full bg-surface-container-low border-none rounded-xl p-3 focus:ring-2 focus:ring-primary/20"
                  >
                    <option>General Inquiry</option>
                    <option>Sponsorship</option>
                    <option>Donation</option>
                    <option>Donation Question</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-on-surface-variant">Message</label>
                  <textarea 
                    name="message"
                    required
                    className="w-full bg-surface-container-low border-none rounded-xl p-3 focus:ring-2 focus:ring-primary/20 h-28" 
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                {status === 'ERROR' && (
                  <p className="text-xs text-error font-medium">Something went wrong. Please try again later.</p>
                )}

                <button 
                  disabled={status === 'SUBMITTING'}
                  className="w-full py-3.5 bg-secondary text-on-secondary rounded-full font-bold text-base hover:bg-on-secondary-fixed-variant transition-all duration-300 shadow-md flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {status === 'SUBMITTING' ? 'Sending...' : 'Send Message'} 
                  <Send size={14} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Final CTA - Orange Style */}
      <section className="py-12 px-8">
        <div className="max-w-5xl mx-auto bg-[#FF6321] rounded-[3rem] py-6 md:py-10 px-8 text-center relative overflow-hidden shadow-xl shadow-[#FF6321]/20">
          <div className="absolute top-0 left-0 w-64 h-64 bg-black/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold font-headline text-white mb-6">Every child deserves a chance to shine</h2>
            <p className="text-sm text-white/80 max-w-lg mx-auto mb-8 leading-relaxed">
              Join our mission to provide life-changing support, specialized care, and a brighter future for children with Cerebral Palsy.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/donate" className="bg-secondary text-on-secondary px-8 py-3 rounded-full font-bold text-base hover:bg-on-secondary-fixed-variant transition-all duration-300 shadow-md inline-block">
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
