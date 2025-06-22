'use client'

import Link from 'next/link'
import CouponCard from '@/components/coupon-card'
import EmailForm from '@/components/email-form'

// Demo beauty deals data
const beautyDeals = [
  {
    id: 'beauty-1',
    title: 'Extra 30% Off Skincare',
    code: 'SKIN30',
    type: 'code' as const,
    discount_type: 'percentage' as const,
    discount_value: 30,
    affiliate_url: 'https://sephora.com',
    store_id: 'sephora',
    category_id: 'beauty',
    description: 'Save an extra 30% on premium skincare products from top brands',
    is_featured: true,
    is_verified: true,
    click_count: 2456,
    success_count: 612,
    created_at: '',
    updated_at: '',
    expires_at: '2025-08-15',
    store: {
      id: 'sephora',
      name: 'Sephora',
      slug: 'sephora',
      logo_url: 'https://logo.clearbit.com/sephora.com',
      website_url: 'https://sephora.com',
      category_id: 'beauty',
      is_featured: true,
      created_at: '',
      updated_at: '',
      coupons: [],
      coupon_count: 25,
      category: { id: 'beauty', name: 'Beauty', slug: 'beauty', is_featured: true, created_at: '' }
    },
    category: { id: 'beauty', name: 'Beauty', slug: 'beauty', is_featured: true, created_at: '' }
  },
  {
    id: 'beauty-2',
    title: 'Up to 50% Off Makeup',
    type: 'deal' as const,
    discount_type: 'percentage' as const,
    discount_value: 50,
    affiliate_url: 'https://ulta.com',
    store_id: 'ulta',
    category_id: 'beauty',
    description: 'Huge savings on makeup, foundations, lipsticks, and eye palettes',
    is_featured: true,
    is_verified: true,
    click_count: 1987,
    success_count: 478,
    created_at: '',
    updated_at: '',
    expires_at: '2025-07-31',
    store: {
      id: 'ulta',
      name: 'Ulta Beauty',
      slug: 'ulta',
      logo_url: 'https://logo.clearbit.com/ulta.com',
      website_url: 'https://ulta.com',
      category_id: 'beauty',
      is_featured: true,
      created_at: '',
      updated_at: '',
      coupons: [],
      coupon_count: 22,
      category: { id: 'beauty', name: 'Beauty', slug: 'beauty', is_featured: true, created_at: '' }
    },
    category: { id: 'beauty', name: 'Beauty', slug: 'beauty', is_featured: true, created_at: '' }
  },
  {
    id: 'beauty-3',
    title: '$20 Off Orders Over $75',
    code: 'BEAUTY20',
    type: 'code' as const,
    discount_type: 'fixed' as const,
    discount_value: 20,
    affiliate_url: 'https://target.com',
    store_id: 'target',
    category_id: 'beauty',
    description: 'Get $20 off when you spend $75 or more on beauty and personal care items',
    is_featured: true,
    is_verified: true,
    click_count: 1456,
    success_count: 365,
    created_at: '',
    updated_at: '',
    expires_at: '2025-09-30',
    store: {
      id: 'target',
      name: 'Target',
      slug: 'target',
      logo_url: 'https://logo.clearbit.com/target.com',
      website_url: 'https://target.com',
      category_id: 'beauty',
      is_featured: true,
      created_at: '',
      updated_at: '',
      coupons: [],
      coupon_count: 18,
      category: { id: 'beauty', name: 'Beauty', slug: 'beauty', is_featured: true, created_at: '' }
    },
    category: { id: 'beauty', name: 'Beauty', slug: 'beauty', is_featured: true, created_at: '' }
  },
  {
    id: 'beauty-4',
    title: 'Free Gift with Purchase',
    type: 'deal' as const,
    discount_type: 'gift' as const,
    affiliate_url: 'https://macys.com',
    store_id: 'macys',
    category_id: 'beauty',
    description: 'Free deluxe samples and beauty gifts with qualifying beauty purchases',
    is_featured: false,
    is_verified: true,
    click_count: 3234,
    success_count: 876,
    created_at: '',
    updated_at: '',
    store: {
      id: 'macys',
      name: 'Macy\'s',
      slug: 'macys',
      logo_url: 'https://logo.clearbit.com/macys.com',
      website_url: 'https://macys.com',
      category_id: 'beauty',
      is_featured: true,
      created_at: '',
      updated_at: '',
      coupons: [],
      coupon_count: 15,
      category: { id: 'beauty', name: 'Beauty', slug: 'beauty', is_featured: true, created_at: '' }
    },
    category: { id: 'beauty', name: 'Beauty', slug: 'beauty', is_featured: true, created_at: '' }
  }
]

export default function BeautyCategoryPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* SEO-Optimized Header */}
      <div className="bg-gradient-to-r from-rose-50 to-pink-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-rose-100 border border-rose-200 rounded-full">
              <div className="w-2 h-2 bg-rose-500 rounded-full mr-2"></div>
              <span className="text-sm font-medium text-rose-700">Beauty Category</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Beauty Deals & Coupons
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Save up to 60% on skincare, makeup, haircare, and fragrance with verified coupons from top beauty brands and retailers.
            </p>
            
            <div className="grid grid-cols-4 gap-8 bg-white rounded-2xl p-8 shadow-sm max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-rose-600 mb-1">80+</div>
                <div className="text-sm text-gray-600">Active Deals</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-rose-600 mb-1">60%</div>
                <div className="text-sm text-gray-600">Max Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-rose-600 mb-1">30</div>
                <div className="text-sm text-gray-600">Top Brands</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-rose-600 mb-1">4.9★</div>
                <div className="text-sm text-gray-600">User Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="space-y-20">
          
          {/* Beauty Subcategories */}
          <section>
            <h2 className="text-4xl font-bold text-gray-900 mb-12">Shop Beauty by Category</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { name: 'Skincare', deals: '35+ deals' },
                { name: 'Makeup', deals: '40+ deals' },
                { name: 'Haircare', deals: '25+ deals' },
                { name: 'Fragrance', deals: '18+ deals' },
                { name: 'Tools & Brushes', deals: '15+ deals' },
                { name: 'Men\'s Grooming', deals: '12+ deals' }
              ].map((category) => (
                <div
                  key={category.name}
                  className="group bg-gray-50 rounded-2xl p-6 text-center hover:bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                >
                  <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <svg className="w-5 h-5 text-rose-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-rose-600 transition-colors mb-1">
                    {category.name}
                  </h3>
                  <p className="text-xs text-gray-500">{category.deals}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Featured Beauty Deals */}
          <section>
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Today's Best Beauty Deals</h2>
                <p className="text-xl text-gray-600">Curated by our beauty experts and updated daily</p>
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
              {beautyDeals.map((deal) => (
                <CouponCard key={deal.id} coupon={deal} />
              ))}
            </div>
          </section>

          {/* Top Beauty Stores */}
          <section>
            <h2 className="text-4xl font-bold text-gray-900 mb-12">Top Beauty Retailers</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {[
                { name: 'Sephora', logo: 'https://logo.clearbit.com/sephora.com', deals: '25 deals', link: '/stores/sephora' },
                { name: 'Ulta Beauty', logo: 'https://logo.clearbit.com/ulta.com', deals: '22 deals', link: '/stores/ulta' },
                { name: 'Target', logo: 'https://logo.clearbit.com/target.com', deals: '18 deals', link: '/stores/target' },
                { name: 'Macy\'s', logo: 'https://logo.clearbit.com/macys.com', deals: '15 deals', link: '/stores/macys' },
                { name: 'CVS', logo: 'https://logo.clearbit.com/cvs.com', deals: '12 deals', link: '/stores/cvs' }
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
                  <h3 className="font-semibold text-gray-900 group-hover:text-rose-600 transition-colors mb-1">
                    {store.name}
                  </h3>
                  <p className="text-xs text-gray-500">{store.deals}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* Beauty Shopping Guide */}
          <section>
            <h2 className="text-4xl font-bold text-gray-900 mb-12">Smart Beauty Shopping Tips</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-emerald-50 border-l-4 border-emerald-400 p-6">
                  <h3 className="font-semibold text-emerald-800 mb-2">Sample Before You Buy</h3>
                  <p className="text-emerald-700 text-sm">
                    Always request samples for expensive skincare and foundation. Many stores offer free samples to help you find the perfect match.
                  </p>
                </div>
                
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
                  <h3 className="font-semibold text-blue-800 mb-2">Loyalty Programs</h3>
                  <p className="text-blue-700 text-sm">
                    Join store loyalty programs for exclusive discounts, birthday gifts, and early access to sales. Sephora and Ulta offer great rewards.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-purple-50 border-l-4 border-purple-400 p-6">
                  <h3 className="font-semibold text-purple-800 mb-2">Seasonal Sales</h3>
                  <p className="text-purple-700 text-sm">
                    Best beauty deals happen during Black Friday, holiday gift sets, and spring cleaning sales. Stock up on staples during these events.
                  </p>
                </div>
                
                <div className="bg-amber-50 border-l-4 border-amber-400 p-6">
                  <h3 className="font-semibold text-amber-800 mb-2">Read Ingredients</h3>
                  <p className="text-amber-700 text-sm">
                    Check ingredient lists for sensitive skin concerns and avoid products with allergens. Reviews often mention skin reactions.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Trending Beauty */}
          <section>
            <h2 className="text-4xl font-bold text-gray-900 mb-12">Trending Beauty This Season</h2>
            
            <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-3xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-rose-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-rose-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Glass Skin</h3>
                  <p className="text-gray-600 text-sm">Korean-inspired skincare routines for dewy, radiant complexions</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Clean Beauty</h3>
                  <p className="text-gray-600 text-sm">Natural and organic beauty products with sustainable packaging</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Bold Brows</h3>
                  <p className="text-gray-600 text-sm">Full, sculpted eyebrows and brow lamination treatments</p>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-r from-rose-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <div className="text-center text-white space-y-8">
            <h2 className="text-3xl font-bold">Stay Beautiful for Less</h2>
            <p className="text-xl text-rose-100 max-w-2xl mx-auto">
              Get instant alerts for the best beauty deals, exclusive skincare coupons, and early access to product launches.
            </p>
            <div className="max-w-md mx-auto">
              <EmailForm 
                placeholder="Enter your email for beauty deals"
                buttonText="Get Beauty Deals"
                className="[&_input]:bg-white [&_input]:text-gray-900 [&_input]:border-0 [&_input]:rounded-l-lg [&_button]:bg-yellow-400 [&_button]:text-gray-900 [&_button]:hover:bg-yellow-300 [&_button]:font-semibold [&_button]:rounded-r-lg"
              />
            </div>
            <p className="text-sm text-rose-200">
              Exclusive beauty deals • Product launch alerts • Unsubscribe anytime
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
            "name": "Beauty Coupons & Deals - Save Up to 60% on Skincare & Makeup",
            "description": "Find the best beauty coupons and deals. Save up to 60% on skincare, makeup, haircare, and fragrance from top beauty brands.",
            "url": "https://thecouponkey.com/categories/beauty",
            "mainEntity": {
              "@type": "ItemList",
              "name": "Beauty Deals",
              "numberOfItems": beautyDeals.length,
              "itemListElement": beautyDeals.map((deal, index) => ({
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
