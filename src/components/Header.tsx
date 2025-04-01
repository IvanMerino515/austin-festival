
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`w-full flex justify-between items-start p-6 transition-all duration-300 fixed top-0 left-0 right-0 z-50 ${
        scrolled ? 'bg-festival-yellow bg-opacity-90 backdrop-blur-sm shadow-sm' : ''
      }`}
    >
      <div>
        <Link to="/" className="text-xl tracking-tighter font-mono">
          LEVITATION AUSTIN CITY FESTIVAL
        </Link>
      </div>
      
      <nav className="hidden md:flex space-x-6">
        <Link to="/lineup" className="text-xl tracking-tighter font-mono hover:text-black">LINE UP</Link>
        <Link to="/tickets" className="text-xl tracking-tighter font-mono hover:text-black">TICKETS</Link>
        <Link to="/venues" className="text-xl tracking-tighter font-mono hover:text-black">VENUES</Link>
        <Link to="/faq" className="text-xl tracking-tighter font-mono hover:text-black">FAQ</Link>
      </nav>
      
      <div className="text-xl tracking-tighter text-right hidden md:block font-mono">
        DESIGN BY DIGITAL DEMENTIA 2025
      </div>
    </header>
  );
};

export default Header;
