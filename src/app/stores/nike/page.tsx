'use client'

import Link from 'next/link'
import CouponCard from '@/components/coupon-card'
import EmailForm from '@/components/email-form'

// Demo Nike deals data
const nikeDeals = [
  {
    id: 'nk-1',
    title: 'Extra 20% Off Sale Items',
    code: 'SAVE20',
    type: 'code' as const,
    discount_type: 'percentage' as const,
    discount_value: 20,
    affiliate_url: 'https://nike.com',
    store_id: 'nike',
    category_id: 'fashion',
    description: 'Save an extra 20% on already discounted Nike shoes, apparel, and accessories',
    is_featured: true,
    is_verified: true,
    click_count: 2156,
    success_count: 543,
    created_at: '',
    updated_at: '',
    expires_at: '2025-08-15',
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
    id: 'nk-2',
    title: 'Free Shipping on Orders $50+',
    type: 'deal' as const,
    discount_type: 'free_shipping' as const,
    affiliate_url: 'https://nike.com',
    store_id: 'nike',
    category_id: 'general',
    description: 'Free standard shipping on all orders over $50, or free for Nike Members on any order',
    is_featured: true,
    is_verified: true,
    click_count: 3421,
    success_count: 1234,
    created_at: '',
    updated_at: '',
    store: {
      id: 'nike',
      name: 'Nike',
      slug: 'nike',
      logo_url: 'https://logo.clearbit.com/nike.com',
      website_url: 'https://nike.com',
      category_id: 'general',
      is_featured: true,
      created_at: '',
      updated_at: '',
      coupons: [],
      coupon_count: 12,
      category: { id: 'general', name: 'General', slug: 'general', is_featured: true, created_at: '' }
    },
    category: { id: 'general', name: 'General', slug: 'general', is_featured: true, created_at: '' }
  },
  {
    id: 'nk-3',
    title: 'Up to 40% Off Clearance',
    type: 'deal' as const,
    discount_type: 'percentage' as const,
    discount_value: 40,
    affiliate_url: 'https://nike.com',
    store_id: 'nike',
    category_id: 'fashion',
    description: 'Massive clearance savings on shoes, clothing, and gear for men, women, and kids',
    is_featured: true,
    is_verified: true,
    click_count: 1876,
    success_count: 467,
    created_at: '',
    updated_at: '',
    expires_at: '2025-07-31',
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
    id: 'nk-4',
    title: 'Student Discount - 10% Off',
    code: 'STUDENT10',
    type: 'code' as const,
    discount_type: 'percentage' as const,
    discount_value: 10,
    affiliate_url: 'https://nike.com',
    store_id: 'nike',
    category_id: 'fashion',
    description: 'Students get 10% off with valid student ID verification through UNiDAYS',
    is_featured: false,
    is_verified: true,
    click_count: 987,
    success_count: 234,
    created_at: '',
    updated_at: '',
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
  }
]

export default function NikeStorePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* SEO-Optimized Header */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex items-center justify-between">
            <div className="max-w-4xl">
              <div className="flex items-center space-x-4 mb-6">
                <img 
                  src="https://logo.clearbit.com/nike.com" 
                  alt="Nike Logo" 
                  className="w-16 h-16 rounded-xl shadow-sm bg-white p-2"
                />
                <div>
                  <h1 className="text-5xl font-bold text-white mb-2">Nike Coupons & Deals</h1>
                  <p className="text-xl text-gray-300">Save up to 40% with verified promo codes on shoes, apparel & gear</p>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-8 bg-white rounded-2xl p-8 shadow-sm">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-1">12+</div>
                  <div className="text-sm text-gray-600">Active Deals</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-1">4.9★</div>
                  <div className="text-sm text-gray-600">Store Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-1">$950K</div>
                  <div className="text-sm text-gray-600">Total Saved</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="space-y-20">
          
          {/* Expert Insights */}
          <section>
            <div className="bg-orange-50 border border-orange-100 rounded-2xl p-8 mb-12">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-orange-900 mb-2">Expert Nike Shopping Tips</h3>
                  <p className="text-orange-800 leading-relaxed">
                    Nike Members get free shipping, exclusive access to new releases, and birthday rewards. The best deals happen during seasonal clearance events and back-to-school sales.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Active Deals */}
          <section>
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Nike Deals</h2>
                <p className="text-xl text-gray-600">Verified athletic wear discounts and exclusive offers updated daily</p>
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
              {nikeDeals.map((deal) => (
                <CouponCard key={deal.id} coupon={deal} />
              ))}
            </div>
          </section>

          {/* Nike Categories */}
          <section>
            <h2 className="text-4xl font-bold text-gray-900 mb-12">Shop Nike by Category</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: 'Shoes', link: '/categories/fashion' },
                { name: 'Men\'s Clothing', link: '/categories/fashion' },
                { name: 'Women\'s Clothing', link: '/categories/fashion' },
                { name: 'Kids & Baby', link: '/categories/fashion' },
                { name: 'Running', link: '/categories/fashion' },
                { name: 'Basketball', link: '/categories/fashion' },
                { name: 'Training & Gym', link: '/categories/fashion' },
                { name: 'Accessories', link: '/categories/fashion' }
              ].map((category) => (
                <Link
                  key={category.name}
                  href={category.link}
                  className="group bg-gray-50 rounded-2xl p-6 text-center hover:bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                    {category.name}
                  </h3>
                </Link>
              ))}
            </div>
          </section>

          {/* Money-Saving Tips */}
          <section>
            <h2 className="text-4xl font-bold text-gray-900 mb-12">How to Save More at Nike</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-emerald-50 border-l-4 border-emerald-400 p-6">
                  <h3 className="font-semibold text-emerald-800 mb-2">Nike Membership</h3>
                  <p className="text-emerald-700 text-sm">
                    Join Nike for free to get exclusive member pricing, free shipping on any order, and early access to new product launches.
                  </p>
                </div>
                
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
                  <h3 className="font-semibold text-blue-800 mb-2">Seasonal Sales</h3>
                  <p className="text-blue-700 text-sm">
                    Nike's biggest discounts happen during end-of-season clearance, back-to-school, and holiday sales events. Sign up for alerts.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-purple-50 border-l-4 border-purple-400 p-6">
                  <h3 className="font-semibold text-purple-800 mb-2">Student & Military Discounts</h3>
                  <p className="text-purple-700 text-sm">
                    Students get 10% off with verification through UNiDAYS. Military personnel and veterans can also get exclusive discounts.
                  </p>
                </div>
                
                <div className="bg-amber-50 border-l-4 border-amber-400 p-6">
                  <h3 className="font-semibold text-amber-800 mb-2">Nike App Exclusives</h3>
                  <p className="text-amber-700 text-sm">
                    Download the Nike app for exclusive product releases, app-only deals, and personalized product recommendations.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Related Stores */}
          <section>
            <h2 className="text-4xl font-bold text-gray-900 mb-12">Similar Athletic Brands</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: 'Adidas', logo: 'https://logo.clearbit.com/adidas.com', link: '/stores/adidas' },
                { name: 'Under Armour', logo: 'https://logo.clearbit.com/underarmour.com', link: '/stores/under-armour' },
                { name: 'Puma', logo: 'https://logo.clearbit.com/puma.com', link: '/stores/puma' },
                { name: 'Reebok', logo: 'https://logo.clearbit.com/reebok.com', link: '/stores/reebok' }
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
                  <h3 className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                    {store.name}
                  </h3>
                </Link>
              ))}
            </div>
          </section>

        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <div className="text-center text-white space-y-8">
            <h2 className="text-3xl font-bold">Never Miss a Nike Deal</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Get instant alerts for Nike sales, exclusive member pricing, and early access to new product launches.
            </p>
            <div className="max-w-md mx-auto">
              <EmailForm 
                placeholder="Enter your email for Nike deals"
                buttonText="Get Nike Deals"
                className="[&_input]:bg-white [&_input]:text-gray-900 [&_input]:border-0 [&_input]:rounded-l-lg [&_button]:bg-orange-500 [&_button]:text-white [&_button]:hover:bg-orange-400 [&_button]:font-semibold [&_button]:rounded-r-lg"
              />
            </div>
            <p className="text-sm text-gray-400">
              Exclusive Nike deals • New release alerts • Unsubscribe anytime
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
            "name": "Nike Coupons & Promo Codes - Save Up to 40%",
            "description": "Find the latest Nike coupons and promo codes. Save up to 40% on shoes, apparel, and athletic gear with verified deals.",
            "url": "https://thecouponkey.com/stores/nike",
            "mainEntity": {
              "@type": "Store",
              "name": "Nike",
              "url": "https://nike.com",
              "logo": "https://logo.clearbit.com/nike.com"
            }
          })
        }}
      />
    </div>
  )
}
