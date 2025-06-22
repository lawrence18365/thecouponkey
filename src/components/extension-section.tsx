'use client'

export default function ExtensionSection() {
  const handleExtensionClick = (extensionName: string, url: string) => {
    console.log(`${extensionName} install clicked - DEMO MODE`)
    alert(`Demo Mode: In production, this would redirect to ${extensionName} extension download`)
    // In production: window.open(url, '_blank')
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(16,185,129,0.15)_0%,transparent_50%),radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.15)_0%,transparent_50%)] opacity-60"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-6">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
            #1 Money-Saving Tools
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Automatic Savings
            <br />
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Browser Extensions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            Install these trusted browser extensions and save money automatically on every purchase. 
            <span className="font-semibold text-gray-900">No searching, no copying codes</span> – just instant savings at checkout.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* WikiBuy (Capital One) Extension */}
          <div className="group relative bg-white/90 backdrop-blur-sm border border-gray-200 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:border-gray-300 transition-all duration-500 hover:-translate-y-3">
            <div className="absolute -top-3 -right-3 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-bold transform rotate-12 shadow-lg">
              BEST VALUE
            </div>
            
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mr-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">WikiBuy Shopping</h3>
                <p className="text-sm text-gray-500 font-medium">by Capital One</p>
              </div>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center text-gray-700">
                <svg className="w-5 h-5 text-emerald-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Compares prices across thousands of stores</span>
              </div>
              <div className="flex items-center text-gray-700">
                <svg className="w-5 h-5 text-emerald-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Automatically applies best coupons</span>
              </div>
              <div className="flex items-center text-gray-700">
                <svg className="w-5 h-5 text-emerald-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Works on Amazon, Target, Best Buy & more</span>
              </div>
              <div className="flex items-center text-gray-700">
                <svg className="w-5 h-5 text-emerald-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold text-emerald-700">Trusted by Capital One</span>
              </div>
            </div>
            
            <div className="text-center mb-6">
              <div className="text-3xl font-bold text-emerald-600 mb-2">Average Savings</div>
              <div className="text-4xl font-black text-gray-900">$126<span className="text-xl text-gray-500">/year</span></div>
            </div>
            
            <button 
              onClick={() => handleExtensionClick('WikiBuy', 'https://www.capitalone.com/wikibuy/')}
              className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-lg rounded-2xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl group-hover:scale-[1.02] flex items-center justify-center"
            >
              Install WikiBuy Free
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </button>
            
            <p className="text-xs text-gray-500 text-center mt-4">
              <svg className="w-3 h-3 inline mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              100% Safe • 4.5★ Rating • 2M+ Users
            </p>
          </div>

          {/* Honey Extension */}
          <div className="group relative bg-white/90 backdrop-blur-sm border border-gray-200 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:border-gray-300 transition-all duration-500 hover:-translate-y-3">
            <div className="absolute -top-3 -right-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-bold transform rotate-12 shadow-lg">
              MOST POPULAR
            </div>
            
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-200 rounded-2xl flex items-center justify-center mr-4">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">Honey</h3>
                <p className="text-sm text-gray-500 font-medium">by PayPal</p>
              </div>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center text-gray-700">
                <svg className="w-5 h-5 text-emerald-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Scans 30,000+ websites for coupon codes</span>
              </div>
              <div className="flex items-center text-gray-700">
                <svg className="w-5 h-5 text-emerald-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Honey Gold rewards program</span>
              </div>
              <div className="flex items-center text-gray-700">
                <svg className="w-5 h-5 text-emerald-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Works on mobile and desktop</span>
              </div>
              <div className="flex items-center text-gray-700">
                <svg className="w-5 h-5 text-emerald-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold text-emerald-700">Owned by PayPal</span>
              </div>
            </div>
            
            <div className="text-center mb-6">
              <div className="text-3xl font-bold text-orange-600 mb-2">Average Discount</div>
              <div className="text-4xl font-black text-gray-900">18%<span className="text-xl text-gray-500"> off</span></div>
            </div>
            
            <button 
              onClick={() => handleExtensionClick('Honey', 'https://www.honey.com/')}
              className="w-full px-6 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold text-lg rounded-2xl hover:from-amber-700 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl group-hover:scale-[1.02] flex items-center justify-center"
            >
              Install Honey Free
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </button>
            
            <p className="text-xs text-gray-500 text-center mt-4">
              <svg className="w-3 h-3 inline mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              100% Free • 4.8★ Rating • 17M+ Users
            </p>
          </div>

          {/* Rakuten Cashback */}
          <div className="group relative bg-white/90 backdrop-blur-sm border border-gray-200 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:border-gray-300 transition-all duration-500 hover:-translate-y-3">
            <div className="absolute -top-3 -right-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold transform rotate-12 shadow-lg">
              CASHBACK
            </div>
            
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mr-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">Rakuten</h3>
                <p className="text-sm text-gray-500 font-medium">Cash Back & Coupons</p>
              </div>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center text-gray-700">
                <svg className="w-5 h-5 text-emerald-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Cash back at 2,500+ stores</span>
              </div>
              <div className="flex items-center text-gray-700">
                <svg className="w-5 h-5 text-emerald-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Exclusive coupon codes</span>
              </div>
              <div className="flex items-center text-gray-700">
                <svg className="w-5 h-5 text-emerald-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Up to 40% cash back</span>
              </div>
              <div className="flex items-center text-gray-700">
                <svg className="w-5 h-5 text-emerald-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold text-emerald-700">Quarterly bonus payouts</span>
              </div>
            </div>
            
            <div className="text-center mb-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">Members Earned</div>
              <div className="text-4xl font-black text-gray-900">$3.2B<span className="text-xl text-gray-500">+</span></div>
            </div>
            
            <button 
              onClick={() => handleExtensionClick('Rakuten', 'https://www.rakuten.com/')}
              className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-bold text-lg rounded-2xl hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-lg hover:shadow-xl group-hover:scale-[1.02] flex items-center justify-center"
            >
              Join Rakuten Free
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            
            <p className="text-xs text-gray-500 text-center mt-4">
              <svg className="w-3 h-3 inline mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              100% Safe • $40 Sign-up Bonus • 14M+ Members
            </p>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full shadow-lg mb-8">
            <svg className="w-5 h-5 text-emerald-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700 font-medium">100% Free • No Signup Required • Works Instantly</span>
          </div>
          
          <p className="text-gray-600 max-w-2xl mx-auto text-lg font-light">
            These browser extensions have saved shoppers over <span className="font-bold text-emerald-600">$6 billion</span> collectively. 
            Install them now and start saving automatically on every purchase.
          </p>
        </div>
      </div>
    </section>
  )
}
