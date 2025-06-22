import CouponCard from '@/components/coupon-card'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// Demo data for stores
const storeData = {
  'amazon': {
    id: '1',
    name: 'Amazon',
    slug: 'amazon',
    logo_url: 'https://logo.clearbit.com/amazon.com',
    website_url: 'https://amazon.com',
    category_id: '1',
    is_featured: true,
    affiliate_network: 'Direct Partnership',
    created_at: '',
    updated_at: '',
    description: 'The world\'s largest online marketplace offering everything from books to electronics, with fast shipping and competitive prices.',
    founded: '1994',
    headquarters: 'Seattle, WA',
    category: { id: '1', name: 'Electronics', slug: 'electronics', is_featured: true, created_at: '' },
    coupons: [
      {
        id: '1',
        title: '20% Off Electronics',
        code: 'TECH20',
        type: 'code' as const,
        discount_type: 'percentage' as const,
        discount_value: 20,
        affiliate_url: 'https://amazon.com?tag=dealfinder',
        store_id: '1',
        category_id: '1',
        description: 'Save 20% on all electronics with this exclusive code',
        is_featured: true,
        is_verified: true,
        click_count: 234,
        success_count: 45,
        created_at: '',
        updated_at: '',
        expires_at: '2025-12-31',
        store: { id: '1', name: 'Amazon', slug: 'amazon', logo_url: 'https://logo.clearbit.com/amazon.com', website_url: 'https://amazon.com', category_id: '1', is_featured: true, created_at: '', updated_at: '' },
        category: { id: '1', name: 'Electronics', slug: 'electronics', is_featured: true, created_at: '' }
      },
      {
        id: '5',
        title: 'Prime Members: Free One-Day Shipping',
        type: 'deal' as const,
        discount_type: 'free_shipping' as const,
        affiliate_url: 'https://amazon.com/prime?tag=dealfinder',
        store_id: '1',
        category_id: '1',
        description: 'Get free one-day shipping on millions of items with Amazon Prime membership',
        is_featured: false,
        is_verified: true,
        click_count: 892,
        success_count: 234,
        created_at: '',
        updated_at: '',
        store: { id: '1', name: 'Amazon', slug: 'amazon', logo_url: 'https://logo.clearbit.com/amazon.com', website_url: 'https://amazon.com', category_id: '1', is_featured: true, created_at: '', updated_at: '' },
        category: { id: '1', name: 'Electronics', slug: 'electronics', is_featured: true, created_at: '' }
      }
    ],
    coupon_count: 15
  },
  'best-buy': {
    id: '2',
    name: 'Best Buy',
    slug: 'best-buy',
    logo_url: 'https://logo.clearbit.com/bestbuy.com',
    website_url: 'https://bestbuy.com',
    category_id: '1',
    is_featured: true,
    affiliate_network: 'Commission Junction',
    created_at: '',
    updated_at: '',
    description: 'Leading retailer of technology products, services and solutions with expert advice and unmatched selection.',
    founded: '1966',
    headquarters: 'Richfield, MN',
    category: { id: '1', name: 'Electronics', slug: 'electronics', is_featured: true, created_at: '' },
    coupons: [
      {
        id: '2',
        title: 'Free Shipping on Orders $35+',
        type: 'deal' as const,
        discount_type: 'free_shipping' as const,
        affiliate_url: 'https://bestbuy.com?tag=dealfinder',
        store_id: '2',
        category_id: '1',
        description: 'Free standard shipping on all orders over $35',
        is_featured: true,
        is_verified: true,
        click_count: 156,
        success_count: 32,
        created_at: '',
        updated_at: '',
        store: { id: '2', name: 'Best Buy', slug: 'best-buy', logo_url: 'https://logo.clearbit.com/bestbuy.com', website_url: 'https://bestbuy.com', category_id: '1', is_featured: true, created_at: '', updated_at: '' },
        category: { id: '1', name: 'Electronics', slug: 'electronics', is_featured: true, created_at: '' }
      }
    ],
    coupon_count: 8
  },
  'nike': {
    id: '3',
    name: 'Nike',
    slug: 'nike',
    logo_url: 'https://logo.clearbit.com/nike.com',
    website_url: 'https://nike.com',
    category_id: '2',
    is_featured: true,
    affiliate_network: 'ShareASale',
    created_at: '',
    updated_at: '',
    description: 'The world\'s leading designer, marketer and distributor of authentic athletic footwear, apparel and accessories.',
    founded: '1964',
    headquarters: 'Beaverton, OR',
    category: { id: '2', name: 'Fashion', slug: 'fashion', is_featured: true, created_at: '' },
    coupons: [
      {
        id: '3',
        title: 'Up to 50% Off Nike Shoes',
        type: 'deal' as const,
        discount_type: 'percentage' as const,
        discount_value: 50,
        affiliate_url: 'https://nike.com?tag=dealfinder',
        store_id: '3',
        category_id: '2',
        description: 'Huge savings on selected Nike footwear styles',
        is_featured: true,
        is_verified: true,
        click_count: 423,
        success_count: 87,
        created_at: '',
        updated_at: '',
        expires_at: '2025-07-31',
        store: { id: '3', name: 'Nike', slug: 'nike', logo_url: 'https://logo.clearbit.com/nike.com', website_url: 'https://nike.com', category_id: '2', is_featured: true, created_at: '', updated_at: '' },
        category: { id: '2', name: 'Fashion', slug: 'fashion', is_featured: true, created_at: '' }
      }
    ],
    coupon_count: 12
  },
  'target': {
    id: '4',
    name: 'Target',
    slug: 'target',
    logo_url: 'https://logo.clearbit.com/target.com',
    website_url: 'https://target.com',
    category_id: '3',
    is_featured: true,
    affiliate_network: 'Impact',
    created_at: '',
    updated_at: '',
    description: 'Discount retailer providing a wide range of general merchandise and food products at competitive prices.',
    founded: '1902',
    headquarters: 'Minneapolis, MN',
    category: { id: '3', name: 'Home & Garden', slug: 'home-garden', is_featured: true, created_at: '' },
    coupons: [
      {
        id: '4',
        title: '$10 Off Orders Over $50',
        code: 'SAVE10',
        type: 'code' as const,
        discount_type: 'fixed' as const,
        discount_value: 10,
        affiliate_url: 'https://target.com?tag=dealfinder',
        store_id: '4',
        category_id: '3',
        description: 'Get $10 off when you spend $50 or more on home goods',
        is_featured: true,
        is_verified: true,
        click_count: 189,
        success_count: 56,
        created_at: '',
        updated_at: '',
        expires_at: '2025-08-15',
        store: { id: '4', name: 'Target', slug: 'target', logo_url: 'https://logo.clearbit.com/target.com', website_url: 'https://target.com', category_id: '3', is_featured: true, created_at: '', updated_at: '' },
        category: { id: '3', name: 'Home & Garden', slug: 'home-garden', is_featured: true, created_at: '' }
      }
    ],
    coupon_count: 23
  }
}

interface StorePageProps {
  params: {
    slug: string
  }
}

export function generateMetadata({ params }: StorePageProps) {
  const store = storeData[params.slug as keyof typeof storeData]
  
  if (!store) {
    return {
      title: 'Store Not Found - DealFinder'
    }
  }

  return {
    title: `${store.name} Coupons & Deals - DealFinder`,
    description: `Find the latest ${store.name} coupons and deals. ${store.description}`,
  }
}

export default function StorePage({ params }: StorePageProps) {
  const store = storeData[params.slug as keyof typeof storeData]
  
  if (!store) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Store Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            {/* Store Logo */}
            <div className="w-24 h-24 bg-gray-50 rounded-2xl flex items-center justify-center overflow-hidden flex-shrink-0">
              {store.logo_url ? (
                <img 
                  src={store.logo_url} 
                  alt={`${store.name} logo`}
                  className="max-w-full max-h-full object-contain"
                />
              ) : (
                <span className="text-3xl font-bold text-gray-400">{store.name.charAt(0)}</span>
              )}
            </div>

            {/* Store Info */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mb-4">
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">{store.name}</h1>
                {store.is_featured && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800 mt-2 md:mt-0">
                    ⭐ Featured Store
                  </span>
                )}
              </div>
              
              <p className="text-lg text-gray-600 mb-6 max-w-2xl">
                {store.description}
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-6">
                <div>
                  <div className="text-2xl font-bold text-blue-600">{store.coupon_count}</div>
                  <div className="text-sm text-gray-500">Active Deals</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">{store.founded}</div>
                  <div className="text-sm text-gray-500">Founded</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">{store.category.name}</div>
                  <div className="text-sm text-gray-500">Category</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-600">★★★★★</div>
                  <div className="text-sm text-gray-500">User Rating</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <a 
                  href={store.website_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Visit {store.name} →
                </a>
                <Link 
                  href={`/categories/${store.category.slug}`}
                  className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                >
                  Browse {store.category.name}
                </Link>
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
              <span className="text-gray-900 font-medium">{store.name}</span>
            </li>
          </ol>
        </nav>
      </div>

      {/* Active Deals */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">🔥 Current {store.name} Deals</h2>
          <p className="text-gray-600">All verified and up-to-date coupons and deals</p>
        </div>
        
        {store.coupons.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {store.coupons.map((coupon) => (
              <CouponCard key={coupon.id} coupon={coupon} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl text-gray-400">🔍</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No Active Deals Right Now
            </h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              We're working to bring you the latest {store.name} deals. Check back soon or browse other stores.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/stores"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Browse Other Stores
              </Link>
              <Link 
                href={`/categories/${store.category.slug}`}
                className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
              >
                Browse {store.category.name}
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Store Info */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* About Store */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">About {store.name}</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>{store.description}</p>
                <p>
                  Founded in {store.founded} and headquartered in {store.headquarters}, {store.name} has become 
                  a trusted name in {store.category.name.toLowerCase()}. We partner with {store.name} through 
                  {store.affiliate_network} to bring you the best verified deals and coupons.
                </p>
                <p>
                  All {store.name} coupons on DealFinder are tested and verified by our team to ensure they work 
                  when you need them. We update deals daily and remove expired offers immediately.
                </p>
              </div>
            </div>

            {/* Store Quick Facts */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Store Information</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600">Founded</span>
                  <span className="font-medium">{store.founded}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600">Headquarters</span>
                  <span className="font-medium">{store.headquarters}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600">Category</span>
                  <Link 
                    href={`/categories/${store.category.slug}`}
                    className="font-medium text-blue-600 hover:text-blue-700"
                  >
                    {store.category.name}
                  </Link>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600">Affiliate Network</span>
                  <span className="font-medium">{store.affiliate_network}</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-gray-600">Active Deals</span>
                  <span className="font-medium text-blue-600">{store.coupon_count}</span>
                </div>
              </div>

              {/* Visit Store Button */}
              <div className="mt-8">
                <a 
                  href={store.website_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
                >
                  Visit {store.name} Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter CTA */}
      <div className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Get {store.name} Deal Alerts</h2>
            <p className="text-xl mb-8 text-blue-100">
              Be the first to know when new {store.name} coupons and deals are available.
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
