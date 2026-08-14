import { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { useLocation, Link } from 'wouter';
import logo from '@assets/boltay_poday_logo_2.png';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const [location] = useLocation();

  const isHome = location === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(scrollY.get() > 50);
    const unsub = scrollY.on('change', () => handleScroll());
    // on non-home pages, always show solid navbar
    if (!isHome) setIsScrolled(true);
    return () => unsub();
  }, [scrollY, isHome]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Product', href: '/product' },
    { name: 'Our Story', href: '/story' },
    { name: 'Team', href: '/team' },
    { name: 'Contact', href: '/contact' },
  ];

  const solid = isScrolled || !isHome;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Boltay Poday Logo"
            className={`h-10 object-contain transition-all duration-300 ${!solid ? 'brightness-0 invert' : ''}`}
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location === link.href
                  ? 'text-primary font-bold'
                  : solid ? 'text-gray-600' : 'text-white hover:text-white/80'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95 hover:shadow-lg ${
              solid
                ? 'bg-primary text-white shadow-md shadow-primary/30'
                : 'bg-white text-primary shadow-xl'
            }`}
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile hamburger placeholder */}
        <button className={`md:hidden p-2 rounded-lg ${solid ? 'text-gray-700' : 'text-white'}`}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </motion.nav>
  );
}
