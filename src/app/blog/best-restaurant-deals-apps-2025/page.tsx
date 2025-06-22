import Link from 'next/link'
import EmailForm from '@/components/email-form'

export const metadata = {
  title: 'Best Restaurant Deals & Apps: Save 50%+ on Dining Out in 2025',
  description: 'Discover the top restaurant deal apps and websites that save you money on dining out. Restaurant.com, Groupon alternatives, and exclusive dining discounts.',
  keywords: 'restaurant deals, restaurant coupons, dining deals apps, restaurant discounts, save money dining out, restaurant deals near me',
}

export default function RestaurantDealsAppsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Article Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
              Dining Guide 2025
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Best Restaurant Deals & Apps: Save 50%+ on Dining Out
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Stop paying full price for restaurants. These apps and websites offer verified deals, exclusive discounts, and cash back that can cut your dining costs in half.
            </p>
            <div className="flex items-center justify-center space-x-6 mt-8 text-sm text-gray-500">
              <div className="flex items-center">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" 
                     alt="Author" className="w-8 h-8 rounded-full mr-2" />
                <span>David Park</span>
              </div>
              <span>•</span>
              <span>Updated June 15, 2025</span>
              <span>•</span>
              <span>10 min read</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-8 lg:p-12">
            
            {/* Key Stats */}
            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Restaurant Deals Matter More Than Ever</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-600 mb-2">127%</div>
                  <div className="text-sm text-gray-600">increase in restaurant prices since 2020</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-2">$3,500</div>
                  <div className="text-sm text-gray-600">average household dining spending per year</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">$1,750</div>
                  <div className="text-sm text-gray-600">potential annual savings with deal apps</div>
                </div>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                With restaurant prices at an all-time high, smart diners are turning to deal apps and coupon sites to maintain their social dining habits without breaking the bank. The best restaurant deal platforms can save you 25-50% or more on every meal.
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">💡 What You'll Learn</h3>
                <ul className="text-blue-700 space-y-1">
                  <li>• The 7 best restaurant deal apps and websites</li>
                  <li>• How to stack discounts for maximum savings</li>
                  <li>• Secret strategies used by extreme deal hunters</li>
                  <li>• Which apps work best for different dining scenarios</li>
                </ul>
              </div>
            </div>

            {/* Top Restaurant Deal Platforms */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Top 7 Restaurant Deal Platforms</h2>
              
              {/* Restaurant.com */}
              <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-2xl p-8 mb-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mr-6">
                      <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">1. Restaurant.com</h3>
                      <p className="text-red-600 font-semibold">Best for gift certificates and fine dining</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-red-600">Up to 60%</div>
                    <div className="text-sm text-gray-500">savings</div>
                  </div>
                </div>
                
                <div className="prose prose-lg max-w-none mb-6">
                  <p>
                    <strong>Restaurant.com is the king of restaurant gift certificates.</strong> You buy discounted gift certificates for local restaurants—for example, a $50 certificate for just $20. With over 20,000 participating restaurants nationwide, it's the largest restaurant deal platform.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">✅ Why Restaurant.com Wins</h4>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• Massive restaurant network (20,000+ locations)</li>
                      <li>• Certificates never expire</li>
                      <li>• Works at upscale restaurants</li>
                      <li>• Can combine with other offers</li>
                      <li>• Regular 80% off certificate sales</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">📋 How to Use</h4>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• Buy certificates in advance during sales</li>
                      <li>• Check minimum purchase requirements</li>
                      <li>• Print certificate or show on mobile</li>
                      <li>• Present to server before ordering</li>
                      <li>• Tip on original amount, not discounted</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
                  <h4 className="font-semibold text-yellow-800 mb-2">💡 Pro Tip</h4>
                  <p className="text-yellow-700 text-sm">
                    Wait for Restaurant.com's frequent "80% off" promotions where you can get $25 certificates for just $5. Sign up for their newsletter to get notified of these sales.
                  </p>
                </div>
                
                <Link 
                  href="https://www.restaurant.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors inline-block text-center"
                >
                  Get Restaurant.com Deals
                </Link>
              </div>

              {/* Entertainment.com */}
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border-2 border-purple-200 rounded-2xl p-8 mb-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mr-6">
                      <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m2-10a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">2. Entertainment.com</h3>
                      <p className="text-purple-600 font-semibold">Best for 2-for-1 deals and local experiences</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-purple-600">Buy 1 Get 1</div>
                    <div className="text-sm text-gray-500">dining deals</div>
                  </div>
                </div>
                
                <div className="prose prose-lg max-w-none mb-6">
                  <p>
                    <strong>Entertainment.com specializes in 2-for-1 deals and 50% off dining.</strong> Their platform covers over 500,000 local discounts across the US and Canada, with particularly strong coverage for casual dining and entertainment venues.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">✅ Best Features</h4>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• True 2-for-1 dining deals</li>
                      <li>• Entertainment bundle discounts</li>
                      <li>• Local business focus</li>
                      <li>• Mobile-first platform</li>
                      <li>• Works in smaller cities</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">🎯 Perfect For</h4>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• Date nights and couples dining</li>
                      <li>• Family restaurants</li>
                      <li>• Entertainment + dining combos</li>
                      <li>• Suburban and smaller city dining</li>
                      <li>• Regular local dining</li>
                    </ul>
                  </div>
                </div>
                
                <Link 
                  href="https://www.entertainment.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors inline-block text-center"
                >
                  Explore Entertainment.com
                </Link>
              </div>

              {/* Clipp */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-8 mb-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mr-6">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">3. Clipp</h3>
                      <p className="text-green-600 font-semibold">Best mobile app for local restaurant deals</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-green-600">50%</div>
                    <div className="text-sm text-gray-500">average discount</div>
                  </div>
                </div>
                
                <div className="prose prose-lg max-w-none mb-6">
                  <p>
                    <strong>Clipp is the modern mobile-first approach to restaurant deals.</strong> Their app integrates with Apple Wallet for seamless redemption and focuses on local restaurants, fitness centers, and retail stores across major US cities.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">✅ Modern Features</h4>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• Apple Wallet integration</li>
                      <li>• Location-based deal discovery</li>
                      <li>• Real-time deal updates</li>
                      <li>• Social sharing features</li>
                      <li>• No physical coupons needed</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">🏙️ Best Cities</h4>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• New York City</li>
                      <li>• Los Angeles</li>
                      <li>• Chicago</li>
                      <li>• San Francisco</li>
                      <li>• Washington DC</li>
                    </ul>
                  </div>
                </div>
                
                <Link 
                  href="https://www.clipp.app" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors inline-block text-center"
                >
                  Download Clipp App
                </Link>
              </div>

              {/* Quick comparison for others */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">4. Groupon</h4>
                  <p className="text-blue-600 text-sm font-medium mb-3">Best for experience + dining combos</p>
                  <p className="text-gray-600 text-sm mb-4">
                    The veteran deal platform. Great for special occasion dining and unique restaurant experiences, but deals can be restrictive.
                  </p>
                  <div className="text-sm text-gray-700 mb-4">
                    <strong>Best for:</strong> Special events, new restaurant discovery, activity + dining packages
                  </div>
                  <button className="w-full px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700">
                    Browse Groupon Dining
                  </button>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">5. OpenTable</h4>
                  <p className="text-emerald-600 text-sm font-medium mb-3">Best for reservation rewards</p>
                  <p className="text-gray-600 text-sm mb-4">
                    Earn points for every reservation that convert to dining credits. No upfront discounts, but reliable long-term savings.
                  </p>
                  <div className="text-sm text-gray-700 mb-4">
                    <strong>Best for:</strong> Regular diners, fine dining, consistent point accumulation
                  </div>
                  <button className="w-full px-4 py-2 bg-emerald-600 text-white text-sm font-medium rounded hover:bg-emerald-700">
                    Join OpenTable
                  </button>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">6. Resy</h4>
                  <p className="text-purple-600 text-sm font-medium mb-3">Best for trendy restaurants</p>
                  <p className="text-gray-600 text-sm mb-4">
                    Less about discounts, more about access. Gets you tables at hot restaurants and offers member-only events and deals.
                  </p>
                  <div className="text-sm text-gray-700 mb-4">
                    <strong>Best for:</strong> Food enthusiasts, trendy dining, exclusive access
                  </div>
                  <button className="w-full px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded hover:bg-purple-700">
                    Try Resy
                  </button>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">7. Local Flavor</h4>
                  <p className="text-orange-600 text-sm font-medium mb-3">Best for local businesses</p>
                  <p className="text-gray-600 text-sm mb-4">
                    Focuses on local restaurants and family-owned businesses. Up to 50% off deals with daily new additions.
                  </p>
                  <div className="text-sm text-gray-700 mb-4">
                    <strong>Best for:</strong> Supporting local businesses, discovering hidden gems
                  </div>
                  <button className="w-full px-4 py-2 bg-orange-600 text-white text-sm font-medium rounded hover:bg-orange-700">
                    Explore Local Flavor
                  </button>
                </div>
              </div>
            </section>

            {/* Stacking Strategy */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">How to Stack Restaurant Deals for Maximum Savings</h2>
              
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">🎯 Real Example: $100 Dinner for $32</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between bg-white rounded-lg p-4">
                    <span className="text-gray-700">Original bill at upscale steakhouse</span>
                    <span className="font-bold text-gray-900">$100.00</span>
                  </div>
                  
                  <div className="flex items-center justify-between bg-red-50 rounded-lg p-4">
                    <span className="text-red-700">Restaurant.com $50 certificate (bought for $20)</span>
                    <span className="font-bold text-red-600">-$50.00</span>
                  </div>
                  
                  <div className="flex items-center justify-between bg-blue-50 rounded-lg p-4">
                    <span className="text-blue-700">Credit card dining 3x points ($1.50 value)</span>
                    <span className="font-bold text-blue-600">-$1.50</span>
                  </div>
                  
                  <div className="flex items-center justify-between bg-purple-50 rounded-lg p-4">
                    <span className="text-purple-700">Happy hour 20% off (restaurant promotion)</span>
                    <span className="font-bold text-purple-600">-$10.00</span>
                  </div>
                  
                  <div className="flex items-center justify-between bg-green-100 rounded-lg p-4 border-2 border-green-300">
                    <span className="text-green-800 font-semibold">Final amount paid</span>
                    <span className="font-bold text-green-800 text-xl">$32.50</span>
                  </div>
                  
                  <div className="text-center">
                    <span className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-bold text-lg">
                      67% Total Savings
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
                  <h4 className="font-semibold text-blue-800 mb-3">📱 Stack Digital Deals</h4>
                  <ul className="text-blue-700 text-sm space-y-2">
                    <li>• Use Restaurant.com certificates</li>
                    <li>• Add Rakuten cash back (1-3%)</li>
                    <li>• Check Honey for additional codes</li>
                    <li>• Use dining credit cards (3x points)</li>
                    <li>• Look for restaurant app discounts</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 border-l-4 border-green-400 p-6">
                  <h4 className="font-semibold text-green-800 mb-3">⏰ Time Your Visits</h4>
                  <ul className="text-green-700 text-sm space-y-2">
                    <li>• Happy hour pricing (typically 30% off)</li>
                    <li>• Early bird specials (20-40% off)</li>
                    <li>• Off-peak dining (weekday lunch)</li>
                    <li>• Restaurant Week events</li>
                    <li>• End-of-month promotions</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Best Practices */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Pro Tips from Extreme Deal Hunters</h2>
              
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">💰 The Certificate Strategy</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">How to Do It:</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Buy certificates during 80% off sales</li>
                        <li>• Stock up on certificates for restaurants you visit</li>
                        <li>• Set calendar reminders for sales</li>
                        <li>• Buy certificates as gifts for friends</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Watch Out For:</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Minimum purchase requirements ($50 for $25 cert)</li>
                        <li>• Exclusions (alcohol, tax, tip)</li>
                        <li>• Expiration dates (though most never expire)</li>
                        <li>• One certificate per table restrictions</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">🎯 The Local Discovery Method</h3>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <p className="text-amber-800 text-sm mb-3">
                      <strong>Secret strategy:</strong> Use deal apps to discover new restaurants you never would have tried, then become a regular customer.
                    </p>
                    <ul className="text-amber-700 text-sm space-y-1">
                      <li>• Try high-end restaurants affordably with certificates</li>
                      <li>• Use Groupon to explore different cuisines</li>
                      <li>• Follow favorite restaurants on social media for exclusive deals</li>
                      <li>• Build relationships with restaurant managers for VIP treatment</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">🏆 The Ultimate Combo Strategy</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                      <div className="text-2xl mb-2">📱</div>
                      <div className="font-semibold text-blue-800 mb-1">Download All Apps</div>
                      <div className="text-blue-700 text-xs">Compare deals across platforms before dining</div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg text-center">
                      <div className="text-2xl mb-2">💳</div>
                      <div className="font-semibold text-green-800 mb-1">Use Dining Cards</div>
                      <div className="text-green-700 text-xs">3x points + cash back stacking</div>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg text-center">
                      <div className="text-2xl mb-2">⏰</div>
                      <div className="font-semibold text-purple-800 mb-1">Perfect Timing</div>
                      <div className="text-purple-700 text-xs">Happy hour + certificate + cash back</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Common Mistakes */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">5 Common Restaurant Deal Mistakes to Avoid</h2>
              
              <div className="space-y-4">
                <div className="bg-red-50 border-l-4 border-red-400 p-6">
                  <h3 className="font-semibold text-red-800 mb-2">❌ Not Reading the Fine Print</h3>
                  <p className="text-red-700 text-sm">
                    Always check minimum purchase requirements, exclusions, and restrictions before ordering. A $25 certificate might require a $50 minimum purchase.
                  </p>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-400 p-6">
                  <h3 className="font-semibold text-orange-800 mb-2">❌ Forgetting About Tipping</h3>
                  <p className="text-orange-700 text-sm">
                    Always tip on the original bill amount, not the discounted amount. Servers still provided full service regardless of your discount.
                  </p>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
                  <h3 className="font-semibold text-yellow-800 mb-2">❌ Not Calling Ahead</h3>
                  <p className="text-yellow-700 text-sm">
                    Some restaurants require advance notice for certificates or have blackout dates. A quick call can save you embarrassment.
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
                  <h3 className="font-semibold text-blue-800 mb-2">❌ Only Using One Deal Platform</h3>
                  <p className="text-blue-700 text-sm">
                    Different platforms have different restaurant partnerships. Installing 3-4 apps gives you the best coverage and deal options.
                  </p>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-400 p-6">
                  <h3 className="font-semibold text-purple-800 mb-2">❌ Ignoring Credit Card Rewards</h3>
                  <p className="text-purple-700 text-sm">
                    Dining credit cards offer 3x points or more. Combined with deal apps, you can stack savings for maximum benefit.
                  </p>
                </div>
              </div>
            </section>

            {/* Platform Comparison */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Quick Comparison: Which App for Which Situation?</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full bg-white border border-gray-200 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Scenario</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Best Platform</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Why</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Expected Savings</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">Fine dining / special occasion</td>
                      <td className="px-6 py-4 text-sm font-medium text-red-600">Restaurant.com</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Best upscale restaurant coverage</td>
                      <td className="px-6 py-4 text-sm text-green-600 font-semibold">40-60%</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">Date night / couples</td>
                      <td className="px-6 py-4 text-sm font-medium text-purple-600">Entertainment.com</td>
                      <td className="px-6 py-4 text-sm text-gray-700">2-for-1 deals perfect for couples</td>
                      <td className="px-6 py-4 text-sm text-green-600 font-semibold">50%</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">Spontaneous dining</td>
                      <td className="px-6 py-4 text-sm font-medium text-green-600">Clipp</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Real-time local deals</td>
                      <td className="px-6 py-4 text-sm text-green-600 font-semibold">25-50%</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">New restaurant discovery</td>
                      <td className="px-6 py-4 text-sm font-medium text-blue-600">Groupon</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Great for trying new places</td>
                      <td className="px-6 py-4 text-sm text-green-600 font-semibold">30-50%</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">Regular dining / loyalty</td>
                      <td className="px-6 py-4 text-sm font-medium text-emerald-600">OpenTable</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Points accumulate over time</td>
                      <td className="px-6 py-4 text-sm text-green-600 font-semibold">5-15%</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">Trendy/hot restaurants</td>
                      <td className="px-6 py-4 text-sm font-medium text-purple-600">Resy</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Access to exclusive venues</td>
                      <td className="px-6 py-4 text-sm text-green-600 font-semibold">10-25%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-16">
              <div className="bg-gray-900 rounded-2xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-6">Start Saving on Every Meal</h2>
                <p className="text-xl leading-relaxed mb-6">
                  With restaurant prices higher than ever, <strong>using deal apps isn't just smart—it's essential</strong> for maintaining your social dining lifestyle without breaking your budget.
                </p>
                
                <div className="bg-gray-800 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-semibold text-yellow-400 mb-4">🎯 Quick Action Plan</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                    <div>
                      <div className="text-red-400 font-semibold mb-2">This Week:</div>
                      <div>Download Restaurant.com and buy certificates during their next sale</div>
                    </div>
                    <div>
                      <div className="text-blue-400 font-semibold mb-2">This Month:</div>
                      <div>Install 3-4 deal apps and test them on different restaurant types</div>
                    </div>
                    <div>
                      <div className="text-green-400 font-semibold mb-2">Long-term:</div>
                      <div>Master deal stacking to achieve 50%+ regular savings</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link 
                    href="https://www.restaurant.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors inline-block"
                  >
                    Get Restaurant.com Deals
                  </Link>
                  <Link 
                    href="https://www.entertainment.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors inline-block"
                  >
                    Try Entertainment.com
                  </Link>
                  <Link 
                    href="https://www.clipp.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors inline-block"
                  >
                    Download Clipp
                  </Link>
                </div>
                
                <p className="text-gray-300 text-center mt-6">
                  <strong>Pro tip:</strong> Start with Restaurant.com certificates—they offer the highest savings for upscale dining
                </p>
              </div>
            </section>

          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Never Pay Full Price for Dining Again</h2>
            <p className="text-xl mb-8 text-orange-100">
              Get weekly restaurant deals, new app alerts, and exclusive dining discounts delivered to your inbox.
            </p>
            <div className="max-w-md mx-auto">
              <EmailForm 
                placeholder="Enter email for dining deals"
                buttonText="Get Deals"
                className="[&_input]:bg-white [&_input]:text-gray-900 [&_input]:border-white [&_button]:bg-yellow-400 [&_button]:text-gray-900 [&_button]:hover:bg-yellow-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
