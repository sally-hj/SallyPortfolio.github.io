import { motion } from 'framer-motion';
import avatar from '../assets/avatar.png';

const Hero = () => (
  <section id="home" className="min-h-screen flex items-center px-20 pt-20">
    <div className="flex flex-col md:flex-row items-center gap-12">
      <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}>
        <div className="w-64 h-64 bg-accent/20 rounded-full flex items-end justify-center overflow-hidden border-4 border-accent/30 shadow-[0_0_50px_rgba(168,85,247,0.4)]">
          <img src={avatar} alt="Avatar" className="w-56 transform translate-y-9" />
        </div>
      </motion.div>
      <div>
        <h2 className="text-accent text-xl mb-2">Hello! I am</h2>
        <h1 className="text-6xl font-bold mb-4">IA & Data Engineer</h1>
        <p className="text-gray-400 max-w-md mb-8">
          I turn complex data into intelligent insights and build robust solutions for modern problems.
        </p>
        <a 
          href="/CVcv.pdf" 
          download="Haji_Saoumi_CV.pdf"
          target="_blank" 
          rel="noopener noreferrer"
          className="border-2 border-accent text-accent px-8 py-3 rounded-xl hover:bg-accent hover:text-white transition-all inline-block cursor-pointer"
          >
          Download CV
        </a>
      </div>
    </div>
  </section>
);
export default Hero;