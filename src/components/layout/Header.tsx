import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-soft py-3' : 'bg-white/95 py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="text-primary font-serif">
              <span className="flex items-center">
                <div className="w-6 h-6 bg-secondary rounded-sm flex items-center justify-center text-white mr-2">A</div>
                <span className="text-xl font-medium">Toma</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link
              to="/"
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                location.pathname === '/' ? 'text-secondary' : 'text-primary/80 hover:text-primary'
              }`}
            >
              Acasă
            </Link>
            <div className="relative group">
              <button
                className={`px-3 py-2 text-sm font-medium flex items-center transition-colors ${
                  location.pathname.includes('/dreptul') || location.pathname.includes('/drept-') 
                    ? 'text-secondary' 
                    : 'text-primary/80 hover:text-primary'
                }`}
              >
                Arii de Practică
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white shadow-soft rounded-lg overflow-hidden">
                <div className="py-2">
                  <Link
                    to="/dreptul-insolventei"
                    className="block px-4 py-2 text-sm text-primary/80 hover:bg-gray-50 hover:text-secondary"
                  >
                    Dreptul Insolvenței
                  </Link>
                  <Link
                    to="/dreptul-contencios-administrativ-si-fiscal"
                    className="block px-4 py-2 text-sm text-primary/80 hover:bg-gray-50 hover:text-secondary"
                  >
                    Dreptul Contencios Administrativ și Fiscal
                  </Link>
                  <Link
                    to="/drept-comercial"
                    className="block px-4 py-2 text-sm text-primary/80 hover:bg-gray-50 hover:text-secondary"
                  >
                    Drept Comercial
                  </Link>
                  <Link
                    to="/drept-contraventional"
                    className="block px-4 py-2 text-sm text-primary/80 hover:bg-gray-50 hover:text-secondary"
                  >
                    Drept Contravențional
                  </Link>
                  <Link
                    to="/dreptul-familiei"
                    className="block px-4 py-2 text-sm text-primary/80 hover:bg-gray-50 hover:text-secondary"
                  >
                    Dreptul Familiei
                  </Link>
                </div>
              </div>
            </div>
            <Link
              to="/about"
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                location.pathname === '/about' ? 'text-secondary' : 'text-primary/80 hover:text-primary'
              }`}
            >
              Despre Noi
            </Link>
            <Link
              to="/contact"
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                location.pathname === '/contact' ? 'text-secondary' : 'text-primary/80 hover:text-primary'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Call Now Button (Desktop) */}
          <div className="hidden md:flex items-center">
            <a
              href="tel:0727.375.391"
              className="text-sm font-medium text-primary hover:text-primary/90 mr-4"
            >
              0727.375.391
            </a>
            <Link
              to="/contact"
              className="bg-secondary hover:bg-secondary/90 text-white text-sm font-medium px-4 py-2 rounded-sm transition-colors"
            >
              Consultație
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-primary p-1"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-white z-40 transition-transform duration-300 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center mb-8">
            <Link to="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
              <div className="text-primary font-serif">
                <span className="flex items-center">
                  <div className="w-6 h-6 bg-secondary rounded-sm flex items-center justify-center text-white mr-2">A</div>
                  <span className="text-xl font-medium">Toma</span>
                </span>
              </div>
            </Link>
            <button
              onClick={toggleMenu}
              className="text-primary p-1"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col space-y-4">
            <Link
              to="/"
              className={`px-3 py-2 text-base font-medium ${
                location.pathname === '/' ? 'text-secondary' : 'text-primary/80'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Acasă
            </Link>
            <div className="py-2 px-3">
              <h3 className="text-base font-medium text-primary/80 mb-2">Arii de Practică</h3>
              <div className="pl-2 space-y-2">
                <Link
                  to="/dreptul-insolventei"
                  className="block py-1 text-sm text-primary/70 hover:text-secondary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dreptul Insolvenței
                </Link>
                <Link
                  to="/dreptul-contencios-administrativ-si-fiscal"
                  className="block py-1 text-sm text-primary/70 hover:text-secondary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dreptul Contencios Administrativ și Fiscal
                </Link>
                <Link
                  to="/drept-comercial"
                  className="block py-1 text-sm text-primary/70 hover:text-secondary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Drept Comercial
                </Link>
                <Link
                  to="/drept-contraventional"
                  className="block py-1 text-sm text-primary/70 hover:text-secondary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Drept Contravențional
                </Link>
                <Link
                  to="/dreptul-familiei"
                  className="block py-1 text-sm text-primary/70 hover:text-secondary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dreptul Familiei
                </Link>
              </div>
            </div>
            <Link
              to="/about"
              className={`px-3 py-2 text-base font-medium ${
                location.pathname === '/about' ? 'text-secondary' : 'text-primary/80'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Despre Noi
            </Link>
            <Link
              to="/contact"
              className={`px-3 py-2 text-base font-medium ${
                location.pathname === '/contact' ? 'text-secondary' : 'text-primary/80'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
          <div className="mt-8 pt-6 border-t border-gray-100">
            <Link
              to="/contact"
              className="block w-full bg-secondary hover:bg-secondary/90 text-white text-center font-medium px-4 py-3 rounded-sm transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Programează o consultație
            </Link>
            <a
              href="tel:0727.375.391"
              className="block w-full text-center text-primary font-medium mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              0727.375.391
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
