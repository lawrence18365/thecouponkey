'use client'

import { CouponWithStore } from '@/lib/types'

interface CouponCardProps {
  coupon: CouponWithStore
  className?: string
}

export default function CouponCard({ coupon, className = '' }: CouponCardProps) {
  const handleCouponClick = async () => {
    // Demo mode - just open link and log click
    console.log('Demo: Coupon clicked:', coupon.title)
    
    // Open affiliate link in new tab
    window.open(coupon.affiliate_url, '_blank', 'noopener,noreferrer')
  }

  const formatDiscount = () => {
    if (coupon.discount_type === 'percentage' && coupon.discount_value) {
      return `${coupon.discount_value}% OFF`
    } else if (coupon.discount_type === 'fixed' && coupon.discount_value) {
      return `$${coupon.discount_value} OFF`
    } else if (coupon.discount_type === 'free_shipping') {
      return 'FREE SHIPPING'
    }
    return 'DEAL'
  }

  const isExpiringSoon = () => {
    if (!coupon.expires_at) return false
    const expiryDate = new Date(coupon.expires_at)
    const today = new Date()
    const daysUntilExpiry = Math.ceil((expiryDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
    return daysUntilExpiry <= 3 && daysUntilExpiry >= 0
  }

  const formatExpiryDate = () => {
    if (!coupon.expires_at) return 'No expiration'
    return new Date(coupon.expires_at).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
  }

  return (
    <div className={`bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-gray-300 transition-all duration-300 overflow-hidden ${className}`}>
      {/* Header with store info and discount badge */}
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {coupon.store.logo_url && (
              <img 
                src={coupon.store.logo_url} 
                alt={`${coupon.store.name} logo`}
                className="w-8 h-8 rounded object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                }}
              />
            )}
            <div>
              <h3 className="font-medium text-gray-900">{coupon.store.name}</h3>
              <p className="text-sm text-gray-500">{coupon.category.name}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            {coupon.is_verified && (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Verified
              </span>
            )}
            {coupon.is_featured && (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-700">
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Featured
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="p-4">
        <div className="mb-3">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">{coupon.title}</h2>
          <p className="text-gray-600 text-sm line-clamp-2">{coupon.description}</p>
        </div>

        {/* Discount badge */}
        <div className="mb-4">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold text-sm rounded-lg shadow-sm">
            {formatDiscount()}
          </span>
        </div>

        {/* Coupon code section */}
        {coupon.code && (
          <div className="mb-4 p-3 bg-gray-50 rounded border-2 border-dashed border-gray-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Coupon Code</p>
                <p className="font-mono text-lg font-bold text-gray-900">{coupon.code}</p>
              </div>
              <button 
                onClick={() => {
                  navigator.clipboard.writeText(coupon.code!)
                  console.log('Copied code:', coupon.code)
                }}
                className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded hover:bg-blue-200 transition-colors"
              >
                Copy
              </button>
            </div>
          </div>
        )}

        {/* Footer with expiry and CTA */}
        <div className="flex items-center justify-between">
          <div className="text-xs text-gray-500">
            {isExpiringSoon() ? (
              <span className="text-red-600 font-medium flex items-center">
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                Expires {formatExpiryDate()}
              </span>
            ) : (
              <span>Expires {formatExpiryDate()}</span>
            )}
          </div>
          <button 
            onClick={handleCouponClick}
            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-sm hover:shadow-md flex items-center"
          >
            Get Deal
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </button>
        </div>

        {/* Usage stats */}
        {coupon.click_count > 0 && (
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-xs text-gray-500">
              Used by {coupon.click_count} {coupon.click_count === 1 ? 'person' : 'people'}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
