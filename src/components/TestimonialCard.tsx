interface TestimonialCardProps {
  quote: string;
  author: string;
  position?: string;
  imgSrc?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  position,
  imgSrc,
}) => {
  return (
    <div className="bg-white p-8 rounded-sm shadow-sm">
      <div className="flex items-center mb-6">
        {imgSrc ? (
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
            <img
              src={imgSrc}
              alt={author}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white mr-4">
            {author.charAt(0)}
          </div>
        )}
        <div>
          <h4 className="text-primary font-medium">{author}</h4>
          {position && <p className="text-muted text-sm">{position}</p>}
        </div>
      </div>
      <p className="text-muted italic mb-6">"{quote}"</p>
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className="w-5 h-5 text-secondary"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 15.934l-6.18 3.243 1.179-6.878-5-4.867 6.902-1.002L10 0l3.099 6.43 6.902 1.002-5 4.867 1.179 6.878z"
              clipRule="evenodd"
            />
          </svg>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;
