import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Lightbulb, Cpu, Trophy, Rocket, Sprout } from 'lucide-react';
import oricImg from '@assets/oric_1786723656922.jpg';
import firstTestImg from '@assets/WhatsApp_Image_2025-01-31_at_16.21.58_b0ed7c7a_1786723779057.jpg';
import pintechImg from '@assets/WhatsApp_Image_2025-04-28_at_18.14.55_0f619d4a_1786723607847.jpg';
import innovistaImg from '@assets/innovista_1786723757727.jpg';
import certificatesImg from '@assets/WhatsApp_Image_2025-03-02_at_16.03.48_09b87c34_1786723639288.jpg';

const chapters = [
  {
    icon: Lightbulb,
    year: "September 2024",
    title: "The Spark at LCWU",
    content: "It all started at Lahore College for Women University. A team of passionate students asked a simple question: why do plants die when no one is watching? Dr. Muhammad Taskeen Raza gathered a small group of co-founders, and a semester project was born — one that would soon grow into much more.",
    image: oricImg,
    imageAlt: "Early Boltay Poday booth at ORIC LCWU expo"
  },
  {
    icon: Cpu,
    year: "January 2025",
    title: "First Spark of Life",
    content: "After weeks of prototyping, soldering, and debugging — our sensor device read its first real data. We connected it to a third-party mobile app just to see the numbers light up. Temperature, humidity, soil moisture — live. That moment changed everything. We knew we had to build our own app next.",
    image: firstTestImg,
    imageAlt: "First time testing the Boltay Poday device"
  },
  {
    icon: Rocket,
    year: "March 2025",
    title: "Taking the Stage",
    content: "We stepped out of the lab and onto the stage. Pakistan Olympiad 2025 saw us crack the Top 5 out of 150 startups. We were shortlisted for PINTECH Expo 2025. Each pitch sharpened our story and our product.",
    image: certificatesImg,
    imageAlt: "Team at Startup 2025 with certificates",
    badges: [
      { name: "Pakistan Olympiad 2025", sub: "Top 5 / 150 Startups", highlight: true },
      { name: "PINTECH Expo 2025", sub: "Shortlisted", highlight: false },
    ]
  },
  {
    icon: Trophy,
    year: "2025",
    title: "Winning Recognition",
    content: "We didn't just participate — we won. Hult Prize Competition 1st Runner Up. Innovista Startups League (Campus Round) 1st Position. Zindagi Prize Competition 1st Position. Five events. Three top placements. Real judges. Real investors. Real validation.",
    image: innovistaImg,
    imageAlt: "Team receiving Innovista Startups League 1st Position award",
    badges: [
      { name: "Hult Prize", sub: "1st Runner Up", highlight: true },
      { name: "Innovista Campus Round", sub: "1st Position", highlight: true },
      { name: "Zindagi Prize", sub: "1st Position", highlight: true },
    ]
  },
  {
    icon: Trophy,
    year: "April 2025",
    title: "PINTECH Expo — Lahore",
    content: "Representing Lahore College for Women University at the PINTECH Expo 2025, we showcased our device and mobile app to technology leaders, investors, and the broader startup ecosystem. The response was overwhelming.",
    image: pintechImg,
    imageAlt: "Boltay Poday team at PINTECH Expo 2025"
  },
  {
    icon: Sprout,
    year: "Today",
    title: "Growing Forward",
    content: "Boltay Poday is growing. Our device is tested. Our app is live. Our team — Dr. Muhammad Taskeen Raza, Nadia Tahir, Rafia Shafique, Tabeer Zehra, and Durrey Zehra — is stronger and more focused than ever. The best chapters are still ahead.",
  }
];

export function StorySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="story" className="py-32 bg-[#1a1a1a] text-white relative" ref={containerRef}>
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-24"
        >
          <span className="text-primary font-semibold tracking-widest uppercase text-sm">Since September 2024</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mt-3 mb-6">Our Story</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">From a university lab to national startup competitions — this is how Boltay Poday grew.</p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-primary origin-top"
            />
          </div>

          <div className="space-y-24 md:space-y-32">
            {chapters.map((chapter, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${isEven ? 'md:flex-row-reverse' : ''}`}>

                  {/* Timeline Node */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                    className="absolute left-8 md:left-1/2 w-16 h-16 bg-[#1a1a1a] border-4 border-primary rounded-full flex items-center justify-center -translate-x-1/2 z-10 shadow-[0_0_20px_rgba(5,170,83,0.4)]"
                  >
                    <chapter.icon className="w-6 h-6 text-white" />
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className={`w-full md:w-1/2 pl-24 md:pl-0 ${isEven ? 'md:text-left' : 'md:text-right'}`}
                  >
                    <div className="text-primary font-bold text-xl mb-2">{chapter.year}</div>
                    <h3 className="text-3xl font-bold mb-4">{chapter.title}</h3>
                    <p className="text-gray-400 text-lg leading-relaxed mb-6">
                      {chapter.content}
                    </p>

                    {chapter.badges && (
                      <div className={`flex flex-wrap gap-3 mt-6 ${isEven ? 'justify-start' : 'justify-end'}`}>
                        {chapter.badges.map((badge, i) => (
                          <div
                            key={i}
                            className={`px-4 py-2 rounded-full text-sm font-semibold border ${
                              badge.highlight
                                ? 'bg-yellow-500/20 text-yellow-300 border-yellow-500/50'
                                : 'bg-white/5 text-gray-300 border-white/10'
                            }`}
                          >
                            <div>{badge.name}</div>
                            <div className={`text-xs mt-0.5 ${badge.highlight ? 'text-yellow-400' : 'text-gray-500'}`}>{badge.sub}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>

                  {/* Image */}
                  <div className="w-full md:w-1/2 pl-24 md:pl-0 mt-8 md:mt-0">
                    {chapter.image && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                        className="rounded-3xl overflow-hidden shadow-2xl relative aspect-video md:aspect-[4/3]"
                      >
                        <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10" />
                        <img
                          src={chapter.image}
                          alt={chapter.imageAlt}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                      </motion.div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
