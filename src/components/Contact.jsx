const Contact = () => (
  <section id="contact" className="py-20 px-20 bg-dark">
    <h2 className="text-5xl font-bold mb-12">Let's make something <br/><span className="text-accent">awesome together!</span></h2>
    <form className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
      <input type="text" placeholder="Your Name" className="bg-transparent border-b border-gray-700 py-4 focus:border-accent outline-none" />
      <input type="text" placeholder="Company Name" className="bg-transparent border-b border-gray-700 py-4 focus:border-accent outline-none" />
      <input type="email" placeholder="Email Address" className="bg-transparent border-b border-gray-700 py-4 focus:border-accent outline-none" />
      <input type="text" placeholder="Phone Number" className="bg-transparent border-b border-gray-700 py-4 focus:border-accent outline-none" />
      <textarea placeholder="A few words" className="md:col-span-2 bg-transparent border-b border-gray-700 py-8 focus:border-accent outline-none" />
      <button className="w-fit bg-accent/20 border border-accent text-accent px-10 py-4 rounded-full mt-8 hover:bg-accent hover:text-white transition">
        Send Message
      </button>
    </form>
  </section>
);
export default Contact;