const Portfolio = () => {
  const projects = [1, 2, 3, 4]; // Placeholders pour vos 4 projets
  return (
    <section id="portfolio" className="py-20 px-20">
      <h2 className="text-4xl font-bold mb-12">Check out my <span className="text-accent">featured projects</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map(p => (
          <div key={p} className="bg-card rounded-3xl p-6 border border-white/5 hover:border-accent/50 transition group">
            <div className="aspect-video bg-dark rounded-2xl mb-4 overflow-hidden flex items-center justify-center text-gray-600">
               {/* Ici vous mettrez vos balises <video src={...} autoPlay loop muted /> */}
               [Place for Video Demo]
            </div>
            <h3 className="text-xl font-semibold">Project Name {p}</h3>
            <p className="text-gray-400">Brief description of the technology used.</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Portfolio;