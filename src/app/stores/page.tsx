import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'All Stores - Best Coupons & Deals from Top Retailers | TheCouponKey',
  description: 'Browse coupons and deals from 500+ top stores including Amazon, Target, Nike, Best Buy, and more. Find verified promo codes and exclusive discounts.',
  keywords: ['stores', 'retailers', 'coupons', 'deals', 'discounts', 'promo codes'],
  openGraph: {
    title: 'All Stores - Best Coupons & Deals from Top Retailers',
    description: 'Browse coupons and deals from 500+ top stores. Find verified promo codes and exclusive discounts.',
    type: 'website',
  },
}

// Featured stores with real commission potential
const featuredStores = [
  {
    id: 'amazon',
    name: 'Amazon',
    slug: 'amazon',
    logo_url: 'https://logo.clearbit.com/amazon.com',
    description: 'World\'s largest online retailer with deals on everything',
    coupon_count: 15,
    category: 'General',
    commission_rate: '4-8%'
  },
  {
    id: 'target',
    name: 'Target',
    slug: 'target',
    logo_url: 'https://logo.clearbit.com/target.com',
    description: 'Quality products at great prices for the whole family',
    coupon_count: 12,
    category: 'General',
    commission_rate: '2-6%'
  },
  {
    id: 'nike',
    name: 'Nike',
    slug: 'nike',
    logo_url: 'https://logo.clearbit.com/nike.com',
    description: 'Athletic footwear, apparel and equipment',
    coupon_count: 8,
    category: 'Sports',
    commission_rate: '3-7%'
  },
  {
    id: 'best-buy',
    name: 'Best Buy',
    slug: 'best-buy',
    logo_url: 'https://logo.clearbit.com/bestbuy.com',
    description: 'Electronics, tech and appliances',
    coupon_count: 18,
    category: 'Electronics',
    commission_rate: '1-4%'
  },
  {
    id: 'walmart',
    name: 'Walmart',
    slug: 'walmart',
    logo_url: 'https://logo.clearbit.com/walmart.com',
    description: 'Save money, live better with everyday low prices',
    coupon_count: 9,
    category: 'General',
    commission_rate: '1-4%'
  }
]

// Additional popular stores
const popularStores = [
  { name: 'Macy\'s', slug: 'macys', logo: 'https://logo.clearbit.com/macys.com', deals: 24 },
  { name: 'Home Depot', slug: 'home-depot', logo: 'https://logo.clearbit.com/homedepot.com', deals: 16 },
  { name: 'eBay', slug: 'ebay', logo: 'https://logo.clearbit.com/ebay.com', deals: 31 },
  { name: 'Walmart', slug: 'walmart', logo: 'https://logo.clearbit.com/walmart.com', deals: 19 },
  { name: 'Old Navy', slug: 'old-navy', logo: 'https://logo.clearbit.com/oldnavy.com', deals: 22 },
  { name: 'Kohls', slug: 'kohls', logo: 'https://logo.clearbit.com/kohls.com', deals: 28 },
  { name: 'Nordstrom', slug: 'nordstrom', logo: 'https://logo.clearbit.com/nordstrom.com', deals: 14 },
  { name: 'Gap', slug: 'gap', logo: 'https://logo.clearbit.com/gap.com', deals: 17 }
]

export default function AllStoresPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              500+ Partner Stores
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              All Stores &
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Top Retailers
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Browse exclusive coupons and verified deals from your favorite stores. 
              <span className="font-semibold text-gray-900">Find discounts from 500+ trusted retailers</span> 
              and never pay full price again.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Stores */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">🔥 Featured Stores</h2>
          <p className="text-lg text-gray-600">Our top-performing retailers with the best deals and highest savings</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-20">
          {featuredStores.map((store) => (
            <Link 
              key={store.id}
              href={`/stores/${store.slug}`}
              className="group bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-xl border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative mb-6">
                <img 
                  src={store.logo_url} 
                  alt={`${store.name} logo`}
                  className="w-16 h-16 mx-auto rounded-xl object-contain"
                />
                <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {store.coupon_count}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {store.name}
              </h3>
              
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {store.description}
              </p>
              
              <div className="space-y-2 mb-6">
                <div className="text-sm text-gray-500">
                  <span className="font-medium text-blue-600">{store.coupon_count} active deals</span>
                </div>
                <div className="text-xs text-emerald-600 font-medium">
                  Commission: {store.commission_rate}
                </div>
              </div>
              
              <div className="bg-blue-50 group-hover:bg-blue-100 rounded-lg py-3 px-4 transition-colors">
                <span className="text-blue-700 font-medium text-sm">View Deals →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* All Stores Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Stores</h2>
          <p className="text-lg text-gray-600">Discover deals from hundreds of trusted retailers</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
          {popularStores.map((store) => (
            <Link 
              key={store.slug}
              href={`/stores/${store.slug}`}
              className="group bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg border border-gray-100 hover:border-blue-200 transition-all duration-200 hover:-translate-y-1"
            >
              <img 
                src={store.logo} 
                alt={`${store.name} logo`}
                className="w-12 h-12 mx-auto mb-3 rounded object-contain"
              />
              <h3 className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-blue-600 transition-colors">
                {store.name}
              </h3>
              <p className="text-xs text-gray-500">
                {store.deals} deals
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Browse by Category */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse Stores by Category</h2>
            <p className="text-lg text-gray-600">Find stores in your favorite shopping categories</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'Electronics', icon: '📱', count: 45 },
              { name: 'Fashion', icon: '👕', count: 87 },
              { name: 'Home & Garden', icon: '🏠', count: 62 },
              { name: 'Beauty', icon: '💄', count: 34 },
              { name: 'Sports', icon: '⚽', count: 28 },
              { name: 'Travel', icon: '✈️', count: 19 },
              { name: 'Food', icon: '🍕', count: 41 },
              { name: 'Books', icon: '📚', count: 16 }
            ].map((category) => (
              <Link
                key={category.name}
                href={`/categories/${category.name.toLowerCase().replace(' & ', '-').replace(' ', '-')}`}
                className="group bg-gray-50 rounded-2xl p-6 text-center hover:bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500">{category.count} stores</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Start Saving Today
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Join millions of smart shoppers who save money with verified deals from top retailers.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/categories"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-sm"
              >
                Browse Categories
              </Link>
              <Link 
                href="/blog"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Money-Saving Tips
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
