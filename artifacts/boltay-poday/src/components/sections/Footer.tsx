import { Link } from 'wouter';
import { motion } from 'framer-motion';
import logo from '@assets/boltay_poday_logo_2.png';
import { Mail, MapPin, Leaf } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Product', href: '/product' },
    { name: 'Our Story', href: '/story' },
    { name: 'Team', href: '/team' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-[#0d1a10] text-white pt-20 pb-10 relative overflow-hidden">
      {/* Subtle green glow top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-1 bg-primary/40 blur-sm" />
      <div className="absolute top-0 inset-x-0 h-px bg-primary/20" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/">
              <img src={logo} alt="Boltay Poday Logo" className="h-12 object-contain brightness-0 invert mb-4" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Smart IoT plant health monitoring — keeping your plants alive and thriving, anywhere.
            </p>
            <div className="flex items-center gap-2 mt-5">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs text-gray-500 font-medium">Digital Maali App — Coming Soon</span>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-5">Explore</h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 font-medium text-sm inline-flex items-center gap-2 group"
                >
                  <Leaf className="w-3 h-3 text-primary/60 group-hover:text-primary transition-colors" />
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-5">Get in Touch</h4>
            <div className="space-y-4">
              <a href="mailto:boltaypoday@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm group">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                boltaypoday@gmail.com
              </a>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                Lahore, Pakistan
              </div>
            </div>
            <div className="flex gap-4 mt-6">
              {['Instagram', 'LinkedIn'].map((s, i) => (
                <a key={i} href="#" className="text-xs text-gray-500 hover:text-primary transition-colors font-medium border border-white/10 hover:border-primary/40 px-3 py-1.5 rounded-full">{s}</a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>&copy; {currentYear} Boltay Poday. All rights reserved.</p>
          <p>Built with passion — Lahore, Pakistan 🌿</p>
        </div>
      </div>
    </footer>
  );
}
