import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Bell, BarChart3, Bluetooth, Droplets, Leaf, Smartphone, Star, Brain, ChevronLeft, ChevronRight } from 'lucide-react';

const screens = [
  {
    src: '/app1.jpg',
    label: 'Home',
    desc: 'Smart IoT Plant Monitoring — ESP32 · AI Plant Doctor · Real-time Sensors',
    color: '#05AA53',
  },
  {
    src: '/app3.jpg',
    label: 'Sign In',
    desc: 'Secure plant dashboard login — Welcome Back to your green world',
    color: '#059669',
  },
  {
    src: '/app2.jpg',
    label: 'Dashboard',
    desc: 'Live overview of all connected sensors — 444 total readings, plants at a glance',
    color: '#064e3b',
  },
  {
    src: '/app4.jpg',
    label: 'Navigation',
    desc: 'Dashboard · Devices · Plant Doctor AI · Plants Info · Profile · Help',
    color: '#047857',
  },
  {
    src: '/app5.jpg',
    label: 'AI Plant Doctor',
    desc: 'Your personal AI botanist — diagnoses plant health, sensor data & care tips in Urdu & English',
    color: '#065f46',
  },
];

const features = [
  { icon: Smartphone, color: '#05AA53', title: 'Live Dashboard', desc: 'Real-time overview of all connected sensors and plant health at a glance.' },
  { icon: Bell, color: '#f97316', title: 'Smart Alerts', desc: 'Push notifications before your plant gets too hot, dry, or humid.' },
  { icon: Brain, color: '#8b5cf6', title: 'AI Plant Doctor', desc: 'Personal AI botanist — asks in Urdu & English, diagnoses disease and gives care tips.' },
  { icon: BarChart3, color: '#3b82f6', title: 'Live Data Charts', desc: '444+ readings logged — beautiful history charts of temperature, humidity & soil.' },
  { icon: Bluetooth, color: '#06b6d4', title: 'ESP32 Pairing', desc: 'Connect your Boltay Poday sensor in seconds — no tech expertise needed.' },
  { icon: Leaf, color: '#10b981', title: 'Plants Info', desc: 'Species database with personalised care routines for each of your plants.' },
];

export function AppSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(2); // start on dashboard
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const prev = () => setActive(i => (i - 1 + screens.length) % screens.length);
  const next = () => setActive(i => (i + 1) % screens.length);

  return (
    <section ref={sectionRef} id="app" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Background blobs */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.04] blur-3xl" style={{ background: '#05AA53' }} />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-[0.04] blur-3xl" style={{ background: '#027a3c' }} />
      </motion.div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-5 border border-primary/20"
          >
            <Smartphone className="w-3.5 h-3.5" />
            Digital Maali App
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-5">
            Manage Your Plant Smarter
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            One powerful app — live sensor data, AI diagnosis in Urdu & English, and full plant care history.
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-3 mt-6 bg-primary/8 border border-primary/15 rounded-2xl px-6 py-3"
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="font-bold text-foreground">93% User Satisfaction</span>
          </motion.div>
        </motion.div>

        {/* Main layout: phone gallery + features */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Phone gallery */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-5/12 flex flex-col items-center"
          >
            {/* Carousel of real screenshots */}
            <div className="relative flex items-center justify-center">
              {/* Glow behind active phone */}
              <motion.div
                key={active}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute w-64 h-64 rounded-full blur-3xl pointer-events-none"
                style={{ background: `radial-gradient(circle, ${screens[active].color}30 0%, transparent 70%)` }}
              />

              {/* Side phones (prev & next) */}
              <motion.div
                key={`prev-${active}`}
                className="absolute -left-8 opacity-40 cursor-pointer"
                style={{ zIndex: 1 }}
                onClick={prev}
                whileHover={{ scale: 1.05, opacity: 0.6 }}
              >
                <div className="w-32 rounded-[1.8rem] overflow-hidden shadow-xl border-4 border-white/60"
                  style={{ aspectRatio: '9/19.5' }}>
                  <img
                    src={screens[(active - 1 + screens.length) % screens.length].src}
                    alt="prev screen"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </motion.div>

              {/* Active phone */}
              <div className="relative z-10" style={{ filter: 'drop-shadow(0 32px 64px rgba(0,0,0,0.3))' }}>
                {/* Phone frame */}
                <div
                  className="relative rounded-[3rem] overflow-hidden border-[10px] border-[#1a1a1a] shadow-2xl"
                  style={{ width: 260, aspectRatio: '9/19.5', background: '#000' }}
                >
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-[#1a1a1a] rounded-b-2xl z-20 flex items-center justify-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#333]" />
                    <div className="w-10 h-1.5 rounded-full bg-[#333]" />
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.img
                      key={active}
                      src={screens[active].src}
                      alt={screens[active].label}
                      initial={{ opacity: 0, scale: 1.04, x: 20 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.97, x: -20 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="w-full h-full object-cover object-top"
                    />
                  </AnimatePresence>

                  {/* Home bar */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/30 rounded-full z-20" />
                </div>

                {/* Volume & power buttons */}
                <div className="absolute left-[-14px] top-20 w-1.5 h-8 bg-[#333] rounded-l-full" />
                <div className="absolute left-[-14px] top-32 w-1.5 h-6 bg-[#333] rounded-l-full" />
                <div className="absolute right-[-14px] top-24 w-1.5 h-10 bg-[#333] rounded-r-full" />
              </div>

              {/* Next side phone */}
              <motion.div
                key={`next-${active}`}
                className="absolute -right-8 opacity-40 cursor-pointer"
                style={{ zIndex: 1 }}
                onClick={next}
                whileHover={{ scale: 1.05, opacity: 0.6 }}
              >
                <div className="w-32 rounded-[1.8rem] overflow-hidden shadow-xl border-4 border-white/60"
                  style={{ aspectRatio: '9/19.5' }}>
                  <img
                    src={screens[(active + 1) % screens.length].src}
                    alt="next screen"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </motion.div>
            </div>

            {/* Screen label & description */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="mt-8 text-center px-4"
              >
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold mb-2">
                  {screens[active].label}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">{screens[active].desc}</p>
              </motion.div>
            </AnimatePresence>

            {/* Dot nav + arrows */}
            <div className="flex items-center gap-4 mt-6">
              <button onClick={prev} className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all text-gray-400">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <div className="flex gap-2">
                {screens.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className="transition-all duration-300"
                  >
                    <motion.div
                      animate={{ width: i === active ? 24 : 8, background: i === active ? '#05AA53' : '#d1d5db' }}
                      transition={{ duration: 0.3 }}
                      className="h-2 rounded-full"
                    />
                  </button>
                ))}
              </div>
              <button onClick={next} className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all text-gray-400">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Thumbnail strip */}
            <div className="flex gap-3 mt-6">
              {screens.map((s, i) => (
                <motion.button
                  key={i}
                  onClick={() => setActive(i)}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative overflow-hidden rounded-xl border-2 transition-all duration-200"
                  style={{
                    width: 44, aspectRatio: '9/19.5',
                    borderColor: i === active ? '#05AA53' : 'transparent',
                    boxShadow: i === active ? '0 0 0 2px #05AA5340' : 'none',
                  }}
                >
                  <img src={s.src} alt={s.label} className="w-full h-full object-cover object-top" />
                  {i !== active && <div className="absolute inset-0 bg-white/40" />}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Features */}
          <div className="w-full lg:w-7/12">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                Everything your plant needs,<br />
                <span className="text-primary">right in your pocket.</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-20px' }}
                    transition={{ duration: 0.45, delay: idx * 0.07 }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="flex gap-4 p-4 rounded-2xl bg-gray-50 border border-transparent hover:border-gray-100 hover:shadow-md transition-all duration-300 cursor-default group"
                  >
                    <div
                      className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center shadow-sm"
                      style={{ background: feature.color + '18' }}
                    >
                      <feature.icon className="w-5 h-5" style={{ color: feature.color }} />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-sm mb-1">{feature.title}</h4>
                      <p className="text-muted-foreground text-xs leading-relaxed">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* App store buttons */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <button className="flex items-center gap-3 bg-foreground text-background px-6 py-3 rounded-xl hover:bg-foreground/90 hover:shadow-lg transition-all hover:-translate-y-0.5">
                  <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.04 2.26-.74 3.58-.8 2.22-.05 3.8.97 4.75 2.55-3.86 2.06-3.13 6.96.65 8.44-.76 1.4-1.63 2.82-3.06 4.15l-1 1.83M12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] leading-tight opacity-70">Download on the</div>
                    <div className="text-sm font-bold leading-tight">App Store</div>
                  </div>
                </button>
                <button className="flex items-center gap-3 bg-foreground text-background px-6 py-3 rounded-xl hover:bg-foreground/90 hover:shadow-lg transition-all hover:-translate-y-0.5">
                  <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                    <path d="M3.1 3.2v17.6c0 .3.2.6.5.6.1 0 .2 0 .3-.1l8.5-8.4-8.5-8.3c-.1-.1-.3-.1-.5-.1-.2 0-.3.3-.3.7z"/>
                    <path d="M12.9 12l3.4 3.3 4.2-2.4c.5-.3.5-.8 0-1.1l-4.2-2.4L12.9 12z"/>
                    <path d="M16 15.6L3.9 22.5c-.2.1-.3.1-.4 0l12.5-12.2z"/>
                    <path d="M3.5 1.5c.1-.1.2-.1.4 0L16 8.4 12.4 12 3.5 3.3c0-.1-.1-.2-.1-.4s.1-.3.1-.4c0-.1.2-.1.3-.1z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] leading-tight opacity-70">GET IT ON</div>
                    <div className="text-sm font-bold leading-tight">Google Play</div>
                  </div>
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
