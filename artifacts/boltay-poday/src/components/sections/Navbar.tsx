import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { useLocation, Link } from 'wouter';
import logo from '@assets/boltay_poday_logo_2.png';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const [location] = useLocation();

  const isHome = location === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(scrollY.get() > 50);
    const unsub = scrollY.on('change', () => handleScroll());
    if (!isHome) setIsScrolled(true);
    return () => unsub();
  }, [scrollY, isHome]);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Product', href: '/product' },
    { name: 'Our Story', href: '/story' },
    { name: 'Team', href: '/team' },
    { name: 'Contact', href: '/contact' },
  ];

  const solid = isScrolled || !isHome;

  return (
    <>
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

          {/* Desktop nav */}
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

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className={`md:hidden p-2 rounded-lg transition-colors ${solid ? 'text-gray-700' : 'text-white'}`}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
            />

            {/* Slide-down drawer */}
            <motion.div
              key="drawer"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="fixed top-[68px] left-0 right-0 z-50 bg-white shadow-xl rounded-b-2xl md:hidden overflow-hidden"
            >
              <div className="flex flex-col py-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={`block px-6 py-3.5 text-base font-medium transition-colors ${
                        location === link.href
                          ? 'text-primary bg-green-50 font-semibold border-l-4 border-primary'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}

                <div className="px-6 pt-3 pb-4 border-t border-gray-100 mt-2">
                  <Link
                    href="/contact"
                    className="block text-center w-full px-6 py-3 rounded-full bg-primary text-white text-sm font-semibold shadow-md shadow-primary/30 active:scale-95 transition-transform"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
