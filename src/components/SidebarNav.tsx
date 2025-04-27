import { Link } from 'react-router-dom';

interface SidebarNavProps {
  currentArea?: string;
}

const practiceAreas = [
  { slug: 'dreptul-insolventei', title: 'Dreptul Insolvenței' },
  { slug: 'dreptul-contencios-administrativ-si-fiscal', title: 'Dreptul Contencios Administrativ și Fiscal' },
  { slug: 'drept-comercial', title: 'Drept Comercial' },
  { slug: 'drept-contraventional', title: 'Drept Contravențional' },
  { slug: 'dreptul-familiei', title: 'Dreptul Familiei' },
];

const SidebarNav: React.FC<SidebarNavProps> = ({ currentArea }) => {
  return (
    <div className="bg-white rounded-sm p-6 shadow-sm">
      <h3 className="text-lg font-serif font-medium text-primary mb-4">Arii de Practică</h3>
      <ul className="space-y-1">
        {practiceAreas.map((area) => (
          <li key={area.slug}>
            <Link 
              to={`/${area.slug}`}
              className={`block py-2 border-l-2 pl-3 transition-colors ${
                area.slug === currentArea 
                  ? 'border-secondary text-primary font-medium' 
                  : 'border-transparent text-muted hover:text-primary hover:border-gray-200'
              }`}
            >
              {area.title}
            </Link>
          </li>
        ))}
      </ul>
      
      <div className="mt-8 bg-light p-4 rounded-sm">
        <h4 className="text-primary font-medium mb-2">Nevoie de consultanță juridică?</h4>
        <p className="text-muted text-sm mb-3">Programează o consultație și discută despre cazul tău cu un avocat specializat.</p>
        <Link
          to="/contact"
          className="block w-full bg-secondary hover:bg-secondary/90 text-white text-center font-medium px-4 py-2 rounded-sm transition-colors"
        >
          Contactează-ne
        </Link>
      </div>
    </div>
  );
};

export default SidebarNav;
