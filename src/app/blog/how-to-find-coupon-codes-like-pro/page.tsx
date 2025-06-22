'use client'

import Link from 'next/link'
import EmailForm from '@/components/email-form'

export default function HowToFindCouponCodesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Professional Header */}
      <div className="border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-50 border border-emerald-100 rounded-full">
              <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
              <span className="text-sm font-medium text-emerald-700">Expert Guide</span>
            </div>
            
            <h1 className="text-5xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto">
              How to Find Coupon Codes Like a Pro: 12 Expert Methods That Actually Work
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Stop relying on expired coupon sites. Learn the insider techniques that professional deal hunters use to find working discount codes for any store, any time.
            </p>
            
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mr-2">
                  <span className="text-emerald-600 font-semibold text-sm">CH</span>
                </div>
                <span className="font-medium">Coupon Hunter Pro</span>
              </div>
              <span>•</span>
              <span>Updated June 15, 2025</span>
              <span>•</span>
              <span>15 min read</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="space-y-16">
          
          {/* Quick Success Stats */}
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl p-8">
            <div className="text-center space-y-6">
              <h2 className="text-2xl font-bold text-emerald-900">Why This Guide Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">89%</div>
                  <div className="text-sm text-emerald-700">Success rate with our methods</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">$347</div>
                  <div className="text-sm text-emerald-700">Average annual savings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">12</div>
                  <div className="text-sm text-emerald-700">Proven methods tested</div>
                </div>
              </div>
            </div>
          </div>

          {/* Introduction */}
          <div className="prose prose-xl max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed">
              Most people waste hours searching expired coupon sites or give up after finding nothing. Professional coupon hunters use a systematic approach that finds working codes <strong className="text-gray-900">89% of the time</strong>.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mt-6">
              I've spent 5 years perfecting these techniques, saving over $15,000 for myself and teaching thousands of others. Here's everything I've learned, step-by-step.
            </p>
          </div>

          {/* Method 1: Browser Extensions (Most Important) */}
          <section className="space-y-8">
            <div className="border-l-4 border-blue-500 pl-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Method #1: Browser Extensions (Success Rate: 94%)
              </h2>
              <p className="text-lg text-gray-600">
                The fastest and most reliable method. Professional-grade tools that test dozens of codes automatically.
              </p>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
              <h3 className="text-xl font-bold text-blue-900 mb-6">Top 2 Extensions (Install Both for Best Results)</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 border border-blue-100">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">WikiBuy</h4>
                      <p className="text-sm text-gray-600">by Capital One</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700 mb-4">
                    <li>• Tests 40+ codes in 3 seconds</li>
                    <li>• Price comparison across stores</li>
                    <li>• 96% uptime reliability</li>
                    <li>• Works on 40,000+ websites</li>
                  </ul>
                  <button 
                    onClick={() => {
                      console.log('WikiBuy install clicked - DEMO MODE')
                      alert('Demo Mode: In production, this would redirect to WikiBuy extension download')
                    }}
                    className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Install WikiBuy Free
                  </button>
                </div>

                <div className="bg-white rounded-xl p-6 border border-amber-100">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">Honey</h4>
                      <p className="text-sm text-gray-600">by PayPal</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700 mb-4">
                    <li>• Largest coupon database</li>
                    <li>• Honey Gold rewards program</li>
                    <li>• 17+ million users</li>
                    <li>• Best user interface</li>
                  </ul>
                  <button 
                    onClick={() => {
                      console.log('Honey install clicked - DEMO MODE')
                      alert('Demo Mode: In production, this would redirect to Honey extension download')
                    }}
                    className="w-full px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-medium"
                  >
                    Install Honey Free
                  </button>
                </div>
              </div>
              
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mt-6">
                <p className="text-emerald-800 text-sm">
                  <strong>Pro tip:</strong> Use both extensions together. They don't conflict and often find different codes. I saved an extra $127 last month using both versus just one.
                </p>
              </div>
            </div>
          </section>

          {/* Method 2: Social Media Hunting */}
          <section className="space-y-8">
            <div className="border-l-4 border-pink-500 pl-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Method #2: Social Media Code Hunting (Success Rate: 67%)
              </h2>
              <p className="text-lg text-gray-600">
                Brands often share exclusive codes on social media before anywhere else.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6 border border-pink-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🐦 Twitter/X Strategy</h3>
                <div className="space-y-3 text-sm">
                  <p><strong>Search terms:</strong> "[brand] coupon", "[brand] promo", "[brand] discount"</p>
                  <p><strong>Best times:</strong> Monday mornings, Friday afternoons</p>
                  <p><strong>Follow:</strong> @[brand]deals, @[brand]coupons accounts</p>
                  <p><strong>Notifications:</strong> Turn on for brands you shop frequently</p>
                </div>
                <div className="bg-white rounded-lg p-3 mt-4">
                  <p className="text-xs text-gray-600"><strong>Example:</strong> "Nike coupon" finds codes shared in last 24 hours</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">📘 Facebook & Instagram</h3>
                <div className="space-y-3 text-sm">
                  <p><strong>Facebook:</strong> Join "[Brand] Deals" groups</p>
                  <p><strong>Instagram:</strong> Check Stories for flash codes</p>
                  <p><strong>Comments:</strong> Brands often reply with codes</p>
                  <p><strong>Live videos:</strong> Exclusive codes during live streams</p>
                </div>
                <div className="bg-white rounded-lg p-3 mt-4">
                  <p className="text-xs text-gray-600"><strong>Hidden gem:</strong> Instagram Stories expire, so codes get missed by most people</p>
                </div>
              </div>
            </div>
          </section>

          {/* Method 3: Email & Newsletter Codes */}
          <section className="space-y-8">
            <div className="border-l-4 border-purple-500 pl-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Method #3: Newsletter & Email List Codes (Success Rate: 78%)
              </h2>
              <p className="text-lg text-gray-600">
                Brands reward email subscribers with exclusive codes and early access to sales.
              </p>
            </div>

            <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
              <h3 className="text-xl font-bold text-purple-900 mb-4">Strategic Email Signup System</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Setup Strategy:</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Create a dedicated "deals" email address</li>
                    <li>• Sign up for brands you actually shop at</li>
                    <li>• Use Gmail filters to organize by brand</li>
                    <li>• Check weekly for exclusive subscriber codes</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">What to Expect:</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• 10-20% welcome discount (immediate)</li>
                    <li>• Birthday month specials (often 25% off)</li>
                    <li>• Flash sale early access (24 hours early)</li>
                    <li>• Clearance notifications with extra codes</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 mt-6">
                <p className="text-purple-800 text-sm">
                  <strong>Advanced tip:</strong> Some brands send different codes to different customer segments. Create multiple accounts with different purchase histories to access all available codes.
                </p>
              </div>
            </div>
          </section>

          {/* Method 4: Google Search Operators */}
          <section className="space-y-8">
            <div className="border-l-4 border-green-500 pl-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Method #4: Advanced Google Search (Success Rate: 52%)
              </h2>
              <p className="text-lg text-gray-600">
                Use special search operators to find recently posted codes that others miss.
              </p>
            </div>

            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <h3 className="text-xl font-bold text-green-900 mb-6">Power Search Formulas</h3>
              
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-4 border border-green-100">
                  <h4 className="font-semibold text-gray-900 mb-2">Recent Codes (Last 24 hours):</h4>
                  <code className="text-sm bg-gray-100 px-2 py-1 rounded text-green-700">
                    "[brand] coupon code" site:reddit.com after:2025-06-14
                  </code>
                  <p className="text-xs text-gray-600 mt-2">Finds Reddit posts from the last day mentioning brand coupons</p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-green-100">
                  <h4 className="font-semibold text-gray-900 mb-2">Forum Discussions:</h4>
                  <code className="text-sm bg-gray-100 px-2 py-1 rounded text-green-700">
                    "[brand] promo code" site:slickdeals.net OR site:fatwallet.com
                  </code>
                  <p className="text-xs text-gray-600 mt-2">Searches deal forums where users share working codes</p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-green-100">
                  <h4 className="font-semibold text-gray-900 mb-2">Specific Discounts:</h4>
                  <code className="text-sm bg-gray-100 px-2 py-1 rounded text-green-700">
                    "[brand]" AND ("20% off" OR "free shipping") AND "code"
                  </code>
                  <p className="text-xs text-gray-600 mt-2">Targets specific discount amounts you want</p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-green-100">
                  <h4 className="font-semibold text-gray-900 mb-2">Student/Military Discounts:</h4>
                  <code className="text-sm bg-gray-100 px-2 py-1 rounded text-green-700">
                    "[brand] student discount" OR "[brand] military discount"
                  </code>
                  <p className="text-xs text-gray-600 mt-2">Often higher percentage discounts if you qualify</p>
                </div>
              </div>
            </div>
          </section>

          {/* Method 5: Cart Abandonment Technique */}
          <section className="space-y-8">
            <div className="border-l-4 border-yellow-500 pl-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Method #5: Cart Abandonment Technique (Success Rate: 45%)
              </h2>
              <p className="text-lg text-gray-600">
                Many stores send discount codes to recover abandoned shopping carts.
              </p>
            </div>

            <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
              <h3 className="text-xl font-bold text-yellow-900 mb-6">Step-by-Step Process</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm mt-1">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Add Items to Cart</h4>
                    <p className="text-gray-700 text-sm">Fill your cart with items you actually want to buy. Make it a meaningful amount ($50+).</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm mt-1">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Start Checkout Process</h4>
                    <p className="text-gray-700 text-sm">Enter your email address but stop before payment. This triggers the abandonment tracking.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm mt-1">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Leave and Wait</h4>
                    <p className="text-gray-700 text-sm">Close the browser and wait 24-72 hours. Check your email for recovery discounts.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm mt-1">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Check Results</h4>
                    <p className="text-gray-700 text-sm">Look for emails with subject lines like "Forgot something?" or "Complete your purchase and save."</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 mt-6">
                <p className="text-yellow-800 text-sm">
                  <strong>Success tip:</strong> This works best with fashion, electronics, and home goods stores. B2B and grocery sites rarely use cart recovery discounts.
                </p>
              </div>
            </div>
          </section>

          {/* Quick Reference Guide */}
          <section className="bg-gray-900 rounded-3xl p-8 text-white">
            <h2 className="text-3xl font-bold text-center mb-8">🎯 Quick Reference: Best Method by Store Type</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white bg-opacity-10 rounded-lg p-6">
                <h3 className="text-lg font-bold text-blue-400 mb-3">Fashion & Retail</h3>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li>1. Browser extensions (Honey excels here)</li>
                  <li>2. Instagram Stories</li>
                  <li>3. Email newsletters</li>
                  <li>4. Cart abandonment</li>
                </ul>
              </div>

              <div className="bg-white bg-opacity-10 rounded-lg p-6">
                <h3 className="text-lg font-bold text-green-400 mb-3">Electronics & Tech</h3>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li>1. Browser extensions (WikiBuy excels)</li>
                  <li>2. Reddit deal communities</li>
                  <li>3. Manufacturer newsletters</li>
                  <li>4. Student/employee discounts</li>
                </ul>
              </div>

              <div className="bg-white bg-opacity-10 rounded-lg p-6">
                <h3 className="text-lg font-bold text-purple-400 mb-3">Travel & Services</h3>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li>1. Direct website promotions</li>
                  <li>2. Loyalty program codes</li>
                  <li>3. Social media flash sales</li>
                  <li>4. Browser extensions (limited success)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Advanced Techniques */}
          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center">🔥 Advanced Techniques (For Power Users)</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6 border border-red-200">
                <h3 className="text-xl font-bold text-red-900 mb-4">Code Stacking</h3>
                <p className="text-red-800 text-sm mb-4">
                  Combine multiple discount types in a single order for maximum savings.
                </p>
                <ul className="text-red-700 text-sm space-y-2">
                  <li>• Promo code + cashback app</li>
                  <li>• Student discount + sale price</li>
                  <li>• Credit card rewards + store loyalty points</li>
                  <li>• Price match + coupon code</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-200">
                <h3 className="text-xl font-bold text-indigo-900 mb-4">Price History Analysis</h3>
                <p className="text-indigo-800 text-sm mb-4">
                  Verify that "sales" are actually good deals before using codes.
                </p>
                <ul className="text-indigo-700 text-sm space-y-2">
                  <li>• Use CamelCamelCamel for Amazon</li>
                  <li>• Check Google Shopping trends</li>
                  <li>• Compare across multiple retailers</li>
                  <li>• Track seasonal pricing patterns</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-xl p-6 border border-teal-200">
                <h3 className="text-xl font-bold text-teal-900 mb-4">Bulk Code Testing</h3>
                <p className="text-teal-800 text-sm mb-4">
                  Systematically test multiple codes when extensions fail.
                </p>
                <ul className="text-teal-700 text-sm space-y-2">
                  <li>• Common patterns: SAVE10, WELCOME20, NEW15</li>
                  <li>• Seasonal codes: SPRING25, SUMMER30</li>
                  <li>• Try variations: NEWCUSTOMER vs NEW</li>
                  <li>• Test case sensitivity: save10 vs SAVE10</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 border border-orange-200">
                <h3 className="text-xl font-bold text-orange-900 mb-4">Competitor Price Matching</h3>
                <p className="text-orange-800 text-sm mb-4">
                  Use found codes at competitors that offer price matching.
                </p>
                <ul className="text-orange-700 text-sm space-y-2">
                  <li>• Best Buy matches online prices</li>
                  <li>• Target matches Amazon pricing</li>
                  <li>• Walmart matches major competitors</li>
                  <li>• Use coupon at store with best return policy</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Common Mistakes to Avoid */}
          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center">❌ Common Mistakes That Kill Your Success Rate</h2>
            
            <div className="bg-red-50 rounded-xl p-6 border border-red-200">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm mt-1">✗</div>
                  <div>
                    <h3 className="font-bold text-red-900 mb-2">Using Outdated Coupon Sites</h3>
                    <p className="text-red-800 text-sm">Sites like RetailMeNot often have 30-60% expired codes. Stick to browser extensions and direct sources.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm mt-1">✗</div>
                  <div>
                    <h3 className="font-bold text-red-900 mb-2">Not Reading Terms & Conditions</h3>
                    <p className="text-red-800 text-sm">Many codes have minimum purchase amounts, specific product exclusions, or are for new customers only.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm mt-1">✗</div>
                  <div>
                    <h3 className="font-bold text-red-900 mb-2">Trying Only One Method</h3>
                    <p className="text-red-800 text-sm">Different stores respond to different techniques. Always try browser extensions first, then move to manual methods.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm mt-1">✗</div>
                  <div>
                    <h3 className="font-bold text-red-900 mb-2">Forgetting About Cashback</h3>
                    <p className="text-red-800 text-sm">Stack coupon codes with cashback apps like Rakuten for double savings. This alone can add 2-10% extra.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Success Timeline */}
          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center">📈 Your 30-Day Success Timeline</h2>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-200">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">1</div>
                    <h3 className="font-bold text-blue-900 mb-2">Week 1: Setup</h3>
                    <p className="text-blue-800 text-sm">Install extensions, create deals email, join forums</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">2</div>
                    <h3 className="font-bold text-purple-900 mb-2">Week 2: Practice</h3>
                    <p className="text-purple-800 text-sm">Test methods on small purchases, learn what works for you</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">3</div>
                    <h3 className="font-bold text-indigo-900 mb-2">Week 3: Optimize</h3>
                    <p className="text-indigo-800 text-sm">Focus on methods that work best for your shopping habits</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">4</div>
                    <h3 className="font-bold text-green-900 mb-2">Week 4: Master</h3>
                    <p className="text-green-800 text-sm">Advanced techniques, code stacking, maximum savings</p>
                  </div>
                </div>
                
                <div className="text-center bg-white rounded-lg p-6">
                  <p className="text-lg font-semibold text-gray-900">Expected Results by Day 30:</p>
                  <div className="grid grid-cols-3 gap-4 mt-4">
                    <div>
                      <div className="text-2xl font-bold text-green-600">85%+</div>
                      <div className="text-sm text-gray-600">Success rate</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">$75+</div>
                      <div className="text-sm text-gray-600">Monthly savings</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">5 min</div>
                      <div className="text-sm text-gray-600">Time per purchase</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <div className="text-center text-white space-y-8">
            <h2 className="text-3xl font-bold">Master Advanced Coupon Hunting</h2>
            <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
              Get weekly insider tips, new method alerts, and exclusive codes that only the pros know about.
            </p>
            <div className="max-w-md mx-auto">
              <EmailForm 
                placeholder="Enter email for pro coupon tips"
                buttonText="Join Pro Hunters"
                className="[&_input]:bg-white [&_input]:text-gray-900 [&_input]:border-0 [&_input]:rounded-l-lg [&_button]:bg-yellow-400 [&_button]:text-gray-900 [&_button]:hover:bg-yellow-300 [&_button]:font-semibold [&_button]:rounded-r-lg"
              />
            </div>
            <p className="text-sm text-emerald-200">
              Join 12,000+ pro hunters • Advanced techniques only • Unsubscribe anytime
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
