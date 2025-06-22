import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 - Page Not Found | TheCouponKey',
  description: 'The page you are looking for could not be found. Browse our latest deals and coupons instead.',
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center px-6">
        {/* 404 Visual */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
            <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.034 0-3.9.785-5.291 2.073M6.343 6.343A8 8 0 1017.657 17.657 8 8 0 006.343 6.343z" />
            </svg>
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        </div>
        
        {/* Error Message */}
        <div className="space-y-4 mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Page Not Found</h2>
          <p className="text-gray-600 leading-relaxed">
            Oops! The deal you're looking for might have expired or moved. 
            But don't worry – we have plenty of other amazing savings waiting for you!
          </p>
        </div>
        
        {/* Action Buttons */}
        <div className="space-y-4">
          <Link
            href="/"
            className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Back to Homepage
          </Link>
          
          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/stores"
              className="bg-white text-gray-700 font-medium py-3 px-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:text-blue-600 transition-colors text-sm"
            >
              Browse Stores
            </Link>
            <Link
              href="/categories"
              className="bg-white text-gray-700 font-medium py-3 px-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:text-blue-600 transition-colors text-sm"
            >
              View Categories
            </Link>
          </div>
        </div>
        
        {/* Popular Links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">Popular right now:</p>
          <div className="flex flex-wrap justify-center gap-2">
            <Link href="/stores/amazon" className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors">
              Amazon Deals
            </Link>
            <Link href="/categories/electronics" className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors">
              Electronics
            </Link>
            <Link href="/blog" className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors">
              Money Tips
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
