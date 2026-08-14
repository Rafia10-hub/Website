import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { ContactSection } from '@/components/sections/ContactSection';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <div className="w-full min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <section className="relative pt-36 pb-16 bg-gradient-to-br from-[#014d26] via-[#027a3c] to-[#05AA53] overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '36px 36px' }} />
        <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/15 border border-white/25 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
          >
            Get in Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-4"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/80 text-lg max-w-xl mx-auto"
          >
            Investors, plant lovers, urban farmers — we'd love to hear from you.
          </motion.p>
        </div>
      </section>
      <main>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
