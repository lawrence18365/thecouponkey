import Link from 'next/link'
import CouponCard from '@/components/coupon-card'
import EmailForm from '@/components/email-form'

// SEO Metadata for Best Buy Store Page
export const metadata = {
  title: 'Best Buy Coupons & Promo Codes - Save Up to 50% | TheCouponKey',
  description: 'Find the latest Best Buy coupons and promo codes. Save up to 50% on electronics, gaming gear, TVs, laptops, and tech accessories with verified deals.',
  keywords: 'Best Buy coupons, Best Buy promo codes, Best Buy deals, electronics coupons, tech deals, gaming discounts',
  openGraph: {
    title: 'Best Buy Coupons & Promo Codes - Save Up to 50%',
    description: 'Find verified Best Buy coupons and exclusive tech deals. Save on electronics, gaming, TVs and more.',
    type: 'website',
  },
}

// Demo Best Buy deals data
const bestBuyDeals = [
  {
    id: 'bb-1',
    title: 'Extra 25% Off Gaming Gear',
    code: 'GAME25',
    type: 'code' as const,
    discount_type: 'percentage' as const,
    discount_value: 25,
    affiliate_url: 'https://bestbuy.com',
    store_id: 'best-buy',
    category_id: 'electronics',
    description: 'Save an extra 25% on gaming laptops, consoles, and accessories from top brands',
    is_featured: true,
    is_verified: true,
    click_count: 1654,
    success_count: 421,
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
      coupon_count: 18,
      category: { id: 'electronics', name: 'Electronics', slug: 'electronics', is_featured: true, created_at: '' }
    },
    category: { id: 'electronics', name: 'Electronics', slug: 'electronics', is_featured: true, created_at: '' }
  },
  {
    id: 'bb-2',
    title: 'Free Shipping on Orders $35+',
    type: 'deal' as const,
    discount_type: 'free_shipping' as const,
    affiliate_url: 'https://bestbuy.com',
    store_id: 'best-buy',
    category_id: 'general',
    description: 'Free standard shipping on most orders over $35, or free store pickup available',
    is_featured: true,
    is_verified: true,
    click_count: 2341,
    success_count: 789,
    created_at: '',
    updated_at: '',
    store: {
      id: 'best-buy',
      name: 'Best Buy',
      slug: 'best-buy',
      logo_url: 'https://logo.clearbit.com/bestbuy.com',
      website_url: 'https://bestbuy.com',
      category_id: 'general',
      is_featured: true,
      created_at: '',
      updated_at: '',
      coupons: [],
      coupon_count: 18,
      category: { id: 'general', name: 'General', slug: 'general', is_featured: true, created_at: '' }
    },
    category: { id: 'general', name: 'General', slug: 'general', is_featured: true, created_at: '' }
  },
  {
    id: 'bb-3',
    title: 'Up to 50% Off TVs & Home Theater',
    type: 'deal' as const,
    discount_type: 'percentage' as const,
    discount_value: 50,
    affiliate_url: 'https://bestbuy.com',
    store_id: 'best-buy',
    category_id: 'electronics',
    description: 'Massive savings on 4K TVs, soundbars, and home theater systems from Samsung, LG, Sony',
    is_featured: true,
    is_verified: true,
    click_count: 1789,
    success_count: 456,
    created_at: '',
    updated_at: '',
    expires_at: '2025-07-30',
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
      coupon_count: 18,
      category: { id: 'electronics', name: 'Electronics', slug: 'electronics', is_featured: true, created_at: '' }
    },
    category: { id: 'electronics', name: 'Electronics', slug: 'electronics', is_featured: true, created_at: '' }
  },
  {
    id: 'bb-4',
    title: '$100 Off Laptops Over $500',
    code: 'LAPTOP100',
    type: 'code' as const,
    discount_type: 'fixed' as const,
    discount_value: 100,
    affiliate_url: 'https://bestbuy.com',
    store_id: 'best-buy',
    category_id: 'electronics',
    description: 'Get $100 off when you buy laptops priced $500 or higher, including MacBooks and Windows laptops',
    is_featured: false,
    is_verified: true,
    click_count: 987,
    success_count: 234,
    created_at: '',
    updated_at: '',
    expires_at: '2025-09-15',
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
      coupon_count: 18,
      category: { id: 'electronics', name: 'Electronics', slug: 'electronics', is_featured: true, created_at: '' }
    },
    category: { id: 'electronics', name: 'Electronics', slug: 'electronics', is_featured: true, created_at: '' }
  }
]

export default function BestBuyStorePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* SEO-Optimized Header */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex items-center justify-between">
            <div className="max-w-4xl">
              <div className="flex items-center space-x-4 mb-6">
                <img 
                  src="https://logo.clearbit.com/bestbuy.com" 
                  alt="Best Buy Logo" 
                  className="w-16 h-16 rounded-xl shadow-sm"
                />
                <div>
                  <h1 className="text-5xl font-bold text-gray-900 mb-2">Best Buy Coupons & Deals</h1>
                  <p className="text-xl text-gray-600">Save up to 50% with verified promo codes and exclusive tech offers</p>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-8 bg-white rounded-2xl p-8 shadow-sm">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">18+</div>
                  <div className="text-sm text-gray-600">Active Deals</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">4.7★</div>
                  <div className="text-sm text-gray-600">Store Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">$1.8M</div>
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
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Expert Tech Shopping Tips for Best Buy</h3>
                  <p className="text-blue-800 leading-relaxed">
                    Best Buy's My Best Buy membership program offers exclusive deals and early access to sales. The best discounts happen during back-to-school season, Black Friday, and when new tech models launch.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Active Deals */}
          <section>
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Best Buy Deals</h2>
                <p className="text-xl text-gray-600">Verified tech deals and electronics discounts updated daily</p>
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
              {bestBuyDeals.map((deal) => (
                <CouponCard key={deal.id} coupon={deal} />
              ))}
            </div>
          </section>

          {/* Tech Categories */}
          <section>
            <h2 className="text-4xl font-bold text-gray-900 mb-12">Shop Best Buy by Category</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: 'Laptops & Computers', link: '/categories/electronics' },
                { name: 'TVs & Home Theater', link: '/categories/electronics' },
                { name: 'Gaming', link: '/categories/electronics' },
                { name: 'Smartphones', link: '/categories/electronics' },
                { name: 'Appliances', link: '/categories/electronics' },
                { name: 'Smart Home', link: '/categories/electronics' },
                { name: 'Audio', link: '/categories/electronics' },
                { name: 'Cameras', link: '/categories/electronics' }
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
            <h2 className="text-4xl font-bold text-gray-900 mb-12">How to Save More at Best Buy</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-emerald-50 border-l-4 border-emerald-400 p-6">
                  <h3 className="font-semibold text-emerald-800 mb-2">My Best Buy Membership</h3>
                  <p className="text-emerald-700 text-sm">
                    Free membership gives you exclusive member prices, early access to sales, and special financing options on major purchases.
                  </p>
                </div>
                
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
                  <h3 className="font-semibold text-blue-800 mb-2">Price Match Guarantee</h3>
                  <p className="text-blue-700 text-sm">
                    Best Buy will match lower prices from qualifying competitors both online and in-store. Always check before purchasing.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-purple-50 border-l-4 border-purple-400 p-6">
                  <h3 className="font-semibold text-purple-800 mb-2">Open-Box Deals</h3>
                  <p className="text-purple-700 text-sm">
                    Save 10-50% on open-box items that are returned but in excellent condition. These come with full manufacturer warranty.
                  </p>
                </div>
                
                <div className="bg-amber-50 border-l-4 border-amber-400 p-6">
                  <h3 className="font-semibold text-amber-800 mb-2">Best Buy Credit Card</h3>
                  <p className="text-amber-700 text-sm">
                    Get exclusive financing offers, 5% back in rewards on Best Buy purchases, and special member-only pricing on select items.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Related Stores */}
          <section>
            <h2 className="text-4xl font-bold text-gray-900 mb-12">Similar Electronics Stores</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: 'Amazon', logo: 'https://logo.clearbit.com/amazon.com', link: '/stores/amazon' },
                { name: 'Target', logo: 'https://logo.clearbit.com/target.com', link: '/stores/target' },
                { name: 'Walmart', logo: 'https://logo.clearbit.com/walmart.com', link: '/stores/walmart' },
                { name: 'Newegg', logo: 'https://logo.clearbit.com/newegg.com', link: '/stores/newegg' }
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
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <div className="text-center text-white space-y-8">
            <h2 className="text-3xl font-bold">Never Miss a Best Buy Deal</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Get instant alerts for Best Buy sales, exclusive tech coupons, and early access to member-only pricing.
            </p>
            <div className="max-w-md mx-auto">
              <EmailForm 
                placeholder="Enter your email for Best Buy deals"
                buttonText="Get Tech Deals"
                className="[&_input]:bg-white [&_input]:text-gray-900 [&_input]:border-0 [&_input]:rounded-l-lg [&_button]:bg-yellow-400 [&_button]:text-gray-900 [&_button]:hover:bg-yellow-300 [&_button]:font-semibold [&_button]:rounded-r-lg"
              />
            </div>
            <p className="text-sm text-blue-200">
              Exclusive Best Buy deals • Member pricing alerts • Unsubscribe anytime
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
            "name": "Best Buy Coupons & Promo Codes - Save Up to 50%",
            "description": "Find the latest Best Buy coupons and promo codes. Save up to 50% on electronics, gaming gear, TVs, laptops, and tech accessories.",
            "url": "https://thecouponkey.com/stores/best-buy",
            "mainEntity": {
              "@type": "Store",
              "name": "Best Buy",
              "url": "https://bestbuy.com",
              "logo": "https://logo.clearbit.com/bestbuy.com"
            }
          })
        }}
      />
    </div>
  )
}
