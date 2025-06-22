import CouponCard from '@/components/coupon-card'
import Link from 'next/link'

// Demo Target data with high-value deals
const targetStore = {
  id: '4',
  name: 'Target',
  slug: 'target',
  logo_url: 'https://logo.clearbit.com/target.com',
  website_url: 'https://target.com',
  category_id: '3',
  is_featured: true,
  affiliate_network: 'Impact Radius',
  created_at: '',
  updated_at: '',
  description: 'America\'s favorite discount retailer offering stylish, quality merchandise at affordable prices. Find everything from clothing and home decor to electronics and groceries.',
  founded: '1902',
  headquarters: 'Minneapolis, MN',
  category: { id: '3', name: 'General Merchandise', slug: 'general-merchandise', is_featured: true, created_at: '' },
  coupons: [
    {
      id: '401',
      title: 'Extra 5% Off with RedCard',
      type: 'deal' as const,
      discount_type: 'percentage' as const,
      discount_value: 5,
      affiliate_url: 'https://target.com/redcard?tag=thecouponkey',
      store_id: '4',
      category_id: '3',
      description: 'Get an extra 5% off every purchase plus free shipping with Target RedCard credit or debit card.',
      is_featured: true,
      is_verified: true,
      click_count: 1567,
      success_count: 423,
      created_at: '',
      updated_at: '',
      store: { id: '4', name: 'Target', slug: 'target', logo_url: 'https://logo.clearbit.com/target.com', website_url: 'https://target.com', category_id: '3', is_featured: true, created_at: '', updated_at: '' },
      category: { id: '3', name: 'General Merchandise', slug: 'general-merchandise', is_featured: true, created_at: '' }
    },
    {
      id: '402',
      title: 'Up to 50% Off Weekly Deals',
      type: 'deal' as const,
      discount_type: 'percentage' as const,
      discount_value: 50,
      affiliate_url: 'https://target.com/weekly-ad?tag=thecouponkey',
      store_id: '4',
      category_id: '3',
      description: 'Check Target\'s weekly ad for deals up to 50% off on featured items across all departments.',
      is_featured: true,
      is_verified: true,
      click_count: 1234,
      success_count: 345,
      created_at: '',
      updated_at: '',
      store: { id: '4', name: 'Target', slug: 'target', logo_url: 'https://logo.clearbit.com/target.com', website_url: 'https://target.com', category_id: '3', is_featured: true, created_at: '', updated_at: '' },
      category: { id: '3', name: 'General Merchandise', slug: 'general-merchandise', is_featured: true, created_at: '' }
    },
    {
      id: '403',
      title: 'Free Shipping on $35+ Orders',
      type: 'deal' as const,
      discount_type: 'free_shipping' as const,
      affiliate_url: 'https://target.com?tag=thecouponkey',
      store_id: '4',
      category_id: '3',
      description: 'Get free standard shipping on orders of $35 or more. No membership required.',
      is_featured: false,
      is_verified: true,
      click_count: 892,
      success_count: 267,
      created_at: '',
      updated_at: '',
      store: { id: '4', name: 'Target', slug: 'target', logo_url: 'https://logo.clearbit.com/target.com', website_url: 'https://target.com', category_id: '3', is_featured: true, created_at: '', updated_at: '' },
      category: { id: '3', name: 'General Merchandise', slug: 'general-merchandise', is_featured: true, created_at: '' }
    },
    {
      id: '404',
      title: 'Target Circle: Personalized Deals',
      type: 'deal' as const,
      discount_type: 'other' as const,
      affiliate_url: 'https://target.com/circle?tag=thecouponkey',
      store_id: '4',
      category_id: '3',
      description: 'Join Target Circle for free to get personalized deals, early access to sales, and 1% earnings on every purchase.',
      is_featured: true,
      is_verified: true,
      click_count: 1789,
      success_count: 456,
      created_at: '',
      updated_at: '',
      store: { id: '4', name: 'Target', slug: 'target', logo_url: 'https://logo.clearbit.com/target.com', website_url: 'https://target.com', category_id: '3', is_featured: true, created_at: '', updated_at: '' },
      category: { id: '3', name: 'General Merchandise', slug: 'general-merchandise', is_featured: true, created_at: '' }
    },
    {
      id: '405',
      title: 'Buy 2 Get 1 Free on Select Items',
      type: 'deal' as const,
      discount_type: 'other' as const,
      affiliate_url: 'https://target.com/b/buy-2-get-1-free?tag=thecouponkey',
      store_id: '4',
      category_id: '3',
      description: 'Mix and match buy 2, get 1 free on select toys, books, movies, games and more.',
      is_featured: false,
      is_verified: true,
      click_count: 645,
      success_count: 178,
      created_at: '',
      updated_at: '',
      expires_at: '2025-07-31',
      store: { id: '4', name: 'Target', slug: 'target', logo_url: 'https://logo.clearbit.com/target.com', website_url: 'https://target.com', category_id: '3', is_featured: true, created_at: '', updated_at: '' },
      category: { id: '3', name: 'General Merchandise', slug: 'general-merchandise', is_featured: true, created_at: '' }
    }
  ],
  coupon_count: 23
}

export default function TargetPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Store Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            {/* Store Logo */}
            <div className="w-24 h-24 bg-gray-50 rounded-2xl flex items-center justify-center overflow-hidden flex-shrink-0">
              <img 
                src={targetStore.logo_url} 
                alt="Target logo"
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Store Info */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mb-4">
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">Target Coupons & Deals</h1>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800 mt-2 md:mt-0">
                  🎯 Expect More. Pay Less.
                </span>
              </div>
              
              <p className="text-lg text-gray-600 mb-6 max-w-2xl">
                Save big at Target with verified coupons, RedCard benefits, and Circle offers. Find deals on stylish 
                clothing, home decor, electronics, groceries, and Target's exclusive brands.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-6">
                <div>
                  <div className="text-2xl font-bold text-red-600">{targetStore.coupon_count}</div>
                  <div className="text-sm text-gray-500">Active Deals</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">5%</div>
                  <div className="text-sm text-gray-500">RedCard Savings</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">1%</div>
                  <div className="text-sm text-gray-500">Circle Earnings</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-600">$35+</div>
                  <div className="text-sm text-gray-500">Free Shipping</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <a 
                  href="https://target.com?tag=thecouponkey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                >
                  Shop Target Now →
                </a>
                <a 
                  href="https://target.com/redcard?tag=thecouponkey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                >
                  Get RedCard 5% Off
                </a>
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
              <span className="text-gray-900 font-medium">Target</span>
            </li>
          </ol>
        </nav>
      </div>

      {/* Current Deals */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">🎯 Current Target Deals</h2>
          <p className="text-gray-600">All verified and up-to-date Target coupons and deals</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {targetStore.coupons.map((coupon) => (
            <CouponCard key={coupon.id} coupon={coupon} />
          ))}
        </div>

        {/* Target Programs */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">🔑 Target Savings Programs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* RedCard */}
            <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-red-900">Target RedCard</h4>
                  <p className="text-red-700 text-sm">Credit or Debit Card</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-red-800">
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Extra 5% off every purchase
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Free shipping on all orders
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Extended return period
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  No annual fee
                </li>
              </ul>
            </div>

            {/* Target Circle */}
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-purple-900">Target Circle</h4>
                  <p className="text-purple-700 text-sm">Free Loyalty Program</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-purple-800">
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Earn 1% on every purchase
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Personalized deals and offers
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Early access to sales
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Birthday surprises
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Money-Saving Tips */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">💡 Target Money-Saving Tips</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Check Weekly Ad</h4>
                  <p className="text-gray-600 text-sm">New deals every Sunday with up to 50% off featured items across all departments.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Shop Clearance</h4>
                  <p className="text-gray-600 text-sm">Find clearance items at the end of aisles and in seasonal sections for deep discounts.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Price Match</h4>
                  <p className="text-gray-600 text-sm">Target matches competitors' prices on identical items from major retailers.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Use Target App</h4>
                  <p className="text-gray-600 text-sm">Get exclusive mobile deals, Cartwheel offers, and easy store navigation.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Stack Discounts</h4>
                  <p className="text-gray-600 text-sm">Combine manufacturer coupons, Target coupons, and RedCard savings for maximum savings.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Shop End of Season</h4>
                  <p className="text-gray-600 text-sm">Save up to 70% on seasonal items like clothing, decorations, and outdoor furniture.</p>
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
            
            {/* About Target */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">About Target</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 1902 as the Dayton Dry Goods Company, Target has evolved into one of America's 
                  most beloved retailers. Known for their "Expect More. Pay Less." brand promise, Target offers 
                  a carefully curated selection of stylish, quality merchandise at affordable prices.
                </p>
                <p>
                  With over 1,900 stores across the United States, Target provides a unique shopping experience 
                  that combines the convenience of a discount retailer with the style and design sensibility 
                  of a premium department store. From their exclusive designer collaborations to their popular 
                  private label brands, Target consistently delivers value and style.
                </p>
                <p>
                  All Target coupons on The Coupon Key are tested and verified by our team to ensure they work 
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
                  <span className="font-medium">1902</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600">Headquarters</span>
                  <span className="font-medium">Minneapolis, MN</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600">US Stores</span>
                  <span className="font-medium">1,900+</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600">Free Shipping</span>
                  <span className="font-medium">Orders $35+</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-gray-600">Active Deals</span>
                  <span className="font-medium text-red-600">{targetStore.coupon_count}</span>
                </div>
              </div>

              {/* Visit Store Button */}
              <div className="mt-8">
                <a 
                  href="https://target.com?tag=thecouponkey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors text-center block"
                >
                  Shop Target Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter CTA */}
      <div className="bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Get Target Deal Alerts</h2>
            <p className="text-xl mb-8 text-red-100">
              Be the first to know when new Target coupons and weekly ad deals are available.
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
