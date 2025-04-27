import Hero from '../components/Hero';
import Section from '../components/Section';

const About = () => {
  return (
    <>
      <Hero minimal />
      
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="text-xs uppercase tracking-wider text-muted mb-2">Despre Noi</div>
            <h1 className="text-3xl md:text-4xl font-serif font-medium text-primary mb-6">
              Cabinet Avocat Aurelian Toma Ionescu
            </h1>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p>
              Cabinetul de Avocat <strong>Aurelian "Toma – Ionescu"</strong>, înfiinţat în anul 2002 prin decizia nr.111 a Baroului Dâmboviţa, 
              oferă servicii profesionale calificate, la înalt nivel, servicii specifice adaptate atât cerinţelor avocaturii de business, 
              cât şi ale persoanelor fizice.
            </p>
            
            <p>
              <strong>Profesionalismul este elementul de referinţă în comportamentul nostru în relaţiile cu clienţii:</strong> 
              <em>" Nimeni, niciodată, împins de vreun necaz sau de vreo nedreptate şi făcând apel la serviciile noastre, 
              să nu plece nesatisfăcut sau nealinat".</em>
            </p>
            
            <p>
              Obiectivele noastre, pe termen lung, sunt concentrate pe nevoile clienţilor, raportate la realităţile juridice şi economice, 
              ale ţării, aflate într-o profundă transformare şi încadrare permanentă europeană.
            </p>
            
            <p>
              Clienţii noştri beneficiază de o abordare pragmatică, onestă şi corectă faţă cazul şi persoana lor, raportată la legislaţia 
              naţională şi comunitară în vigoare, punând pe primul loc necesitatea rezolvării problemelor lor.
            </p>
            
            <p>
              Rolul unui avocat este acela de a integra intr-un limbaj juridic coerent si pertinent doleantele clientului care ii incredinteaza 
              apararea sa si deasemenea reprezinta partenerul clientului in solutionarea favorabila a problemelor juridice.
            </p>
            
            <h2>Deontologia profesiei de avocat respecta urmatoarele caracteristici ale actului juridic:</h2>
            
            <ul>
              <li>caracterul legalitatii;</li>
              <li>caracterul libertatii;</li>
              <li>caracterul independentei;</li>
              <li>caracterul pastrarii secretului profesional.</li>					
            </ul>
            
            <p>
              Incercam intotdeauna sa folosim toate parghiile legale pentru a gasi in permanenta, solutii eficiente, benefice si, 
              mai ales, legale, in functie de fiecare caz in parte.
            </p>
            
            <p>
              Plecand de la premisele unei colaborari directe cu clientul, <strong>Cabinetul de Avocat Aurelian "Toma – Ionescu"</strong> 
              furnizeaza servicii juridice de specialitate in baza unor onorarii de avocat adaptate fiecarui caz in parte, 
              in conditii materiale extrem de avantajoase pentru client.
            </p>
            
            <p>
              Cabinet Avocat Târgoviste - <strong>Aurelian "Toma – Ionescu"</strong> isi desfasoara activitatea atat pe raza 
              Municipiului Târgoviste, cat in intreg judetul Dambovita, avand specializari Dreptul Insolventei, 
              Drept Contencios Administrativ si Fiscal, Drept Comercial, Drept Contraventional si Dreptul Familiei.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
};

export default About;
