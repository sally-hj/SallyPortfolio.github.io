const About = () => {
  const skills = [
    { title: "Frontend Development", tech: "I use HTML, CSS, React, Tailwind...", img: "🌐" },
    { title: "Data Analysis", tech: "Python, Pandas, Tableau, SQL...", img: "📊" },
    { title: "Machine Learning", tech: "Scikit-Learn, TensorFlow, PyTorch...", img: "🤖" },
    { title: "Backend Development", tech: "Node.js, Express, MongoDB, API...", img: "⚙️" }
  ];

  return (
    <section id="about" className="py-20 px-10 md:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8 text-accent">
            Turning complex problems into simple designs
          </h2>
          <div className="flex gap-12">
            <div><p className="text-3xl font-bold">+6</p><p className="text-gray-400 text-sm">Projects Done</p></div>
            <div><p className="text-3xl font-bold">+2</p><p className="text-gray-400 text-sm">Years Experience</p></div>
          </div>
          <div className="mt-8 space-y-2 text-gray-300">
            <p><strong>Name:</strong> Ton Nom</p>
            <p><strong>Email:</strong> ton-email@example.com</p>
            <p><strong>Location:</strong> Maroc</p>
          </div>
        </div>
        <p className="text-gray-400 leading-relaxed">
          As an AI and Data Engineer, I bridge the gap between complex algorithms and user-friendly interfaces. 
          I love building products that matter.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="bg-card p-10 rounded-[40px] border border-white/5 hover:border-accent/30 transition-all group">
            <h3 className="text-2xl font-bold mb-2">{skill.title}</h3>
            <p className="text-gray-400 mb-6 text-sm">{skill.tech}</p>
            <div className="w-full h-48 bg-dark rounded-3xl flex items-center justify-center text-5xl grayscale group-hover:grayscale-0 transition">
              {skill.img}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default About;