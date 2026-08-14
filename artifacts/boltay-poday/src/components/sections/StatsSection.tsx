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
    { label: "Startups Competed Against", value: 150, suffix: "+" },
    { label: "Competitions Entered", value: 5, suffix: "" },
    { label: "Top Awards Won", value: 3, suffix: "" },
    { label: "User Satisfaction", value: 93, suffix: "%" },
  ];

  const awards = [
    { name: "Pakistan Olympiad 2025", result: "Top 5 Finalist", icon: "🏆" },
    { name: "Hult Prize", result: "1st Runner Up", icon: "🥈" },
    { name: "Innovista Campus Round 2025", result: "1st Position", icon: "🥇" },
    { name: "Zindagi Prize 2025", result: "1st Position", icon: "🥇" },
    { name: "PINTECH Expo 2025", result: "Shortlisted", icon: "⭐" },
  ];

  return (
    <section className="bg-[#1a1a1a] text-white">
      {/* Numbers bar */}
      <div className="py-20 bg-primary">
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
                <div className="text-base md:text-lg font-medium text-white/80">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Awards grid */}
      <div className="py-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-3xl md:text-4xl font-bold mb-14"
          >
            Recognition on the National Stage
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-primary/40 transition-all duration-300 group"
              >
                <div className="text-4xl mb-3">{award.icon}</div>
                <div className="text-lg font-bold mb-1">{award.name}</div>
                <div className="text-primary font-semibold text-sm">{award.result}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
