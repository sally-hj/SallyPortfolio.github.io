import { Link } from 'react-scroll';

const Navbar = () => {
  const menuItems = ['Home', 'Portfolio', 'About', 'Resume', 'Contact'];
  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-10 py-6 bg-dark/80 backdrop-blur-md">
      <div className="text-2xl font-bold italic text-accent">S</div>
      <div className="flex gap-8 items-center">
        {menuItems.map(item => (
          <Link key={item} to={item.toLowerCase()} smooth={true} className="cursor-pointer hover:text-accent transition">
            {item === 'About' ? 'About Me' : item}
          </Link>
        ))}
          <Link to="contact" smooth={true} duration={500}>
             <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-accent hover:text-white transition cursor-pointer">
                Let's Talk
             </button>
          </Link>
      </div>
    </nav>
  );
};
export default Navbar;