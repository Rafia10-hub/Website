import { motion } from 'framer-motion';

const team = [
  {
    name: "Dr. Muhammad Taskeen Raza",
    role: "Founder",
    initials: "TR",
    color: "from-emerald-600 to-green-400",
    bio: "Visionary behind Boltay Poday — bridging academia and entrepreneurship to solve real-world plant care challenges."
  },
  {
    name: "Nadia Tahir",
    role: "Co-Founder & COO",
    initials: "NT",
    color: "from-teal-600 to-emerald-400",
    bio: "Drives operations and strategy, ensuring every milestone is executed with precision and purpose."
  },
  {
    name: "Rafia Shafique",
    role: "Co-Founder & CTO",
    initials: "RS",
    color: "from-green-700 to-lime-500",
    bio: "The technical brain of Boltay Poday — architecting the IoT hardware and sensor firmware from the ground up."
  },
  {
    name: "Tabeer Zehra",
    role: "Co-Founder & CMO",
    initials: "TZ",
    color: "from-emerald-500 to-cyan-400",
    bio: "Crafts the Boltay Poday brand story and brings it to life across events, social media, and pitch stages."
  },
  {
    name: "Durrey Zehra",
    role: "Co-Founder & CFO",
    initials: "DZ",
    color: "from-green-600 to-teal-400",
    bio: "Manages the financial roadmap and investment strategy, turning passion into sustainable growth."
  }
];

export function TeamSection() {
  return (
    <section id="team" className="py-32 bg-[#f9f9f7] relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-semibold tracking-widest uppercase text-sm">The People</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4 mt-3">
            The Team Behind the Green
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Five co-founders from Lahore College for Women University who turned a semester project into a national award-winning startup.
          </p>
        </motion.div>

        {/* Founder highlight */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-12"
        >
          <div className="flex flex-col items-center text-center bg-white rounded-3xl p-10 shadow-lg max-w-sm w-full border border-border hover:shadow-xl transition-shadow duration-300">
            <div className={`w-28 h-28 rounded-full bg-gradient-to-br ${team[0].color} flex items-center justify-center text-white font-bold text-4xl mb-6 shadow-lg`}>
              {team[0].initials}
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-1">{team[0].name}</h3>
            <p className="text-primary font-semibold text-base mb-3">{team[0].role}</p>
            <p className="text-muted-foreground text-sm leading-relaxed">{team[0].bio}</p>
          </div>
        </motion.div>

        {/* Co-Founders grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.slice(1).map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex flex-col items-center text-center bg-white rounded-3xl p-8 shadow-sm border border-border hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-white font-bold text-2xl mb-5 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                {member.initials}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
              <p className="text-primary font-semibold text-sm mb-3">{member.role}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>

        {/* LCWU Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mt-14"
        >
          <div className="flex items-center gap-3 bg-primary/10 text-primary px-6 py-3 rounded-full font-medium text-sm border border-primary/20">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
            Proudly from Lahore College for Women University (LCWU)
          </div>
        </motion.div>
      </div>
    </section>
  );
}
