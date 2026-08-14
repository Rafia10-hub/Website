import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Lightbulb, Rocket, Wrench, Trophy, Sprout } from 'lucide-react';
import labImg from '@assets/generated_images/lab.jpg';
import hardwareImg from '@assets/generated_images/hardware.jpg';
import pitchImg from '@assets/generated_images/pitch.jpg';

const chapters = [
  {
    icon: Lightbulb,
    year: "2022",
    title: "The University Spark",
    content: "It all started as a semester project at university. A small team of passionate students asked a simple question: Why do plants die when no one is watching? That question became an obsession.",
    image: labImg
  },
  {
    icon: Rocket,
    year: "2023",
    title: "The Decision to Go Further",
    content: "What began as a project soon became something more. We saw real potential — urban farming, indoor gardens, busy plant lovers who needed a smarter solution. We decided to build a startup.",
  },
  {
    icon: Wrench,
    year: "2023",
    title: "Facing Every Challenge",
    content: "The journey was not easy. Hardware iterations, failed prototypes, sleepless nights debugging sensors. Limited resources, no roadmap — just passion and persistence. Each challenge made us stronger and our product better.",
    image: hardwareImg
  },
  {
    icon: Trophy,
    year: "2024",
    title: "Taking the Stage",
    content: "We took our story to the world. We pitched at multiple startup competitions and innovation events, defended our idea in front of investors and judges, and came back with recognition and prizes.",
    image: pitchImg,
    badges: [
      { name: "Innovation Summit", highlight: false },
      { name: "University Hackathon", highlight: true },
      { name: "Startup Weekend", highlight: true },
      { name: "Tech Expo", highlight: false }
    ]
  },
  {
    icon: Sprout,
    year: "Today",
    title: "Today and Tomorrow",
    content: "Boltay Poday is growing. Our device is being tested by plant enthusiasts across Pakistan. Our app is live. Our team is stronger than ever. The best chapters are ahead.",
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
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Our Story</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
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
                                ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50' 
                                : 'bg-white/5 text-gray-300 border-white/10'
                            }`}
                          >
                            {badge.name} {badge.highlight && ' — Prize Winner'}
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
                          alt={chapter.title} 
                          className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700" 
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
