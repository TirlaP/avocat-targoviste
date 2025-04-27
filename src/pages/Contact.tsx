import Hero from '../components/Hero';
import Section from '../components/Section';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <>
      <Hero minimal />
      
      <Section>
        <div className="mb-12 text-center">
          <div className="text-xs uppercase tracking-wider text-muted mb-2">Contactează-ne</div>
          <h1 className="text-3xl md:text-4xl font-serif font-medium text-primary mb-6">Programează o Consultație</h1>
          <p className="text-muted max-w-2xl mx-auto">
            Avem experiența necesară pentru a vă ajuta în orice problemă juridică. Contactați-ne pentru o consultație inițială și vom găsi cea mai bună soluție pentru dvs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-sm p-8 shadow-sm">
              <h3 className="text-xl font-serif font-medium text-primary mb-6">Informații de Contact</h3>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="text-secondary mr-6 mt-1">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-primary mb-1">Telefon</h4>
                    <a href="tel:0727.375.391" className="text-muted block hover:text-primary transition-colors">0727.375.391</a>
                    <a href="tel:0245.610.088" className="text-muted block hover:text-primary transition-colors">0245.610.088</a>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="text-secondary mr-6 mt-1">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-primary mb-1">Email</h4>
                    <a href="mailto:avocattoma@yahoo.com" className="text-muted hover:text-primary transition-colors">avocattoma@yahoo.com</a>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="text-secondary mr-6 mt-1">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-primary mb-1">Adresă</h4>
                    <address className="text-muted not-italic">
                      Bulevardul Unirii nr.18, etaj 1,<br />
                      (Imobil Chimaltex), Micro 6,<br />
                      Târgoviște, jud. Dâmbovița
                    </address>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="text-secondary mr-6 mt-1">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-primary mb-1">Program</h4>
                    <div className="text-muted">
                      <p>Luni - Vineri: 09:00 - 17:00</p>
                      <p>Sâmbătă - Duminică: Închis</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="bg-white rounded-sm p-8 shadow-sm">
              <h3 className="text-xl font-serif font-medium text-primary mb-6">Locație</h3>
              <div className="aspect-w-16 aspect-h-9 rounded-sm overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2842.0329553843147!2d25.451191315525947!3d44.93277107909828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b2b9d43c51f4d5%3A0xaf9f5c84bbd91fba!2sBulevardul%20Unirii%2018%2C%20T%C3%A2rgovi%C8%99te!5e0!3m2!1sen!2sro!4v1618920987654!5m2!1sen!2sro"
                  width="100%"
                  height="300"
                  className="border-0"
                  allowFullScreen
                  loading="lazy"
                  title="Locatie Cabinet Avocat Aurelian Toma Ionescu"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Contact;
