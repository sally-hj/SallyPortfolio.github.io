import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('loading');

    const SERVICE_ID = "service_portfolio"; 
    const TEMPLATE_ID = "template_hl5lace";
    const PUBLIC_KEY = "qUfPvcR0qzk_2RxO9";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
      publicKey: PUBLIC_KEY,
    })
      .then((result) => {
          console.log(result.text);
          setStatus('success');
          form.current.reset();
          // Reset status back to idle after a few seconds
          setTimeout(() => setStatus('idle'), 5000);
      }, (error) => {
          console.log(error.text);
          setStatus('error');
          setTimeout(() => setStatus('idle'), 5000);
      });
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-20 max-w-5xl mx-auto relative">
      
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 blur-3xl rounded-full pointer-events-none" />

      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center md:text-left"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Let's make something <br/>
          <span className="text-accent bg-gradient-to-r from-purple-400 to-accent bg-clip-text text-transparent">awesome together!</span>
        </h2>
        <div className="h-[3px] w-20 bg-accent rounded-full mt-6 mx-auto md:mx-0" />
      </motion.div>

      {/* Form Container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-card/20 backdrop-blur-sm p-8 md:p-12 rounded-[30px] border border-white/5 shadow-2xl relative overflow-hidden"
      >
        <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Name */}
          <div className="relative w-full">
            <input 
              type="text" 
              name="user_name" 
              placeholder="Your Name" 
              required 
              disabled={status === 'loading'}
              className="peer w-full bg-transparent border-b border-gray-800 py-4 focus:outline-none text-white placeholder-gray-600 focus:placeholder-gray-400 transition-colors"
            />
            <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-accent scale-x-0 origin-center transition-transform duration-300 peer-focus:scale-x-100" />
          </div>
          
          {/* Company */}
          <div className="relative w-full">
            <input 
              type="text" 
              name="company_name" 
              placeholder="Company Name" 
              disabled={status === 'loading'}
              className="peer w-full bg-transparent border-b border-gray-800 py-4 focus:outline-none text-white placeholder-gray-600 focus:placeholder-gray-400 transition-colors"
            />
            <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-accent scale-x-0 origin-center transition-transform duration-300 peer-focus:scale-x-100" />
          </div>
          
          {/* Email */}
          <div className="relative w-full">
            <input 
              type="email" 
              name="user_email" 
              placeholder="Email Address" 
              required 
              disabled={status === 'loading'}
              className="peer w-full bg-transparent border-b border-gray-800 py-4 focus:outline-none text-white placeholder-gray-600 focus:placeholder-gray-400 transition-colors"
            />
            <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-accent scale-x-0 origin-center transition-transform duration-300 peer-focus:scale-x-100" />
          </div>
          
          {/* Phone */}
          <div className="relative w-full">
            <input 
              type="text" 
              name="phone_number" 
              placeholder="Phone Number" 
              disabled={status === 'loading'}
              className="peer w-full bg-transparent border-b border-gray-800 py-4 focus:outline-none text-white placeholder-gray-600 focus:placeholder-gray-400 transition-colors"
            />
            <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-accent scale-x-0 origin-center transition-transform duration-300 peer-focus:scale-x-100" />
          </div>
          
          {/* Message */}
          <div className="relative w-full md:col-span-2">
            <textarea 
              name="message" 
              placeholder="A few words..." 
              required 
              disabled={status === 'loading'}
              className="peer w-full bg-transparent border-b border-gray-800 py-6 focus:outline-none text-white placeholder-gray-600 focus:placeholder-gray-400 h-32 resize-none transition-colors"
            />
            <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-accent scale-x-0 origin-center transition-transform duration-300 peer-focus:scale-x-100" />
          </div>
          
          {/* Button and Status Handling */}
          <div className="md:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-6 pt-6">
            <motion.button 
              type="submit" 
              disabled={status === 'loading'}
              whileHover={status === 'loading' ? {} : { scale: 1.03, boxShadow: '0 0 20px rgba(168,85,247,0.3)' }}
              whileTap={status === 'loading' ? {} : { scale: 0.97 }}
              className={`w-full sm:w-auto relative px-10 py-4 rounded-full font-bold transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 border ${
                status === 'loading'
                  ? 'bg-purple-950/20 border-purple-800 text-purple-400 cursor-not-allowed'
                  : 'bg-accent/10 border-accent text-accent hover:bg-accent hover:text-white'
              }`}
            >
              {status === 'loading' ? (
                <>
                  <div className="w-5 h-5 border-2 border-purple-400 border-t-transparent rounded-full animate-spin" />
                  Sending Message...
                </>
              ) : (
                <>
                  Send Message
                  <Send size={16} />
                </>
              )}
            </motion.button>

            {/* Notification messages */}
            <AnimatePresence mode="wait">
              {status === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex items-center gap-2 text-green-400 text-sm font-semibold"
                >
                  <CheckCircle2 size={18} />
                  Message sent successfully!
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex items-center gap-2 text-red-400 text-sm font-semibold"
                >
                  <AlertCircle size={18} />
                  An error occurred. Please try again.
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </form>
      </motion.div>
    </section>
  );
};

export default Contact;