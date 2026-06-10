import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Navbar = () => {
  const menuItems = ['Home', 'Portfolio', 'About', 'Resume', 'Contact'];
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex justify-between items-center ${
        scrolled 
          ? 'py-4 px-8 md:px-20 bg-dark/80 backdrop-blur-lg border-b border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.5)]' 
          : 'py-6 px-10 md:px-24 bg-transparent'
      }`}
    >
      {/* Brand logo with glow animation */}
      <motion.div 
        whileHover={{ scale: 1.1 }}
        className="text-2xl font-bold italic text-accent cursor-pointer flex items-center justify-center w-10 h-10 rounded-full border border-accent/20 bg-accent/5 hover:border-accent/80 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300"
      >
        S
      </motion.div>

      {/* Nav Menu */}
      <div className="flex gap-8 items-center">
        <div className="hidden md:flex gap-8 items-center">
          {menuItems.map(item => {
            const itemLower = item.toLowerCase();
            return (
              <div key={item} className="relative py-1">
                <Link
                  to={itemLower}
                  smooth={true}
                  spy={true}
                  duration={600}
                  offset={-90}
                  onSetActive={() => setActive(itemLower)}
                  className={`cursor-pointer text-sm font-medium tracking-wide uppercase transition-colors duration-300 hover:text-accent ${
                    active === itemLower ? 'text-accent' : 'text-gray-300'
                  }`}
                >
                  {item === 'About' ? 'About Me' : item}
                </Link>
                {active === itemLower && (
                  <motion.div
                    layoutId="activeUnderline"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-accent shadow-[0_0_8px_#a855f7]"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Let's Talk CTA button */}
        <Link to="contact" smooth={true} duration={600} offset={-90}>
          <motion.button 
            whileHover={{ 
              scale: 1.05, 
              boxShadow: '0 0 20px rgba(168,85,247,0.5)',
              backgroundColor: 'var(--color-accent)',
              color: '#ffffff'
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-6 py-2 rounded-full font-semibold border border-transparent hover:border-accent transition-all duration-300 cursor-pointer text-sm"
          >
            Let's Talk
          </motion.button>
        </Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;