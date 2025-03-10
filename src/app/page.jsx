import FeaturedNews from "@/components/FeaturedNews";
import NewsCard from "@/components/NewsCard";
import NewsletterSignup from "@/components/NewsletterSignup";
import { articles, getFeaturedArticle } from "@/data/mockData";

export default function Home() {
  const featuredArticle = getFeaturedArticle();
  const recentArticles = articles.slice(1, 7); // Skip the featured article

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Featured News Section */}
        <section className="mb-12">
          <FeaturedNews
            title={featuredArticle.title}
            excerpt={featuredArticle.excerpt}
            imageUrl={featuredArticle.imageUrl}
            category={featuredArticle.category}
            date={featuredArticle.date}
            slug={featuredArticle.slug}
          />
        </section>

        {/* Latest News Section */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">Latest News</h2>
            <a href="/all-news" className="text-blue-600 hover:text-blue-800 font-medium">
              View All
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentArticles.map((article) => (
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
        </section>

        {/* Newsletter Signup */}
        <section className="mb-12">
          <NewsletterSignup />
        </section>

        {/* Categories Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">News Categories</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['Politics', 'Business', 'Technology', 'Health', 'Entertainment', 'Sports'].map((category) => (
              <a
                key={category}
                href={`/categories/${category.toLowerCase()}`}
                className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-800">{category}</h3>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
} 