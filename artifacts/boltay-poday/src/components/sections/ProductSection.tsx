import { motion } from 'framer-motion';
import { Thermometer, Droplets, Activity } from 'lucide-react';
import productImg from '@assets/generated_images/product.jpg';
import phoneImg from '@assets/generated_images/phone.jpg';

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
            A beautiful, unobtrusive piece of hardware that understands exactly what your plants need.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-auto lg:h-[600px]">
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10"></div>
              <img
                src={productImg}
                alt="Boltay Poday IoT Sensor Device"
                className="w-full h-full object-cover"
              />
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
              className="pt-8 border-t border-border flex items-center gap-6"
            >
              <div className="w-20 h-20 rounded-xl overflow-hidden shadow-md flex-shrink-0">
                <img src={phoneImg} alt="App mockup thumbnail" className="w-full h-full object-cover" />
              </div>
              <p className="font-medium text-foreground/80">
                Paired with our mobile app for instant alerts and historical data.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
