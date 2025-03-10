import Link from 'next/link';
import { notFound } from 'next/navigation';
import NewsCard from '@/components/NewsCard';
import { getArticlesByCategory } from '@/data/mockData';

export async function generateMetadata({ params }: { params: { category: string } }) {
  const categoryName = params.category.charAt(0).toUpperCase() + params.category.slice(1);
  
  return {
    title: `${categoryName} News - KRA News`,
    description: `Latest ${categoryName} news and updates from KRA News.`,
  };
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const categoryName = params.category.charAt(0).toUpperCase() + params.category.slice(1);
  const articles = getArticlesByCategory(categoryName);
  
  if (articles.length === 0) {
    notFound();
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <div className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700">{categoryName}</span>
      </div>
      
      {/* Category Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{categoryName} News</h1>
        <p className="text-gray-600 max-w-3xl">
          Stay updated with the latest {categoryName.toLowerCase()} news, trends, and developments from around the world.
        </p>
      </div>
      
      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {articles.map((article) => (
          <NewsCard
            key={article.id}
            id={article.id}
            title={article.title}
            excerpt={article.excerpt}
            imageUrl={article.imageUrl}
            category={article.category}
            date={article.date}
            slug={article.slug}
          />
        ))}
      </div>
      
      {/* No Articles Message (conditional) */}
      {articles.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold mb-2">No articles found</h3>
          <p className="text-gray-600">
            There are currently no articles in this category. Please check back later.
          </p>
        </div>
      )}
    </div>
  );
} 