import React from 'react';
import { motion } from 'motion/react';

export default function Privacy() {
  return (
    <div className="overflow-hidden">
      <header className="h-[300px] bg-primary/5 border-b border-outline-variant/10 flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-4xl lg:text-5xl font-headline font-extrabold text-on-surface leading-tight tracking-tight mb-8"
          >
            Privacy Policy
          </motion.h1>
          <p className="text-sm text-on-surface-variant leading-relaxed max-w-2xl mx-auto">
            Your trust is our most valuable asset. Learn how we protect your personal information and uphold your privacy rights.
          </p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-8 py-24">
      
      <div className="prose prose-slate max-w-none text-on-surface-variant text-sm leading-relaxed space-y-8">
        <section>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-on-surface mb-4">1. Introduction</h2>
          <p>Hope Care Foundation ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or interact with our services.</p>
        </section>

        <section>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-on-surface mb-4">2. Information We Collect</h2>
          <p>We may collect personal information that you voluntarily provide to us, such as your name, email address, phone number, and payment information when you make a donation or sign up for our newsletter.</p>
        </section>

        <section>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-on-surface mb-4">3. How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To process your donations and provide receipts.</li>
            <li>To send you updates about our programs and impact.</li>
            <li>To respond to your inquiries and support requests.</li>
            <li>To improve our website and services.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-on-surface mb-4">4. Data Security</h2>
          <p>We implement a variety of security measures to maintain the safety of your personal information. Your sensitive information (such as credit card data) is encrypted and transmitted via secure socket layer (SSL) technology.</p>
        </section>

        <section>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-on-surface mb-4">5. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at privacy@hopecarefoundation.org.</p>
        </section>
      </div>
    </div>
    </div>
  );
}
