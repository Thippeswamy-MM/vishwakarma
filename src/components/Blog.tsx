import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'Top 5 Things to Check Before Buying a House',
      excerpt: 'A comprehensive guide to essential factors every homebuyer should consider to make an informed decision.',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
      author: 'Priya Sharma',
      date: '15 Jan 2024',
      readTime: '8 min read',
      category: 'Buying Guide',
    },
    {
      id: 2,
      title: 'How to Choose the Right Location for Your Dream Home',
      excerpt: 'Location is everything in real estate. Learn how to evaluate neighborhoods and make the right choice.',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
      author: 'Rahul Kumar',
      date: '12 Jan 2024',
      readTime: '6 min read',
      category: 'Location Guide',
    },
    {
      id: 3,
      title: 'Rent vs. Buy — What\'s Better in 2024?',
      excerpt: 'Navigate the age-old debate with current market insights and financial calculations.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      author: 'Anjali Reddy',
      date: '10 Jan 2024',
      readTime: '10 min read',
      category: 'Market Analysis',
    },
    {
      id: 4,
      title: 'Home Loan Guide: Everything You Need to Know',
      excerpt: 'Complete guide to securing the best home loan rates and navigating the approval process.',
      image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg',
      author: 'Vikram Agarwal',
      date: '08 Jan 2024',
      readTime: '12 min read',
      category: 'Finance',
    },
    {
      id: 5,
      title: 'Real Estate Investment Strategies for Beginners',
      excerpt: 'Start your real estate investment journey with these proven strategies and tips.',
      image: 'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg',
      author: 'Meera Singh',
      date: '05 Jan 2024',
      readTime: '15 min read',
      category: 'Investment',
    },
    {
      id: 6,
      title: 'Virtual Home Tours: The Future of Property Viewing',
      excerpt: 'How technology is revolutionizing the way we explore and evaluate properties.',
      image: 'https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg',
      author: 'Arjun Patel',
      date: '03 Jan 2024',
      readTime: '7 min read',
      category: 'Technology',
    },
  ];

  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Real Estate Insights & Resources</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with expert advice, market trends, and helpful guides for your real estate journey
          </p>
        </div>

        {/* Featured Article */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16 hover:shadow-2xl transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="relative">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title}
                className="w-full h-64 lg:h-full object-cover"
              />
              <div className="absolute top-6 left-6">
                <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Featured Article
                </span>
              </div>
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  {featuredPost.category}
                </span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{featuredPost.title}</h3>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">{featuredPost.excerpt}</p>
              
              <div className="flex items-center text-sm text-gray-500 mb-6">
                <div className="flex items-center mr-6">
                  <User className="h-4 w-4 mr-2" />
                  <span>{featuredPost.author}</span>
                </div>
                <div className="flex items-center mr-6">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{featuredPost.date}</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-2" />
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>

              <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200">
                Read Full Article
                <ArrowRight className="h-5 w-5 ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Regular Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {regularPosts.slice(0, 3).map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group">
              <div className="relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                  <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200">
                    Read More
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}