import { motion, useScroll, useTransform } from 'framer-motion';
import { Leaf, Droplets, ThermometerSun } from 'lucide-react';

export function HeroSection() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 400]);
  const y2 = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section id="home" className="relative h-screen min-h-[700px] overflow-hidden flex items-center justify-center pt-20">
      {/* Background Parallax Layer */}
      <motion.div
        style={{ y: y1, opacity }}
        className="absolute inset-0 z-0 bg-gradient-to-br from-primary to-[#027a3c]"
      >
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </motion.div>

      {/* Floating Elements (Particles/Leaves) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: [0.1, 0.4, 0.1],
              y: [-20, -100],
              x: Math.sin(i) * 50,
              rotate: [0, 90, 180]
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut'
            }}
            className="absolute bg-white/20 backdrop-blur-sm"
            style={{
              width: Math.random() * 40 + 20 + 'px',
              height: Math.random() * 40 + 20 + 'px',
              borderRadius: i % 2 === 0 ? '50% 0 50% 0' : '0 50% 0 50%',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%'
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 px-6 max-w-5xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
            Grow Smarter, <br />Greener, Anywhere.
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 font-medium">
            Real-time plant health monitoring powered by IoT sensors.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#product"
              className="w-full sm:w-auto px-8 py-4 bg-white text-primary rounded-full font-bold text-lg shadow-[0_8px_30px_rgb(255,255,255,0.2)] hover:shadow-[0_8px_40px_rgb(255,255,255,0.3)] transition-all hover:-translate-y-1"
            >
              Explore Product
            </a>
            <a
              href="#story"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all"
            >
              Our Story
            </a>
          </div>
        </motion.div>

        {/* Feature Pills */}
        <motion.div
          style={{ y: y2 }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, staggerChildren: 0.1 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {[
            { icon: ThermometerSun, text: "Temperature Sensing" },
            { icon: Droplets, text: "Humidity Tracking" },
            { icon: Leaf, text: "Moisture Monitoring" },
          ].map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/20 px-5 py-3 rounded-full text-white font-medium"
            >
              <feature.icon className="w-5 h-5 text-green-200" />
              <span>{feature.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
