import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-light pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and Info */}
          <div>
            <Link to="/" className="flex items-center mb-6">
              <div className="text-primary font-serif">
                <span className="flex items-center">
                  <div className="w-8 h-8 bg-secondary rounded-sm flex items-center justify-center text-white mr-2">A</div>
                  <span className="text-2xl font-medium">Toma</span>
                </span>
              </div>
            </Link>
            <p className="text-muted text-sm mb-6">
              Cabinet de Avocat, înfiinţat în anul 2002 prin decizia nr.111 a Baroului Dâmboviţa, oferă servicii profesionale calificate.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/Avocat-Targoviste-Cabinet-Avocat-Aurelian-Toma-1700975876793097/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://twitter.com/avocataurelian1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-primary font-medium mb-6">Navigare Rapidă</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-muted hover:text-primary transition-colors">
                  Acasă
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted hover:text-primary transition-colors">
                  Despre Noi
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="text-primary font-medium mb-6">Arii de Practică</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/dreptul-insolventei" className="text-muted hover:text-primary transition-colors">
                  Dreptul Insolvenței
                </Link>
              </li>
              <li>
                <Link to="/dreptul-contencios-administrativ-si-fiscal" className="text-muted hover:text-primary transition-colors">
                  Dreptul Contencios Administrativ și Fiscal
                </Link>
              </li>
              <li>
                <Link to="/drept-comercial" className="text-muted hover:text-primary transition-colors">
                  Drept Comercial
                </Link>
              </li>
              <li>
                <Link to="/drept-contraventional" className="text-muted hover:text-primary transition-colors">
                  Drept Contravențional
                </Link>
              </li>
              <li>
                <Link to="/dreptul-familiei" className="text-muted hover:text-primary transition-colors">
                  Dreptul Familiei
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-primary font-medium mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex">
                <svg className="w-5 h-5 text-secondary mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <div className="text-muted">Telefon</div>
                  <a href="tel:0727.375.391" className="text-primary hover:text-primary/80 transition-colors">
                    0727.375.391
                  </a>
                </div>
              </li>
              <li className="flex">
                <svg className="w-5 h-5 text-secondary mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <div className="text-muted">Email</div>
                  <a href="mailto:avocattoma@yahoo.com" className="text-primary hover:text-primary/80 transition-colors">
                    avocattoma@yahoo.com
                  </a>
                </div>
              </li>
              <li className="flex">
                <svg className="w-5 h-5 text-secondary mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <div className="text-muted">Adresă</div>
                  <address className="text-primary not-italic">
                    Bulevardul Unirii nr.18, etaj 1, Târgoviște, jud. Dâmbovița
                  </address>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted text-sm mb-4 md:mb-0">
            &copy; {currentYear} Cabinet Avocat Aurelian Toma Ionescu. Toate drepturile rezervate.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-muted hover:text-primary text-sm transition-colors">
              Politica de Confidențialitate
            </Link>
            <Link to="/terms" className="text-muted hover:text-primary text-sm transition-colors">
              Termeni și Condiții
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
