import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  title,
  subtitle,
  centered = false,
  light = false,
}) => {
  return (
    <section className={`py-16 md:py-24 ${light ? 'bg-light' : 'bg-white'} ${className}`}>
      <div className="container mx-auto px-4 md:px-8">
        {(title || subtitle) && (
          <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
            {subtitle && (
              <div className="uppercase text-xs tracking-wider text-muted mb-2">{subtitle}</div>
            )}
            {title && (
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-primary">{title}</h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
