import CouponCard from '@/components/coupon-card'
import Link from 'next/link'

// Demo Walmart data with high-value deals
const walmartStore = {
  id: '5',
  name: 'Walmart',
  slug: 'walmart',
  logo_url: 'https://logo.clearbit.com/walmart.com',
  website_url: 'https://walmart.com',
  category_id: '3',
  is_featured: true,
  affiliate_network: 'Impact Radius',
  created_at: '',
  updated_at: '',
  description: 'America\'s largest retailer offering everyday low prices on groceries, electronics, clothing, home goods, pharmacy, and more with convenient pickup and delivery options.',
  founded: '1962',
  headquarters: 'Bentonville, AR',
  category: { id: '3', name: 'General Merchandise', slug: 'general-merchandise', is_featured: true, created_at: '' },
  coupons: [
    {
      id: '101',
      title: 'Free Shipping on Orders $35+',
      type: 'deal' as const,
      discount_type: 'free_shipping' as const,
      affiliate_url: 'https://walmart.com?tag=thecouponkey',
      store_id: '5',
      category_id: '3',
      description: 'Get free shipping on orders of $35 or more. No membership required.',
      is_featured: true,
      is_verified: true,
      click_count: 1247,
      success_count: 432,
      created_at: '',
      updated_at: '',
      store: { id: '5', name: 'Walmart', slug: 'walmart', logo_url: 'https://logo.clearbit.com/walmart.com', website_url: 'https://walmart.com', category_id: '3', is_featured: true, created_at: '', updated_at: '' },
      category: { id: '3', name: 'General Merchandise', slug: 'general-merchandise', is_featured: true, created_at: '' }
    },
    {
      id: '102',
      title: 'Up to 70% Off Clearance Items',
      type: 'deal' as const,
      discount_type: 'percentage' as const,
      discount_value: 70,
      affiliate_url: 'https://walmart.com/clearance?tag=thecouponkey',
      store_id: '5',
      category_id: '3',
      description: 'Massive savings on clearance items across all departments - electronics, clothing, home goods and more.',
      is_featured: true,
      is_verified: true,
      click_count: 892,
      success_count: 234,
      created_at: '',
      updated_at: '',
      expires_at: '2025-12-31',
      store: { id: '5', name: 'Walmart', slug: 'walmart', logo_url: 'https://logo.clearbit.com/walmart.com', website_url: 'https://walmart.com', category_id: '3', is_featured: true, created_at: '', updated_at: '' },
      category: { id: '3', name: 'General Merchandise', slug: 'general-merchandise', is_featured: true, created_at: '' }
    },
    {
      id: '103',
      title: '$10 Off $50+ Grocery Pickup Orders',
      code: 'PICKUP10',
      type: 'code' as const,
      discount_type: 'fixed' as const,
      discount_value: 10,
      affiliate_url: 'https://walmart.com/grocery?tag=thecouponkey',
      store_id: '5',
      category_id: '3',
      description: 'Save $10 on grocery pickup orders of $50 or more. Perfect for weekly shopping.',
      is_featured: false,
      is_verified: true,
      click_count: 567,
      success_count: 123,
      created_at: '',
      updated_at: '',
      expires_at: '2025-08-31',
      store: { id: '5', name: 'Walmart', slug: 'walmart', logo_url: 'https://logo.clearbit.com/walmart.com', website_url: 'https://walmart.com', category_id: '3', is_featured: true, created_at: '', updated_at: '' },
      category: { id: '3', name: 'General Merchandise', slug: 'general-merchandise', is_featured: true, created_at: '' }
    },
    {
      id: '104',
      title: 'Walmart+ Free Trial - Free Delivery',
      type: 'deal' as const,
      discount_type: 'other' as const,
      affiliate_url: 'https://walmart.com/plus?tag=thecouponkey',
      store_id: '5',
      category_id: '3',
      description: 'Try Walmart+ free for 30 days. Get unlimited free delivery, member prices on fuel, and exclusive deals.',
      is_featured: true,
      is_verified: true,
      click_count: 1456,
      success_count: 389,
      created_at: '',
      updated_at: '',
      store: { id: '5', name: 'Walmart', slug: 'walmart', logo_url: 'https://logo.clearbit.com/walmart.com', website_url: 'https://walmart.com', category_id: '3', is_featured: true, created_at: '', updated_at: '' },
      category: { id: '3', name: 'General Merchandise', slug: 'general-merchandise', is_featured: true, created_at: '' }
    }
  ],
  coupon_count: 18
}

export default function WalmartPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Store Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            {/* Store Logo */}
            <div className="w-24 h-24 bg-gray-50 rounded-2xl flex items-center justify-center overflow-hidden flex-shrink-0">
              <img 
                src={walmartStore.logo_url} 
                alt="Walmart logo"
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Store Info */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mb-4">
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">Walmart Coupons & Deals</h1>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mt-2 md:mt-0">
                  ⭐ America's #1 Retailer
                </span>
              </div>
              
              <p className="text-lg text-gray-600 mb-6 max-w-2xl">
                Save on everything at Walmart with verified coupons and exclusive deals. From groceries to electronics, 
                find the best prices on millions of items with free shipping and convenient pickup options.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-6">
                <div>
                  <div className="text-2xl font-bold text-blue-600">{walmartStore.coupon_count}</div>
                  <div className="text-sm text-gray-500">Active Deals</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">1962</div>
                  <div className="text-sm text-gray-500">Founded</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">$35+</div>
                  <div className="text-sm text-gray-500">Free Shipping</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-600">★★★★★</div>
                  <div className="text-sm text-gray-500">User Rating</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <a 
                  href="https://walmart.com?tag=thecouponkey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Shop Walmart Now →
                </a>
                <Link 
                  href="/categories"
                  className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                >
                  Browse Categories
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-4">
            <li>
              <Link href="/" className="text-gray-500 hover:text-gray-700">
                Home
              </Link>
            </li>
            <li>
              <span className="text-gray-400 mx-2">/</span>
              <Link href="/stores" className="text-gray-500 hover:text-gray-700">
                Stores
              </Link>
            </li>
            <li>
              <span className="text-gray-400 mx-2">/</span>
              <span className="text-gray-900 font-medium">Walmart</span>
            </li>
          </ol>
        </nav>
      </div>

      {/* Current Deals */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">🔥 Current Walmart Deals</h2>
          <p className="text-gray-600">All verified and up-to-date Walmart coupons and deals</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {walmartStore.coupons.map((coupon) => (
            <CouponCard key={coupon.id} coupon={coupon} />
          ))}
        </div>

        {/* Money-Saving Tips */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">💡 Walmart Money-Saving Tips</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Sign up for Walmart+</h4>
                  <p className="text-gray-600 text-sm">Get unlimited free delivery, member prices on fuel, and exclusive deals for $12.95/month.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Use Grocery Pickup</h4>
                  <p className="text-gray-600 text-sm">Save time and money with free grocery pickup on orders $35+. No markup on prices.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Check Rollback Prices</h4>
                  <p className="text-gray-600 text-sm">Look for items marked "Rollback" for temporary price reductions on popular products.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Download the Walmart App</h4>
                  <p className="text-gray-600 text-sm">Get exclusive mobile deals, easy reordering, and store maps to find items quickly.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Price Match Guarantee</h4>
                  <p className="text-gray-600 text-sm">Walmart matches competitors' prices on identical items. Bring proof of the lower price.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Shop Clearance Sections</h4>
                  <p className="text-gray-600 text-sm">Find deep discounts in clearance areas at the end of aisles and seasonal sections.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Store Info */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* About Walmart */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">About Walmart</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 1962 by Sam Walton, Walmart has grown to become the world's largest retailer, 
                  serving millions of customers worldwide. Known for their "Everyday Low Price" philosophy, 
                  Walmart offers an extensive selection of groceries, electronics, clothing, home goods, 
                  pharmacy services, and more.
                </p>
                <p>
                  With over 4,700 stores in the United States and a robust online platform, Walmart provides 
                  convenient shopping options including free pickup, same-day delivery, and the Walmart+ membership 
                  program. The company is committed to helping customers save money and live better.
                </p>
                <p>
                  All Walmart coupons on The Coupon Key are tested and verified by our team to ensure they work 
                  when you need them. We update deals daily and remove expired offers immediately to provide 
                  you with the most current savings opportunities.
                </p>
              </div>
            </div>

            {/* Store Quick Facts */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Store Information</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600">Founded</span>
                  <span className="font-medium">1962</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600">Headquarters</span>
                  <span className="font-medium">Bentonville, AR</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600">Stores Worldwide</span>
                  <span className="font-medium">10,500+</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600">Free Shipping</span>
                  <span className="font-medium">Orders $35+</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-gray-600">Active Deals</span>
                  <span className="font-medium text-blue-600">{walmartStore.coupon_count}</span>
                </div>
              </div>

              {/* Visit Store Button */}
              <div className="mt-8">
                <a 
                  href="https://walmart.com?tag=thecouponkey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
                >
                  Shop Walmart Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter CTA */}
      <div className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Get Walmart Deal Alerts</h2>
            <p className="text-xl mb-8 text-blue-100">
              Be the first to know when new Walmart coupons and deals are available.
            </p>
            <Link 
              href="/contact"
              className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
            >
              Set Up Alerts
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
