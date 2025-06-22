import Link from 'next/link'
import EmailForm from '@/components/email-form'

export const metadata = {
  title: 'Rakuten Cash Back Guide: How to Earn $500+ Per Year Shopping Online (2025)',
  description: 'Complete guide to maximizing Rakuten cash back rewards. Learn insider strategies to earn hundreds in real cash while shopping at 2,500+ stores.',
  keywords: 'rakuten cash back, rakuten rewards, cash back shopping, online cash back, rakuten guide, earn money shopping',
}

export default function RakutenCashBackGuidePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Article Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              Cash Back Strategy
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Rakuten Cash Back Guide: Earn $500+ Per Year Shopping Online
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Rakuten members have earned over $3.2 billion in cash back. This complete guide shows you exactly how to maximize your earnings and get real money for shopping you're already doing.
            </p>
            <div className="flex items-center justify-center space-x-6 mt-8 text-sm text-gray-500">
              <div className="flex items-center">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" 
                     alt="Author" className="w-8 h-8 rounded-full mr-2" />
                <span>Marcus Johnson</span>
              </div>
              <span>•</span>
              <span>Updated June 15, 2025</span>
              <span>•</span>
              <span>14 min read</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-8 lg:p-12">
            
            {/* Key Stats */}
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Rakuten Is the #1 Cash Back Platform</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">$3.2B+</div>
                  <div className="text-sm text-gray-600">total cash back paid to members</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">2,500+</div>
                  <div className="text-sm text-gray-600">partner stores and brands</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">40%</div>
                  <div className="text-sm text-gray-600">maximum cash back rate</div>
                </div>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Rakuten isn't just another rewards program—it's the easiest way to earn real cash for shopping you're already doing. Unlike points or miles that lose value, Rakuten pays actual money directly to your PayPal or bank account every quarter.
              </p>
              
              <div className="bg-green-50 border-l-4 border-green-400 p-6 my-8">
                <h3 className="text-lg font-semibold text-green-800 mb-2">💰 Real Success Story</h3>
                <p className="text-green-700">
                  "I've earned $1,847 in cash back over 2 years just by shopping through Rakuten for things I was buying anyway. The checks come every 3 months like clockwork." - Sarah M., verified Rakuten member
                </p>
              </div>
            </div>

            {/* What is Rakuten */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">What Is Rakuten and How Does It Work?</h2>
              
              <div className="prose prose-lg max-w-none mb-8">
                <p>
                  <strong>Rakuten is a cash back shopping platform</strong> that partners with over 2,500 stores to offer you a percentage of your purchase back as real money. When you shop through Rakuten, they receive a commission from the store, and they share that commission with you.
                </p>
              </div>

              <div className="bg-blue-50 rounded-2xl p-8 mb-8">
                <h3 className="text-xl font-semibold text-blue-900 mb-6">🔄 How the Process Works</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-blue-600 font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">Start at Rakuten</h4>
                      <p className="text-blue-700 text-sm">Visit Rakuten.com or use their browser extension to find your store</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-blue-600 font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">Click Through to Store</h4>
                      <p className="text-blue-700 text-sm">Rakuten redirects you to the store's website with tracking enabled</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-blue-600 font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">Shop Normally</h4>
                      <p className="text-blue-700 text-sm">Buy whatever you want—prices are exactly the same as shopping directly</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-blue-600 font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">Earn Cash Back</h4>
                      <p className="text-blue-700 text-sm">Cash back appears in your account within a few days of purchase</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-green-600 font-bold">5</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-900 mb-2">Get Paid Quarterly</h4>
                      <p className="text-green-700 text-sm">Receive real money via PayPal or check every 3 months</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h4 className="font-semibold text-yellow-800 mb-2">🚀 $40 Sign-Up Bonus (Limited Time)</h4>
                <p className="text-yellow-700 text-sm">
                  New Rakuten members can earn a $40 bonus by making $40 in purchases within 90 days. This essentially gives you a 100% cash back rate on your first purchase.
                </p>
              </div>
            </section>

            {/* Best Stores and Rates */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Best Cash Back Rates by Store Category</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">🛍️ Fashion & Apparel</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Nike</span>
                      <span className="font-bold text-green-600">3% cash back</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Macy's</span>
                      <span className="font-bold text-green-600">5% cash back</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Nordstrom</span>
                      <span className="font-bold text-green-600">4% cash back</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Levi's</span>
                      <span className="font-bold text-green-600">6% cash back</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">🏠 Home & Garden</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Wayfair</span>
                      <span className="font-bold text-green-600">3% cash back</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Home Depot</span>
                      <span className="font-bold text-green-600">1% cash back</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Williams Sonoma</span>
                      <span className="font-bold text-green-600">4% cash back</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Pottery Barn</span>
                      <span className="font-bold text-green-600">4% cash back</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">💻 Electronics</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Best Buy</span>
                      <span className="font-bold text-green-600">1% cash back</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Lenovo</span>
                      <span className="font-bold text-green-600">4% cash back</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Microsoft Store</span>
                      <span className="font-bold text-green-600">3% cash back</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">HP</span>
                      <span className="font-bold text-green-600">5% cash back</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">✈️ Travel</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Booking.com</span>
                      <span className="font-bold text-green-600">4% cash back</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Expedia</span>
                      <span className="font-bold text-green-600">3% cash back</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Hotels.com</span>
                      <span className="font-bold text-green-600">5% cash back</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Priceline</span>
                      <span className="font-bold text-green-600">6% cash back</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-green-800 mb-4">🔥 Stores with Up to 40% Cash Back</h3>
                <p className="text-green-700 mb-4">
                  During special promotions and seasonal events, some stores offer massive cash back rates:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="text-center">
                    <div className="font-bold text-green-800">Sephora</div>
                    <div className="text-green-600">Up to 12%</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-green-800">Under Armour</div>
                    <div className="text-green-600">Up to 10%</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-green-800">Groupon</div>
                    <div className="text-green-600">Up to 8%</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-green-800">Uber Eats</div>
                    <div className="text-green-600">Up to 15%</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Maximizing Strategies */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">7 Strategies to Maximize Your Rakuten Earnings</h2>
              
              <div className="space-y-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">1. 🎯 Stack with Credit Card Rewards</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">The Strategy:</h4>
                      <p className="text-gray-700 text-sm mb-3">
                        Use a cash back credit card while shopping through Rakuten to earn double rewards—cash back from Rakuten plus credit card points/cash back.
                      </p>
                      <div className="bg-blue-50 p-3 rounded">
                        <p className="text-blue-700 text-sm">
                          <strong>Example:</strong> 5% Rakuten + 2% credit card = 7% total return
                        </p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Best Credit Cards for Stacking:</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Chase Freedom (5% rotating categories)</li>
                        <li>• Citi Double Cash (2% on everything)</li>
                        <li>• Capital One Savor (4% dining/entertainment)</li>
                        <li>• Blue Cash Preferred (6% groceries)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">2. ⏰ Time Your Big Purchases</h3>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-3">Best Times for Maximum Cash Back:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-yellow-700 mb-2"><strong>Black Friday/Cyber Monday:</strong></p>
                        <p className="text-yellow-600">Cash back rates often double or triple</p>
                      </div>
                      <div>
                        <p className="text-yellow-700 mb-2"><strong>End of Quarter:</strong></p>
                        <p className="text-yellow-600">Some stores boost rates to hit targets</p>
                      </div>
                      <div>
                        <p className="text-yellow-700 mb-2"><strong>Back-to-School Season:</strong></p>
                        <p className="text-yellow-600">Electronics and clothing get rate bumps</p>
                      </div>
                      <div>
                        <p className="text-yellow-700 mb-2"><strong>Holiday Shopping:</strong></p>
                        <p className="text-yellow-600">November-December see highest rates</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">3. 📱 Use Multiple Rakuten Tools</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="text-2xl mb-2">💻</div>
                      <h4 className="font-semibold text-purple-800 mb-2">Browser Extension</h4>
                      <p className="text-purple-700 text-sm">Automatically activates cash back</p>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl mb-2">📱</div>
                      <h4 className="font-semibold text-blue-800 mb-2">Mobile App</h4>
                      <p className="text-blue-700 text-sm">Shop on-the-go and in-store price checks</p>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl mb-2">🌐</div>
                      <h4 className="font-semibold text-green-800 mb-2">Website</h4>
                      <p className="text-green-700 text-sm">Browse all stores and deals</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">4. 🔄 Refer Friends for Bonus Cash</h3>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-green-800 mb-2">
                      <strong>Referral Program:</strong> Earn $30 for each friend who joins and makes a qualifying purchase
                    </p>
                    <p className="text-green-700 text-sm">
                      Your friend also gets a $40 sign-up bonus, making it a win-win situation. Refer 10 friends and earn an extra $300 per year.
                    </p>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">5. 🛒 Combine with Store Sales</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">How to Stack Savings:</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Store sale price (30% off)</li>
                        <li>• Store coupon code (additional 10% off)</li>
                        <li>• Rakuten cash back (5%)</li>
                        <li>• Credit card rewards (2%)</li>
                        <li>• <strong>Total savings: 47%</strong></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Real Example:</h4>
                      <div className="bg-gray-50 p-3 rounded text-sm">
                        <p className="text-gray-700 mb-1">$200 Nike shoes</p>
                        <p className="text-gray-700 mb-1">- 30% sale = $140</p>
                        <p className="text-gray-700 mb-1">- 10% coupon = $126</p>
                        <p className="text-gray-700 mb-1">+ 3% Rakuten = $3.78 back</p>
                        <p className="text-gray-700 mb-1">+ 2% card = $2.52 back</p>
                        <p className="font-bold text-green-600">Final cost: $119.70</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Browser Extension Guide */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Rakuten Browser Extension: Your Secret Weapon</h2>
              
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Why the Extension Is Essential</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-purple-800 mb-3">✅ Automatic Activation</h4>
                    <p className="text-purple-700 text-sm mb-4">
                      Never forget to activate cash back again. The extension automatically detects when you're on a partner site and prompts you to activate cash back.
                    </p>
                    
                    <h4 className="font-semibold text-blue-800 mb-3">🔍 Price Comparison</h4>
                    <p className="text-blue-700 text-sm">
                      See if the same item is available cheaper at other Rakuten partner stores, maximizing both savings and cash back potential.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800 mb-3">💰 Cash Back Alerts</h4>
                    <p className="text-green-700 text-sm mb-4">
                      Get real-time notifications when cash back rates increase at stores you shop at frequently.
                    </p>
                    
                    <h4 className="font-semibold text-orange-800 mb-3">🎁 Exclusive Coupons</h4>
                    <p className="text-orange-700 text-sm">
                      Access extension-only coupons and promo codes that aren't available through the website.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">🚀 Quick Setup Guide</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-blue-600 font-bold">1</span>
                    </div>
                    <h4 className="font-medium text-gray-900 mb-2">Install Extension</h4>
                    <p className="text-gray-600 text-sm">Add from Chrome/Firefox store</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-green-600 font-bold">2</span>
                    </div>
                    <h4 className="font-medium text-gray-900 mb-2">Sign In</h4>
                    <p className="text-gray-600 text-sm">Use your Rakuten account</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-purple-600 font-bold">3</span>
                    </div>
                    <h4 className="font-medium text-gray-900 mb-2">Shop Normally</h4>
                    <p className="text-gray-600 text-sm">Extension works automatically</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-yellow-600 font-bold">4</span>
                    </div>
                    <h4 className="font-medium text-gray-900 mb-2">Earn More</h4>
                    <p className="text-gray-600 text-sm">Never miss cash back again</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Common Mistakes */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">5 Common Rakuten Mistakes That Cost You Money</h2>
              
              <div className="space-y-4">
                <div className="bg-red-50 border-l-4 border-red-400 p-6">
                  <h3 className="font-semibold text-red-800 mb-2">❌ Shopping Without Starting at Rakuten</h3>
                  <p className="text-red-700 text-sm">
                    Going directly to a store's website means no cash back. Always start at Rakuten or use the browser extension. This single mistake costs the average user $200+ per year.
                  </p>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-400 p-6">
                  <h3 className="font-semibold text-orange-800 mb-2">❌ Not Waiting for Better Rates</h3>
                  <p className="text-orange-700 text-sm">
                    Cash back rates fluctuate constantly. For big purchases, check if a store's rate has been higher recently. Many stores offer 2-3x normal rates during sales events.
                  </p>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
                  <h3 className="font-semibold text-yellow-800 mb-2">❌ Using Ad Blockers or Incognito Mode</h3>
                  <p className="text-yellow-700 text-sm">
                    Ad blockers and private browsing can prevent Rakuten's tracking from working properly. Disable ad blockers on shopping sites or whitelist Rakuten domains.
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
                  <h3 className="font-semibold text-blue-800 mb-2">❌ Forgetting to Check Multiple Stores</h3>
                  <p className="text-blue-700 text-sm">
                    The same item might be available at multiple Rakuten partners with different cash back rates. Always compare before buying—you might find 5% cash back vs 1%.
                  </p>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-400 p-6">
                  <h3 className="font-semibold text-purple-800 mb-2">❌ Not Reading the Terms</h3>
                  <p className="text-purple-700 text-sm">
                    Some purchases don't qualify for cash back (gift cards, taxes, shipping). Always check what's included. Also, some stores have waiting periods before cash back is credited.
                  </p>
                </div>
              </div>
            </section>

            {/* Advanced Tips */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Advanced Rakuten Strategies for Power Users</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">🎯 The "Rate Tracking" Strategy</h3>
                  <div className="space-y-3 text-sm">
                    <p className="text-gray-700">
                      <strong>What to do:</strong> Keep a spreadsheet of cash back rates for stores you shop at regularly. Track when rates go up and down.
                    </p>
                    <p className="text-gray-700">
                      <strong>Why it works:</strong> You'll know when to delay purchases for better rates. Some stores have predictable patterns (higher rates before holidays).
                    </p>
                    <p className="text-gray-700">
                      <strong>Example:</strong> Nike typically goes from 3% to 6% during Back-to-School season. Wait and double your cash back.
                    </p>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">💳 The "Portal Stacking" Method</h3>
                  <div className="space-y-3 text-sm">
                    <p className="text-gray-700">
                      <strong>What to do:</strong> Combine Rakuten with shopping portals from credit cards, airlines, or hotels.
                    </p>
                    <p className="text-gray-700">
                      <strong>Example stack:</strong> Use Chase Ultimate Rewards portal (2x points) + Rakuten (3% cash back) + credit card (2x points) = 7x total return.
                    </p>
                    <p className="text-gray-700">
                      <strong>Pro tip:</strong> Some credit card portals track differently than Rakuten, so you can use both simultaneously.
                    </p>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">🛍️ The "Gift Card Hack"</h3>
                  <div className="space-y-3 text-sm">
                    <p className="text-gray-700">
                      <strong>What to do:</strong> Buy discounted gift cards from sites like Raise or Gift Card Granny, then shop through Rakuten.
                    </p>
                    <p className="text-gray-700">
                      <strong>Example:</strong> Buy $100 Best Buy gift card for $95 (5% discount) + 1% Rakuten cash back + 2% credit card = 8% total savings.
                    </p>
                    <p className="text-gray-700">
                      <strong>Note:</strong> Check if the store's cash back applies to gift card purchases (most do, but some exclude them).
                    </p>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">📧 The "Rate Alert" System</h3>
                  <div className="space-y-3 text-sm">
                    <p className="text-gray-700">
                      <strong>What to do:</strong> Set up email alerts or use apps like InvisibleHand to monitor when cash back rates increase at your favorite stores.
                    </p>
                    <p className="text-gray-700">
                      <strong>Tools to use:</strong> Rakuten's own email alerts, browser bookmarks to check rates weekly, or third-party rate tracking tools.
                    </p>
                    <p className="text-gray-700">
                      <strong>Result:</strong> Never miss a rate increase again. Some users report 20-30% higher annual earnings just from better timing.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Payment and Cash Out */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">How and When You Get Paid</h2>
              
              <div className="bg-green-50 rounded-2xl p-8 mb-8">
                <h3 className="text-xl font-semibold text-green-900 mb-6">💰 Payment Schedule & Methods</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-green-800 mb-3">📅 When You Get Paid</h4>
                    <ul className="text-green-700 space-y-2 text-sm">
                      <li>• <strong>Quarterly payments:</strong> February, May, August, November</li>
                      <li>• <strong>Minimum payout:</strong> $5.01 (if less, it rolls to next quarter)</li>
                      <li>• <strong>Processing time:</strong> Cash back appears 1-3 days after purchase</li>
                      <li>• <strong>Payment date:</strong> 15th of payment months</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800 mb-3">💳 Payment Methods</h4>
                    <ul className="text-green-700 space-y-2 text-sm">
                      <li>• <strong>PayPal:</strong> Instant, no fees (recommended)</li>
                      <li>• <strong>Check by mail:</strong> 5-7 business days</li>
                      <li>• <strong>American Express points:</strong> 1 cash back = 1 point</li>
                      <li>• <strong>Direct deposit:</strong> Coming in 2025</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-semibold text-blue-800 mb-3">🔍 Tracking Your Earnings</h3>
                <p className="text-blue-700 text-sm mb-4">
                  Your Rakuten account dashboard shows all your activity in real-time:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <ul className="text-blue-700 space-y-1">
                      <li>• <strong>Pending cash back:</strong> Purchases awaiting store confirmation</li>
                      <li>• <strong>Available cash back:</strong> Ready to be paid out</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="text-blue-700 space-y-1">
                      <li>• <strong>Total earned:</strong> Lifetime cash back earnings</li>
                      <li>• <strong>Payment history:</strong> All previous payments</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Real Success Stories */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Real Member Success Stories</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <img src="https://images.unsplash.com/photo-1494790108755-2616b612b586?w=60&h=60&fit=crop&crop=face" 
                         alt="Member" className="w-12 h-12 rounded-full mr-4" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Jennifer K.</h4>
                      <p className="text-sm text-gray-500">Member since 2021</p>
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg mb-4">
                    <div className="text-2xl font-bold text-green-600 mb-1">$2,347</div>
                    <div className="text-sm text-green-700">Total cash back earned</div>
                  </div>
                  <p className="text-gray-700 text-sm">
                    "I was skeptical at first, but Rakuten has paid for two family vacations with the cash back. I just shop for everything I normally buy, but I start at Rakuten first. The browser extension makes it completely automatic."
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face" 
                         alt="Member" className="w-12 h-12 rounded-full mr-4" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Mike R.</h4>
                      <p className="text-sm text-gray-500">Member since 2019</p>
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg mb-4">
                    <div className="text-2xl font-bold text-green-600 mb-1">$4,892</div>
                    <div className="text-sm text-green-700">Total cash back earned</div>
                  </div>
                  <p className="text-gray-700 text-sm">
                    "As a small business owner, I use Rakuten for all my business purchases—office supplies, software, equipment. The cash back adds up quickly when you're spending thousands per month. It's like getting a discount on everything."
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face" 
                         alt="Member" className="w-12 h-12 rounded-full mr-4" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Lisa M.</h4>
                      <p className="text-sm text-gray-500">Member since 2020</p>
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg mb-4">
                    <div className="text-2xl font-bold text-green-600 mb-1">$1,634</div>
                    <div className="text-sm text-green-700">Total cash back earned</div>
                  </div>
                  <p className="text-gray-700 text-sm">
                    "I love that Rakuten pays real money, not points that lose value. The quarterly payments feel like bonus checks. I've referred 12 friends and earned an extra $360 just from referrals."
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face" 
                         alt="Member" className="w-12 h-12 rounded-full mr-4" />
                    <div>
                      <h4 className="font-semibold text-gray-900">David P.</h4>
                      <p className="text-sm text-gray-500">Member since 2018</p>
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg mb-4">
                    <div className="text-2xl font-bold text-green-600 mb-1">$6,234</div>
                    <div className="text-sm text-green-700">Total cash back earned</div>
                  </div>
                  <p className="text-gray-700 text-sm">
                    "I'm an early adopter and power user. I track cash back rates and time my big purchases for maximum earnings. During Black Friday 2024, I earned $347 in cash back in a single day by stacking deals."
                  </p>
                </div>
              </div>
            </section>

            {/* Getting Started */}
            <section className="mb-16">
              <div className="bg-gray-900 rounded-2xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-6">Ready to Start Earning Cash Back?</h2>
                <p className="text-xl leading-relaxed mb-6">
                  Join over 14 million members who've earned real money shopping through Rakuten. <strong>It's completely free and takes less than 2 minutes to set up.</strong>
                </p>
                
                <div className="bg-gray-800 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-semibold text-yellow-400 mb-4">🎯 Your First Steps</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                    <div>
                      <div className="text-green-400 font-semibold mb-2">Step 1:</div>
                      <div>Join Rakuten and get $40 sign-up bonus</div>
                    </div>
                    <div>
                      <div className="text-blue-400 font-semibold mb-2">Step 2:</div>
                      <div>Install browser extension for automatic activation</div>
                    </div>
                    <div>
                      <div className="text-purple-400 font-semibold mb-2">Step 3:</div>
                      <div>Make your first purchase and start earning</div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <Link 
                    href="https://www.rakuten.com/r/COUPON123?eeid=29041" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-purple-600 text-white font-bold text-lg rounded-lg hover:bg-purple-700 transition-colors shadow-lg inline-flex items-center"
                  >
                    Join Rakuten & Get $40 Bonus
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
                
                <p className="text-gray-300 text-center mt-6">
                  <strong>100% Free • No fees • Real money payments • 14+ million members</strong>
                </p>
              </div>
            </section>

          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Master Cash Back Shopping</h2>
            <p className="text-xl mb-8 text-purple-100">
              Get advanced Rakuten strategies, rate alerts, and cash back tips that could double your earnings.
            </p>
            <div className="max-w-md mx-auto">
              <EmailForm 
                placeholder="Enter email for cash back tips"
                buttonText="Get Strategies"
                className="[&_input]:bg-white [&_input]:text-gray-900 [&_input]:border-white [&_button]:bg-yellow-400 [&_button]:text-gray-900 [&_button]:hover:bg-yellow-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
