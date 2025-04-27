import { Link } from 'react-router-dom';

interface PracticeCardProps {
  title: string;
  slug: string;
  icon?: React.ReactNode;
  description?: string;
}

const PracticeCard: React.FC<PracticeCardProps> = ({ 
  title, 
  slug, 
  icon,
  description 
}) => {
  return (
    <div className="group">
      <div className="bg-white rounded-sm p-6 transition-all duration-300 shadow-sm hover:shadow-md group-hover:translate-y-[-5px]">
        {icon && (
          <div className="text-secondary mb-4">
            {icon}
          </div>
        )}
        <h3 className="text-xl font-serif font-medium text-primary mb-2">{title}</h3>
        {description && <p className="text-muted text-sm mb-4">{description}</p>}
        <Link 
          to={`/${slug}`} 
          className="inline-flex items-center bg-primary text-white font-medium px-4 py-2 rounded-sm hover:bg-primary/90 transition-colors"
        >
          Află mai multe
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default PracticeCard;
