import { Link } from 'react-router-dom';

interface HeroProps {
  minimal?: boolean;
}

const Hero: React.FC<HeroProps> = ({ minimal = false }) => {
  if (minimal) {
    return (
      <div className="pt-20 pb-8 bg-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-xs text-muted uppercase tracking-wider mb-2">Cabinet Avocat Aurelian Toma</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-12 md:pt-24 md:pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Content - First on mobile */}
          <div className="order-2 lg:order-1">
            <div className="text-xs text-muted uppercase tracking-wider mb-3">CABINET AVOCAT TARGOVIŞTE</div>
            <h1 className="font-serif text-4xl md:text-5xl text-primary font-medium leading-tight mb-4">
              Soluții juridice de încredere pentru lumea reală
            </h1>
            <p className="text-muted text-lg mb-6 max-w-lg">
              Organizăm cazul dvs. juridic într-un mod eficient și profesionist, ajutându-vă să obțineți rezultatele dorite.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/contact" 
                className="inline-block bg-secondary hover:bg-secondary/90 text-white font-medium px-6 py-3 rounded-sm transition-colors"
              >
                Programează consultație
              </Link>
              <a 
                href="tel:0727.375.391" 
                className="inline-flex items-center justify-center sm:justify-start text-primary font-medium"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                0727.375.391
              </a>
            </div>
          </div>
          
          {/* Image - Second on mobile but positioned properly */}
          <div className="order-1 lg:order-2 relative">
            <div className="h-[400px] md:h-[450px] overflow-hidden rounded-sm">
              <img 
                src="/images/lawyer.jpg" 
                alt="Cabinet Avocat Aurelian Toma Ionescu" 
                className="w-full h-full object-cover object-center-bottom"
                style={{ objectPosition: 'center bottom' }}
              />
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white rounded-sm p-4 shadow-soft max-w-[160px]">
              <div className="flex items-center justify-center text-secondary mb-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-center">
                <div className="text-3xl font-serif font-medium text-primary">20+</div>
                <div className="text-xs text-muted">Ani de experiență</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
