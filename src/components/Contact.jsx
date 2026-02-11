import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // REMPLACE CES TROIS VALEURS PAR LES TIENNES
    const SERVICE_ID = "service_portfolio"; 
    const TEMPLATE_ID = "template_hl5lace";
    const PUBLIC_KEY = "rP3IOZuO3WB6NObyp";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          alert("Message envoyé avec succès !");
          form.current.reset(); // Vide le formulaire après l'envoi
      }, (error) => {
          console.log(error.text);
          alert("Une erreur est survenue, veuillez réessayer.");
      });
  };

  return (
    <section id="contact" className="py-20 px-10 md:px-20 bg-dark">
      <h2 className="text-5xl font-bold mb-12">
        Let's make something <br/>
        <span className="text-accent">awesome together!</span>
      </h2>

      <form ref={form} onSubmit={sendEmail} className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* L'attribut 'name' doit être EXACTEMENT le même que dans ton template EmailJS {{user_name}} */}
        <input 
          type="text" 
          name="user_name" 
          placeholder="Your Name" 
          required 
          className="bg-transparent border-b border-gray-700 py-4 focus:border-accent outline-none text-white" 
        />
        
        <input 
          type="text" 
          name="company_name" 
          placeholder="Company Name" 
          className="bg-transparent border-b border-gray-800 py-4 focus:border-accent outline-none text-white" 
        />
        
        <input 
          type="email" 
          name="user_email" 
          placeholder="Email Address" 
          required 
          className="bg-transparent border-b border-gray-700 py-4 focus:border-accent outline-none text-white" 
        />
        
        <input 
          type="text" 
          name="phone_number" 
          placeholder="Phone Number" 
          className="bg-transparent border-b border-gray-800 py-4 focus:border-accent outline-none text-white" 
        />
        
        <textarea 
          name="message" 
          placeholder="A few words" 
          required 
          className="md:col-span-2 bg-transparent border-b border-gray-700 py-8 focus:border-accent outline-none text-white h-32" 
        />
        
        <button 
          type="submit" 
          className="w-fit bg-accent/20 border border-accent text-accent px-10 py-4 rounded-full mt-8 hover:bg-accent hover:text-white transition cursor-pointer font-bold"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;