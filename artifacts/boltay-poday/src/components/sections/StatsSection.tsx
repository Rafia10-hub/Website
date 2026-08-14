import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function CountUp({ end, suffix = "", duration = 2000 }: { end: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    let animationFrame: number;

    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const progress = time - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function: easeOutQuart
      const easeOut = 1 - Math.pow(1 - percentage, 4);
      
      setCount(Math.floor(end * easeOut));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isInView]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

export function StatsSection() {
  const stats = [
    { label: "Plants Monitored", value: 500, suffix: "+" },
    { label: "Sensor Types", value: 3, suffix: "" },
    { label: "Events Pitched", value: 5, suffix: "+" },
    { label: "Prizes Won", value: 2, suffix: "" },
  ];

  return (
    <section className="py-24 bg-primary text-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center justify-center"
            >
              <div className="text-5xl md:text-7xl font-bold mb-4">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-lg md:text-xl font-medium text-white/80">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
