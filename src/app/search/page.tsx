'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import CouponCard from '@/components/coupon-card'
import { StoreCardCompact } from '@/components/store-card'
import Link from 'next/link'

// Demo data for search results
const searchableStores = [
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
  }
]

const searchableCoupons = [
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
    store: searchableStores[0],
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
    store: searchableStores[1],
    category: { id: '1', name: 'Electronics', slug: 'electronics', is_featured: true, created_at: '' }
  },
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
    store: searchableStores[2],
    category: { id: '2', name: 'Fashion', slug: 'fashion', is_featured: true, created_at: '' }
  },
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
    store: searchableStores[3],
    category: { id: '3', name: 'Home & Garden', slug: 'home-garden', is_featured: true, created_at: '' }
  }
]

function SearchResults() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''
  
  if (!query || query.trim() === '') {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Search Results
              </h1>
              <p className="text-lg text-gray-600">
                Enter a search term to find coupons and deals
              </p>
            </div>
          </div>
        </div>

        {/* Empty State */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Start Your Search
            </h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Search for store names, product categories, or specific deals to find the best coupons available.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/stores"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Browse All Stores
              </Link>
              <Link 
                href="/categories"
                className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
              >
                Shop by Category
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Simple search logic for demo
  const lowerQuery = query.toLowerCase()
  
  const matchingStores = searchableStores.filter(store => 
    store.name.toLowerCase().includes(lowerQuery) ||
    store.category.name.toLowerCase().includes(lowerQuery)
  )
  
  const matchingCoupons = searchableCoupons.filter(coupon => 
    coupon.title.toLowerCase().includes(lowerQuery) ||
    coupon.description.toLowerCase().includes(lowerQuery) ||
    coupon.store.name.toLowerCase().includes(lowerQuery) ||
    coupon.category.name.toLowerCase().includes(lowerQuery) ||
    (coupon.code && coupon.code.toLowerCase().includes(lowerQuery))
  )

  const totalResults = matchingStores.length + matchingCoupons.length

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Search Results
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Results for "<span className="font-semibold text-gray-900">{query}</span>"
            </p>
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
              {totalResults} {totalResults === 1 ? 'result' : 'results'} found
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
              <span className="text-gray-900 font-medium">Search Results</span>
            </li>
          </ol>
        </nav>
      </div>

      {totalResults === 0 ? (
        /* No Results */
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.489-1.005-5.971-2.709M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No Results Found
            </h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              We couldn't find any stores or deals matching "{query}". Try searching for different terms or browse our categories.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/stores"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Browse All Stores
              </Link>
              <Link 
                href="/categories"
                className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
              >
                Shop by Category
              </Link>
            </div>
          </div>
        </div>
      ) : (
        /* Results */
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          
          {/* Matching Deals */}
          {matchingCoupons.length > 0 && (
            <div className="mb-12">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  🔥 Matching Deals ({matchingCoupons.length})
                </h2>
                <p className="text-gray-600">Coupons and deals that match your search</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {matchingCoupons.map((coupon) => (
                  <CouponCard key={coupon.id} coupon={coupon} />
                ))}
              </div>
            </div>
          )}

          {/* Matching Stores */}
          {matchingStores.length > 0 && (
            <div className="mb-12">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  🏪 Matching Stores ({matchingStores.length})
                </h2>
                <p className="text-gray-600">Stores that match your search</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {matchingStores.map((store) => (
                  <StoreCardCompact key={store.id} store={store} />
                ))}
              </div>
            </div>
          )}

          {/* Search Suggestions */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Searches</h3>
            <div className="flex flex-wrap gap-3">
              {['Amazon', 'Nike', 'Electronics', 'Fashion', 'Free Shipping', 'Target', 'Best Buy', 'Home Garden'].map((term) => (
                <Link
                  key={term}
                  href={`/search?q=${encodeURIComponent(term)}`}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors text-sm"
                >
                  {term}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading search results...</p>
        </div>
      </div>
    }>
      <SearchResults />
    </Suspense>
  )
}
