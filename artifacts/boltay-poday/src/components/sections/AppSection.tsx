import { motion } from 'framer-motion';
import { Smartphone, Bell, History } from 'lucide-react';
import phoneImg from '@assets/generated_images/phone.jpg';

export function AppSection() {
  return (
    <section className="py-32 bg-sidebar relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <div className="w-full lg:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">Your plants in your pocket.</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Get real-time alerts, historical sensor data, and personalized watering reminders — all from the Boltay Poday app.
              </p>
            </motion.div>

            <div className="space-y-6">
              {[
                { icon: Bell, title: "Instant Alerts", desc: "Push notifications before your plant gets too hot, dry, or humid." },
                { icon: History, title: "Historical Data", desc: "View beautiful charts of your plant's environment over weeks and months." },
                { icon: Smartphone, title: "Seamless Pairing", desc: "Connect new sensors in seconds with our smart setup wizard." }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + (idx * 0.1) }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-lg">{item.title}</h4>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4 pt-8"
            >
              <button className="flex items-center gap-3 bg-foreground text-background px-6 py-3 rounded-xl hover:bg-foreground/90 transition-colors">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.04 2.26-.74 3.58-.8 2.22-.05 3.8.97 4.75 2.55-3.86 2.06-3.13 6.96.65 8.44-.76 1.4-1.63 2.82-3.06 4.15l-1 1.83M12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] leading-tight opacity-80">Download on the</div>
                  <div className="text-sm font-semibold leading-tight">App Store</div>
                </div>
              </button>
              
              <button className="flex items-center gap-3 bg-foreground text-background px-6 py-3 rounded-xl hover:bg-foreground/90 transition-colors">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                  <path d="M3.1 3.2v17.6c0 .3.2.6.5.6.1 0 .2 0 .3-.1l8.5-8.4-8.5-8.3c-.1-.1-.3-.1-.5-.1-.2 0-.3.3-.3.7z"/>
                  <path d="M12.9 12l3.4 3.3 4.2-2.4c.5-.3.5-.8 0-1.1l-4.2-2.4L12.9 12z"/>
                  <path d="M16 15.6L3.9 22.5c-.2.1-.3.1-.4 0l12.5-12.2z"/>
                  <path d="M3.5 1.5c.1-.1.2-.1.4 0L16 8.4 12.4 12 3.5 3.3c0-.1-.1-.2-.1-.4s.1-.3.1-.4c0-.1.2-.1.3-.1z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] leading-tight opacity-80">GET IT ON</div>
                  <div className="text-sm font-semibold leading-tight">Google Play</div>
                </div>
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring" }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full z-0"></div>
            <img 
              src={phoneImg} 
              alt="Boltay Poday App Interface" 
              className="relative z-10 w-full max-w-[400px] mx-auto drop-shadow-2xl rounded-[40px] border-[8px] border-white"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
