import Image from 'next/image';
import Link from 'next/link';

const NewsCard = ({ title, excerpt, imageUrl, category, date, slug }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
        <div className="absolute top-0 left-0 bg-blue-600 text-white px-3 py-1 text-sm font-medium">
          {category}
        </div>
      </div>
      
      <div className="p-4">
        <Link href={`/article/${slug}`}>
          <h3 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors duration-200">
            {title}
          </h3>
        </Link>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span>{date}</span>
          <Link 
            href={`/article/${slug}`}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard; 