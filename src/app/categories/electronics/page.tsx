'use client'

import Link from 'next/link'
import CouponCard from '@/components/coupon-card'
import EmailForm from '@/components/email-form'

// Demo electronics deals data
const electronicsDeals = [
  {
    id: 'elec-1',
    title: 'Extra 25% Off Gaming Laptops',
    code: 'GAME25',
    type: 'code' as const,
    discount_type: 'percentage' as const,
    discount_value: 25,
    affiliate_url: 'https://bestbuy.com',
    store_id: 'best-buy',
    category_id: 'electronics',
    description: 'Save an extra 25% on select gaming laptops from ASUS, MSI, and Alienware',
    is_featured: true,
    is_verified: true,
    click_count: 1456,
    success_count: 387,
    created_at: '',
    updated_at: '',
    expires_at: '2025-08-31',
    store: {
      id: 'best-buy',
      name: 'Best Buy',
      slug: 'best-buy',
      logo_url: 'https://logo.clearbit.com/bestbuy.com',
      website_url: 'https://bestbuy.com',
      category_id: 'electronics',
      is_featured: true,
      created_at: '',
      updated_at: '',
      coupons: [],
      coupon_count: 12,
      category: { id: 'electronics', name: 'Electronics', slug: 'electronics', is_featured: true, created_at: '' }
    },
    category: { id: 'electronics', name: 'Electronics', slug: 'electronics', is_featured: true, created_at: '' }
  },
  {
    id: 'elec-2',
    title: 'Up to 40% Off Smartphones',
    type: 'deal' as const,
    discount_type: 'percentage' as const,
    discount_value: 40,
    affiliate_url: 'https://amazon.com',
    store_id: 'amazon',
    category_id: 'electronics',
    description: 'Huge discounts on latest iPhone, Samsung Galaxy, and Google Pixel devices',
    is_featured: true,
    is_verified: true,
    click_count: 2134,
    success_count: 523,
    created_at: '',
    updated_at: '',
    expires_at: '2025-07-15',
    store: {
      id: 'amazon',
      name: 'Amazon',
      slug: 'amazon',
      logo_url: 'https://logo.clearbit.com/amazon.com',
      website_url: 'https://amazon.com',
      category_id: 'electronics',
      is_featured: true,
      created_at: '',
      updated_at: '',
      coupons: [],
      coupon_count: 15,
      category: { id: 'electronics', name: 'Electronics', slug: 'electronics', is_featured: true, created_at: '' }
    },
    category: { id: 'electronics', name: 'Electronics', slug: 'electronics', is_featured: true, created_at: '' }
  },
  {
    id: 'elec-3',
    title: '$50 Off Tablets Over $200',
    code: 'TAB50',
    type: 'code' as const,
    discount_type: 'fixed' as const,
    discount_value: 50,
    affiliate_url: 'https://target.com',
    store_id: 'target',
    category_id: 'electronics',
    description: 'Get $50 off iPad, Samsung Galaxy Tab, and Surface tablets',
    is_featured: true,
    is_verified: true,
    click_count: 834,
    success_count: 198,
    created_at: '',
    updated_at: '',
    expires_at: '2025-09-30',
    store: {
      id: 'target',
      name: 'Target',
      slug: 'target',
      logo_url: 'https://logo.clearbit.com/target.com',
      website_url: 'https://target.com',
      category_id: 'electronics',
      is_featured: true,
      created_at: '',
      updated_at: '',
      coupons: [],
      coupon_count: 18,
      category: { id: 'electronics', name: 'Electronics', slug: 'electronics', is_featured: true, created_at: '' }
    },
    category: { id: 'electronics', name: 'Electronics', slug: 'electronics', is_featured: true, created_at: '' }
  },
  {
    id: 'elec-4',
    title: 'Free Shipping on All Electronics',
    type: 'deal' as const,
    discount_type: 'free_shipping' as const,
    affiliate_url: 'https://newegg.com',
    store_id: 'newegg',
    category_id: 'electronics',
    description: 'Free standard shipping on all electronics orders, no minimum required',
    is_featured: false,
    is_verified: true,
    click_count: 1267,
    success_count: 342,
    created_at: '',
    updated_at: '',
    store: {
      id: 'newegg',
      name: 'Newegg',
      slug: 'newegg',
      logo_url: 'https://logo.clearbit.com/newegg.com',
      website_url: 'https://newegg.com',
      category_id: 'electronics',
      is_featured: true,
      created_at: '',
      updated_at: '',
      coupons: [],
      coupon_count: 8,
      category: { id: 'electronics', name: 'Electronics', slug: 'electronics', is_featured: true, created_at: '' }
    },
    category: { id: 'electronics', name: 'Electronics', slug: 'electronics', is_featured: true, created_at: '' }
  }
]

export default function ElectronicsCategoryPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* SEO-Optimized Header */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 border border-blue-200 rounded-full">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              <span className="text-sm font-medium text-blue-700">Top Category</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Electronics Deals & Coupons
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Save up to 60% on the latest tech with verified coupons for laptops, smartphones, gaming gear, and electronics accessories from top brands.
            </p>
            
            <div className="grid grid-cols-4 gap-8 bg-white rounded-2xl p-8 shadow-sm max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">50+</div>
                <div className="text-sm text-gray-600">Active Deals</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">60%</div>
                <div className="text-sm text-gray-600">Max Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">15</div>
                <div className="text-sm text-gray-600">Top Stores</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">4.9★</div>
                <div className="text-sm text-gray-600">User Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="space-y-20">
          
          {/* Electronics Subcategories */}
          <section>
            <h2 className="text-4xl font-bold text-gray-900 mb-12">Shop Electronics by Type</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { name: 'Laptops', deals: '25+ deals' },
                { name: 'Smartphones', deals: '18+ deals' },
                { name: 'Tablets', deals: '12+ deals' },
                { name: 'Gaming', deals: '30+ deals' },
                { name: 'Audio', deals: '15+ deals' },
                { name: 'Smart Home', deals: '20+ deals' }
              ].map((category) => (
                <div
                  key={category.name}
                  className="group bg-gray-50 rounded-2xl p-6 text-center hover:bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                    {category.name}
                  </h3>
                  <p className="text-xs text-gray-500">{category.deals}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Featured Electronics Deals */}
          <section>
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Today's Best Electronics Deals</h2>
                <p className="text-xl text-gray-600">Hand-picked by our tech experts and updated daily</p>
              </div>
              <div className="text-sm text-gray-500">
                Last updated: {new Date().toLocaleDateString('en-US', { 
                  month: 'long', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {electronicsDeals.map((deal) => (
                <CouponCard key={deal.id} coupon={deal} />
              ))}
            </div>
          </section>

          {/* Top Electronics Stores */}
          <section>
            <h2 className="text-4xl font-bold text-gray-900 mb-12">Top Electronics Stores</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {[
                { name: 'Best Buy', logo: 'https://logo.clearbit.com/bestbuy.com', deals: '25 deals', link: '/stores/best-buy' },
                { name: 'Amazon', logo: 'https://logo.clearbit.com/amazon.com', deals: '40+ deals', link: '/stores/amazon' },
                { name: 'Newegg', logo: 'https://logo.clearbit.com/newegg.com', deals: '15 deals', link: '/stores/newegg' },
                { name: 'B&H Photo', logo: 'https://logo.clearbit.com/bhphotovideo.com', deals: '12 deals', link: '/stores/bh-photo' },
                { name: 'Target', logo: 'https://logo.clearbit.com/target.com', deals: '8 deals', link: '/stores/target' }
              ].map((store) => (
                <Link
                  key={store.name}
                  href={store.link}
                  className="group bg-white border border-gray-200 rounded-2xl p-6 text-center hover:shadow-lg hover:border-gray-300 transition-all duration-300 hover:-translate-y-1"
                >
                  <img 
                    src={store.logo} 
                    alt={`${store.name} logo`}
                    className="w-12 h-12 mx-auto mb-3 rounded object-contain"
                  />
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                    {store.name}
                  </h3>
                  <p className="text-xs text-gray-500">{store.deals}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* Electronics Buying Guide */}
          <section>
            <h2 className="text-4xl font-bold text-gray-900 mb-12">Smart Electronics Shopping Tips</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-emerald-50 border-l-4 border-emerald-400 p-6">
                  <h3 className="font-semibold text-emerald-800 mb-2">Best Times to Buy</h3>
                  <p className="text-emerald-700 text-sm">
                    Electronics prices drop during Black Friday, back-to-school season (July-August), and when new models launch. Set price alerts for expensive items.
                  </p>
                </div>
                
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
                  <h3 className="font-semibold text-blue-800 mb-2">Research Before Buying</h3>
                  <p className="text-blue-700 text-sm">
                    Check reviews, compare specs, and use price tracking tools. Don't forget to look for manufacturer rebates and student discounts.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-purple-50 border-l-4 border-purple-400 p-6">
                  <h3 className="font-semibold text-purple-800 mb-2">Warranty & Protection</h3>
                  <p className="text-purple-700 text-sm">
                    Consider extended warranties for expensive electronics. Some credit cards offer purchase protection and extended warranty coverage.
                  </p>
                </div>
                
                <div className="bg-amber-50 border-l-4 border-amber-400 p-6">
                  <h3 className="font-semibold text-amber-800 mb-2">Payment Strategies</h3>
                  <p className="text-amber-700 text-sm">
                    Use cashback credit cards for electronics purchases. Stack store credit cards with manufacturer coupons for maximum savings.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Trending Electronics */}
          <section>
            <h2 className="text-4xl font-bold text-gray-900 mb-12">Trending Electronics This Month</h2>
            
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Gaming Consoles</h3>
                  <p className="text-gray-600 text-sm">PS5, Xbox Series X, and Nintendo Switch deals are hot this month</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Latest Smartphones</h3>
                  <p className="text-gray-600 text-sm">iPhone 15 and Samsung Galaxy S24 seeing significant discounts</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Work-from-Home Tech</h3>
                  <p className="text-gray-600 text-sm">Laptops, monitors, and accessories for remote work setups</p>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <div className="text-center text-white space-y-8">
            <h2 className="text-3xl font-bold">Never Miss a Tech Deal</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Get instant alerts for the best electronics deals, exclusive tech coupons, and early access to sales events.
            </p>
            <div className="max-w-md mx-auto">
              <EmailForm 
                placeholder="Enter your email for tech deals"
                buttonText="Get Electronics Deals"
                className="[&_input]:bg-white [&_input]:text-gray-900 [&_input]:border-0 [&_input]:rounded-l-lg [&_button]:bg-yellow-400 [&_button]:text-gray-900 [&_button]:hover:bg-yellow-300 [&_button]:font-semibold [&_button]:rounded-r-lg"
              />
            </div>
            <p className="text-sm text-blue-200">
              Exclusive tech deals • Price drop alerts • Unsubscribe anytime
            </p>
          </div>
        </div>
      </div>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Electronics Coupons & Deals - Save Up to 60% on Tech",
            "description": "Find the best electronics coupons and deals. Save up to 60% on laptops, smartphones, tablets, gaming gear, and tech accessories from top brands.",
            "url": "https://dealfinder.com/categories/electronics",
            "mainEntity": {
              "@type": "ItemList",
              "name": "Electronics Deals",
              "numberOfItems": electronicsDeals.length,
              "itemListElement": electronicsDeals.map((deal, index) => ({
                "@type": "Offer",
                "position": index + 1,
                "name": deal.title,
                "description": deal.description,
                "seller": {
                  "@type": "Organization",
                  "name": deal.store.name
                }
              }))
            }
          })
        }}
      />
    </div>
  )
}
