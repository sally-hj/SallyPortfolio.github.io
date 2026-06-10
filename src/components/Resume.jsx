import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, GraduationCap, Briefcase, Award } from 'lucide-react';

const Resume = () => {
  const tools = [
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'PyTorch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Tailwind', logo: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section id="resume" className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
      {/* Title */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Education and <span className="text-accent bg-gradient-to-r from-purple-400 to-accent bg-clip-text text-transparent">Practical Experience</span>
        </h2>
        <p className="text-gray-400 max-w-2xl italic font-light">
          "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice."
        </p>
        <div className="h-[3px] w-20 bg-accent rounded-full mt-6" />
      </motion.div>

      {/* Main Resume Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Education Timeline */}
        <div>
          <div className="flex items-center gap-3 mb-10">
            <GraduationCap className="text-accent" size={28} />
            <h3 className="text-2xl font-bold text-white">My Education</h3>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative pl-8 space-y-12"
          >
            {/* Animated Scroll-drawn Vertical Line */}
            <motion.div 
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              className="absolute left-[7px] top-2 bottom-0 w-[2px] bg-gradient-to-b from-accent to-purple-950 origin-top"
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />

            {/* Edu Card 1 */}
            <motion.div variants={cardVariants} className="relative group">
              <div className="absolute w-4 h-4 bg-dark border-2 border-accent rounded-full -left-[32px] top-1.5 z-10 transition-all duration-300 group-hover:bg-accent group-hover:scale-125" />
              <div className="bg-card/25 backdrop-blur-sm p-6 rounded-2xl border border-white/5 hover:border-accent/20 transition-all duration-300">
                <span className="inline-flex items-center gap-1.5 text-xs text-accent font-semibold uppercase tracking-wider mb-2">
                  <Calendar size={12} /> 2024 - Present
                </span>
                <h4 className="text-lg font-bold text-white group-hover:text-accent transition-colors duration-300">Engineer Cycle</h4>
                <p className="text-sm text-gray-400 mt-1 font-medium">Specializing in IA & Data Engineering</p>
                <p className="text-xs text-gray-500 mt-3 leading-relaxed">
                  Focusing on cloud database architectures, deep learning classifiers, streaming event queues, and statistical methodologies.
                </p>
              </div>
            </motion.div>

            {/* Edu Card 2 */}
            <motion.div variants={cardVariants} className="relative group">
              <div className="absolute w-4 h-4 bg-dark border-2 border-gray-600 rounded-full -left-[32px] top-1.5 z-10 transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:scale-125" />
              <div className="bg-card/25 backdrop-blur-sm p-6 rounded-2xl border border-white/5 hover:border-accent/20 transition-all duration-300">
                <span className="inline-flex items-center gap-1.5 text-xs text-accent font-semibold uppercase tracking-wider mb-2">
                  <Calendar size={12} /> 2020 - 2023
                </span>
                <h4 className="text-lg font-bold text-white group-hover:text-accent transition-colors duration-300">DEUG in Physics Sciences</h4>
                <p className="text-sm text-gray-400 mt-1 font-medium">Faculty of Sciences</p>
                <p className="text-xs text-gray-500 mt-3 leading-relaxed">
                  Rigorous foundational studies in physics, thermodynamics, electromagnetism, and complex mathematics.
                </p>
              </div>
            </motion.div>

            {/* Edu Card 3 */}
            <motion.div variants={cardVariants} className="relative group">
              <div className="absolute w-4 h-4 bg-dark border-2 border-gray-600 rounded-full -left-[32px] top-1.5 z-10 transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:scale-125" />
              <div className="bg-card/25 backdrop-blur-sm p-6 rounded-2xl border border-white/5 hover:border-accent/20 transition-all duration-300">
                <span className="inline-flex items-center gap-1.5 text-xs text-accent font-semibold uppercase tracking-wider mb-2">
                  <Calendar size={12} /> 2020
                </span>
                <h4 className="text-lg font-bold text-white group-hover:text-accent transition-colors duration-300">Baccalaureate</h4>
                <p className="text-sm text-gray-400 mt-1 font-medium">Mathematical Sciences Option</p>
                <p className="text-xs text-gray-500 mt-3 leading-relaxed">
                  Specialized program focusing on advanced algebra, calculus, and mathematical principles.
                </p>
              </div>
            </motion.div>

          </motion.div>
        </div>

        {/* Experience Timeline */}
        <div>
          <div className="flex items-center gap-3 mb-10">
            <Briefcase className="text-accent" size={28} />
            <h3 className="text-2xl font-bold text-white">Work Experience</h3>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative pl-8 space-y-12"
          >
            {/* Animated Scroll-drawn Vertical Line */}
            <motion.div 
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              className="absolute left-[7px] top-2 bottom-0 w-[2px] bg-gradient-to-b from-accent to-purple-950 origin-top"
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />

            {/* Exp Card 1 */}
            <motion.div variants={cardVariants} className="relative group">
              <div className="absolute w-4 h-4 bg-dark border-2 border-accent rounded-full -left-[32px] top-1.5 z-10 transition-all duration-300 group-hover:bg-accent group-hover:scale-125" />
              <div className="bg-card/25 backdrop-blur-sm p-6 rounded-2xl border border-white/5 hover:border-accent/20 transition-all duration-300">
                <span className="inline-flex items-center gap-1.5 text-xs text-accent font-semibold uppercase tracking-wider mb-2">
                  <Calendar size={12} /> 2025 (Internship)
                </span>
                <h4 className="text-lg font-bold text-white group-hover:text-accent transition-colors duration-300">Web Development Intern</h4>
                <p className="text-sm text-gray-400 mt-1 font-medium">Durable Development Center</p>
                <p className="text-xs text-gray-500 mt-3 leading-relaxed">
                  Designed and implemented a modern web platform. Focused on frontend performance engineering, modular design systems, and database bindings to optimize end-user accessibility.
                </p>
              </div>
            </motion.div>

            {/* Future plans indicator card */}
            <motion.div variants={cardVariants} className="relative group">
              <div className="absolute w-4 h-4 bg-dark border-2 border-dashed border-gray-700 rounded-full -left-[32px] top-1.5 z-10" />
              <div className="bg-card/10 backdrop-blur-xs p-6 rounded-2xl border border-dashed border-white/5 flex items-center gap-4">
                <Award className="text-purple-400/40" size={32} />
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">Next Milestone</h4>
                  <p className="text-xs text-gray-500 mt-1">Seeking Graduation Internship / Graduation Project (PFE) in AI, Data Science or Data Engineering.</p>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>

      </div>

      {/* Tools Section */}
      <div className="mt-32">
        <h3 className="text-center text-3xl font-bold mb-16 text-white">
          My favourite <span className="text-accent bg-gradient-to-r from-purple-400 to-accent bg-clip-text text-transparent">tools & stack</span>
        </h3>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 justify-center">
          {tools.map((tool, index) => (
            <motion.div 
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              animate={{
                y: [0, Math.sin(index) * 4, 0]
              }}
              hover={{
                y: -12
              }}
              // Custom continuous bobbing float effect with staggered delays
              style={{
                animation: `float-slow-${index % 3} 4s ease-in-out infinite`
              }}
              className="flex flex-col items-center gap-3 cursor-pointer group"
            >
              {/* Tool badge card wrapper */}
              <motion.div 
                whileHover={{ 
                  y: -10, 
                  borderColor: 'rgba(168,85,247,0.4)',
                  boxShadow: '0 10px 25px rgba(168,85,247,0.15)',
                  backgroundColor: 'rgba(22,22,22,0.6)'
                }}
                className="w-20 h-20 bg-card/45 backdrop-blur-xs rounded-2xl flex items-center justify-center border border-white/5 hover:border-accent/40 transition-all duration-300 shadow-md"
              >
                <img 
                  src={tool.logo} 
                  alt={tool.name} 
                  className="w-10 h-10 object-contain filter group-hover:scale-110 transition-transform duration-300" 
                />
              </motion.div>
              <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest group-hover:text-accent transition-colors duration-300">
                {tool.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;