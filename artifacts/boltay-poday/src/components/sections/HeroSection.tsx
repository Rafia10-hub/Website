import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Leaf, Droplets, ThermometerSun, ChevronDown } from 'lucide-react';

// Fixed random seed to avoid hydration flicker
const PARTICLES = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  left: ((i * 37 + 11) % 97) + '%',
  top: ((i * 53 + 7) % 95) + '%',
  size: (i % 5) + 4,
  duration: 6 + (i % 8),
  delay: (i % 10) * 0.5,
  type: i % 3, // 0=circle, 1=leaf-shape, 2=diamond
}));

const ORBS = [
  { x: '15%', y: '20%', size: 400, color: '#05AA53', opacity: 0.18, blur: 120, duration: 8 },
  { x: '70%', y: '60%', size: 350, color: '#027a3c', opacity: 0.14, blur: 100, duration: 11 },
  { x: '45%', y: '80%', size: 280, color: '#a7f3d0', opacity: 0.10, blur: 90, duration: 9 },
];

export function HeroSection() {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], [0, 280]);
  const textY = useTransform(scrollY, [0, 600], [0, 120]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const deviceY = useTransform(scrollY, [0, 700], [0, 60]);
  const deviceScale = useTransform(scrollY, [0, 500], [1, 0.92]);

  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden flex items-center justify-center">
      {/* Deep gradient background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#014d26] via-[#027a3c] to-[#05AA53]" />
        {/* Aurora mesh */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 20% 30%, #05AA5360 0%, transparent 70%), radial-gradient(ellipse 60% 80% at 80% 70%, #a7f3d030 0%, transparent 70%)',
          }}
        />
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, white 1.5px, transparent 0)',
            backgroundSize: '36px 36px',
          }}
        />
      </motion.div>

      {/* Animated glowing orbs */}
      {ORBS.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none z-0"
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -25, 15, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{ duration: orb.duration, repeat: Infinity, ease: 'easeInOut', repeatType: 'mirror' }}
          style={{
            left: orb.x,
            top: orb.y,
            width: orb.size,
            height: orb.size,
            background: orb.color,
            opacity: orb.opacity,
            filter: `blur(${orb.blur}px)`,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}

      {/* Magical floating particles */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {mounted && PARTICLES.map((p) => (
          <motion.div
            key={p.id}
            className="absolute"
            initial={{ opacity: 0, y: 20, scale: 0 }}
            animate={{
              opacity: [0, 0.7, 0.3, 0.7, 0],
              y: [0, -120, -220],
              x: [0, Math.sin(p.id) * 40, Math.cos(p.id) * 30],
              scale: [0, 1, 0.8, 0],
              rotate: [0, p.id % 2 === 0 ? 180 : -180],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: 'easeOut',
            }}
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
            }}
          >
            {p.type === 0 && (
              <div className="w-full h-full rounded-full bg-white/60 shadow-[0_0_8px_2px_rgba(255,255,255,0.5)]" />
            )}
            {p.type === 1 && (
              <div className="w-full h-full bg-green-200/70 shadow-[0_0_6px_rgba(167,243,208,0.8)]"
                style={{ borderRadius: '50% 0 50% 0', transform: 'rotate(45deg)' }}
              />
            )}
            {p.type === 2 && (
              <div className="w-full h-full bg-white/40 shadow-[0_0_10px_3px_rgba(255,255,255,0.4)]"
                style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-28 pb-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* LEFT: Text */}
        <motion.div
          style={{ y: textY, opacity }}
          className="flex-1 text-center lg:text-left"
        >
          {/* LCWU Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-white/15 border border-white/25 backdrop-blur-md px-4 py-2 rounded-full mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
            <span className="text-white/90 text-sm font-semibold tracking-wider uppercase">LCWU · IoT Smart Plant Tech</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-5xl md:text-6xl xl:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-6"
          >
            Grow Smarter,{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text" style={{
                backgroundImage: 'linear-gradient(135deg, #a7f3d0 0%, #6ee7b7 50%, #34d399 100%)',
              }}>Greener,</span>
              {/* Glow behind */}
              <motion.span
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 blur-xl opacity-50 text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg, #a7f3d0 0%, #34d399 100%)', zIndex: 0 }}
                aria-hidden
              >Greener,</motion.span>
            </span>
            <br />Anywhere.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="text-lg md:text-xl text-white/80 max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed"
          >
            Real-time plant health monitoring powered by IoT sensors — 
            temperature, humidity &amp; soil moisture, all in the palm of your hand.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-12"
          >
            <a
              href="#product"
              className="group relative px-8 py-4 bg-white text-primary rounded-full font-bold text-base shadow-[0_8px_32px_rgba(255,255,255,0.3)] hover:shadow-[0_12px_48px_rgba(255,255,255,0.5)] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <span className="relative z-10">Explore Product</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white via-green-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </a>
            <a
              href="#story"
              className="px-8 py-4 bg-transparent border-2 border-white/60 text-white rounded-full font-bold text-base hover:bg-white/10 hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 backdrop-blur-sm"
            >
              Our Story
            </a>
          </motion.div>

          {/* Feature pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="flex flex-wrap gap-3 justify-center lg:justify-start"
          >
            {[
              { icon: ThermometerSun, text: 'Temperature' },
              { icon: Droplets, text: 'Humidity' },
              { icon: Leaf, text: 'Soil Moisture' },
            ].map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 + i * 0.12 }}
                whileHover={{ scale: 1.07, y: -2 }}
                className="flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-medium cursor-default"
              >
                <feat.icon className="w-4 h-4 text-green-200" />
                {feat.text}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT: Floating Device */}
        <motion.div
          style={{ y: deviceY, scale: deviceScale }}
          className="flex-1 flex items-center justify-center relative"
        >
          {/* Outer glow ring */}
          <motion.div
            animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.55, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute rounded-full"
            style={{
              width: 420,
              height: 420,
              background: 'radial-gradient(circle, #05AA5330 0%, transparent 70%)',
              filter: 'blur(30px)',
            }}
          />
          {/* Mid glow ring */}
          <motion.div
            animate={{ scale: [1, 1.12, 1], opacity: [0.2, 0.45, 0.2] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute rounded-full border border-white/20"
            style={{ width: 360, height: 360 }}
          />
          <motion.div
            animate={{ scale: [1, 1.06, 1], opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute rounded-full border border-white/15"
            style={{ width: 300, height: 300 }}
          />

          {/* Device card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, type: 'spring', stiffness: 80 }}
          >
            <motion.div
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              {/* Card bg with glassmorphism */}
              <div
                className="relative rounded-[2.5rem] p-6 overflow-hidden"
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  boxShadow: '0 32px 80px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.08), inset 0 1px 0 rgba(255,255,255,0.2)',
                }}
              >
                {/* Sparkle top-right */}
                <motion.div
                  animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5], rotate: [0, 90, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                  className="absolute top-4 right-4 text-yellow-200 text-xl select-none"
                >✦</motion.div>
                <motion.div
                  animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                  className="absolute top-10 left-6 text-green-200 text-sm select-none"
                >✦</motion.div>

                {/* Device image — contain so transparent PNG shows correctly */}
                <div
                  className="relative"
                  style={{ width: 300, height: 300 }}
                >
                  <img
                    src="/device.png"
                    alt="Boltay Poday IoT Device — Smart Plant Solution"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.5)) drop-shadow(0 0 30px rgba(5,170,83,0.4))',
                    }}
                  />
                  {/* Subtle reflection */}
                  <div
                    className="absolute inset-x-0 bottom-0 h-16 pointer-events-none"
                    style={{ background: 'linear-gradient(to top, rgba(5,170,83,0.1), transparent)' }}
                  />
                </div>

                {/* IoT label badge */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="mt-4 flex items-center justify-center gap-2"
                >
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
                  <span className="text-white/80 text-sm font-semibold tracking-wide">IoT Based Smart Plant Solution</span>
                </motion.div>
              </div>

              {/* Floating stat bubbles */}
              <motion.div
                animate={{ y: [0, -8, 0], x: [0, 4, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -left-8 bg-white rounded-2xl px-4 py-2 shadow-2xl flex items-center gap-2"
                style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.5)' }}
              >
                <ThermometerSun className="w-5 h-5 text-orange-400" />
                <div>
                  <div className="text-xs text-gray-500 font-medium">Temperature</div>
                  <div className="text-sm font-bold text-gray-800">24°C ✓</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0], x: [0, -4, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -right-8 bg-white rounded-2xl px-4 py-2 shadow-2xl flex items-center gap-2"
                style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.5)' }}
              >
                <Droplets className="w-5 h-5 text-blue-400" />
                <div>
                  <div className="text-xs text-gray-500 font-medium">Soil Moisture</div>
                  <div className="text-sm font-bold text-gray-800">62% 🌱</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                className="absolute -bottom-4 -left-6 bg-white rounded-2xl px-4 py-2 shadow-2xl flex items-center gap-2"
                style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.5)' }}
              >
                <Leaf className="w-5 h-5 text-green-500" />
                <div>
                  <div className="text-xs text-gray-500 font-medium">Humidity</div>
                  <div className="text-sm font-bold text-gray-800">55% ✓</div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-white/60 text-xs font-semibold tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5 text-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
