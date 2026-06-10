import React from 'react';
import { motion } from 'framer-motion';
import { Globe, BarChart2, BrainCircuit, Server, User, Mail, MapPin } from 'lucide-react';

// Skill Illustrations Components
const FrontendIllustration = ({ isHovered }) => (
  <div className="w-full h-44 bg-dark/50 rounded-2xl flex items-center justify-center overflow-hidden border border-white/5 relative">
    <div className="flex flex-col gap-2 w-3/4 font-mono text-xs text-gray-500">
      <motion.div 
        animate={{ x: isHovered ? 5 : 0 }} 
        className="text-purple-400"
      >
        &lt;section className="hero"&gt;
      </motion.div>
      <motion.div 
        animate={{ x: isHovered ? 10 : 0 }} 
        className="text-gray-400 pl-4"
      >
        &lt;h1&gt;Interactive UI&lt;/h1&gt;
      </motion.div>
      <motion.div 
        animate={{ x: isHovered ? 15 : 0 }} 
        className="text-accent pl-8"
      >
        &lt;motion.div animate=&#123;motion&#125; /&gt;
      </motion.div>
      <motion.div 
        animate={{ x: isHovered ? 10 : 0 }} 
        className="text-gray-400 pl-4"
      >
        &lt;p&gt;Built with React &lt;/p&gt;
      </motion.div>
      <motion.div 
        animate={{ x: isHovered ? 5 : 0 }} 
        className="text-purple-400"
      >
        &lt;/section&gt;
      </motion.div>
    </div>
    {/* Animated Floating Circle */}
    <motion.div 
      animate={{ 
        scale: isHovered ? [1, 1.2, 1] : 1,
        rotate: isHovered ? 360 : 0 
      }}
      transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
      className="absolute right-4 bottom-4 text-purple-500/20"
    >
      <Globe size={80} />
    </motion.div>
  </div>
);

const DataAnalysisIllustration = ({ isHovered }) => {
  const bars = [40, 75, 55, 90, 65];
  return (
    <div className="w-full h-44 bg-dark/50 rounded-2xl flex items-end justify-center gap-3 p-6 overflow-hidden border border-white/5 relative">
      {bars.map((height, i) => (
        <div key={i} className="flex flex-col items-center gap-2 z-10">
          <motion.div 
            initial={{ height: 20 }}
            animate={{ height: isHovered ? height : 30 }}
            transition={{ type: 'spring', stiffness: 100, damping: 10, delay: i * 0.05 }}
            className="w-6 bg-gradient-to-t from-purple-800 to-accent rounded-t-md shadow-[0_0_10px_rgba(168,85,247,0.3)]"
          />
          <span className="text-[10px] font-mono text-gray-500">Q{i+1}</span>
        </div>
      ))}
      <motion.div 
        animate={{ 
          opacity: isHovered ? [0.2, 0.4, 0.2] : 0.1,
          scale: isHovered ? 1.05 : 1
        }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute top-4 left-4 text-purple-500/10"
      >
        <BarChart2 size={80} />
      </motion.div>
    </div>
  );
};

const MachineLearningIllustration = ({ isHovered }) => (
  <div className="w-full h-44 bg-dark/50 rounded-2xl flex items-center justify-center overflow-hidden border border-white/5 relative">
    <div className="relative w-24 h-24 flex items-center justify-center">
      {/* Outer orbits */}
      <motion.div 
        animate={{ rotate: isHovered ? 360 : 0 }}
        transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
        className="absolute w-24 h-24 rounded-full border border-dashed border-purple-500/30"
      />
      <motion.div 
        animate={{ rotate: isHovered ? -360 : 0 }}
        transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
        className="absolute w-16 h-16 rounded-full border border-dashed border-purple-500/20"
      />
      
      {/* Central brain core */}
      <motion.div 
        animate={{ scale: isHovered ? [1, 1.1, 1] : 1 }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="text-accent z-10"
      >
        <BrainCircuit size={40} className="filter drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
      </motion.div>
    </div>

    {/* Small sparks */}
    {isHovered && [1, 2, 3].map((s) => (
      <motion.div
        key={s}
        className="absolute w-1.5 h-1.5 bg-purple-300 rounded-full"
        initial={{ x: 0, y: 0, opacity: 1 }}
        animate={{ 
          x: (Math.random() - 0.5) * 120, 
          y: (Math.random() - 0.5) * 120,
          opacity: 0
        }}
        transition={{ repeat: Infinity, duration: 1.5, delay: s * 0.3, ease: "easeOut" }}
      />
    ))}
  </div>
);

const BackendIllustration = ({ isHovered }) => {
  const leds = [1, 2, 3];
  return (
    <div className="w-full h-44 bg-dark/50 rounded-2xl flex flex-col justify-center gap-4 px-8 overflow-hidden border border-white/5 relative">
      {/* Server stack layers */}
      {[0, 1, 2].map((serverIndex) => (
        <div key={serverIndex} className="h-6 bg-card border border-white/5 rounded-md flex items-center justify-between px-4 z-10 shadow-md">
          <div className="flex items-center gap-2">
            <Server size={10} className="text-gray-500" />
            <div className="w-12 h-1.5 bg-gray-800 rounded-full overflow-hidden">
              <motion.div 
                animate={{ width: isHovered ? ['30%', '90%', '30%'] : '50%' }}
                transition={{ repeat: Infinity, duration: 3, delay: serverIndex * 0.5 }}
                className="h-full bg-accent" 
              />
            </div>
          </div>
          <div className="flex gap-1.5">
            {leds.map((led) => (
              <motion.div 
                key={led}
                animate={{ 
                  backgroundColor: isHovered 
                    ? (Math.random() > 0.4 ? '#a855f7' : '#161616') 
                    : '#4b5563' 
                }}
                transition={{ repeat: Infinity, duration: 0.5 + Math.random(), ease: "linear" }}
                className="w-1.5 h-1.5 rounded-full"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const About = () => {
  const [hoveredSkill, setHoveredSkill] = React.useState(null);

  const skills = [
    { 
      id: "fe",
      title: "Frontend Development", 
      tech: "HTML5, CSS3, React.js, TailwindCSS, Framer Motion", 
      illustration: (isHovered) => <FrontendIllustration isHovered={isHovered} /> 
    },
    { 
      id: "da",
      title: "Data Analysis & Visualisation", 
      tech: "Python, Pandas, SQL, Tableau, PowerBI", 
      illustration: (isHovered) => <DataAnalysisIllustration isHovered={isHovered} /> 
    },
    { 
      id: "ml",
      title: "Machine Learning & AI", 
      tech: "Scikit-Learn, TensorFlow, PyTorch, LangChain, LLMs", 
      illustration: (isHovered) => <MachineLearningIllustration isHovered={isHovered} /> 
    },
    { 
      id: "be",
      title: "Backend & Systems", 
      tech: "Node.js, Express.js, MongoDB, RESTful APIs, Docker", 
      illustration: (isHovered) => <BackendIllustration isHovered={isHovered} /> 
    }
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
      {/* Intro info Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
        
        {/* Left Column: Heading and key stats */}
        <motion.div 
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8 text-white">
            Turning complex problems into <span className="text-accent bg-gradient-to-r from-purple-400 to-accent bg-clip-text text-transparent">simple designs</span>
          </h2>
          
          {/* Key metrics cards */}
          <div className="flex gap-8 mb-10">
            <div className="bg-card/30 border border-white/5 rounded-2xl p-5 w-36 text-center shadow-md">
              <p className="text-4xl font-extrabold text-accent mb-1">+6</p>
              <p className="text-gray-400 text-xs uppercase tracking-wider">Projects Done</p>
            </div>
            <div className="bg-card/30 border border-white/5 rounded-2xl p-5 w-36 text-center shadow-md">
              <p className="text-4xl font-extrabold text-accent mb-1">+2</p>
              <p className="text-gray-400 text-xs uppercase tracking-wider">Years Experience</p>
            </div>
          </div>

          {/* Details list */}
          <div className="space-y-4 text-gray-300 max-w-md pt-2 border-t border-white/5">
            <div className="flex items-center gap-3">
              <User size={18} className="text-accent" />
              <span className="text-sm"><strong className="text-white">Name:</strong> Salma Aithaji</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-accent" />
              <span className="text-sm"><strong className="text-white">Email:</strong> aithajisalma@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={18} className="text-accent" />
              <span className="text-sm"><strong className="text-white">Location:</strong> Morocco</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Narrative biography */}
        <motion.div 
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5 flex items-center"
        >
          <div className="relative border-l-2 border-accent/20 pl-6 md:pl-10 py-2">
            <p className="text-gray-400 text-lg leading-relaxed mb-6 font-light">
              As an <strong className="text-white">AI and Data Engineer</strong>, I bridge the gap between complex statistical algorithms and highly intuitive interface layouts. 
            </p>
            <p className="text-gray-400 text-lg leading-relaxed font-light">
              I specialize in designing pipeline orchestrations, handling massive datasets, and tuning neural architectures to develop scalable, real-world solutions that provide clear business impact.
            </p>
            {/* Ambient side glow decoration */}
            <div className="absolute top-1/4 -left-[2px] h-1/2 w-[2px] bg-accent shadow-[0_0_15px_#a855f7]" />
          </div>
        </motion.div>
      </div>

      {/* Skills cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skill, index) => {
          const isHovered = hoveredSkill === skill.id;
          return (
            <motion.div 
              key={skill.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredSkill(skill.id)}
              onMouseLeave={() => setHoveredSkill(null)}
              className="bg-card/30 backdrop-blur-sm p-8 rounded-[40px] border border-white/5 hover:border-accent/30 hover:shadow-[0_10px_30px_rgba(168,85,247,0.1)] transition-all duration-300 group flex flex-col justify-between h-96"
            >
              <div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors duration-300">{skill.title}</h3>
                <p className="text-gray-400 text-sm mb-6 font-mono">{skill.tech}</p>
              </div>
              {skill.illustration(isHovered)}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default About;