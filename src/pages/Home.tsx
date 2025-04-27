import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Section from '../components/Section';
import PracticeCard from '../components/PracticeCard';
import TestimonialCard from '../components/TestimonialCard';
import { practiceAreas } from '../lib/practiceAreas';

const Home = () => {
  // Icons for practice areas
  const practiceIcons = [
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
    </svg>,
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path>
    </svg>,
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
    </svg>,
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
    </svg>,
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
    </svg>,
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero />
      
      {/* About Section */}
      <Section light>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="mb-4">
              <div className="uppercase text-xs tracking-wider text-muted mb-2">Despre Noi</div>
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-primary mb-4">
                Cabinet Avocat Aurelian Toma Ionescu
              </h2>
            </div>
            
            <p className="text-muted mb-4">
              Cabinetul de Avocat <span className="text-primary font-medium">Aurelian "Toma – Ionescu"</span>, înfiinţat în anul 2002 prin decizia nr.111 a Baroului Dâmboviţa, 
              oferă servicii profesionale calificate, la înalt nivel, servicii specifice adaptate atât cerinţelor avocaturii de business, 
              cât şi ale persoanelor fizice.
            </p>
            
            <p className="text-muted mb-6">
              <span className="text-primary italic font-medium">
                "Nimeni, niciodată, împins de vreun necaz sau de vreo nedreptate şi făcând apel la serviciile noastre, 
                să nu plece nesatisfăcut sau nealinat".
              </span>
            </p>
            
            <Link
              to="/about"
              className="inline-flex items-center bg-secondary text-white font-medium px-4 py-2 rounded-sm hover:bg-secondary/90 transition-colors"
            >
              Află mai multe despre noi
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-sm shadow-sm">
              <div className="text-secondary mb-3">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-primary mb-2">Profesionalism</h3>
              <p className="text-muted text-sm">
                Abordare pragmatică, onestă şi corectă faţă cazul şi persoana clientului.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-sm shadow-sm">
              <div className="text-secondary mb-3">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-primary mb-2">Eficiență</h3>
              <p className="text-muted text-sm">
                Folosim toate parghiile legale pentru a găsi soluții eficiente și benefice.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-sm shadow-sm">
              <div className="text-secondary mb-3">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-primary mb-2">Comunicare</h3>
              <p className="text-muted text-sm">
                Colaborare directă cu clientul și transparență în toate procedurile.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-sm shadow-sm">
              <div className="text-secondary mb-3">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-primary mb-2">Experiență</h3>
              <p className="text-muted text-sm">
                Peste 20 de ani de experiență în domeniul juridic în Târgoviște.
              </p>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Practice Areas Section */}
      <Section 
        title="Arii de Practică"
        subtitle="SPECIALIZĂRI"
        centered
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {practiceAreas.map((area, index) => (
            <PracticeCard
              key={area.slug}
              title={area.title}
              slug={area.slug}
              description={area.description}
              icon={practiceIcons[index]}
            />
          ))}
        </div>
      </Section>
      
      {/* CTA Section */}
      <Section className="bg-primary text-white py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">
            Nevoie de asistență juridică?
          </h2>
          <p className="text-white/80 text-lg mb-6">
            Contactează-ne pentru a programa o consultație și a discuta despre cazul tău cu un avocat specializat.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/contact"
              className="inline-block bg-primary border-2 border-white hover:bg-primary/80 text-white font-medium px-6 py-3 rounded-sm transition-colors"
            >
              Programează consultație
            </Link>
            <a
              href="tel:0727.375.391"
              className="inline-flex items-center justify-center text-white font-medium"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              0727.375.391
            </a>
          </div>
        </div>
      </Section>
      
      {/* Testimonials Section */}
      <Section
        title="Părerea Clienților"
        subtitle="TESTIMONIALE"
        centered
        light
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TestimonialCard
            quote="Am apelat la serviciile Cabinetului pentru o problemă de drept comercial. Profesionalismul și dedicarea cu care am fost tratat m-au convins să recomand aceste servicii."
            author="Andrei Popescu"
            position="Director General"
          />
          <TestimonialCard
            quote="Am avut parte de o experiență foarte bună. Avocat Toma a fost mereu disponibil pentru întrebări și m-a ghidat prin tot procesul cu răbdare și expertiză."
            author="Maria Ionescu"
            position="Antreprenor"
          />
          <TestimonialCard
            quote="Un cabinet de avocatură de încredere, cu o abordare personalizată pentru fiecare client. Recomand cu încredere serviciile lor pentru orice problemă juridică."
            author="Cristian Dumitrescu"
            position="Manager"
          />
        </div>
      </Section>
    </>
  );
};

export default Home;
