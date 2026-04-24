import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Send, Facebook, Instagram, Linkedin, Heart, ArrowUp, Link as LinkIcon, Mail, Phone, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from './Logo';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="fixed top-0 w-full z-50 bg-white shadow-sm">
        <div className="flex items-center px-[2px] py-3 w-full">
          <Link to="/" className="flex items-center">
            <Logo className="h-14 w-auto" showBackground={false} />
          </Link>
          
          <div className="hidden lg:flex items-center ml-auto gap-4 lg:gap-6">
            <div className="flex items-center gap-4 lg:gap-6 mr-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Programs', path: '/programs' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'Guide', path: '/guide' },
                { name: 'News', path: '/news' },
                { name: 'Contact', path: '/contact' },
                { name: 'Sponsor', path: '/sponsor' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`transition-colors duration-300 font-body text-sm lg:text-base ${
                    isActive(link.path)
                      ? 'text-secondary font-semibold border-b-2 border-secondary'
                      : 'text-on-surface-variant hover:text-secondary'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <Link 
              to="/donate" 
              className="bg-secondary text-on-secondary px-4 lg:px-6 py-2 lg:py-2.5 rounded-full text-sm lg:text-base font-semibold hover:bg-on-secondary-fixed-variant transition-all active:scale-95 duration-150 whitespace-nowrap"
            >
              Donate
            </Link>
          </div>

          <button 
            className="lg:hidden ml-auto text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMenuOpen(false)}
                className="lg:hidden fixed inset-0 z-40"
              />
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="lg:hidden fixed top-0 right-0 h-fit w-[50%] md:w-[305px] min-w-[120px] bg-white shadow-2xl z-50 rounded-bl-2xl border-l border-b border-outline-variant/20"
              >
                <div className="flex flex-col px-[2px] pt-[85px] pb-6">
                  <button 
                    onClick={() => setIsMenuOpen(false)}
                    className="absolute top-4 left-1 text-black p-2"
                  >
                    <X size={24} />
                  </button>
                  <div className="flex flex-col gap-2">
                    {[
                      { name: 'Home', path: '/' },
                      { name: 'About Us', path: '/about' },
                      { name: 'Programs', path: '/programs' },
                      { name: 'Gallery', path: '/gallery' },
                      { name: 'Guide', path: '/guide' },
                      { name: 'News', path: '/news' },
                      { name: 'Contact', path: '/contact' },
                      { name: 'Sponsor', path: '/sponsor' },
                      { name: 'Donate', path: '/donate' },
                    ].map((link, index) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setIsMenuOpen(false)}
                        className={`py-1.5 px-0 rounded-xl transition-all text-base whitespace-nowrap ${
                          isActive(link.path) 
                            ? 'bg-secondary/10 text-secondary font-bold' 
                            : 'text-on-surface-variant hover:bg-surface-container-low'
                        }`}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>

      <main className="flex-grow pt-[85px]">
        <Outlet />
      </main>

      <footer className="bg-surface-container-highest w-full pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-8 lg:gap-16 mb-16">
            {/* Brand Section */}
            <div className="col-span-2 md:col-span-3 lg:col-span-4">
              <Logo className="h-16 w-auto mb-8" showBackground={false} stacked={true} />
            </div>

            {/* Links Sections */}
            <div className="col-span-1 md:col-span-1 lg:col-span-2">
              <h4 className="text-[11px] font-bold text-primary uppercase tracking-[0.2em] mb-8">Navigation</h4>
              <ul className="space-y-4">
                <li><Link to="/" className="text-on-surface-variant text-sm hover:text-primary transition-colors">Home</Link></li>
                <li><Link to="/about" className="text-on-surface-variant text-sm hover:text-primary transition-colors">About Us</Link></li>
                <li><Link to="/programs" className="text-on-surface-variant text-sm hover:text-primary transition-colors">Programs</Link></li>
                <li><Link to="/gallery" className="text-on-surface-variant text-sm hover:text-primary transition-colors">Gallery</Link></li>
                <li><Link to="/news" className="text-on-surface-variant text-sm hover:text-primary transition-colors">Latest News</Link></li>
              </ul>
            </div>

            <div className="col-span-1 md:col-span-1 lg:col-span-2">
              <h4 className="text-[11px] font-bold text-primary uppercase tracking-[0.2em] mb-8">Support</h4>
              <ul className="space-y-4">
                <li><Link to="/donate" className="text-on-surface-variant text-sm hover:text-primary transition-colors">Donate</Link></li>
                <li><Link to="/sponsor" className="text-on-surface-variant text-sm hover:text-primary transition-colors">Sponsorship</Link></li>
                <li><Link to="/contact" className="text-on-surface-variant text-sm hover:text-primary transition-colors">Volunteer</Link></li>
              </ul>
            </div>

            {/* Newsletter Section */}
            <div className="col-span-2 md:col-span-1 lg:col-span-4">
              <h4 className="text-[11px] font-bold text-primary uppercase tracking-[0.2em] mb-8">Quick Contact</h4>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Mail size={14} />
                  </div>
                  <p className="text-on-surface-variant text-sm">info@hopecarefoundation.org</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Phone size={14} />
                  </div>
                  <p className="text-on-surface-variant text-sm">(555) 123-4567</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <MapPin size={14} />
                  </div>
                  <p className="text-on-surface-variant text-sm">19 ST hope, community city</p>
                </div>
              </div>

              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-on-primary transition-all duration-300">
                  <Facebook size={16} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-on-primary transition-all duration-300">
                  <Instagram size={16} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-on-primary transition-all duration-300">
                  <Linkedin size={16} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-on-primary transition-all duration-300">
                  <LinkIcon size={16} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-on-primary transition-all duration-300">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.294 19.497h2.039L6.486 3.24H4.298L17.607 20.65z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-on-surface-variant text-xs font-medium tracking-wide">
              © 2024 HOPE CARE FOUNDATION. ALL RIGHTS RESERVED.
            </div>
            
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-primary text-xs font-bold uppercase tracking-widest hover:underline underline-offset-8 flex items-center gap-2"
            >
              Back to top
              <ArrowUp size={10} />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
