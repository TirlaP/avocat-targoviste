import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import Section from '../components/Section';
import SidebarNav from '../components/SidebarNav';
import { practiceAreas } from '../lib/practiceAreas';
import { Helmet } from 'react-helmet';

interface PracticeAreaProps {
  area: string;
}

const PracticeArea: React.FC<PracticeAreaProps> = ({ area }) => {
  const navigate = useNavigate();
  const practiceArea = practiceAreas.find(a => a.slug === area);

  // Redirect to home if area not found
  useEffect(() => {
    if (!practiceArea) {
      navigate('/');
    }
  }, [practiceArea, navigate]);

  if (!practiceArea) {
    return null;
  }

  // Create page title from slug
  const pageTitle = practiceArea.title;

  // Render items as paragraphs or lists based on content format
  const renderContent = () => {
    if (typeof practiceArea.content === 'string') {
      return <p className="text-muted">{practiceArea.content}</p>;
    } 
    
    if (Array.isArray(practiceArea.content)) {
      let currentGroup: string[] = [];
      const groups: string[][] = [];
      
      practiceArea.content.forEach((item, index) => {
        if (item.endsWith(':')) {
          if (currentGroup.length > 0) {
            groups.push([...currentGroup]);
            currentGroup = [];
          }
        }
        currentGroup.push(item);
        
        if (index === practiceArea.content.length - 1 && currentGroup.length > 0) {
          groups.push([...currentGroup]);
        }
      });
      
      return (
        <div className="space-y-4">
          {groups.length > 0 ? (
            groups.map((group, groupIndex) => (
              <div key={groupIndex}>
                {group.map((item, itemIndex) => {
                  if (item.endsWith(':')) {
                    return (
                      <h3 key={itemIndex} className="text-lg font-medium text-primary mt-6 mb-3">
                        {item}
                      </h3>
                    );
                  } else if (item.startsWith('-')) {
                    return (
                      <div key={itemIndex} className="pl-5 my-1">
                        <div className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span className="text-muted">{item.substring(1).trim()}</span>
                        </div>
                      </div>
                    );
                  } else {
                    return (
                      <div key={itemIndex} className="my-2">
                        <div className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span className="text-muted">{item}</span>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            ))
          ) : (
            <ul className="space-y-2">
              {practiceArea.content.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-muted">{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    }
    
    return null;
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle} | Cabinet Avocat Aurelian Toma Ionescu</title>
        <meta name="description" content={practiceArea.description} />
        <meta name="keywords" content={`avocat, târgoviște, ${pageTitle.toLowerCase()}, servicii juridice, consultanță juridică`} />
        <link rel="canonical" href={`https://www.avocattargoviste.ro/${area}`} />
      </Helmet>
      
      <Hero minimal />
      
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="text-xs uppercase tracking-wider text-muted mb-1">Arii de Practică</div>
              <h1 className="text-3xl md:text-4xl font-serif font-medium text-primary">{pageTitle}</h1>
            </div>
            
            {practiceArea.description && (
              <p className="text-lg text-primary/80 mb-6 border-l-2 border-primary pl-4 py-1">
                {practiceArea.description}
              </p>
            )}
            
            <div className="prose prose-lg max-w-none">{renderContent()}</div>
            
            <div className="mt-8 pt-6 border-t border-gray-100">
              <Link
                to="/contact"
                className="inline-flex items-center bg-primary text-white font-medium px-4 py-2 rounded-sm hover:bg-primary/90 transition-colors"
              >
                Programează o consultație
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <SidebarNav currentArea={practiceArea.slug} />
          </div>
        </div>
      </Section>
    </>
  );
};

export default PracticeArea;
