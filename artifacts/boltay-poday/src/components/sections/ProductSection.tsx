import { motion } from 'framer-motion';
import { Thermometer, Droplets, Activity, Play } from 'lucide-react';
import { useState } from 'react';
import deviceImg from '@assets/Screenshot_2026-05-10_003206_1786723427109.jpg';

const features = [
  {
    icon: Thermometer,
    title: "Temperature Sensor",
    description: "Monitors ambient temperature 24/7 to keep plants in their ideal climate."
  },
  {
    icon: Activity,
    title: "Humidity Sensor",
    description: "Tracks air moisture levels for optimal plant growth conditions."
  },
  {
    icon: Droplets,
    title: "Soil Moisture Sensor",
    description: "Detects soil moisture in real time, alerts you before plants get thirsty."
  }
];

export function ProductSection() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section id="product" className="py-32 bg-white relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">Meet the Boltay Poday Device</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our IoT hardware prototype — built by hand, powered by passion — monitoring temperature, humidity, and soil moisture in real time.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Real Device Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-auto lg:h-[600px] group">
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10"></div>
              <img
                src={deviceImg}
                alt="Boltay Poday IoT Sensor Device"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Watch Video Overlay */}
              <button
                onClick={() => setVideoOpen(true)}
                className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <div className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-primary fill-primary ml-1" />
                </div>
                <div className="absolute bottom-6 left-0 right-0 text-center text-white font-semibold text-sm tracking-wide">
                  Watch Concept Video
                </div>
              </button>
            </div>
          </motion.div>

          <div className="w-full lg:w-1/2 space-y-12">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-8 border-t border-border"
            >
              <p className="font-medium text-foreground/80 mb-4">
                Paired with our mobile app — <span className="text-primary font-semibold">93% user satisfaction</span>. Get real-time alerts, charts, and smart watering reminders.
              </p>
              <button
                onClick={() => setVideoOpen(true)}
                className="inline-flex items-center gap-3 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
              >
                <Play className="w-5 h-5 fill-white" />
                Watch Our Concept Video
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setVideoOpen(false)}
        >
          <div className="relative w-full max-w-4xl rounded-2xl overflow-hidden" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors text-xl font-bold"
            >
              ×
            </button>
            <video
              src="/WhatsApp_Video_2026-08-14_at_9.13.28_PM_1786724068802.mp4"
              controls
              autoPlay
              className="w-full rounded-2xl"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
}
