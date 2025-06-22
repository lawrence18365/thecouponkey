import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand and description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-sm">
                {/* Key icon */}
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-xl font-outfit font-bold">The Coupon Key</span>
            </div>
            <p className="text-slate-300 text-sm mb-6 leading-relaxed">
              Unlock savings with verified deals and exclusive coupons from top retailers. 
              Your key to smart shopping and maximum savings.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200 text-sm font-medium">
                Facebook
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200 text-sm font-medium">
                Twitter
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200 text-sm font-medium">
                Instagram
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-slate-300 hover:text-white transition-colors duration-200 text-sm">Home</Link></li>
              <li><Link href="/stores" className="text-slate-300 hover:text-white transition-colors duration-200 text-sm">All Stores</Link></li>
              <li><Link href="/categories" className="text-slate-300 hover:text-white transition-colors duration-200 text-sm">Categories</Link></li>
              <li><Link href="/blog" className="text-slate-300 hover:text-white transition-colors duration-200 text-sm">Blog</Link></li>
              <li><Link href="/about" className="text-slate-300 hover:text-white transition-colors duration-200 text-sm">About Us</Link></li>
            </ul>
          </div>

          {/* Popular Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Popular Categories</h3>
            <ul className="space-y-3">
              <li><Link href="/categories/electronics" className="text-slate-300 hover:text-white transition-colors duration-200 text-sm">Electronics</Link></li>
              <li><Link href="/categories/fashion" className="text-slate-300 hover:text-white transition-colors duration-200 text-sm">Fashion</Link></li>
              <li><Link href="/categories/home-garden" className="text-slate-300 hover:text-white transition-colors duration-200 text-sm">Home & Garden</Link></li>
              <li><Link href="/categories/travel" className="text-slate-300 hover:text-white transition-colors duration-200 text-sm">Travel</Link></li>
              <li><Link href="/categories/beauty" className="text-slate-300 hover:text-white transition-colors duration-200 text-sm">Beauty & Health</Link></li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Stay Updated</h3>
            <p className="text-slate-300 text-sm mb-4 leading-relaxed">
              Get the latest deals and exclusive coupons delivered to your inbox.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-slate-400 transition-all duration-200"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-slate-400 mt-3">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 text-sm mb-4 md:mb-0">
              © {currentYear} The Coupon Key. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-slate-400 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-slate-400 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/affiliate-disclosure" className="text-slate-400 hover:text-white text-sm transition-colors duration-200">
                Affiliate Disclosure
              </Link>
              <Link href="/contact" className="text-slate-400 hover:text-white text-sm transition-colors duration-200">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Trust indicators */}
      <div className="bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-3 md:space-y-0 md:space-x-12 text-sm text-slate-400">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Secure & Safe</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Verified Deals</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>100% Free to Use</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span>No Spam Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
