import StoreCard from '@/components/store-card'
import Link from 'next/link'

// Demo stores data (same as homepage but expanded)
const allStores = [
  { 
    id: '1', 
    name: 'Amazon', 
    slug: 'amazon', 
    logo_url: 'https://logo.clearbit.com/amazon.com', 
    website_url: 'https://amazon.com', 
    category_id: '1', 
    is_featured: true, 
    created_at: '', 
    updated_at: '',
    affiliate_network: 'direct',
    coupons: [],
    coupon_count: 15,
    category: { id: '1', name: 'Electronics', slug: 'electronics', is_featured: true, created_at: '' }
  },
  { 
    id: '2', 
    name: 'Best Buy', 
    slug: 'best-buy', 
    logo_url: 'https://logo.clearbit.com/bestbuy.com', 
    website_url: 'https://bestbuy.com', 
    category_id: '1', 
    is_featured: true, 
    created_at: '', 
    updated_at: '',
    affiliate_network: 'commission_junction',
    coupons: [],
    coupon_count: 8,
    category: { id: '1', name: 'Electronics', slug: 'electronics', is_featured: true, created_at: '' }
  },
  { 
    id: '3', 
    name: 'Nike', 
    slug: 'nike', 
    logo_url: 'https://logo.clearbit.com/nike.com', 
    website_url: 'https://nike.com', 
    category_id: '2', 
    is_featured: true, 
    created_at: '', 
    updated_at: '',
    affiliate_network: 'shareasale',
    coupons: [],
    coupon_count: 12,
    category: { id: '2', name: 'Fashion', slug: 'fashion', is_featured: true, created_at: '' }
  },
  { 
    id: '4', 
    name: 'Target', 
    slug: 'target', 
    logo_url: 'https://logo.clearbit.com/target.com', 
    website_url: 'https://target.com', 
    category_id: '3', 
    is_featured: true, 
    created_at: '', 
    updated_at: '',
    affiliate_network: 'impact',
    coupons: [],
    coupon_count: 23,
    category: { id: '3', name: 'Home & Garden', slug: 'home-garden', is_featured: true, created_at: '' }
  },
  { 
    id: '5', 
    name: 'Walmart', 
    slug: 'walmart', 
    logo_url: 'https://logo.clearbit.com/walmart.com', 
    website_url: 'https://walmart.com', 
    category_id: '3', 
    is_featured: false, 
    created_at: '', 
    updated_at: '',
    affiliate_network: 'impact',
    coupons: [],
    coupon_count: 18,
    category: { id: '3', name: 'Home & Garden', slug: 'home-garden', is_featured: true, created_at: '' }
  },
  { 
    id: '6', 
    name: 'Adidas', 
    slug: 'adidas', 
    logo_url: 'https://logo.clearbit.com/adidas.com', 
    website_url: 'https://adidas.com', 
    category_id: '2', 
    is_featured: false, 
    created_at: '', 
    updated_at: '',
    affiliate_network: 'commission_junction',
    coupons: [],
    coupon_count: 9,
    category: { id: '2', name: 'Fashion', slug: 'fashion', is_featured: true, created_at: '' }
  },
  { 
    id: '7', 
    name: 'Expedia', 
    slug: 'expedia', 
    logo_url: 'https://logo.clearbit.com/expedia.com', 
    website_url: 'https://expedia.com', 
    category_id: '4', 
    is_featured: false, 
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
  }
]

const categories = [
  { id: '1', name: 'Electronics', slug: 'electronics' },
  { id: '2', name: 'Fashion', slug: 'fashion' },
  { id: '3', name: 'Home & Garden', slug: 'home-garden' },
  { id: '4', name: 'Travel', slug: 'travel' },
  { id: '5', name: 'Beauty', slug: 'beauty' }
]

export const metadata = {
  title: 'All Stores - DealFinder | Shop Your Favorite Brands',
  description: 'Browse all stores on DealFinder. Find coupons and deals from top retailers like Amazon, Nike, Target, Best Buy and more.',
}

export default function StoresPage() {
  const featuredStores = allStores.filter(store => store.is_featured)
  const otherStores = allStores.filter(store => !store.is_featured)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              All Stores
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Shop from your favorite brands and discover new ones. Find exclusive deals and coupons from top retailers.
            </p>
          </div>
        </div>
      </div>

      {/* Filter by Category */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Filter by Category</h2>
          <div className="flex flex-wrap gap-3">
            <Link 
              href="/stores"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              All Stores
            </Link>
            {categories.map((category) => (
              <Link 
                key={category.id}
                href={`/categories/${category.slug}`}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Stores */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">⭐ Featured Stores</h2>
          <p className="text-gray-600">Our top-rated retailers with the best deals</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {featuredStores.map((store) => (
            <StoreCard key={store.id} store={store} />
          ))}
        </div>
      </div>

      {/* All Other Stores */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">All Stores</h2>
          <p className="text-gray-600">Browse our complete directory of partner retailers</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {otherStores.map((store) => (
            <StoreCard key={store.id} store={store} />
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">{allStores.length}+</div>
              <div className="text-blue-100">Partner Stores</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">
                {allStores.reduce((sum, store) => sum + store.coupon_count, 0)}+
              </div>
              <div className="text-blue-100">Active Deals</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">$2M+</div>
              <div className="text-blue-100">Saved by Users</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}