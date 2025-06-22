'use client'

import { StoreWithCoupons } from '@/lib/types'
import Link from 'next/link'

interface StoreCardProps {
  store: StoreWithCoupons
  className?: string
}

export default function StoreCard({ store, className = '' }: StoreCardProps) {
  return (
    <Link href={`/stores/${store.slug}`}>
      <div className={`bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-gray-300 transition-all duration-300 overflow-hidden cursor-pointer group ${className}`}>
        {/* Store header */}
        <div className="p-6 text-center">
          {store.logo_url ? (
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-50 rounded-lg flex items-center justify-center overflow-hidden">
              <img 
                src={store.logo_url} 
                alt={`${store.name} logo`}
                className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-200"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                  // Show fallback text
                  const parent = target.parentElement
                  if (parent) {
                    parent.innerHTML = `<span class="text-2xl font-bold text-gray-400">${store.name.charAt(0)}</span>`
                  }
                }}
              />
            </div>
          ) : (
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-400">{store.name.charAt(0)}</span>
            </div>
          )}
          
          <h3 className="font-semibold text-lg text-gray-900 mb-2">{store.name}</h3>
          <p className="text-sm text-gray-500 mb-3">{store.category.name}</p>
          
          {/* Featured badge */}
          {store.is_featured && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-700 mb-3">
              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Featured Store
            </span>
          )}
        </div>

        {/* Coupon count and stats */}
        <div className="px-6 pb-4">
          <div className="bg-blue-50 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-blue-600">{store.coupon_count}</div>
            <div className="text-sm text-blue-700">
              {store.coupon_count === 1 ? 'Active Deal' : 'Active Deals'}
            </div>
          </div>
        </div>

        {/* Quick preview of latest coupons */}
        {store.coupons && store.coupons.length > 0 && (
          <div className="px-6 pb-6">
            <div className="space-y-2">
              {store.coupons.slice(0, 2).map((coupon) => (
                <div key={coupon.id} className="text-xs text-gray-600 bg-gray-50 rounded p-2">
                  <span className="font-medium">{coupon.title}</span>
                  {coupon.code && (
                    <span className="ml-2 font-mono bg-white px-1 rounded">{coupon.code}</span>
                  )}
                </div>
              ))}
              {store.coupon_count > 2 && (
                <div className="text-xs text-gray-500 text-center">
                  +{store.coupon_count - 2} more deals
                </div>
              )}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="px-6 pb-4">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>{store.affiliate_network || 'Manual'}</span>
            <span className="group-hover:text-blue-600 transition-colors flex items-center">
              View All Deals
              <svg className="w-3 h-3 ml-1 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

// Compact version for grid layouts
export function StoreCardCompact({ store, className = '' }: StoreCardProps) {
  return (
    <Link href={`/stores/${store.slug}`}>
      <div className={`bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-gray-300 transition-all duration-300 overflow-hidden cursor-pointer group ${className}`}>
        <div className="p-4">
          <div className="flex items-center space-x-3">
            {store.logo_url ? (
              <div className="w-10 h-10 bg-gray-50 rounded flex items-center justify-center overflow-hidden flex-shrink-0">
                <img 
                  src={store.logo_url} 
                  alt={`${store.name} logo`}
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                    const parent = target.parentElement
                    if (parent) {
                      parent.innerHTML = `<span class="text-sm font-bold text-gray-400">${store.name.charAt(0)}</span>`
                    }
                  }}
                />
              </div>
            ) : (
              <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-bold text-gray-400">{store.name.charAt(0)}</span>
              </div>
            )}
            
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-gray-900 truncate">{store.name}</h3>
              <p className="text-sm text-gray-500 truncate">{store.category.name}</p>
            </div>
            
            <div className="text-right flex-shrink-0">
              <div className="text-lg font-bold text-blue-600">{store.coupon_count}</div>
              <div className="text-xs text-gray-500">deals</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
