import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { StorySection } from '@/components/sections/StorySection';
import { StatsSection } from '@/components/sections/StatsSection';
import { motion } from 'framer-motion';

export default function StoryPage() {
  return (
    <div className="w-full min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <section className="relative pt-36 pb-16 bg-[#1a1a1a] overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #05AA53 1px, transparent 0)', backgroundSize: '36px 36px' }} />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-primary/30" />
        <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
          >
            Since September 2024
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-4"
          >
            Our Journey
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg max-w-xl mx-auto"
          >
            From a semester idea to a national award-winning startup — every chapter of our story.
          </motion.p>
        </div>
      </section>
      <main>
        <StorySection />
        <StatsSection />
      </main>
      <Footer />
    </div>
  );
}
