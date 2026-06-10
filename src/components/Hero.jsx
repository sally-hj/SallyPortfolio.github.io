import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Database, Code, Download } from 'lucide-react';
import avatar from '../assets/avatar.png';

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 md:px-20 pt-32 md:pt-20">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">
        
        {/* Left text column */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 text-center md:text-left order-2 md:order-1"
        >
          <motion.h2 variants={itemVariants} className="text-xl md:text-2xl text-gray-400 mb-2 font-medium">
            Hello! I am <span className="text-white font-semibold">Salma Aithaji</span>
          </motion.h2>

          <motion.h1 
            variants={itemVariants} 
            className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 tracking-tight leading-none bg-gradient-to-r from-white via-purple-300 to-accent bg-clip-text text-transparent"
          >
            IA & Data Engineer
          </motion.h1>

          <motion.p 
            variants={itemVariants} 
            className="text-gray-400 text-base md:text-lg max-w-lg mb-8 leading-relaxed"
          >
            I design and implement robust architectures, turning complex data pipelines and raw algorithms into intelligent, user-centric insights.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <a 
              href={`${import.meta.env.BASE_URL}MyCv.pdf`}
              download="AithajiSalma_CV.pdf"
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative border border-accent text-accent px-8 py-3.5 rounded-xl transition-all duration-300 overflow-hidden cursor-pointer w-full sm:w-auto text-center"
            >
              {/* Button slide overlay */}
              <span className="absolute inset-0 w-full h-full bg-accent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out -z-10" />
              <span className="flex items-center justify-center gap-2 font-semibold group-hover:text-white transition-colors duration-300">
                Download CV <Download size={18} />
              </span>
            </a>
          </motion.div>
        </motion.div>

        {/* Right image/avatar column with creative animations */}
        <div className="flex-1 flex justify-center items-center order-1 md:order-2">
          <div className="relative w-72 h-72 md:w-80 md:h-80 flex items-center justify-center">
            
            {/* Pulsing glow background */}
            <div className="absolute w-64 h-64 md:w-72 md:h-72 rounded-full bg-accent/10 blur-3xl animate-pulse" />
            
            {/* Rotating dashed ring */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="absolute w-72 h-72 md:w-80 md:h-80 rounded-full border-2 border-dashed border-accent/20"
            />

            {/* Orbiting Tech Badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0 }}
              className="absolute top-2 right-4 w-12 h-12 rounded-2xl bg-card border border-white/10 flex items-center justify-center shadow-lg text-accent hover:border-accent/40 transition-colors duration-300"
            >
              <Brain size={22} />
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-6 left-2 w-12 h-12 rounded-2xl bg-card border border-white/10 flex items-center justify-center shadow-lg text-accent hover:border-accent/40 transition-colors duration-300"
            >
              <Database size={22} />
            </motion.div>

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-16 -right-4 w-11 h-11 rounded-2xl bg-card border border-white/10 flex items-center justify-center shadow-lg text-accent hover:border-accent/40 transition-colors duration-300"
            >
              <Code size={20} />
            </motion.div>

            {/* Avatar Container with Floating Effect */}
            <motion.div 
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 1, 0, -1, 0]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 6, 
                ease: "easeInOut" 
              }}
              className="w-64 h-64 md:w-72 md:h-72 bg-accent/25 rounded-full flex items-end justify-center overflow-hidden border-4 border-accent/30 shadow-[0_0_50px_rgba(168,85,247,0.3)] hover:shadow-[0_0_70px_rgba(168,85,247,0.5)] transition-all duration-500"
            >
              <img 
                src={avatar} 
                alt="Avatar" 
                className="w-56 md:w-64 transform translate-y-9 object-contain pointer-events-none" 
              />
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;