import { motion } from 'framer-motion';

const Resume = () => {
  const tools = [
    { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'Tailwind', logo: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
  ];

  return (
    <section id="resume" className="py-20 px-20">
      <h2 className="text-4xl font-bold mb-4">Education and <span className="text-accent">Practical Experience</span></h2>
      <p className="text-gray-400 max-w-2xl mb-12 italic">
        "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice."
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Colonne Éducation */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 border-l-4 border-accent pl-4">My Education</h3>
          <div className="space-y-8">
            <div className="relative pl-6 border-l border-gray-800">
              <div className="absolute w-3 h-3 bg-accent rounded-full -left-[6.5px] top-2"></div>
              <h4 className="font-bold">Engineer Cycle</h4>
              <p className="text-accent text-sm">2024 - Present</p>
              <p className="text-gray-400 text-sm mt-1">Specializing in IA & Data Engineering.</p>
            </div>
            <div className="relative pl-6 border-l border-gray-800">
              <div className="absolute w-3 h-3 bg-gray-600 rounded-full -left-[6.5px] top-2"></div>
              <h4 className="font-bold">DEUG in Physics Sciences</h4>
              <p className="text-accent text-sm">2020 - 2023</p>
            </div>
            <div className="relative pl-6 border-l border-gray-800">
              <div className="absolute w-3 h-3 bg-gray-600 rounded-full -left-[6.5px] top-2"></div>
              <h4 className="font-bold">Baccalaureate</h4>
              <p className="text-accent text-sm">2020</p>
            </div>
          </div>
        </div>

        {/* Colonne Expérience */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 border-l-4 border-accent pl-4">Work Experience</h3>
          <div className="bg-card p-6 rounded-2xl border border-white/5">
            <h4 className="font-bold text-lg">Web Development Intern</h4>
            <p className="text-accent text-sm mb-3">2025</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              I created a website for a durable development center. Focus on optimizing user experience and implementing modern web features.
            </p>
          </div>
        </div>
      </div>

      {/* Section Tools (Les Logos) */}
      <div className="mt-24">
        <h3 className="text-center text-2xl font-bold mb-12">My favourite tools</h3>
        <div className="flex flex-wrap justify-center gap-10">
          {tools.map((tool) => (
            <motion.div 
              whileHover={{ y: -10 }}
              key={tool.name} 
              className="flex flex-col items-center gap-3"
            >
              <div className="w-20 h-20 bg-card rounded-2xl flex items-center justify-center border border-white/10 hover:border-accent/50 transition shadow-lg">
                {/* J'ai supprimé 'grayscale' et 'hover:grayscale-0' pour laisser les couleurs tout le temps */}
                <img src={tool.logo} alt={tool.name} className="w-10 h-10 object-contain" />
              </div>
              <span className="text-xs text-gray-500 uppercase tracking-widest">{tool.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;