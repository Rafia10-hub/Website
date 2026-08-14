import { motion } from 'framer-motion';

const steps = [
  {
    num: "01",
    title: "Plant the Device",
    description: "Insert the Boltay Poday sensor into your plant's soil. The sleek design blends right in with your greenery.",
  },
  {
    num: "02",
    title: "Connect the App",
    description: "Pair with our mobile app via Bluetooth in seconds. Select your plant species from our database.",
  },
  {
    num: "03",
    title: "Grow Confidently",
    description: "Receive real-time alerts and personalized care tips before your plant ever shows signs of stress.",
  }
];

export function HowItWorksSection() {
  return (
    <section className="py-32 bg-sidebar relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">How It Works</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative flex flex-col items-center text-center group"
            >
              <div className="text-[120px] font-black text-primary/20 leading-none mb-[-40px] select-none group-hover:text-primary/40 transition-colors duration-500">
                {step.num}
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-xl z-10 w-full transform group-hover:-translate-y-2 transition-transform duration-500">
                <h3 className="text-2xl font-bold text-foreground mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative background circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
