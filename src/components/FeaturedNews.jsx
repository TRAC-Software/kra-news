import Image from 'next/image';
import Link from 'next/link';

const FeaturedNews = ({ title, excerpt, imageUrl, category, date, slug }) => {
  return (
    <div className="relative w-full h-[500px] rounded-xl overflow-hidden">
      <Image
        src={imageUrl}
        alt={title}
        fill
        priority
        sizes="100vw"
        className="object-cover brightness-75"
      />
      
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 text-white">
        <div className="bg-blue-600 text-white px-3 py-1 text-sm font-medium inline-block mb-3 rounded">
          {category}
        </div>
        
        <Link href={`/article/${slug}`}>
          <h1 className="text-2xl md:text-4xl font-bold mb-3 hover:text-blue-200 transition-colors duration-200">
            {title}
          </h1>
        </Link>
        
        <p className="text-gray-200 mb-4 max-w-3xl text-base md:text-lg line-clamp-3">
          {excerpt}
        </p>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-200">{date}</span>
          <Link 
            href={`/article/${slug}`}
            className="bg-white text-blue-600 hover:bg-blue-100 px-4 py-2 rounded-full font-medium transition-colors duration-200"
          >
            Read Full Story
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedNews; 