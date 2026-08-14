import { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import logo from '@assets/boltay_poday_logo_2.png';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(scrollY.get() > 50);
    const unsub = scrollY.on('change', () => handleScroll());
    return () => unsub();
  }, [scrollY]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Product', href: '#product' },
    { name: 'Our Story', href: '#story' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Boltay Poday Logo"
            className={`h-10 object-contain transition-all duration-300 ${!isScrolled ? 'brightness-0 invert' : ''}`}
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isScrolled ? 'text-gray-600' : 'text-white hover:text-white/80'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-transform hover:scale-105 active:scale-95 ${
              isScrolled
                ? 'bg-primary text-white shadow-lg shadow-primary/30'
                : 'bg-white text-primary shadow-xl'
            }`}
          >
            Get in Touch
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
