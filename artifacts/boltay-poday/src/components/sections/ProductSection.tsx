import { motion, useScroll, useTransform } from 'framer-motion';
import { Thermometer, Droplets, Activity, Play, Zap } from 'lucide-react';
import { useState, useRef } from 'react';

const features = [
  {
    icon: Thermometer,
    title: "Temperature Sensor",
    description: "Monitors ambient temperature 24/7 to keep plants in their ideal climate range.",
    color: "#f97316",
    bg: "from-orange-50 to-orange-100/50",
  },
  {
    icon: Activity,
    title: "Humidity Sensor",
    description: "Tracks air moisture levels continuously for optimal plant growth conditions.",
    color: "#3b82f6",
    bg: "from-blue-50 to-blue-100/50",
  },
  {
    icon: Droplets,
    title: "Soil Moisture Sensor",
    description: "Detects soil moisture in real time — alerts you before your plants get thirsty.",
    color: "#05AA53",
    bg: "from-green-50 to-green-100/50",
  }
];

export function ProductSection() {
  const [videoOpen, setVideoOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const glowOpacity = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [0, 1, 0]);

  return (
    <section id="product" ref={sectionRef} className="py-32 bg-white relative overflow-hidden">
      {/* Subtle background gradient blob */}
      <motion.div
        style={{ opacity: glowOpacity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] pointer-events-none"
      >
        <div className="w-full h-full rounded-full"
          style={{ background: 'radial-gradient(ellipse, rgba(5,170,83,0.06) 0%, transparent 70%)' }}
        />
      </motion.div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
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
            <Zap className="w-3.5 h-3.5" />
            IoT Hardware
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-5 tracking-tight">
            Meet the Boltay Poday Device
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our IoT hardware prototype — built by hand, powered by passion — monitoring temperature, humidity, 
            and soil moisture in real time, paired with the <span className="text-primary font-semibold">Digital Maali</span> mobile app.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* Device image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, type: 'spring', stiffness: 60 }}
            className="w-full lg:w-1/2"
          >
            <motion.div style={{ y: imageY }} className="relative group">
              {/* Glow behind card */}
              <div
                className="absolute -inset-4 rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
                style={{ background: 'radial-gradient(ellipse, rgba(5,170,83,0.2) 0%, transparent 70%)' }}
              />

              <div
                className="relative rounded-[2.5rem] overflow-hidden cursor-pointer"
                style={{
                  background: 'linear-gradient(145deg, #f0fdf4 0%, #dcfce7 50%, #bbf7d0 100%)',
                  boxShadow: '0 40px 80px rgba(5,170,83,0.15), 0 0 0 1px rgba(5,170,83,0.1)',
                }}
                onClick={() => setVideoOpen(true)}
              >
                {/* Device image — full clear dimensions, no cropping */}
                <div className="relative p-8 flex items-center justify-center" style={{ minHeight: 440 }}>
                  <motion.img
                    src="/device.png"
                    alt="Boltay Poday IoT Smart Plant Solution Device"
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    whileHover={{ scale: 1.04 }}
                    style={{
                      width: '100%',
                      maxWidth: 380,
                      height: 'auto',
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 24px 48px rgba(0,0,0,0.20)) drop-shadow(0 4px 16px rgba(5,170,83,0.25))',
                      display: 'block',
                      margin: '0 auto',
                    }}
                  />

                  {/* Corner badge */}
                  <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm text-primary text-xs font-bold px-3 py-1.5 rounded-full shadow-md border border-primary/10">
                    IoT Based Smart Plant Solution
                  </div>

                  {/* Sensor live indicators */}
                  <div className="absolute top-5 right-5 flex flex-col gap-2">
                    {[
                      { dot: 'bg-orange-400', label: 'TEMP' },
                      { dot: 'bg-blue-400', label: 'HUM' },
                      { dot: 'bg-green-500', label: 'SOIL' },
                    ].map((s, i) => (
                      <motion.div
                        key={i}
                        animate={{ opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.5 }}
                        className="flex items-center gap-1.5 bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1 shadow-sm"
                      >
                        <div className={`w-2 h-2 rounded-full ${s.dot} shadow-sm`} />
                        <span className="text-[10px] font-bold text-gray-600 tracking-wider">{s.label}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Play video overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/15 transition-colors duration-300">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-3"
                  >
                    <div className="w-20 h-20 rounded-full bg-white shadow-2xl flex items-center justify-center">
                      <Play className="w-8 h-8 text-primary fill-primary ml-1" />
                    </div>
                    <span className="text-white font-bold text-sm tracking-wide bg-black/40 backdrop-blur-sm px-4 py-1.5 rounded-full">Watch Our Prototype</span>
                  </motion.div>
                </div>
              </div>

              {/* Click to watch hint below image */}
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mt-4 text-center"
              >
                <button
                  onClick={() => setVideoOpen(true)}
                  className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:underline"
                >
                  <Play className="w-4 h-4 fill-primary" />
                  Click to watch prototype video
                </button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Features */}
          <div className="w-full lg:w-1/2 space-y-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ x: 6 }}
                className={`flex gap-5 p-6 rounded-2xl bg-gradient-to-r ${feature.bg} border border-transparent hover:border-gray-100 transition-all duration-300 group`}
              >
                <div
                  className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm"
                  style={{ background: feature.color + '18' }}
                >
                  <feature.icon className="w-7 h-7" style={{ color: feature.color }} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1.5">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}

            {/* 93% satisfaction + CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="pt-6 border-t border-gray-100"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="flex-1 h-2 rounded-full bg-gray-100 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '93%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
                    className="h-full rounded-full bg-gradient-to-r from-primary to-green-400"
                  />
                </div>
                <span className="text-2xl font-bold text-primary whitespace-nowrap">93%</span>
              </div>
              <p className="text-sm text-muted-foreground mb-5 font-medium">
                User satisfaction with the Digital Maali mobile app — real-time alerts, charts &amp; smart watering reminders.
              </p>
              <button
                onClick={() => setVideoOpen(true)}
                className="inline-flex items-center gap-3 bg-primary text-white px-7 py-3.5 rounded-full font-bold hover:bg-primary/90 hover:shadow-[0_8px_30px_rgba(5,170,83,0.4)] transition-all duration-300 hover:-translate-y-0.5"
              >
                <Play className="w-5 h-5 fill-white" />
                Watch Our Prototype Video
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Video modal */}
      {videoOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setVideoOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, type: 'spring', stiffness: 120 }}
            className="relative w-full max-w-4xl"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute -top-12 right-0 text-white/70 hover:text-white text-sm font-medium flex items-center gap-2 transition-colors"
            >
              <span>Close</span>
              <span className="text-xl">×</span>
            </button>
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-black">
              <video
                src="/prototype-video.mp4"
                controls
                autoPlay
                playsInline
                className="w-full"
                style={{ maxHeight: '75vh' }}
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="text-white/50 text-xs text-center mt-3">Boltay Poday — IoT Smart Plant Solution Prototype</p>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
