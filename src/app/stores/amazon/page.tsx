'use client'

import Link from 'next/link'
import CouponCard from '@/components/coupon-card'
import EmailForm from '@/components/email-form'

// Demo Amazon deals data
const amazonDeals = [
  {
    id: 'amz-1',
    title: 'Extra 20% Off Electronics',
    code: 'TECH20',
    type: 'code' as const,
    discount_type: 'percentage' as const,
    discount_value: 20,
    affiliate_url: 'https://amazon.com',
    store_id: 'amazon',
    category_id: 'electronics',
    description: 'Save an extra 20% on select electronics including laptops, tablets, and accessories',
    is_featured: true,
    is_verified: true,
    click_count: 1247,
    success_count: 312,
    created_at: '',
    updated_at: '',
    expires_at: '2025-07-31',
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
    id: 'amz-2',
    title: 'Free Shipping on Orders $35+',
    type: 'deal' as const,
    discount_type: 'free_shipping' as const,
    affiliate_url: 'https://amazon.com',
    store_id: 'amazon',
    category_id: 'general',
    description: 'Free standard shipping on qualifying orders over $35. No minimum for Prime members.',
    is_featured: true,
    is_verified: true,
    click_count: 2156,
    success_count: 678,
    created_at: '',
    updated_at: '',
    store: {
      id: 'amazon',
      name: 'Amazon',
      slug: 'amazon',
      logo_url: 'https://logo.clearbit.com/amazon.com',
      website_url: 'https://amazon.com',
      category_id: 'general',
      is_featured: true,
      created_at: '',
      updated_at: '',
      coupons: [],
      coupon_count: 15,
      category: { id: 'general', name: 'General', slug: 'general', is_featured: true, created_at: '' }
    },
    category: { id: 'general', name: 'General', slug: 'general', is_featured: true, created_at: '' }
  },
  {
    id: 'amz-3',
    title: 'Up to 40% Off Fashion & Accessories',
    type: 'deal' as const,
    discount_type: 'percentage' as const,
    discount_value: 40,
    affiliate_url: 'https://amazon.com',
    store_id: 'amazon',
    category_id: 'fashion',
    description: 'Huge savings on clothing, shoes, and accessories from top brands',
    is_featured: true,
    is_verified: true,
    click_count: 892,
    success_count: 234,
    created_at: '',
    updated_at: '',
    expires_at: '2025-08-15',
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
  },
  {
    id: 'amz-4',
    title: '$10 Off Orders Over $50',
    code: 'SAVE10',
    type: 'code' as const,
    discount_type: 'fixed' as const,
    discount_value: 10,
    affiliate_url: 'https://amazon.com',
    store_id: 'amazon',
    category_id: 'general',
    description: 'Get $10 off when you spend $50 or more on eligible items',
    is_featured: false,
    is_verified: true,
    click_count: 567,
    success_count: 143,
    created_at: '',
    updated_at: '',
    expires_at: '2025-12-31',
    store: {
      id: 'amazon',
      name: 'Amazon',
      slug: 'amazon',
      logo_url: 'https://logo.clearbit.com/amazon.com',
      website_url: 'https://amazon.com',
      category_id: 'general',
      is_featured: true,
      created_at: '',
      updated_at: '',
      coupons: [],
      coupon_count: 15,
      category: { id: 'general', name: 'General', slug: 'general', is_featured: true, created_at: '' }
    },
    category: { id: 'general', name: 'General', slug: 'general', is_featured: true, created_at: '' }
  }
]

export default function AmazonStorePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* SEO-Optimized Header */}
      <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex items-center justify-between">
            <div className="max-w-4xl">
              <div className="flex items-center space-x-4 mb-6">
                <img 
                  src="https://logo.clearbit.com/amazon.com" 
                  alt="Amazon Logo" 
                  className="w-16 h-16 rounded-xl shadow-sm"
                />
                <div>
                  <h1 className="text-5xl font-bold text-gray-900 mb-2">Amazon Coupons & Deals</h1>
                  <p className="text-xl text-gray-600">Save up to 70% with verified promo codes and exclusive offers</p>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-8 bg-white rounded-2xl p-8 shadow-sm">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-1">15+</div>
                  <div className="text-sm text-gray-600">Active Deals</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-1">4.8★</div>
                  <div className="text-sm text-gray-600">Store Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-1">$2.1M</div>
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
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 mb-12">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Expert Money-Saving Tips for Amazon</h3>
                  <p className="text-blue-800 leading-relaxed">
                    Our team monitors Amazon deals 24/7. The best savings come from combining promotional codes with Lightning Deals during peak shopping periods. Amazon Prime members get exclusive access to additional discounts.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Active Deals */}
          <section>
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Amazon Deals</h2>
                <p className="text-xl text-gray-600">Verified and updated daily by our expert team</p>
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
              {amazonDeals.map((deal) => (
                <CouponCard key={deal.id} coupon={deal} />
              ))}
            </div>
          </section>

          {/* Shopping Categories */}
          <section>
            <h2 className="text-4xl font-bold text-gray-900 mb-12">Shop Amazon by Category</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: 'Electronics', link: '/categories/electronics' },
                { name: 'Fashion', link: '/categories/fashion' },
                { name: 'Home & Garden', link: '/categories/home-garden' },
                { name: 'Books', link: '/categories/books' },
                { name: 'Beauty', link: '/categories/beauty' },
                { name: 'Sports', link: '/categories/sports' },
                { name: 'Toys', link: '/categories/toys' },
                { name: 'Automotive', link: '/categories/automotive' }
              ].map((category) => (
                <Link
                  key={category.name}
                  href={category.link}
                  className="group bg-gray-50 rounded-2xl p-6 text-center hover:bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </h3>
                </Link>
              ))}
            </div>
          </section>

          {/* Money-Saving Tips */}
          <section>
            <h2 className="text-4xl font-bold text-gray-900 mb-12">How to Save More on Amazon</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-emerald-50 border-l-4 border-emerald-400 p-6">
                  <h3 className="font-semibold text-emerald-800 mb-2">Use Amazon Prime</h3>
                  <p className="text-emerald-700 text-sm">
                    Prime members get exclusive deals, faster shipping, and access to Prime Day savings events twice a year.
                  </p>
                </div>
                
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
                  <h3 className="font-semibold text-blue-800 mb-2">Time Your Purchases</h3>
                  <p className="text-blue-700 text-sm">
                    Best deals appear during Black Friday, Prime Day, and end-of-season clearances. Set price alerts for expensive items.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-purple-50 border-l-4 border-purple-400 p-6">
                  <h3 className="font-semibold text-purple-800 mb-2">Check Lightning Deals</h3>
                  <p className="text-purple-700 text-sm">
                    Lightning Deals offer deep discounts for limited time. Visit the "Today's Deals" section daily for the best offers.
                  </p>
                </div>
                
                <div className="bg-amber-50 border-l-4 border-amber-400 p-6">
                  <h3 className="font-semibold text-amber-800 mb-2">Bundle Products</h3>
                  <p className="text-amber-700 text-sm">
                    Reach the $35 free shipping threshold by bundling related items. Often cheaper than paying for shipping.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Related Stores */}
          <section>
            <h2 className="text-4xl font-bold text-gray-900 mb-12">Similar Stores You Might Like</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: 'Target', logo: 'https://logo.clearbit.com/target.com', link: '/stores/target' },
                { name: 'Walmart', logo: 'https://logo.clearbit.com/walmart.com', link: '/stores/walmart' },
                { name: 'Best Buy', logo: 'https://logo.clearbit.com/bestbuy.com', link: '/stores/best-buy' },
                { name: 'eBay', logo: 'https://logo.clearbit.com/ebay.com', link: '/stores/ebay' }
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
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {store.name}
                  </h3>
                </Link>
              ))}
            </div>
          </section>

        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <div className="text-center text-white space-y-8">
            <h2 className="text-3xl font-bold">Never Miss an Amazon Deal</h2>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto">
              Get notified when new Amazon coupons and Lightning Deals go live. Join 50,000+ smart shoppers saving daily.
            </p>
            <div className="max-w-md mx-auto">
              <EmailForm 
                placeholder="Enter your email for Amazon deals"
                buttonText="Get Amazon Deals"
                className="[&_input]:bg-white [&_input]:text-gray-900 [&_input]:border-0 [&_input]:rounded-l-lg [&_button]:bg-yellow-400 [&_button]:text-gray-900 [&_button]:hover:bg-yellow-300 [&_button]:font-semibold [&_button]:rounded-r-lg"
              />
            </div>
            <p className="text-sm text-orange-200">
              Exclusive Amazon deals • Unsubscribe anytime • No spam, ever
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
            "name": "Amazon Coupons & Promo Codes - Save Up to 70%",
            "description": "Find the latest Amazon coupons and promo codes. Save up to 70% with verified deals, exclusive discounts, and free shipping offers.",
            "url": "https://dealfinder.com/stores/amazon",
            "mainEntity": {
              "@type": "Store",
              "name": "Amazon",
              "url": "https://amazon.com",
              "logo": "https://logo.clearbit.com/amazon.com"
            }
          })
        }}
      />
    </div>
  )
}
