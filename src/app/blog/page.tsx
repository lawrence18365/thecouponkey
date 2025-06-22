import Link from 'next/link'
import EmailForm from '@/components/email-form'

const blogPosts = [
  {
    id: '1',
    title: '5 Best Browser Extensions That Save Money Automatically',
    slug: '5-best-browser-extensions-save-money-automatically',
    excerpt: 'Stop manually searching for coupon codes. These browser extensions automatically find discounts and save you money on every purchase with zero effort.',
    author: 'Sarah Chen',
    publishedAt: '2025-06-15',
    readTime: '8 min read',
    category: 'Browser Extensions',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop',
    featured: true
  },
  {
    id: '2',
    title: 'WikiBuy vs Honey: Which Browser Extension Saves More Money?',
    slug: 'wikibuy-vs-honey-comparison',
    excerpt: 'I tested both extensions for 30 days with real purchases. Here\'s which one actually saves more money, plus the surprising winner you didn\'t expect.',
    author: 'Emma Rodriguez',
    publishedAt: '2025-06-15',
    readTime: '12 min read',
    category: 'Reviews',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop',
    featured: true
  },
  {
    id: '3',
    title: 'Complete Guide to Automatic Coupon Finders',
    slug: 'automatic-coupon-finder-complete-guide',
    excerpt: 'Everything you need to know about automatic coupon finders. How they work, which ones save the most money, and step-by-step setup guide.',
    author: 'Alex Martinez',
    publishedAt: '2025-06-15',
    readTime: '15 min read',
    category: 'Guides',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop',
    featured: true
  },
  {
    id: '4',
    title: 'Best Restaurant Deals & Apps: Save 50%+ on Dining Out',
    slug: 'best-restaurant-deals-apps-2025',
    excerpt: 'Stop paying full price for restaurants. These apps and websites offer verified deals, exclusive discounts, and cash back that can cut your dining costs in half.',
    author: 'David Park',
    publishedAt: '2025-06-15',
    readTime: '10 min read',
    category: 'Restaurant Deals',
    image: 'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=800&h=400&fit=crop',
    featured: true
  },
  {
    id: '5',
    title: 'Rakuten Cash Back Guide: Earn $500+ Per Year Shopping Online',
    slug: 'rakuten-cash-back-complete-guide',
    excerpt: 'Complete guide to maximizing Rakuten cash back rewards. Learn insider strategies to earn hundreds in real cash while shopping at 2,500+ stores.',
    author: 'Marcus Johnson',
    publishedAt: '2025-06-15',
    readTime: '14 min read',
    category: 'Cash Back',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop',
    featured: false
  },
  {
    id: '6',
    title: 'How to Stack Coupons for Maximum Savings',
    slug: 'how-to-stack-coupons-maximum-savings',
    excerpt: 'Learn the art of coupon stacking to save up to 80% on your purchases. Our comprehensive guide covers store policies, timing, and the best strategies.',
    author: 'Sarah Johnson',
    publishedAt: '2025-06-10',
    readTime: '8 min read',
    category: 'Savings Tips',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop',
    featured: false
  },
  {
    id: '7',
    title: '10 Best Cashback Apps to Use with Coupons',
    slug: 'best-cashback-apps-coupons',
    excerpt: 'Maximize your savings by combining coupons with cashback apps. We review the top 10 apps that work perfectly with coupon strategies.',
    author: 'Mike Chen',
    publishedAt: '2025-06-08',
    readTime: '6 min read',
    category: 'App Reviews',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop',
    featured: false
  }
]

const categories = [
  'All Posts',
  'Browser Extensions',
  'Reviews',
  'Guides',
  'Restaurant Deals',
  'Cash Back',
  'Savings Tips',
  'App Reviews'
]

export const metadata = {
  title: 'DealFinder Blog - Money Saving Tips & Deal Guides',
  description: 'Expert money-saving tips, coupon strategies, and deal guides. Learn how to maximize your savings with our comprehensive blog.',
}

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured)
  const recentPosts = blogPosts.filter(post => !post.featured)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              DealFinder Blog
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expert money-saving tips, coupon strategies, and insider deal guides to help you save more on everything you buy.
            </p>
          </div>
        </div>
      </div>

      {/* Categories Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <button 
                key={category}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  index === 0 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Posts */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">🔥 Featured Articles</h2>
          <p className="text-gray-600">Our most popular money-saving guides</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {featuredPosts.map((post, index) => (
            <Link 
              key={post.id}
              href={`/blog/${post.slug}`}
              className={`group ${index === 0 ? 'lg:col-span-2' : ''}`}
            >
              <article className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden border border-gray-200 group-hover:border-blue-300">
                <div className={`relative ${index === 0 ? 'h-64' : 'h-48'}`}>
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className={`font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors ${
                    index === 0 ? 'text-xl' : 'text-lg'
                  }`}>
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Posts */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Recent Articles</h2>
          <p className="text-gray-600">Latest tips and strategies for smart shopping</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <Link 
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group"
            >
              <article className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden border border-gray-200 group-hover:border-blue-300">
                <div className="relative h-48">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white text-gray-800 px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{post.author}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated with Money-Saving Tips</h2>
            <p className="text-xl mb-8 text-blue-100">
              Get our latest articles and exclusive deals delivered to your inbox weekly.
            </p>
            <div className="max-w-md mx-auto">
              <EmailForm 
                placeholder="Enter your email for weekly tips"
                buttonText="Subscribe to Blog"
                className="[&_input]:bg-white [&_input]:text-gray-900 [&_input]:border-white [&_button]:bg-yellow-400 [&_button]:text-gray-900 [&_button]:hover:bg-yellow-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
