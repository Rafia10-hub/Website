import { motion } from 'framer-motion';

const team = [
  {
    name: "Dr. Muhammad Taskeen Raza",
    role: "Founder",
    initials: "TR",
    color: "from-emerald-600 to-green-400",
    shadowColor: "rgba(5,170,83,0.3)",
    bio: "Visionary behind Boltay Poday — bridging academia and entrepreneurship to solve real-world plant care challenges."
  },
  {
    name: "Nadia Tahir",
    role: "Co-Founder & COO",
    initials: "NT",
    color: "from-teal-600 to-emerald-400",
    shadowColor: "rgba(20,184,166,0.3)",
    bio: "Drives operations and strategy, ensuring every milestone is executed with precision and purpose."
  },
  {
    name: "Rafia Shafique",
    role: "Co-Founder & CTO",
    initials: "RS",
    color: "from-green-700 to-lime-500",
    shadowColor: "rgba(101,163,13,0.3)",
    bio: "The technical brain of Boltay Poday — architecting the IoT hardware and sensor firmware from the ground up."
  },
  {
    name: "Tabeer Zehra",
    role: "Co-Founder & CMO",
    initials: "TZ",
    color: "from-emerald-500 to-cyan-400",
    shadowColor: "rgba(6,182,212,0.3)",
    bio: "Crafts the Boltay Poday brand story and brings it to life across events, social media, and pitch stages."
  },
  {
    name: "Durrey Zehra",
    role: "Co-Founder & CFO",
    initials: "DZ",
    color: "from-green-600 to-teal-400",
    shadowColor: "rgba(20,184,166,0.25)",
    bio: "Manages the financial roadmap and investment strategy, turning passion into sustainable growth."
  }
];

export function TeamSection() {
  return (
    <section id="team" className="py-32 bg-[#f9f9f7] relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5 blur-3xl" style={{ background: '#05AA53' }} />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-5 blur-3xl" style={{ background: '#027a3c' }} />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-block text-primary font-semibold tracking-widest uppercase text-sm bg-primary/8 border border-primary/15 px-4 py-1.5 rounded-full mb-4"
          >
            The People
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4 mt-3">
            The Team Behind the Green
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Five passionate co-founders who turned a semester project into a national award-winning startup.
          </p>
        </motion.div>

        {/* Founder highlight */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex justify-center mb-12"
        >
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="flex flex-col items-center text-center bg-white rounded-3xl p-10 shadow-lg max-w-sm w-full border border-border relative overflow-hidden group"
          >
            {/* Glow on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: `radial-gradient(ellipse at 50% 0%, ${team[0].shadowColor} 0%, transparent 60%)` }} />

            <motion.div
              animate={{ boxShadow: ['0 0 0 0 rgba(5,170,83,0)', '0 0 0 12px rgba(5,170,83,0.15)', '0 0 0 0 rgba(5,170,83,0)'] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className={`w-28 h-28 rounded-full bg-gradient-to-br ${team[0].color} flex items-center justify-center text-white font-bold text-4xl mb-6 shadow-xl`}
            >
              {team[0].initials}
            </motion.div>
            <h3 className="text-2xl font-bold text-foreground mb-1">{team[0].name}</h3>
            <p className="text-primary font-bold text-base mb-3">{team[0].role}</p>
            <div className="w-12 h-0.5 bg-primary/30 rounded-full mb-3" />
            <p className="text-muted-foreground text-sm leading-relaxed">{team[0].bio}</p>
          </motion.div>
        </motion.div>

        {/* Co-Founders grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.slice(1).map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="group flex flex-col items-center text-center bg-white rounded-3xl p-8 shadow-sm border border-border hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: `radial-gradient(ellipse at 50% 0%, ${member.shadowColor} 0%, transparent 60%)` }} />
              <motion.div
                whileHover={{ scale: 1.15, rotate: 5 }}
                className={`w-20 h-20 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-white font-bold text-2xl mb-5 shadow-md`}
              >
                {member.initials}
              </motion.div>
              <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
              <p className="text-primary font-semibold text-sm mb-3">{member.role}</p>
              <div className="w-8 h-0.5 bg-primary/20 rounded-full mb-3" />
              <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mt-14"
        >
          <div className="flex items-center gap-3 text-muted-foreground text-sm font-medium">
            <div className="w-8 h-px bg-border" />
            Building smarter plant care — from Lahore, Pakistan 🌿
            <div className="w-8 h-px bg-border" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
