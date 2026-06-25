import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';
import logo from '../assets/images/riyan-logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Catalogue', path: '/catalogue' },
    { name: 'Contact', path: '/#contact' }
  ];

  const handleScroll = (e, path) => {
    if (path.startsWith('/#')) {
      const id = path.substring(2);
      if (location.pathname === '/') {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const isActive = (path) => {
    if (path === '/#contact') {
      return location.hash === '#contact';
    }
    if (path === '/') {
      return location.pathname === '/' && location.hash === '';
    }
    return location.pathname === path;
  };

  return (
    <nav className="fixed w-full z-50 glass-panel !rounded-none border-t-0 border-x-0 !bg-white/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="font-bold text-text flex items-center gap-1 sm:gap-2">
            <img src={logo} alt="Logo" className="h-16 sm:h-20 md:h-24 w-auto" />

            <div className="flex items-baseline">
              <span className="text-xl sm:text-2xl md:text-3xl">Riyan</span>
              <span className="text-xl sm:text-2xl md:text-3xl ml-1 md:ml-2">Purifiers</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {links.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={(e) => handleScroll(e, link.path)}
                    className={`font-medium transition-colors pb-1 border-b-2 ${active ? 'text-primary border-primary font-bold' : 'text-text border-transparent hover:text-primary'
                      }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
            <div className="flex items-center gap-4 border-l border-gray-200 pl-6">
              <a href="tel:+917550112122" className="flex items-center gap-2 text-primary hover:text-primary-light transition-colors font-medium">
                <Phone size={18} />
                <span>Call Us</span>
              </a>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text hover:text-primary focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 shadow-lg absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={(e) => {
                    handleScroll(e, link.path);
                    setIsOpen(false);
                  }}
                  className={`block px-3 py-2 text-base font-medium rounded-md ${active ? 'text-primary bg-primary/10 font-bold' : 'text-text hover:text-primary hover:bg-bg'
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <a href="tel:+918438512282" className="flex items-center gap-2 px-3 py-2 text-base font-medium text-primary hover:bg-bg rounded-md">
              <Phone size={18} />
              <span>Call Us</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;