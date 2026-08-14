import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Bell, BarChart3, Bluetooth, Droplets, ThermometerSun, Leaf, Smartphone, Star } from 'lucide-react';

const features = [
  {
    icon: Bell,
    color: '#f97316',
    bg: 'from-orange-50 to-orange-100/50',
    title: 'Smart Alerts',
    desc: 'Instant push notifications before your plant gets too hot, too dry, or too humid — act before damage occurs.',
  },
  {
    icon: BarChart3,
    color: '#3b82f6',
    bg: 'from-blue-50 to-blue-100/50',
    title: 'Live Data Charts',
    desc: 'Beautiful real-time graphs of temperature, humidity & soil moisture — weeks and months of plant health history.',
  },
  {
    icon: Bluetooth,
    color: '#8b5cf6',
    bg: 'from-violet-50 to-violet-100/50',
    title: 'Easy Pairing',
    desc: 'Connect your Boltay Poday sensor in seconds via Bluetooth — no tech expertise required.',
  },
  {
    icon: Leaf,
    color: '#05AA53',
    bg: 'from-green-50 to-emerald-100/50',
    title: 'Plant Care Tips',
    desc: 'AI-powered personalized care recommendations based on your plant species and current sensor readings.',
  },
  {
    icon: Droplets,
    color: '#06b6d4',
    bg: 'from-cyan-50 to-cyan-100/50',
    title: 'Watering Reminders',
    desc: 'Smart reminders based on actual soil moisture data — never over- or under-water again.',
  },
  {
    icon: BarChart3,
    color: '#ec4899',
    bg: 'from-pink-50 to-pink-100/50',
    title: 'Plant Profiles',
    desc: 'Save multiple plants, name them, and track each one individually with its own dashboard and history.',
  },
];

// Phone screen mockup UI data
const screenSlides = [
  {
    title: 'Dashboard',
    bg: 'from-[#0d1a10] to-[#1a2e1c]',
    content: (
      <div className="p-4 space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-green-400 text-xs font-bold uppercase tracking-wider">Good Morning!</p>
            <p className="text-white font-bold text-lg">Your Plants</p>
          </div>
          <div className="w-8 h-8 rounded-full bg-primary/30 flex items-center justify-center">
            <Leaf className="w-4 h-4 text-green-400" />
          </div>
        </div>
        <div className="bg-white/10 rounded-2xl p-4 space-y-3">
          <p className="text-green-400 text-xs font-semibold">🌿 My Monstera — Live</p>
          <div className="space-y-2">
            {[
              { label: 'Temperature', val: '24°C', color: 'bg-orange-400', pct: '72%' },
              { label: 'Humidity', val: '55%', color: 'bg-blue-400', pct: '55%' },
              { label: 'Soil', val: '62%', color: 'bg-green-400', pct: '62%' },
            ].map((s, i) => (
              <div key={i}>
                <div className="flex justify-between text-xs text-white/70 mb-1">
                  <span>{s.label}</span><span className="text-white font-bold">{s.val}</span>
                </div>
                <div className="h-1.5 rounded-full bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: s.pct }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.3 + i * 0.2 }}
                    className={`h-full rounded-full ${s.color}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-white/5 rounded-xl p-3 text-center">
            <p className="text-white font-bold text-lg">3</p>
            <p className="text-white/50 text-xs">Plants</p>
          </div>
          <div className="bg-green-500/20 rounded-xl p-3 text-center">
            <p className="text-green-400 font-bold text-lg">All ✓</p>
            <p className="text-white/50 text-xs">Healthy</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Alerts',
    bg: 'from-[#1a1000] to-[#2e1e00]',
    content: (
      <div className="p-4 space-y-3">
        <div className="flex items-center gap-2 mb-2">
          <Bell className="w-4 h-4 text-orange-400" />
          <p className="text-white font-bold">Notifications</p>
        </div>
        {[
          { icon: '💧', label: 'Low Soil Moisture', sub: 'Monstera needs water', time: '2m ago', color: 'border-blue-500/40 bg-blue-500/10' },
          { icon: '🌡️', label: 'Temperature Alert', sub: 'Fern above 28°C', time: '1h ago', color: 'border-orange-500/40 bg-orange-500/10' },
          { icon: '✅', label: 'All Good', sub: 'Cactus readings normal', time: '3h ago', color: 'border-green-500/40 bg-green-500/10' },
        ].map((n, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.15 }}
            className={`rounded-xl p-3 border ${n.color} flex gap-3 items-start`}
          >
            <span className="text-lg">{n.icon}</span>
            <div className="flex-1">
              <p className="text-white text-xs font-bold">{n.label}</p>
              <p className="text-white/50 text-xs">{n.sub}</p>
            </div>
            <p className="text-white/30 text-xs">{n.time}</p>
          </motion.div>
        ))}
      </div>
    ),
  },
  {
    title: 'Charts',
    bg: 'from-[#000d1a] to-[#001a2e]',
    content: (
      <div className="p-4 space-y-3">
        <div className="flex items-center gap-2 mb-2">
          <BarChart3 className="w-4 h-4 text-blue-400" />
          <p className="text-white font-bold">7-Day History</p>
        </div>
        <div className="bg-white/5 rounded-2xl p-3">
          <p className="text-blue-400 text-xs font-semibold mb-3">Soil Moisture %</p>
          <div className="flex items-end gap-1.5 h-20">
            {[62, 45, 70, 58, 80, 65, 72].map((v, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                whileInView={{ height: `${v}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.08 }}
                className="flex-1 rounded-t-lg bg-gradient-to-t from-blue-600 to-blue-400"
              />
            ))}
          </div>
          <div className="flex justify-between text-white/30 text-[9px] mt-1">
            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => <span key={i}>{d}</span>)}
          </div>
        </div>
        <div className="flex gap-2">
          {[
            { label: 'Avg', val: '64%', color: 'text-blue-400' },
            { label: 'Max', val: '80%', color: 'text-green-400' },
            { label: 'Min', val: '45%', color: 'text-orange-400' },
          ].map((s, i) => (
            <div key={i} className="flex-1 bg-white/5 rounded-xl p-2 text-center">
              <p className={`font-bold text-sm ${s.color}`}>{s.val}</p>
              <p className="text-white/40 text-xs">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

export function AppSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section ref={sectionRef} id="app" className="py-32 bg-white relative overflow-hidden">
      {/* Subtle top border */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Background blobs */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full opacity-[0.04] blur-3xl" style={{ background: '#05AA53' }} />
        <div className="absolute bottom-20 left-0 w-[400px] h-[400px] rounded-full opacity-[0.04] blur-3xl" style={{ background: '#027a3c' }} />
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
            Stay organized, connected, and in control with one powerful mobile app designed to simplify your plant care.
          </p>

          {/* 93% stat */}
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

        {/* Main content: phone mockups + features */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* Phone mockup screens */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-5/12 flex items-end justify-center gap-4 relative"
          >
            {/* Glow */}
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 80%, rgba(5,170,83,0.08) 0%, transparent 70%)' }} />

            {screenSlides.map((screen, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 + idx * 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                animate={{ y: [0, idx % 2 === 0 ? -10 : 10, 0] }}
                // @ts-ignore
                transition2={{ duration: 4 + idx, repeat: Infinity, ease: 'easeInOut', delay: idx * 0.8 }}
                style={{
                  width: idx === 1 ? 180 : 155,
                  marginBottom: idx === 1 ? 0 : 24,
                  zIndex: idx === 1 ? 10 : 5,
                }}
              >
                {/* Phone shell */}
                <div
                  className="rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white"
                  style={{
                    boxShadow: `0 ${20 + idx * 8}px ${50 + idx * 10}px rgba(0,0,0,0.25), 0 0 0 1px rgba(0,0,0,0.05)`,
                  }}
                >
                  {/* Status bar */}
                  <div className={`bg-gradient-to-br ${screen.bg} px-3 py-1.5 flex items-center justify-between`}>
                    <span className="text-white/60 text-[9px] font-medium">9:41</span>
                    <div className="w-12 h-2 bg-black rounded-full" />
                    <div className="flex gap-1">
                      {[...Array(3)].map((_, i) => <div key={i} className="w-1 h-1 rounded-full bg-white/40" />)}
                    </div>
                  </div>
                  {/* Screen title bar */}
                  <div className={`bg-gradient-to-br ${screen.bg} px-4 py-2 border-b border-white/5`}>
                    <p className="text-white font-bold text-xs">{screen.title}</p>
                  </div>
                  {/* Screen content */}
                  <div className={`bg-gradient-to-br ${screen.bg}`}>
                    {screen.content}
                  </div>
                  {/* Home indicator */}
                  <div className={`bg-gradient-to-br ${screen.bg} flex justify-center py-2`}>
                    <div className="w-16 h-1 bg-white/20 rounded-full" />
                  </div>
                </div>
                {/* Screen label */}
                <p className="text-center text-xs text-muted-foreground mt-2 font-medium">{screen.title}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Features grid */}
          <div className="w-full lg:w-7/12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className={`p-5 rounded-2xl bg-gradient-to-br ${feature.bg} border border-transparent hover:border-gray-100 transition-all duration-300 group cursor-default`}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-sm"
                    style={{ background: feature.color + '18' }}
                  >
                    <feature.icon className="w-6 h-6" style={{ color: feature.color }} />
                  </div>
                  <h4 className="font-bold text-foreground mb-1.5">{feature.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* App store buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <button className="flex items-center gap-3 bg-foreground text-background px-6 py-3 rounded-xl hover:bg-foreground/90 hover:shadow-lg transition-all hover:-translate-y-0.5">
                <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.04 2.26-.74 3.58-.8 2.22-.05 3.8.97 4.75 2.55-3.86 2.06-3.13 6.96.65 8.44-.76 1.4-1.63 2.82-3.06 4.15l-1 1.83M12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] leading-tight opacity-80">Download on the</div>
                  <div className="text-sm font-bold leading-tight">App Store</div>
                </div>
              </button>
              <button className="flex items-center gap-3 bg-foreground text-background px-6 py-3 rounded-xl hover:bg-foreground/90 hover:shadow-lg transition-all hover:-translate-y-0.5">
                <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                  <path d="M3.1 3.2v17.6c0 .3.2.6.5.6.1 0 .2 0 .3-.1l8.5-8.4-8.5-8.3c-.1-.1-.3-.1-.5-.1-.2 0-.3.3-.3.7z"/><path d="M12.9 12l3.4 3.3 4.2-2.4c.5-.3.5-.8 0-1.1l-4.2-2.4L12.9 12z"/><path d="M16 15.6L3.9 22.5c-.2.1-.3.1-.4 0l12.5-12.2z"/><path d="M3.5 1.5c.1-.1.2-.1.4 0L16 8.4 12.4 12 3.5 3.3c0-.1-.1-.2-.1-.4s.1-.3.1-.4c0-.1.2-.1.3-.1z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] leading-tight opacity-80">GET IT ON</div>
                  <div className="text-sm font-bold leading-tight">Google Play</div>
                </div>
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
