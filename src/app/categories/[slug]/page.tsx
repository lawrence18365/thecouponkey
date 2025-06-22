import CouponCard from '@/components/coupon-card'
import { StoreCardCompact } from '@/components/store-card'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// Demo data for categories
const categoryData = {
  'electronics': {
    id: '1',
    name: 'Electronics',
    slug: 'electronics',
    description: 'Find the best deals on latest tech gadgets, computers, phones, and electronics from top brands.',
    icon: '📱',
    dealCount: 156,
    storeCount: 25,
    stores: [
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
      }
    ],
    coupons: [
      {
        id: '1',
        title: '20% Off Electronics',
        code: 'TECH20',
        type: 'code' as const,
        discount_type: 'percentage' as const,
        discount_value: 20,
        affiliate_url: 'https://amazon.com',
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
        id: '2',
        title: 'Free Shipping on Orders $35+',
        type: 'deal' as const,
        discount_type: 'free_shipping' as const,
        affiliate_url: 'https://bestbuy.com',
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
    ]
  },
  'fashion': {
    id: '2',
    name: 'Fashion',
    slug: 'fashion',
    description: 'Discover amazing deals on clothing, shoes, accessories and fashion items from your favorite brands.',
    icon: '👕',
    dealCount: 243,
    storeCount: 34,
    stores: [
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
      }
    ],
    coupons: [
      {
        id: '3',
        title: 'Up to 50% Off Nike Shoes',
        type: 'deal' as const,
        discount_type: 'percentage' as const,
        discount_value: 50,
        affiliate_url: 'https://nike.com',
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
    ]
  },
  'home-garden': {
    id: '3',
    name: 'Home & Garden',
    slug: 'home-garden',
    description: 'Save on home improvement, furniture, decor and garden supplies for your perfect living space.',
    icon: '🏠',
    dealCount: 189,
    storeCount: 28,
    stores: [
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
      }
    ],
    coupons: [
      {
        id: '4',
        title: '$10 Off Orders Over $50',
        code: 'SAVE10',
        type: 'code' as const,
        discount_type: 'fixed' as const,
        discount_value: 10,
        affiliate_url: 'https://target.com',
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
    ]
  },
  'travel': {
    id: '4',
    name: 'Travel',
    slug: 'travel',
    description: 'Find the best deals on hotels, flights, car rentals and vacation bookings worldwide.',
    icon: '✈️',
    dealCount: 95,
    storeCount: 15,
    stores: [],
    coupons: []
  },
  'beauty-health': {
    id: '5',
    name: 'Beauty & Health',
    slug: 'beauty-health',
    description: 'Save on cosmetics, skincare, supplements and health products from top beauty brands.',
    icon: '💄',
    dealCount: 134,
    storeCount: 22,
    stores: [],
    coupons: []
  }
}

interface CategoryPageProps {
  params: {
    slug: string
  }
}

export function generateMetadata({ params }: CategoryPageProps) {
  const category = categoryData[params.slug as keyof typeof categoryData]
  
  if (!category) {
    return {
      title: 'Category Not Found - DealFinder'
    }
  }

  return {
    title: `${category.name} Deals & Coupons - DealFinder`,
    description: category.description,
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = categoryData[params.slug as keyof typeof categoryData]
  
  if (!category) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="w-20 h-20 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">{category.icon}</span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">
              {category.name} Deals & Coupons
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
              {category.description}
            </p>
            <div className="grid grid-cols-2 gap-8 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold">{category.dealCount}</div>
                <div className="text-blue-200 text-sm">Active Deals</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{category.storeCount}</div>
                <div className="text-blue-200 text-sm">Partner Stores</div>
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
              <span className="text-gray-900 font-medium">{category.name}</span>
            </li>
          </ol>
        </nav>
      </div>

      {/* Featured Deals */}
      {category.coupons.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">🔥 Featured {category.name} Deals</h2>
            <p className="text-gray-600">Hand-picked deals with the biggest savings</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {category.coupons.map((coupon) => (
              <CouponCard key={coupon.id} coupon={coupon} />
            ))}
          </div>
        </div>
      )}

      {/* Popular Stores */}
      {category.stores.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Popular {category.name} Stores</h2>
            <p className="text-gray-600">Top retailers in this category</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {category.stores.map((store) => (
              <StoreCardCompact key={store.id} store={store} />
            ))}
          </div>
        </div>
      )}

      {/* Empty State */}
      {category.coupons.length === 0 && category.stores.length === 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl text-gray-400">🔍</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              More {category.name} Deals Coming Soon!
            </h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              We're working hard to bring you the best {category.name.toLowerCase()} deals. 
              Check back soon or browse other categories.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/categories"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Browse All Categories
              </Link>
              <Link 
                href="/stores"
                className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
              >
                View All Stores
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Newsletter CTA */}
      <div className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Never Miss {category.name} Deals</h2>
            <p className="text-xl mb-8 text-blue-100">
              Get notified when new {category.name.toLowerCase()} coupons and deals are available.
            </p>
            <Link 
              href="/contact"
              className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
            >
              Get Deal Alerts
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
