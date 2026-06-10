import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import InteractiveBackground from './components/InteractiveBackground';

function App() {
  return (
    <InteractiveBackground>
      <Navbar />
      <Hero />
      <Portfolio />
      <About />
      <Resume />
      <Contact />
    </InteractiveBackground>
  );
}
export default App;