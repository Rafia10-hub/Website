import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Navbar } from '@/components/sections/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { Footer } from '@/components/sections/Footer';
import { StatsSection } from '@/components/sections/StatsSection';
import { ArrowRight, Leaf, Cpu, Users, BookOpen } from 'lucide-react';
import deviceImg from '@assets/device_1786724774041.png';
import oricImg from '@assets/oric_1786723656922.jpg';

const pages = [
  {
    href: '/product',
    icon: Cpu,
    label: 'Product',
    title: 'Meet the Device',
    desc: 'IoT sensor + mobile app — temperature, humidity & soil moisture in real time.',
    color: '#05AA53',
    bg: 'from-green-50 to-emerald-50',
    border: 'border-green-200',
  },
  {
    href: '/story',
    icon: BookOpen,
    label: 'Our Story',
    title: 'From Lab to Stage',
    desc: 'How a semester project became a national award-winning startup.',
    color: '#1a1a1a',
    bg: 'from-gray-50 to-slate-50',
    border: 'border-gray-200',
  },
  {
    href: '/team',
    icon: Users,
    label: 'Team',
    title: 'The People',
    desc: 'Five passionate co-founders who turned an idea into a real product.',
    color: '#027a3c',
    bg: 'from-teal-50 to-green-50',
    border: 'border-teal-200',
  },
];

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main>
        <HeroSection />

        {/* Quick nav to pages */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-5" style={{ background: '#05AA53' }} />
            <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full opacity-5" style={{ background: '#05AA53' }} />
          </div>
          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-14"
            >
              <div className="inline-flex items-center gap-2 bg-primary/8 border border-primary/15 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                <Leaf className="w-3.5 h-3.5" />
                Explore Boltay Poday
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                Everything You Need to Know
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pages.map((page, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                >
                  <Link href={page.href}>
                    <div className={`group rounded-3xl p-8 border ${page.border} bg-gradient-to-br ${page.bg} hover:shadow-xl hover:-translate-y-2 transition-all duration-400 cursor-pointer h-full`}>
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm"
                        style={{ background: page.color + '18' }}
                      >
                        <page.icon className="w-7 h-7" style={{ color: page.color }} />
                      </div>
                      <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">{page.label}</div>
                      <h3 className="text-2xl font-bold text-foreground mb-3">{page.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-6 text-sm">{page.desc}</p>
                      <div className="flex items-center gap-2 font-semibold text-sm group-hover:gap-3 transition-all" style={{ color: page.color }}>
                        Explore <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Device preview teaser */}
        <section className="py-24 bg-[#0d1a10] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #05AA53 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          <div className="container mx-auto px-6 max-w-6xl relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, type: 'spring', stiffness: 70 }}
                className="w-full lg:w-5/12 flex justify-center"
              >
                <div className="relative">
                  <motion.div
                    animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute -inset-8 rounded-full blur-3xl"
                    style={{ background: 'radial-gradient(circle, #05AA5330 0%, transparent 70%)' }}
                  />
                  <img
                    src={deviceImg}
                    alt="Boltay Poday Device"
                    style={{
                      width: 300,
                      height: 300,
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 24px 48px rgba(5,170,83,0.35))',
                    }}
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="w-full lg:w-7/12"
              >
                <span className="text-primary font-semibold tracking-widest uppercase text-sm">Boltay Poday Device</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6 leading-tight">
                  IoT Plant Health,<br />
                  <span className="text-primary">Anywhere.</span>
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  Our handcrafted IoT device monitors temperature, humidity, and soil moisture 24/7 — 
                  sending real-time data straight to your smartphone. Paired with our <span className="text-primary font-semibold">Digital Maali</span> app, 
                  your plants have never had a smarter guardian.
                </p>
                <Link href="/product">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-bold hover:shadow-[0_8px_30px_rgba(5,170,83,0.5)] transition-all cursor-pointer"
                  >
                    Explore the Product <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        <StatsSection />

        {/* Story teaser */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="w-full lg:w-1/2"
              >
                <span className="text-primary font-semibold tracking-widest uppercase text-sm">Since September 2024</span>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6 tracking-tight">
                  A story worth telling.
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  From a dorm-room idea to Top 5 at Pakistan Olympiad, 1st at Innovista, Zindagi Prize, 
                  and Hult Prize Runner Up — this is the Boltay Poday journey.
                </p>
                <Link href="/story">
                  <motion.div
                    whileHover={{ x: 6 }}
                    className="inline-flex items-center gap-3 text-primary font-bold text-lg cursor-pointer hover:underline"
                  >
                    Read Our Story <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2 rounded-3xl overflow-hidden shadow-2xl aspect-video"
              >
                <img src={oricImg} alt="Boltay Poday journey" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
