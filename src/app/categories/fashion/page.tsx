'use client'

import Link from 'next/link'
import CouponCard from '@/components/coupon-card'
import EmailForm from '@/components/email-form'

// Demo fashion deals data
const fashionDeals = [
  {
    id: 'fash-1',
    title: 'Extra 30% Off Sale Styles',
    code: 'STYLE30',
    type: 'code' as const,
    discount_type: 'percentage' as const,
    discount_value: 30,
    affiliate_url: 'https://nike.com',
    store_id: 'nike',
    category_id: 'fashion',
    description: 'Save an extra 30% on already discounted clothing, shoes, and accessories from top brands',
    is_featured: true,
    is_verified: true,
    click_count: 2134,
    success_count: 567,
    created_at: '',
    updated_at: '',
    expires_at: '2025-08-31',
    store: {
      id: 'nike',
      name: 'Nike',
      slug: 'nike',
      logo_url: 'https://logo.clearbit.com/nike.com',
      website_url: 'https://nike.com',
      category_id: 'fashion',
      is_featured: true,
      created_at: '',
      updated_at: '',
      coupons: [],
      coupon_count: 12,
      category: { id: 'fashion', name: 'Fashion', slug: 'fashion', is_featured: true, created_at: '' }
    },
    category: { id: 'fashion', name: 'Fashion', slug: 'fashion', is_featured: true, created_at: '' }
  },
  {
    id: 'fash-2',
    title: 'Up to 50% Off Designer Brands',
    type: 'deal' as const,
    discount_type: 'percentage' as const,
    discount_value: 50,
    affiliate_url: 'https://nordstrom.com',
    store_id: 'nordstrom',
    category_id: 'fashion',
    description: 'Huge savings on designer clothing, handbags, and shoes from luxury brands',
    is_featured: true,
    is_verified: true,
    click_count: 1876,
    success_count: 423,
    created_at: '',
    updated_at: '',
    expires_at: '2025-07-15',
    store: {
      id: 'nordstrom',
      name: 'Nordstrom',
      slug: 'nordstrom',
      logo_url: 'https://logo.clearbit.com/nordstrom.com',
      website_url: 'https://nordstrom.com',
      category_id: 'fashion',
      is_featured: true,
      created_at: '',
      updated_at: '',
      coupons: [],
      coupon_count: 25,
      category: { id: 'fashion', name: 'Fashion', slug: 'fashion', is_featured: true, created_at: '' }
    },
    category: { id: 'fashion', name: 'Fashion', slug: 'fashion', is_featured: true, created_at: '' }
  },
  {
    id: 'fash-3',
    title: '$25 Off Orders Over $100',
    code: 'SAVE25',
    type: 'code' as const,
    discount_type: 'fixed' as const,
    discount_value: 25,
    affiliate_url: 'https://target.com',
    store_id: 'target',
    category_id: 'fashion',
    description: 'Get $25 off when you spend $100 or more on clothing and accessories',
    is_featured: true,
    is_verified: true,
    click_count: 1234,
    success_count: 298,
    created_at: '',
    updated_at: '',
    expires_at: '2025-09-30',
    store: {
      id: 'target',
      name: 'Target',
      slug: 'target',
      logo_url: 'https://logo.clearbit.com/target.com',
      website_url: 'https://target.com',
      category_id: 'fashion',
      is_featured: true,
      created_at: '',
      updated_at: '',
      coupons: [],
      coupon_count: 18,
      category: { id: 'fashion', name: 'Fashion', slug: 'fashion', is_featured: true, created_at: '' }
    },
    category: { id: 'fashion', name: 'Fashion', slug: 'fashion', is_featured: true, created_at: '' }
  },
  {
    id: 'fash-4',
    title: 'Free Shipping on All Fashion',
    type: 'deal' as const,
    discount_type: 'free_shipping' as const,
    affiliate_url: 'https://amazon.com',
    store_id: 'amazon',
    category_id: 'fashion',
    description: 'Free shipping on all clothing, shoes, and accessories orders with no minimum',
    is_featured: false,
    is_verified: true,
    click_count: 3456,
    success_count: 987,
    created_at: '',
    updated_at: '',
    store: {
      id: 'amazon',
      name: 'Amazon',
      slug: 'amazon',
      logo_url: 'https://logo.clearbit.com/amazon.com',
      website_url: 'https://amazon.com',
      category_id: 'fashion',
      is_featured: true,
      created_at: '',
      updated_at: '',
      coupons: [],
      coupon_count: 15,
      category: { id: 'fashion', name: 'Fashion', slug: 'fashion', is_featured: true, created_at: '' }
    },
    category: { id: 'fashion', name: 'Fashion', slug: 'fashion', is_featured: true, created_at: '' }
  }
]

export default function FashionCategoryPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* SEO-Optimized Header */}
      <div className="bg-gradient-to-r from-pink-50 to-purple-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-pink-100 border border-pink-200 rounded-full">
              <div className="w-2 h-2 bg-pink-500 rounded-full mr-2"></div>
              <span className="text-sm font-medium text-pink-700">Trending Category</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Fashion Deals & Coupons
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Save up to 70% on the latest trends with verified coupons for clothing, shoes, accessories, and beauty products from top fashion brands.
            </p>
            
            <div className="grid grid-cols-4 gap-8 bg-white rounded-2xl p-8 shadow-sm max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600 mb-1">75+</div>
                <div className="text-sm text-gray-600">Active Deals</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600 mb-1">70%</div>
                <div className="text-sm text-gray-600">Max Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600 mb-1">25</div>
                <div className="text-sm text-gray-600">Top Brands</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600 mb-1">4.8★</div>
                <div className="text-sm text-gray-600">User Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="space-y-20">
          
          {/* Fashion Subcategories */}
          <section>
            <h2 className="text-4xl font-bold text-gray-900 mb-12">Shop Fashion by Style</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { name: 'Women\'s Clothing', deals: '40+ deals' },
                { name: 'Men\'s Clothing', deals: '25+ deals' },
                { name: 'Shoes', deals: '35+ deals' },
                { name: 'Handbags', deals: '18+ deals' },
                { name: 'Jewelry', deals: '12+ deals' },
                { name: 'Accessories', deals: '22+ deals' }
              ].map((category) => (
                <div
                  key={category.name}
                  className="group bg-gray-50 rounded-2xl p-6 text-center hover:bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                >
                  <div className="w-10 h-10 bg-pink-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <svg className="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-pink-600 transition-colors mb-1">
                    {category.name}
                  </h3>
                  <p className="text-xs text-gray-500">{category.deals}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Featured Fashion Deals */}
          <section>
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Today's Best Fashion Deals</h2>
                <p className="text-xl text-gray-600">Curated by our style experts and updated daily</p>
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
              {fashionDeals.map((deal) => (
                <CouponCard key={deal.id} coupon={deal} />
              ))}
            </div>
          </section>

          {/* Top Fashion Stores */}
          <section>
            <h2 className="text-4xl font-bold text-gray-900 mb-12">Top Fashion Retailers</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {[
                { name: 'Nike', logo: 'https://logo.clearbit.com/nike.com', deals: '12 deals', link: '/stores/nike' },
                { name: 'Amazon', logo: 'https://logo.clearbit.com/amazon.com', deals: '40+ deals', link: '/stores/amazon' },
                { name: 'Target', logo: 'https://logo.clearbit.com/target.com', deals: '25 deals', link: '/stores/target' },
                { name: 'Nordstrom', logo: 'https://logo.clearbit.com/nordstrom.com', deals: '18 deals', link: '/stores/nordstrom' },
                { name: 'Macy\'s', logo: 'https://logo.clearbit.com/macys.com', deals: '22 deals', link: '/stores/macys' }
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
                  <h3 className="font-semibold text-gray-900 group-hover:text-pink-600 transition-colors mb-1">
                    {store.name}
                  </h3>
                  <p className="text-xs text-gray-500">{store.deals}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* Fashion Shopping Guide */}
          <section>
            <h2 className="text-4xl font-bold text-gray-900 mb-12">Smart Fashion Shopping Tips</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-emerald-50 border-l-4 border-emerald-400 p-6">
                  <h3 className="font-semibold text-emerald-800 mb-2">Best Times to Shop</h3>
                  <p className="text-emerald-700 text-sm">
                    End-of-season sales offer the deepest discounts. Shop summer clothes in August, winter items in February, and holiday outfits in January.
                  </p>
                </div>
                
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
                  <h3 className="font-semibold text-blue-800 mb-2">Size & Fit Tips</h3>
                  <p className="text-blue-700 text-sm">
                    Always check size charts and read reviews for fit information. Many stores offer free returns, so don't hesitate to order multiple sizes.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-purple-50 border-l-4 border-purple-400 p-6">
                  <h3 className="font-semibold text-purple-800 mb-2">Quality Investment</h3>
                  <p className="text-purple-700 text-sm">
                    Invest in classic pieces like blazers, good jeans, and quality shoes. These items last longer and provide better cost-per-wear value.
                  </p>
                </div>
                
                <div className="bg-amber-50 border-l-4 border-amber-400 p-6">
                  <h3 className="font-semibold text-amber-800 mb-2">Newsletter Benefits</h3>
                  <p className="text-amber-700 text-sm">
                    Sign up for store newsletters to get exclusive coupon codes, early sale access, and birthday discounts from your favorite brands.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Trending Fashion */}
          <section>
            <h2 className="text-4xl font-bold text-gray-900 mb-12">Trending Fashion This Season</h2>
            
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-3xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Summer Dresses</h3>
                  <p className="text-gray-600 text-sm">Floral prints and lightweight fabrics are perfect for the season</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Athleisure Wear</h3>
                  <p className="text-gray-600 text-sm">Comfortable yet stylish pieces for work-from-home and active lifestyles</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Statement Accessories</h3>
                  <p className="text-gray-600 text-sm">Bold jewelry and designer handbags to elevate any outfit</p>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <div className="text-center text-white space-y-8">
            <h2 className="text-3xl font-bold">Stay Ahead of Fashion Trends</h2>
            <p className="text-xl text-pink-100 max-w-2xl mx-auto">
              Get instant alerts for the best fashion deals, exclusive style coupons, and early access to seasonal sales.
            </p>
            <div className="max-w-md mx-auto">
              <EmailForm 
                placeholder="Enter your email for fashion deals"
                buttonText="Get Style Deals"
                className="[&_input]:bg-white [&_input]:text-gray-900 [&_input]:border-0 [&_input]:rounded-l-lg [&_button]:bg-yellow-400 [&_button]:text-gray-900 [&_button]:hover:bg-yellow-300 [&_button]:font-semibold [&_button]:rounded-r-lg"
              />
            </div>
            <p className="text-sm text-pink-200">
              Exclusive fashion deals • Style trend alerts • Unsubscribe anytime
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
            "name": "Fashion Coupons & Deals - Save Up to 70% on Clothing",
            "description": "Find the best fashion coupons and deals. Save up to 70% on clothing, shoes, accessories, and beauty products from top fashion brands.",
            "url": "https://thecouponkey.com/categories/fashion",
            "mainEntity": {
              "@type": "ItemList",
              "name": "Fashion Deals",
              "numberOfItems": fashionDeals.length,
              "itemListElement": fashionDeals.map((deal, index) => ({
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
