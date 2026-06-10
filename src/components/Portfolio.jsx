import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Layers, Cpu, TrendingUp, Search } from 'lucide-react';

// 1. Neural Network Mockup Component
const NeuralNetMockup = ({ isHovered }) => {
  const nodes = {
    input: [40, 90, 140],
    hidden: [20, 60, 100, 140],
    output: [60, 120]
  };

  return (
    <svg className="w-full h-full bg-dark/60" viewBox="0 0 240 160">
      {/* Connection Lines */}
      {nodes.input.map(inY => 
        nodes.hidden.map((hidY, hIdx) => (
          <line
            key={`in-hid-${inY}-${hidY}`}
            x1={30} y1={inY}
            x2={120} y2={hidY}
            stroke={isHovered ? 'rgba(168, 85, 247, 0.25)' : 'rgba(255, 255, 255, 0.05)'}
            strokeWidth={1}
            className="transition-colors duration-300"
          />
        ))
      )}
      {nodes.hidden.map(hidY => 
        nodes.output.map((outY, oIdx) => (
          <line
            key={`hid-out-${hidY}-${outY}`}
            x1={120} y1={hidY}
            x2={210} y2={outY}
            stroke={isHovered ? 'rgba(168, 85, 247, 0.25)' : 'rgba(255, 255, 255, 0.05)'}
            strokeWidth={1}
            className="transition-colors duration-300"
          />
        ))
      )}

      {/* Travelling Data Pulses */}
      {isHovered && (
        <>
          {nodes.input.map((inY, i) => (
            <motion.circle
              key={`pulse-in-${i}`}
              r={2.5}
              fill="#a855f7"
              initial={{ x: 30, y: inY }}
              animate={{ 
                x: [30, 120],
                y: [inY, nodes.hidden[i % nodes.hidden.length]]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 1.2, 
                delay: i * 0.2,
                ease: "linear"
              }}
            />
          ))}
          {nodes.hidden.map((hidY, h) => (
            <motion.circle
              key={`pulse-out-${h}`}
              r={2.5}
              fill="#a855f7"
              initial={{ x: 120, y: hidY }}
              animate={{ 
                x: [120, 210],
                y: [hidY, nodes.output[h % nodes.output.length]]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 1.2, 
                delay: h * 0.2 + 0.6,
                ease: "linear"
              }}
            />
          ))}
        </>
      )}

      {/* Nodes drawing */}
      {nodes.input.map((y, idx) => (
        <circle 
          key={`in-${idx}`} 
          cx={30} cy={y} r={6} 
          fill={isHovered ? '#a855f7' : '#374151'} 
          className="transition-colors duration-300 shadow-sm"
        />
      ))}
      {nodes.hidden.map((y, idx) => (
        <circle 
          key={`hid-${idx}`} 
          cx={120} cy={y} r={6} 
          fill={isHovered ? '#c084fc' : '#4b5563'} 
          className="transition-colors duration-300"
        />
      ))}
      {nodes.output.map((y, idx) => (
        <circle 
          key={`out-${idx}`} 
          cx={210} cy={y} r={6} 
          fill={isHovered ? '#a855f7' : '#374151'} 
          className="transition-colors duration-300"
        />
      ))}
    </svg>
  );
};

// 2. Real-time Pipeline Mockup Component
const PipelineMockup = ({ isHovered }) => {
  return (
    <svg className="w-full h-full bg-dark/60" viewBox="0 0 240 160">
      {/* Grid Lines */}
      <path d="M10 20 L230 20 M10 80 L230 80 M10 140 L230 140" stroke="rgba(255, 255, 255, 0.03)" strokeWidth={1} />
      
      {/* Pipeline Pipe Path */}
      <path 
        d="M 25 80 L 215 80" 
        stroke="rgba(255,255,255,0.08)" 
        strokeWidth={6} 
        strokeLinecap="round"
      />
      <motion.path 
        d="M 25 80 L 215 80" 
        stroke="rgba(168, 85, 247, 0.2)" 
        strokeWidth={6} 
        strokeLinecap="round"
        strokeDasharray="10 15"
        animate={{ strokeDashoffset: isHovered ? -100 : -20 }}
        transition={{ repeat: Infinity, ease: "linear", duration: 2 }}
      />

      {/* Nodes / Processing Stages */}
      {/* Source */}
      <g transform="translate(30, 80)">
        <rect x={-15} y={-15} width={30} height={30} rx={6} fill="#1e1b4b" stroke="rgba(168,85,247,0.3)" strokeWidth={1} />
        <circle cx={0} cy={0} r={5} fill="#a855f7" className={isHovered ? "animate-ping" : ""} />
        <circle cx={0} cy={0} r={4} fill="#a855f7" />
      </g>

      {/* Kafka */}
      <g transform="translate(120, 80)">
        <rect x={-15} y={-15} width={30} height={30} rx={6} fill="#1e1b4b" stroke="rgba(168,85,247,0.3)" strokeWidth={1} />
        <motion.path 
          d="M -6 0 L 6 0 M 0 -6 L 0 6" 
          stroke="#c084fc" 
          strokeWidth={2}
          animate={{ rotate: isHovered ? 180 : 0 }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
      </g>

      {/* Database */}
      <g transform="translate(210, 80)">
        <rect x={-15} y={-15} width={30} height={30} rx={6} fill="#1e1b4b" stroke="rgba(168,85,247,0.3)" strokeWidth={1} />
        <rect x={-6} y={-8} width={12} height={4} rx={1} fill="#a855f7" />
        <rect x={-6} y={-2} width={12} height={4} rx={1} fill="#a855f7" />
        <rect x={-6} y={4} width={12} height={4} rx={1} fill="#a855f7" />
      </g>

      {/* Streaming Packets */}
      {isHovered && (
        <>
          <motion.circle r={3} fill="#e9d5ff" animate={{ x: [45, 105], y: 80 }} transition={{ repeat: Infinity, duration: 1.5, ease: "linear", delay: 0 }} />
          <motion.circle r={3} fill="#e9d5ff" animate={{ x: [45, 105], y: 80 }} transition={{ repeat: Infinity, duration: 1.5, ease: "linear", delay: 0.75 }} />
          <motion.circle r={3} fill="#e9d5ff" animate={{ x: [135, 195], y: 80 }} transition={{ repeat: Infinity, duration: 1.5, ease: "linear", delay: 0.3 }} />
          <motion.circle r={3} fill="#e9d5ff" animate={{ x: [135, 195], y: 80 }} transition={{ repeat: Infinity, duration: 1.5, ease: "linear", delay: 1.05 }} />
        </>
      )}
    </svg>
  );
};

// 3. Predictive Analytics Chart Mockup Component
const ChartMockup = ({ isHovered }) => {
  const chartPoints = "M 20 120 Q 60 110, 100 80 T 180 50 T 220 30";
  const confidenceArea = "M 20 130 Q 60 125, 100 95 T 180 75 T 220 60 L 220 10 T 180 30 T 100 65 Q 60 95, 20 110 Z";

  return (
    <svg className="w-full h-full bg-dark/60" viewBox="0 0 240 160">
      {/* Grid Lines */}
      <line x1={20} y1={130} x2={220} y2={130} stroke="rgba(255, 255, 255, 0.05)" />
      <line x1={20} y1={80} x2={220} y2={80} stroke="rgba(255, 255, 255, 0.02)" />
      <line x1={20} y1={30} x2={220} y2={30} stroke="rgba(255, 255, 255, 0.02)" />
      <line x1={70} y1={130} x2={70} y2={20} stroke="rgba(255, 255, 255, 0.02)" />
      <line x1={120} y1={130} x2={120} y2={20} stroke="rgba(255, 255, 255, 0.02)" />
      <line x1={170} y1={130} x2={170} y2={20} stroke="rgba(255, 255, 255, 0.02)" />

      {/* Confidence Interval Shadow */}
      <path 
        d={confidenceArea} 
        fill={isHovered ? "rgba(168, 85, 247, 0.05)" : "rgba(255, 255, 255, 0.01)"} 
        className="transition-colors duration-300"
      />

      {/* Main Trend Line */}
      <path 
        d={chartPoints} 
        fill="none" 
        stroke={isHovered ? "rgba(168, 85, 247, 0.4)" : "rgba(255, 255, 255, 0.1)"} 
        strokeWidth={2} 
        className="transition-colors duration-300"
      />

      {/* Animated drawing path */}
      {isHovered && (
        <motion.path 
          d={chartPoints} 
          fill="none" 
          stroke="#a855f7" 
          strokeWidth={2}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      )}

      {/* Glow dot trailing the line */}
      {isHovered && (
        <motion.circle 
          r={4} 
          fill="#a855f7" 
          className="shadow-lg shadow-purple-500/50"
          animate={{
            cx: [20, 60, 100, 180, 220],
            cy: [120, 110, 80, 50, 30]
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut"
          }}
        />
      )}
    </svg>
  );
};

// 4. Vector / Semantic Search Mockup Component
const VectorMockup = ({ isHovered }) => {
  const points = [
    { x: 40, y: 30 }, { x: 55, y: 45 }, { x: 30, y: 60 },
    { x: 190, y: 110 }, { x: 210, y: 120 }, { x: 180, y: 135 },
    { x: 130, y: 65 }, { x: 145, y: 50 }, { x: 155, y: 75 }, { x: 120, y: 85 }
  ];

  return (
    <svg className="w-full h-full bg-dark/60" viewBox="0 0 240 160">
      {/* Grid background */}
      <circle cx={120} cy={80} r={70} stroke="rgba(255,255,255,0.02)" fill="none" />
      <circle cx={120} cy={80} r={40} stroke="rgba(255,255,255,0.02)" fill="none" />
      <line x1={120} y1={10} x2={120} y2={150} stroke="rgba(255,255,255,0.02)" />
      <line x1={40} y1={80} x2={200} y2={80} stroke="rgba(255,255,255,0.02)" />

      {/* Scatter Points */}
      {points.map((p, idx) => (
        <circle 
          key={idx} 
          cx={p.x} cy={p.y} r={3} 
          fill={isHovered && idx >= 6 ? "#c084fc" : "#4b5563"} 
          className="transition-colors duration-300"
        />
      ))}

      {/* Connection Lines from Query */}
      {isHovered && points.slice(6, 10).map((p, idx) => (
        <motion.line
          key={`vec-${idx}`}
          x1={100} y1={100}
          x2={p.x} y2={p.y}
          stroke="rgba(168, 85, 247, 0.4)"
          strokeWidth={1}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
        />
      ))}

      {/* Query point */}
      <circle 
        cx={100} cy={100} r={5} 
        fill={isHovered ? "#a855f7" : "#ef4444"} 
        className="transition-colors duration-300" 
      />
      {isHovered && (
        <motion.circle 
          cx={100} cy={100} 
          r={15} 
          stroke="#a855f7" 
          strokeWidth={1} 
          fill="none"
          animate={{ scale: [1, 2.5], opacity: [0.8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeOut" }}
        />
      )}
    </svg>
  );
};

const Portfolio = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Neural Network Classifier",
      description: "Implemented a deep learning model to classify unstructured text data. Visualized training feedback loops and dynamic backpropagation metrics.",
      tech: ["PyTorch", "TensorFlow", "FastAPI", "React"],
      github: "https://github.com",
      demo: "https://github.com",
      icon: <Cpu size={20} />,
      mockup: (isHovered) => <NeuralNetMockup isHovered={isHovered} />
    },
    {
      id: 2,
      title: "Real-time Data Pipeline",
      description: "Architected a low-latency data processing pipeline handling over 10k messages/second. Synchronized distributed databases with Apache Kafka.",
      tech: ["Kafka", "Apache Spark", "Docker", "MongoDB"],
      github: "https://github.com",
      demo: "https://github.com",
      icon: <Layers size={20} />,
      mockup: (isHovered) => <PipelineMockup isHovered={isHovered} />
    },
    {
      id: 3,
      title: "Predictive Analytics Dashboard",
      description: "Created an interactive dashboard projecting customer churn. Integrated ML predictive regression models with automated cron forecasts.",
      tech: ["Python", "Pandas", "Scikit-Learn", "Tableau"],
      github: "https://github.com",
      demo: "https://github.com",
      icon: <TrendingUp size={20} />,
      mockup: (isHovered) => <ChartMockup isHovered={isHovered} />
    },
    {
      id: 4,
      title: "Intelligent Semantic Agent",
      description: "Designed a vector-search LLM agent utilizing Milvus to run context-aware Q&A on corporate policy databases. Highly optimized query parsing.",
      tech: ["LangChain", "OpenAI API", "Milvus", "Python"],
      github: "https://github.com",
      demo: "https://github.com",
      icon: <Search size={20} />,
      mockup: (isHovered) => <VectorMockup isHovered={isHovered} />
    }
  ];

  return (
    <section id="portfolio" className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
      {/* Title */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Check out my <span className="text-accent bg-gradient-to-r from-purple-400 to-accent bg-clip-text text-transparent">featured projects</span>
        </h2>
        <div className="h-[3px] w-20 bg-accent rounded-full" />
      </motion.div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => {
          const isHovered = hoveredProject === project.id;
          return (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="bg-card/40 backdrop-blur-sm rounded-3xl p-6 border border-white/5 hover:border-accent/30 hover:shadow-[0_15px_40px_rgba(168,85,247,0.15)] transition-all duration-300 flex flex-col group overflow-hidden"
            >
              {/* Interactive Mockup Preview */}
              <div className="aspect-video bg-dark rounded-2xl mb-6 overflow-hidden flex items-center justify-center relative border border-white/5">
                {project.mockup(isHovered)}
                
                {/* Overlay details when hovered */}
                <div className="absolute inset-0 bg-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                  <motion.a 
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-card border border-white/10 hover:border-accent rounded-full text-white hover:text-accent transition-colors"
                    title="View Source Code"
                  >
                    <Github size={22} />
                  </motion.a>
                  <motion.a 
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-card border border-white/10 hover:border-accent rounded-full text-white hover:text-accent transition-colors"
                    title="Live Demo"
                  >
                    <ExternalLink size={22} />
                  </motion.a>
                </div>
              </div>

              {/* Title & Tag */}
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold flex items-center gap-2.5 text-white group-hover:text-accent transition-colors duration-300">
                  {project.icon}
                  {project.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                {project.tech.map(t => (
                  <span 
                    key={t} 
                    className="text-[11px] font-semibold text-gray-400 bg-white/5 border border-white/5 px-2.5 py-1 rounded-md uppercase tracking-wider group-hover:border-accent/20 group-hover:text-purple-300 transition-all duration-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;