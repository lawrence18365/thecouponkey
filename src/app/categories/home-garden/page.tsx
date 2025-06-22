'use client'

import Link from 'next/link'
import CouponCard from '@/components/coupon-card'
import EmailForm from '@/components/email-form'

// Demo home & garden deals data
const homeGardenDeals = [
  {
    id: 'hg-1',
    title: 'Extra 25% Off Outdoor Furniture',
    code: 'PATIO25',
    type: 'code' as const,
    discount_type: 'percentage' as const,
    discount_value: 25,
    affiliate_url: 'https://target.com',
    store_id: 'target',
    category_id: 'home-garden',
    description: 'Save an extra 25% on patio sets, outdoor dining, and garden furniture',
    is_featured: true,
    is_verified: true,
    click_count: 1567,
    success_count: 394,
    created_at: '',
    updated_at: '',
    expires_at: '2025-08-31',
    store: {
      id: 'target',
      name: 'Target',
      slug: 'target',
      logo_url: 'https://logo.clearbit.com/target.com',
      website_url: 'https://target.com',
      category_id: 'home-garden',
      is_featured: true,
      created_at: '',
      updated_at: '',
      coupons: [],
      coupon_count: 18,
      category: { id: 'home-garden', name: 'Home & Garden', slug: 'home-garden', is_featured: true, created_at: '' }
    },
    category: { id: 'home-garden', name: 'Home & Garden', slug: 'home-garden', is_featured: true, created_at: '' }
  },
  {
    id: 'hg-2',
    title: 'Up to 40% Off Home Decor',
    type: 'deal' as const,
    discount_type: 'percentage' as const,
    discount_value: 40,
    affiliate_url: 'https://wayfair.com',
    store_id: 'wayfair',
    category_id: 'home-garden',
    description: 'Huge savings on furniture, rugs, lighting, and home accessories',
    is_featured: true,
    is_verified: true,
    click_count: 2341,
    success_count: 567,
    created_at: '',
    updated_at: '',
    expires_at: '2025-07-30',
    store: {
      id: 'wayfair',
      name: 'Wayfair',
      slug: 'wayfair',
      logo_url: 'https://logo.clearbit.com/wayfair.com',
      website_url: 'https://wayfair.com',
      category_id: 'home-garden',
      is_featured: true,
      created_at: '',
      updated_at: '',
      coupons: [],
      coupon_count: 22,
      category: { id: 'home-garden', name: 'Home & Garden', slug: 'home-garden', is_featured: true, created_at: '' }
    },
    category: { id: 'home-garden', name: 'Home & Garden', slug: 'home-garden', is_featured: true, created_at: '' }
  },
  {
    id: 'hg-3',
    title: '$50 Off Orders Over $200',
    code: 'HOME50',
    type: 'code' as const,
    discount_type: 'fixed' as const,
    discount_value: 50,
    affiliate_url: 'https://homedepot.com',
    store_id: 'home-depot',
    category_id: 'home-garden',
    description: 'Get $50 off when you spend $200 or more on home improvement items',
    is_featured: true,
    is_verified: true,
    click_count: 1789,
    success_count: 423,
    created_at: '',
    updated_at: '',
    expires_at: '2025-09-15',
    store: {
      id: 'home-depot',
      name: 'Home Depot',
      slug: 'home-depot',
      logo_url: 'https://logo.clearbit.com/homedepot.com',
      website_url: 'https://homedepot.com',
      category_id: 'home-garden',
      is_featured: true,
      created_at: '',
      updated_at: '',
      coupons: [],
      coupon_count: 15,
      category: { id: 'home-garden', name: 'Home & Garden', slug: 'home-garden', is_featured: true, created_at: '' }
    },
    category: { id: 'home-garden', name: 'Home & Garden', slug: 'home-garden', is_featured: true, created_at: '' }
  },
  {
    id: 'hg-4',
    title: 'Free Delivery on Large Items',
    type: 'deal' as const,
    discount_type: 'free_shipping' as const,
    affiliate_url: 'https://lowes.com',
    store_id: 'lowes',
    category_id: 'home-garden',
    description: 'Free delivery on appliances, furniture, and large home improvement items',
    is_featured: false,
    is_verified: true,
    click_count: 1234,
    success_count: 345,
    created_at: '',
    updated_at: '',
    store: {
      id: 'lowes',
      name: 'Lowe\'s',
      slug: 'lowes',
      logo_url: 'https://logo.clearbit.com/lowes.com',
      website_url: 'https://lowes.com',
      category_id: 'home-garden',
      is_featured: true,
      created_at: '',
      updated_at: '',
      coupons: [],
      coupon_count: 12,
      category: { id: 'home-garden', name: 'Home & Garden', slug: 'home-garden', is_featured: true, created_at: '' }
    },
    category: { id: 'home-garden', name: 'Home & Garden', slug: 'home-garden', is_featured: true, created_at: '' }
  }
]

export default function HomeGardenCategoryPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* SEO-Optimized Header */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 border border-green-200 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span className="text-sm font-medium text-green-700">Popular Category</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Home & Garden Deals
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Save up to 60% on furniture, decor, appliances, and garden essentials with verified coupons from top home improvement retailers.
            </p>
            
            <div className="grid grid-cols-4 gap-8 bg-white rounded-2xl p-8 shadow-sm max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-1">65+</div>
                <div className="text-sm text-gray-600">Active Deals</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-1">60%</div>
                <div className="text-sm text-gray-600">Max Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-1">20</div>
                <div className="text-sm text-gray-600">Top Stores</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-1">4.7★</div>
                <div className="text-sm text-gray-600">User Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="space-y-20">
          
          {/* Home & Garden Subcategories */}
          <section>
            <h2 className="text-4xl font-bold text-gray-900 mb-12">Shop Home & Garden by Category</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { name: 'Furniture', deals: '25+ deals' },
                { name: 'Home Decor', deals: '30+ deals' },
                { name: 'Appliances', deals: '18+ deals' },
                { name: 'Garden & Outdoor', deals: '22+ deals' },
                { name: 'Tools', deals: '15+ deals' },
                { name: 'Lighting', deals: '20+ deals' }
              ].map((category) => (
                <div
                  key={category.name}
                  className="group bg-gray-50 rounded-2xl p-6 text-center hover:bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                >
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors mb-1">
                    {category.name}
                  </h3>
                  <p className="text-xs text-gray-500">{category.deals}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Featured Home & Garden Deals */}
          <section>
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Today's Best Home Deals</h2>
                <p className="text-xl text-gray-600">Curated by our home improvement experts and updated daily</p>
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
              {homeGardenDeals.map((deal) => (
                <CouponCard key={deal.id} coupon={deal} />
              ))}
            </div>
          </section>

          {/* Top Home & Garden Stores */}
          <section>
            <h2 className="text-4xl font-bold text-gray-900 mb-12">Top Home Improvement Stores</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {[
                { name: 'Home Depot', logo: 'https://logo.clearbit.com/homedepot.com', deals: '15 deals', link: '/stores/home-depot' },
                { name: 'Lowe\'s', logo: 'https://logo.clearbit.com/lowes.com', deals: '12 deals', link: '/stores/lowes' },
                { name: 'Wayfair', logo: 'https://logo.clearbit.com/wayfair.com', deals: '22 deals', link: '/stores/wayfair' },
                { name: 'Target', logo: 'https://logo.clearbit.com/target.com', deals: '18 deals', link: '/stores/target' },
                { name: 'IKEA', logo: 'https://logo.clearbit.com/ikea.com', deals: '8 deals', link: '/stores/ikea' }
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
                  <h3 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors mb-1">
                    {store.name}
                  </h3>
                  <p className="text-xs text-gray-500">{store.deals}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* Home Improvement Guide */}
          <section>
            <h2 className="text-4xl font-bold text-gray-900 mb-12">Smart Home Shopping Tips</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-emerald-50 border-l-4 border-emerald-400 p-6">
                  <h3 className="font-semibold text-emerald-800 mb-2">Seasonal Timing</h3>
                  <p className="text-emerald-700 text-sm">
                    Spring and fall offer the best deals on outdoor furniture and garden supplies. End-of-season clearances provide huge savings.
                  </p>
                </div>
                
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
                  <h3 className="font-semibold text-blue-800 mb-2">Measure First</h3>
                  <p className="text-blue-700 text-sm">
                    Always measure your space before buying furniture or appliances. Check doorways, stairs, and clearances to avoid costly returns.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-purple-50 border-l-4 border-purple-400 p-6">
                  <h3 className="font-semibold text-purple-800 mb-2">Compare Reviews</h3>
                  <p className="text-purple-700 text-sm">
                    Read customer reviews for furniture and appliances. Look for comments about durability, assembly, and customer service experiences.
                  </p>
                </div>
                
                <div className="bg-amber-50 border-l-4 border-amber-400 p-6">
                  <h3 className="font-semibold text-amber-800 mb-2">Delivery Options</h3>
                  <p className="text-amber-700 text-sm">
                    Consider delivery and assembly costs for large items. Many stores offer free delivery promotions during sales events.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Popular Home Projects */}
          <section>
            <h2 className="text-4xl font-bold text-gray-900 mb-12">Popular Home Projects This Season</h2>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Outdoor Living</h3>
                  <p className="text-gray-600 text-sm">Patio furniture, grills, and outdoor decor for summer entertaining</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Kitchen Updates</h3>
                  <p className="text-gray-600 text-sm">New appliances, cabinet hardware, and storage solutions</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Smart Home Tech</h3>
                  <p className="text-gray-600 text-sm">Smart lighting, security systems, and automated home features</p>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <div className="text-center text-white space-y-8">
            <h2 className="text-3xl font-bold">Transform Your Home for Less</h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Get instant alerts for the best home & garden deals, exclusive furniture coupons, and seasonal sale notifications.
            </p>
            <div className="max-w-md mx-auto">
              <EmailForm 
                placeholder="Enter your email for home deals"
                buttonText="Get Home Deals"
                className="[&_input]:bg-white [&_input]:text-gray-900 [&_input]:border-0 [&_input]:rounded-l-lg [&_button]:bg-yellow-400 [&_button]:text-gray-900 [&_button]:hover:bg-yellow-300 [&_button]:font-semibold [&_button]:rounded-r-lg"
              />
            </div>
            <p className="text-sm text-green-200">
              Exclusive home deals • Seasonal sale alerts • Unsubscribe anytime
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
            "name": "Home & Garden Coupons & Deals - Save Up to 60%",
            "description": "Find the best home & garden coupons and deals. Save up to 60% on furniture, decor, appliances, and garden essentials from top retailers.",
            "url": "https://thecouponkey.com/categories/home-garden",
            "mainEntity": {
              "@type": "ItemList",
              "name": "Home & Garden Deals",
              "numberOfItems": homeGardenDeals.length,
              "itemListElement": homeGardenDeals.map((deal, index) => ({
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
