import CouponCard from '@/components/coupon-card'
import { StoreCardCompact } from '@/components/store-card'
import Link from 'next/link'

// Demo travel stores and deals
const travelStores = [
  { 
    id: '7', 
    name: 'Expedia', 
    slug: 'expedia', 
    logo_url: 'https://logo.clearbit.com/expedia.com', 
    website_url: 'https://expedia.com', 
    category_id: '4', 
    is_featured: true, 
    created_at: '', 
    updated_at: '',
    affiliate_network: 'expedia_affiliate',
    coupons: [],
    coupon_count: 14,
    category: { id: '4', name: 'Travel', slug: 'travel', is_featured: true, created_at: '' }
  },
  { 
    id: '8', 
    name: 'Booking.com', 
    slug: 'booking', 
    logo_url: 'https://logo.clearbit.com/booking.com', 
    website_url: 'https://booking.com', 
    category_id: '4', 
    is_featured: true, 
    created_at: '', 
    updated_at: '',
    affiliate_network: 'booking_affiliate',
    coupons: [],
    coupon_count: 11,
    category: { id: '4', name: 'Travel', slug: 'travel', is_featured: true, created_at: '' }
  },
  { 
    id: '9', 
    name: 'Priceline', 
    slug: 'priceline', 
    logo_url: 'https://logo.clearbit.com/priceline.com', 
    website_url: 'https://priceline.com', 
    category_id: '4', 
    is_featured: false, 
    created_at: '', 
    updated_at: '',
    affiliate_network: 'commission_junction',
    coupons: [],
    coupon_count: 8,
    category: { id: '4', name: 'Travel', slug: 'travel', is_featured: true, created_at: '' }
  },
  { 
    id: '10', 
    name: 'Hotels.com', 
    slug: 'hotels-com', 
    logo_url: 'https://logo.clearbit.com/hotels.com', 
    website_url: 'https://hotels.com', 
    category_id: '4', 
    is_featured: false, 
    created_at: '', 
    updated_at: '',
    affiliate_network: 'expedia_affiliate',
    coupons: [],
    coupon_count: 12,
    category: { id: '4', name: 'Travel', slug: 'travel', is_featured: true, created_at: '' }
  }
]

const travelCoupons = [
  {
    id: '201',
    title: 'Save 15% on Hotels Worldwide',
    code: 'SAVE15',
    type: 'code' as const,
    discount_type: 'percentage' as const,
    discount_value: 15,
    affiliate_url: 'https://expedia.com?tag=thecouponkey',
    store_id: '7',
    category_id: '4',
    description: 'Get 15% off hotel bookings worldwide with minimum 2-night stay',
    is_featured: true,
    is_verified: true,
    click_count: 1234,
    success_count: 267,
    created_at: '',
    updated_at: '',
    expires_at: '2025-09-30',
    store: travelStores[0],
    category: { id: '4', name: 'Travel', slug: 'travel', is_featured: true, created_at: '' }
  },
  {
    id: '202',
    title: 'Up to 25% Off Last-Minute Deals',
    type: 'deal' as const,
    discount_type: 'percentage' as const,
    discount_value: 25,
    affiliate_url: 'https://booking.com?tag=thecouponkey',
    store_id: '8',
    category_id: '4',
    description: 'Book within 24 hours of check-in and save up to 25% on select hotels',
    is_featured: true,
    is_verified: true,
    click_count: 892,
    success_count: 198,
    created_at: '',
    updated_at: '',
    store: travelStores[1],
    category: { id: '4', name: 'Travel', slug: 'travel', is_featured: true, created_at: '' }
  },
  {
    id: '203',
    title: 'Free Cancellation on Most Hotels',
    type: 'deal' as const,
    discount_type: 'other' as const,
    affiliate_url: 'https://priceline.com?tag=thecouponkey',
    store_id: '9',
    category_id: '4',
    description: 'Book now and cancel later with free cancellation on thousands of hotels worldwide',
    is_featured: false,
    is_verified: true,
    click_count: 567,
    success_count: 134,
    created_at: '',
    updated_at: '',
    store: travelStores[2],
    category: { id: '4', name: 'Travel', slug: 'travel', is_featured: true, created_at: '' }
  },
  {
    id: '204',
    title: 'Collect 1 Free Night for Every 10 Nights',
    type: 'deal' as const,
    discount_type: 'other' as const,
    affiliate_url: 'https://hotels.com?tag=thecouponkey',
    store_id: '10',
    category_id: '4',
    description: 'Join Hotels.com Rewards and earn a free night after 10 nights stayed',
    is_featured: true,
    is_verified: true,
    click_count: 745,
    success_count: 156,
    created_at: '',
    updated_at: '',
    store: travelStores[3],
    category: { id: '4', name: 'Travel', slug: 'travel', is_featured: true, created_at: '' }
  },
  {
    id: '205',
    title: '$50 Off Flight + Hotel Packages',
    code: 'PACKAGE50',
    type: 'code' as const,
    discount_type: 'fixed' as const,
    discount_value: 50,
    affiliate_url: 'https://expedia.com/packages?tag=thecouponkey',
    store_id: '7',
    category_id: '4',
    description: 'Save $50 when you book flight and hotel together on vacation packages of $500+',
    is_featured: true,
    is_verified: true,
    click_count: 623,
    success_count: 142,
    created_at: '',
    updated_at: '',
    expires_at: '2025-08-15',
    store: travelStores[0],
    category: { id: '4', name: 'Travel', slug: 'travel', is_featured: true, created_at: '' }
  }
]

const travelStats = {
  dealCount: 95,
  storeCount: 15,
  avgSavings: '$127',
  topDestinations: ['New York', 'Los Angeles', 'Miami', 'Las Vegas', 'Orlando']
}

export default function TravelCategoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-sky-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="w-20 h-20 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">
              Travel Deals & Hotel Coupons
            </h1>
            <p className="text-xl text-sky-100 max-w-3xl mx-auto mb-8">
              Find verified coupons and exclusive deals on flights, hotels, car rentals, and vacation packages. 
              Save hundreds on your next trip with our hand-picked travel discounts.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold">{travelStats.dealCount}</div>
                <div className="text-sky-200 text-sm">Active Deals</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{travelStats.storeCount}</div>
                <div className="text-sky-200 text-sm">Travel Sites</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{travelStats.avgSavings}</div>
                <div className="text-sky-200 text-sm">Avg. Savings</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sky-200 text-sm">Deal Updates</div>
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
              <Link href="/categories" className="text-gray-500 hover:text-gray-700">
                Categories
              </Link>
            </li>
            <li>
              <span className="text-gray-400 mx-2">/</span>
              <span className="text-gray-900 font-medium">Travel</span>
            </li>
          </ol>
        </nav>
      </div>

      {/* Featured Travel Deals */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">✈️ Featured Travel Deals</h2>
          <p className="text-gray-600">Hand-picked deals with the biggest savings on flights, hotels and vacation packages</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {travelCoupons.map((coupon) => (
            <CouponCard key={coupon.id} coupon={coupon} />
          ))}
        </div>
      </div>

      {/* Popular Travel Sites */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">🏨 Popular Travel Sites</h2>
          <p className="text-gray-600">Top-rated travel booking sites with exclusive deals</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {travelStores.map((store) => (
            <StoreCardCompact key={store.id} store={store} />
          ))}
        </div>
      </div>

      {/* Travel Tips */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">💡 Smart Travel Booking Tips</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Book Packages</h4>
                  <p className="text-gray-600 text-sm">Save $50-200 by booking flight and hotel together instead of separately.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Use Incognito Mode</h4>
                  <p className="text-gray-600 text-sm">Clear cookies or browse privately to avoid price increases on repeat visits.</p>
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
                  <h4 className="font-medium text-gray-900">Tuesday Bookings</h4>
                  <p className="text-gray-600 text-sm">Book flights on Tuesdays and Wednesdays for the best prices.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Join Loyalty Programs</h4>
                  <p className="text-gray-600 text-sm">Free to join and earn points for free nights and exclusive member rates.</p>
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
                  <h4 className="font-medium text-gray-900">Last-Minute Deals</h4>
                  <p className="text-gray-600 text-sm">Book within 24-48 hours for up to 25% off unsold hotel inventory.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Compare Multiple Sites</h4>
                  <p className="text-gray-600 text-sm">Check 3-4 booking sites as prices can vary significantly for the same trip.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Destinations */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">🌟 Popular Travel Destinations</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {travelStats.topDestinations.map((destination) => (
              <div key={destination} className="px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200 hover:border-blue-300 transition-colors">
                <span className="font-medium text-gray-700">{destination}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-6">
            Find exclusive deals and discounts for these popular destinations and many more worldwide locations.
          </p>
        </div>
      </div>

      {/* Newsletter CTA */}
      <div className="bg-sky-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Never Miss Travel Deals</h2>
            <p className="text-xl mb-8 text-sky-100">
              Get notified when new travel coupons and flash sales are available.
            </p>
            <Link 
              href="/contact"
              className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
            >
              Get Travel Alerts
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
