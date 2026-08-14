import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function VideoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.85, 1, 1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);

  return (
    <section ref={sectionRef} className="relative py-24 bg-[#0d1a10] overflow-hidden">
      {/* Green dot grid background */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #05AA53 1px, transparent 0)', backgroundSize: '36px 36px' }}
      />
      {/* Ambient glow */}
      <motion.div
        animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(5,170,83,0.25) 0%, transparent 70%)' }}
      />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 text-primary px-4 py-1.5 rounded-full text-sm font-bold mb-4">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Prototype Demo
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            See It in Action
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Watch our working prototype — handbuilt at Lahore, sensing real plant data in real time.
          </p>
        </motion.div>

        {/* Video container with parallax scale */}
        <motion.div
          style={{ scale, opacity }}
          className="relative rounded-[2rem] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.6),0_0_0_1px_rgba(5,170,83,0.2)]"
        >
          {/* Glowing border effect */}
          <div
            className="absolute -inset-px rounded-[2rem] pointer-events-none z-10"
            style={{ background: 'linear-gradient(135deg, rgba(5,170,83,0.4) 0%, transparent 50%, rgba(5,170,83,0.2) 100%)', padding: 1 }}
          />

          <video
            src="/prototype-video.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full rounded-[2rem]"
            style={{ maxHeight: '70vh', objectFit: 'contain', background: '#000' }}
          />

          {/* Bottom label overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 pointer-events-none">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
              <span className="text-white text-sm font-semibold tracking-wide">Live Prototype Recording · Boltay Poday IoT Device</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
