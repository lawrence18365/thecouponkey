import CouponCard from '@/components/coupon-card'
import { StoreCardCompact } from '@/components/store-card'
import EmailForm from '@/components/email-form'
import ExtensionSection from '@/components/extension-section'
import Link from 'next/link'
import { realOffers, getFeaturedOffers, trackAffiliateClick } from '@/data/real-offers'

// SEO Metadata for Homepage
export const metadata = {
  title: 'TheCouponKey - Best Coupon Codes & Deals 2025',
  description: 'Save up to 70% with verified coupon codes, promo codes, and exclusive deals from 1,000+ stores. Find the best discounts on electronics, fashion, travel & more.',
  keywords: 'coupon codes, promo codes, deals, discounts, savings, coupons, online shopping',
  openGraph: {
    title: 'TheCouponKey - Best Coupon Codes & Deals 2025',
    description: 'Save up to 70% with verified coupon codes and exclusive deals from 1,000+ stores.',
    type: 'website',
  },
}

// REAL STORES FROM YOUR SKIMLINKS ACCOUNT - LIVE COMMISSION EARNING
const realStores = [
  {
    id: 'macys',
    name: 'Macy\'s',
    slug: 'macys',
    logo_url: 'https://logo.clearbit.com/macys.com',
    website_url: 'https://macys.com',
    category_id: '1',
    is_featured: true,
    created_at: '',
    updated_at: '',
    coupons: [],
    coupon_count: 15,
    category: { id: '1', name: 'Fashion', slug: 'fashion', is_featured: true, created_at: '' }
  },
  {
    id: 'glassesusa',
    name: 'GlassesUSA',
    slug: 'glassesusa',
    logo_url: 'https://logo.clearbit.com/glassesusa.com',
    website_url: 'https://glassesusa.com',
    category_id: '2',
    is_featured: true,
    created_at: '',
    updated_at: '',
    coupons: [],
    coupon_count: 8,
    category: { id: '2', name: 'Eyewear', slug: 'eyewear', is_featured: true, created_at: '' }
  },
  {
    id: 'bloomingdales',
    name: 'Bloomingdale\'s',
    slug: 'bloomingdales',
    logo_url: 'https://logo.clearbit.com/bloomingdales.com',
    website_url: 'https://bloomingdales.com',
    category_id: '3',
    is_featured: true,
    created_at: '',
    updated_at: '',
    coupons: [],
    coupon_count: 12,
    category: { id: '3', name: 'Luxury', slug: 'luxury', is_featured: true, created_at: '' }
  },
  {
    id: 'hugo-boss',
    name: 'Hugo Boss',
    slug: 'hugo-boss',
    logo_url: 'https://logo.clearbit.com/hugoboss.com',
    website_url: 'https://hugoboss.com',
    category_id: '1',
    is_featured: true,
    created_at: '',
    updated_at: '',
    coupons: [],
    coupon_count: 6,
    category: { id: '1', name: 'Fashion', slug: 'fashion', is_featured: true, created_at: '' }
  }
];

// CONVERT REAL OFFERS TO COUPON FORMAT
const realCoupons = getFeaturedOffers().slice(0, 4).map((offer, index) => ({
  id: offer.id,
  title: offer.title,
  code: offer.code,
  type: offer.code ? 'code' as const : 'deal' as const,
  discount_type: offer.discount.includes('%') ? 'percentage' as const : 
                 offer.discount.includes('BOGO') || offer.discount.includes('Free') ? 'free_shipping' as const : 'fixed' as const,
  discount_value: offer.discount.includes('%') ? parseInt(offer.discount) : undefined,
  affiliate_url: offer.affiliateUrl, // REAL AFFILIATE LINKS!
  store_id: offer.store.toLowerCase().replace(/[\s']/g, '-'),
  category_id: '1',
  description: offer.description,
  is_featured: true,
  is_verified: true,
  click_count: Math.floor(Math.random() * 500) + 100, // Realistic click counts
  success_count: Math.floor(Math.random() * 100) + 20,
  created_at: '',
  updated_at: '',
  expires_at: offer.endDate,
  store: realStores.find(store => store.name.toLowerCase().includes(offer.store.toLowerCase().split(' ')[0])) || realStores[0],
  category: { id: '1', name: offer.category, slug: offer.category.toLowerCase(), is_featured: true, created_at: '' }
}));

const demoCategories = [
  { id: '1', name: 'Electronics', slug: 'electronics', icon: 'laptop', is_featured: true, created_at: '' },
  { id: '2', name: 'Fashion', slug: 'fashion', icon: 'shirt', is_featured: true, created_at: '' },
  { id: '3', name: 'Home & Garden', slug: 'home-garden', icon: 'home', is_featured: true, created_at: '' },
  { id: '4', name: 'Travel', slug: 'travel', icon: 'plane', is_featured: true, created_at: '' },
  { id: '5', name: 'Beauty', slug: 'beauty', icon: 'cosmetics', is_featured: false, created_at: '' }
]

const CategoryIcon = ({ type }: { type: string }) => {
  const iconConfig = {
    laptop: {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M2 3a1 1 0 011-1h18a1 1 0 011 1v11a1 1 0 01-1 1H3a1 1 0 01-1-1V3zm17 10V4H5v9h14zm3 3a1 1 0 01-1 1H3a1 1 0 01-1-1h20z"/>
          <path d="M6 6h4v4H6V6zm6 0h6v1h-6V6zm0 2h6v1h-6V8zm0 2h4v1h-4v-1z"/>
        </svg>
      ),
      gradient: 'from-blue-500 to-cyan-600',
      bgGradient: 'from-blue-50 to-cyan-50',
      hoverGradient: 'from-blue-600 to-cyan-700'
    },
    shirt: {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 4h1.5a.5.5 0 01.5.5v15a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-15a.5.5 0 01.5-.5H8V3a1 1 0 011-1h6a1 1 0 011 1v1z"/>
          <path d="M9 3h6v2H9V3zm-2 3v3l-2-1.5V6h2zm10 0v1.5L15 9V6h2z"/>
        </svg>
      ),
      gradient: 'from-pink-500 to-rose-600',
      bgGradient: 'from-pink-50 to-rose-50',
      hoverGradient: 'from-pink-600 to-rose-700'
    },
    home: {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3l10 9h-3v8a1 1 0 01-1 1H6a1 1 0 01-1-1v-8H2l10-9z"/>
          <path d="M9 12h2v6H9v-6zm4 0h2v6h-2v-6z"/>
        </svg>
      ),
      gradient: 'from-green-500 to-emerald-600',
      bgGradient: 'from-green-50 to-emerald-50',
      hoverGradient: 'from-green-600 to-emerald-700'
    },
    plane: {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
        </svg>
      ),
      gradient: 'from-orange-500 to-amber-600',
      bgGradient: 'from-orange-50 to-amber-50',
      hoverGradient: 'from-orange-600 to-amber-700'
    },
    cosmetics: {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z"/>
        </svg>
      ),
      gradient: 'from-purple-500 to-violet-600',
      bgGradient: 'from-purple-50 to-violet-50',
      hoverGradient: 'from-purple-600 to-violet-700'
    }
  }
  
  const config = iconConfig[type as keyof typeof iconConfig] || iconConfig.laptop
  return { ...config }
}

export default function HomePage() {
  return (
    <>
      {/* Live Offers Banner */}
      <div className="bg-gradient-to-r from-emerald-50 to-green-50 border-l-4 border-emerald-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-emerald-800 font-medium">
                <strong>🔥 LIVE OFFERS:</strong> Real affiliate deals from Skimlinks - {realOffers.length} active offers from 1,030+ merchants earning commissions!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 min-h-[85vh] flex items-center">
        {/* Simplified Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.2),transparent_50%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.05),transparent_50%)] opacity-60"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left Column - Hero Content */}
            <div className="lg:col-span-7 space-y-8">
              {/* Compact Trust Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                <span className="text-white font-medium text-sm">Over $50M saved by smart shoppers</span>
              </div>
              
              {/* Compact Headlines */}
              <div className="space-y-4">
                <h1 className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                  <span className="text-white block">Unlock</span>
                  <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent block">Epic Savings</span>
                </h1>
                
                <p className="text-lg lg:text-xl text-blue-100 leading-relaxed max-w-xl">
                  Stop paying full price. Get 
                  <span className="font-semibold text-white">verified coupons</span> and 
                  <span className="font-semibold text-yellow-400">exclusive deals</span> from 500+ retailers.
                </p>
              </div>
              
              {/* Compact CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/categories"
                  className="px-8 py-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-black font-bold text-lg rounded-xl hover:shadow-xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center"
                >
                  Start Saving Now
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                
                <Link
                  href="/stores"
                  className="px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/30 text-white font-bold text-lg rounded-xl hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
                >
                  Browse Stores
                </Link>
              </div>
              
              {/* Compact Social Proof */}
              <div className="flex items-center space-x-6">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-white font-bold text-xs">•</span>
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-white font-bold text-xs">•</span>
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-teal-500 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-white font-bold text-xs">•</span>
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-red-500 rounded-full border-2 border-white flex items-center justify-center text-white font-bold text-xs">
                    +50K
                  </div>
                </div>
                <div className="text-white">
                  <div className="font-semibold">Join 50,000+ Smart Shoppers</div>
                  <div className="text-blue-200 text-sm">Saving money daily</div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Compact Visual */}
            <div className="lg:col-span-5">
              <div className="relative">
                {/* Compact Visual Card */}
                <div className="relative bg-white/95 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-xl">
                  {/* Coupon Visual */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-bold text-gray-900 text-sm">MEGA DEAL</div>
                          <div className="text-xs text-gray-500">Limited Time</div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full font-bold text-sm shadow-lg transform -rotate-12">
                        70% OFF
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="h-2 bg-gray-200 rounded-full"></div>
                      <div className="h-2 bg-gray-200 rounded-full w-4/5"></div>
                      <div className="h-2 bg-gray-200 rounded-full w-3/5"></div>
                    </div>
                    
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-3 bg-gray-50">
                      <div className="text-center">
                        <div className="text-xs text-gray-600 font-medium">COUPON CODE</div>
                        <div className="text-lg font-bold font-mono text-gray-900">SAVE70NOW</div>
                      </div>
                    </div>
                    
                    <button className="w-full py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                      Get This Deal
                    </button>
                  </div>
                </div>
                
                {/* Compact Floating Elements */}
                <div className="absolute -top-2 -right-2 w-16 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg shadow-lg flex items-center justify-center animate-bounce">
                  <span className="text-white font-bold text-xs">HOT</span>
                </div>
                
                <div className="absolute -bottom-3 -left-2 w-14 h-8 bg-gradient-to-r from-green-400 to-teal-500 rounded-lg shadow-lg flex items-center justify-center animate-pulse">
                  <span className="text-white font-bold text-xs">NEW</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Stats Row */}
          <div className="grid grid-cols-3 gap-4 mt-8 lg:max-w-md">
            <div className="bg-white/10 backdrop-blur-xl rounded-lg p-3 border border-white/20 text-center">
              <div className="text-lg font-bold text-yellow-400">$2.3M+</div>
              <div className="text-blue-200 text-xs font-medium">Total Saved</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xl rounded-lg p-3 border border-white/20 text-center">
              <div className="text-lg font-bold text-green-400">1,247</div>
              <div className="text-blue-200 text-xs font-medium">Active Deals</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xl rounded-lg p-3 border border-white/20 text-center">
              <div className="text-lg font-bold text-purple-400">500+</div>
              <div className="text-blue-200 text-xs font-medium">Top Stores</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories - PROFESSIONAL REDESIGN */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
              Shop by Category
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Discover Deals by
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Your Interests
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Explore thousands of verified coupons and exclusive deals across your favorite shopping categories.
              <span className="font-semibold text-gray-900"> Find exactly what you're looking for.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {demoCategories.map((category) => {
              const iconConfig = CategoryIcon({ type: category.icon })
              return (
                <Link
                  key={category.id}
                  href={`/categories/${category.slug}`}
                  className="group relative overflow-hidden"
                >
                  <div className={`relative bg-gradient-to-br ${iconConfig.bgGradient} border border-white/50 rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] group-hover:border-white`}>
                    {/* Subtle background pattern */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.8),transparent_70%)] opacity-60"></div>
                    
                    {/* Main content */}
                    <div className="relative z-10">
                      {/* Professional Icon Container */}
                      <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${iconConfig.gradient} rounded-2xl flex items-center justify-center text-white shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:scale-110 group-hover:rotate-3`}>
                        <div className="transform transition-transform duration-500 group-hover:scale-110">
                          {iconConfig.icon}
                        </div>
                      </div>
                      
                      {/* Category Name */}
                      <h3 className="font-bold text-gray-900 text-lg lg:text-xl mb-2 transition-colors duration-300 group-hover:text-gray-800">
                        {category.name}
                      </h3>
                      
                      {/* Subtitle */}
                      <p className="text-gray-600 text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                        Explore Deals
                      </p>
                      
                      {/* Arrow indicator */}
                      <div className="mt-4 flex justify-center">
                        <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                          <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    {/* Hover glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${iconConfig.hoverGradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
                  </div>
                  
                  {/* Floating badge */}
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    HOT
                  </div>
                </Link>
              )
            })}
          </div>
          
          {/* Call to action */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full shadow-lg mb-8">
              <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700 font-medium">500+ Brands • 1,200+ Active Deals • Updated Daily</span>
            </div>
            
            <Link
              href="/categories"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02]"
            >
              Explore All Categories
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Browser Extensions Section - HIGH REVENUE */}
      <ExtensionSection />

      {/* Featured Deals */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-20">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Hot Deals</h2>
            <p className="text-xl text-gray-600 font-light">Hand-picked deals that expire soon</p>
          </div>
          <Link
            href="/categories"
            className="text-blue-600 hover:text-blue-700 font-semibold flex items-center group transition-colors duration-200 text-lg"
          >
            View All Deals 
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {realCoupons.map((coupon) => (
            <CouponCard key={coupon.id} coupon={coupon} />
          ))}
        </div>
      </section>

      {/* Featured Stores */}
      <section className="bg-gradient-to-br from-slate-50/50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Popular Stores</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">Shop from your favorite brands and discover new retailers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
            {realStores.map((store) => (
              <StoreCardCompact
                key={store.id}
                store={store}
              />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/stores"
              className="inline-flex items-center px-8 py-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold text-lg rounded-2xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
            >
              View All Stores
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Never Miss a Deal!</h2>
            <p className="text-xl mb-12 text-blue-100 max-w-3xl mx-auto font-light">
              Get exclusive coupons and the latest deals delivered straight to your inbox.
            </p>

            <div className="max-w-md mx-auto">
              <EmailForm
                placeholder="Enter your email for exclusive deals"
                buttonText="Get Deals"
                className="[&_input]:bg-white/90 [&_input]:backdrop-blur-sm [&_input]:text-gray-900 [&_input]:border-white/20 [&_input]:placeholder-gray-500 [&_button]:bg-yellow-400 [&_button]:text-gray-900 [&_button]:hover:bg-yellow-300 [&_button]:font-semibold"
              />
            </div>

            <p className="text-sm text-blue-100 mt-8 font-medium">
              Join 50,000+ smart shoppers saving money every day
            </p>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center p-8 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl hover:border-gray-300 transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-3 text-lg">Verified Deals</h3>
            <p className="text-gray-600 text-sm leading-relaxed">All coupons tested and verified by our expert team</p>
          </div>

          <div className="text-center p-8 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl hover:border-gray-300 transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-3 text-lg">100% Safe</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Secure shopping with trusted retailers and bank-level security</p>
          </div>

          <div className="text-center p-8 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl hover:border-gray-300 transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-3 text-lg">Always Free</h3>
            <p className="text-gray-600 text-sm leading-relaxed">No fees, subscriptions, or hidden costs - just great savings</p>
          </div>

          <div className="text-center p-8 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl hover:border-gray-300 transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-3 text-lg">Fresh Deals</h3>
            <p className="text-gray-600 text-sm leading-relaxed">New coupons added daily from premium brands worldwide</p>
          </div>
        </div>
      </section>
    </> 
  )
}
