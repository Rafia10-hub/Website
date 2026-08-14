import { motion } from 'framer-motion';
import avatar1 from '@assets/generated_images/avatar1.jpg';
import avatar2 from '@assets/generated_images/avatar2.jpg';
import avatar3 from '@assets/generated_images/avatar3.jpg';
import avatar4 from '@assets/generated_images/avatar4.jpg';
import { Linkedin, Twitter } from 'lucide-react';

const team = [
  {
    name: "Team Member 1",
    role: "Co-Founder & Hardware Engineer",
    image: avatar1
  },
  {
    name: "Team Member 2",
    role: "Co-Founder & Software Developer",
    image: avatar2
  },
  {
    name: "Team Member 3",
    role: "IoT Engineer",
    image: avatar3
  },
  {
    name: "Team Member 4",
    role: "Mobile App Developer",
    image: avatar4
  }
];

export function TeamSection() {
  return (
    <section id="team" className="py-32 bg-white relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
            The Team Behind the Green
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A passionate group of engineers and builders from day one.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group"
            >
              <div className="relative mb-6 overflow-hidden rounded-3xl aspect-[4/5] bg-sidebar">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" 
                />
                
                {/* Overlay social links on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary hover:scale-110 transition-transform">
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary hover:scale-110 transition-transform">
                    <Twitter className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-primary font-medium">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
