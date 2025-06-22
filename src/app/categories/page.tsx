import Link from 'next/link'

const categories = [
  { 
    id: '1', 
    name: 'Electronics', 
    slug: 'electronics', 
    description: 'Latest tech gadgets, computers, phones, and electronics deals',
    icon: '📱',
    dealCount: 156,
    storeCount: 25,
    is_featured: true
  },
  { 
    id: '2', 
    name: 'Fashion', 
    slug: 'fashion', 
    description: 'Clothing, shoes, accessories and fashion deals from top brands',
    icon: '👕',
    dealCount: 243,
    storeCount: 34,
    is_featured: true
  },
  { 
    id: '3', 
    name: 'Home & Garden', 
    slug: 'home-garden', 
    description: 'Home improvement, furniture, decor and garden supplies',
    icon: '🏠',
    dealCount: 189,
    storeCount: 28,
    is_featured: true
  },
  { 
    id: '4', 
    name: 'Travel', 
    slug: 'travel', 
    description: 'Hotels, flights, car rentals and vacation bookings',
    icon: '✈️',
    dealCount: 95,
    storeCount: 15,
    is_featured: true
  },
  { 
    id: '5', 
    name: 'Beauty & Health', 
    slug: 'beauty-health', 
    description: 'Cosmetics, skincare, supplements and health products',
    icon: '💄',
    dealCount: 134,
    storeCount: 22,
    is_featured: false
  },
  { 
    id: '6', 
    name: 'Sports & Outdoors', 
    slug: 'sports-outdoors', 
    description: 'Athletic gear, outdoor equipment and fitness items',
    icon: '⚽',
    dealCount: 112,
    storeCount: 18,
    is_featured: false
  },
  { 
    id: '7', 
    name: 'Food & Dining', 
    slug: 'food-dining', 
    description: 'Restaurants, food delivery and grocery services',
    icon: '🍕',
    dealCount: 87,
    storeCount: 31,
    is_featured: false
  },
  { 
    id: '8', 
    name: 'Software & Apps', 
    slug: 'software-apps', 
    description: 'Digital software, apps and online services',
    icon: '💻',
    dealCount: 76,
    storeCount: 12,
    is_featured: false
  },
  { 
    id: '9', 
    name: 'Books & Education', 
    slug: 'books-education', 
    description: 'Books, courses, educational materials and learning platforms',
    icon: '📚',
    dealCount: 43,
    storeCount: 9,
    is_featured: false
  },
  { 
    id: '10', 
    name: 'Entertainment', 
    slug: 'entertainment', 
    description: 'Streaming services, games, movies and entertainment',
    icon: '🎮',
    dealCount: 68,
    storeCount: 16,
    is_featured: false
  }
]

export const metadata = {
  title: 'All Categories - DealFinder | Shop by Category',
  description: 'Browse deals by category. Find coupons for Electronics, Fashion, Travel, Home & Garden, Beauty, Sports and more.',
}

export default function CategoriesPage() {
  const featuredCategories = categories.filter(cat => cat.is_featured)
  const otherCategories = categories.filter(cat => !cat.is_featured)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Shop by Category
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find the best deals organized by category. From electronics to fashion, we have coupons for everything you need.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">🔥 Popular Categories</h2>
          <p className="text-gray-600">Our most popular shopping categories with the best deals</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {featuredCategories.map((category) => (
            <Link 
              key={category.id}
              href={`/categories/${category.slug}`}
              className="group"
            >
              <div className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 group-hover:border-blue-300 group-hover:-translate-y-1">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-xl flex items-center justify-center text-3xl group-hover:bg-blue-200 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {category.description}
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">{category.dealCount}</div>
                    <div className="text-xs text-gray-500">Deals</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">{category.storeCount}</div>
                    <div className="text-xs text-gray-500">Stores</div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* All Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">All Categories</h2>
          <p className="text-gray-600">Explore our complete range of shopping categories</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherCategories.map((category) => (
            <Link 
              key={category.id}
              href={`/categories/${category.slug}`}
              className="group"
            >
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200 group-hover:border-blue-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-2xl group-hover:bg-blue-100 transition-colors">
                    {category.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {category.dealCount} deals • {category.storeCount} stores
                    </p>
                  </div>
                  <div className="text-gray-400 group-hover:text-blue-600 transition-colors">
                    →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Check out all our partner stores or contact us for specific deals
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/stores"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Browse All Stores
              </Link>
              <Link 
                href="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
