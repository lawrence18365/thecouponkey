'use client'

import Link from 'next/link'
import EmailForm from '@/components/email-form'

export default function TargetCouponsWeeklyDealsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Professional Header */}
      <div className="border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-red-50 border border-red-100 rounded-full">
              <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
              <span className="text-sm font-medium text-red-700">Weekly Updates</span>
            </div>
            
            <h1 className="text-5xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto">
              Target Coupons & Weekly Deals 2025: Save Up to 70% Every Week
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Master Target's layered savings system. Stack Circle offers, manufacturer coupons, and weekly deals to save maximum money on everything from groceries to electronics.
            </p>
            
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-2">
                  <span className="text-red-600 font-semibold text-sm">T</span>
                </div>
                <span className="font-medium">Target Deals Expert</span>
              </div>
              <span>•</span>
              <span>Updated June 15, 2025</span>
              <span>•</span>
              <span>11 min read</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="space-y-16">
          
          {/* This Week's Best Deals */}
          <div className="bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-red-900 mb-2">🎯 This Week's Hottest Target Deals</h2>
              <p className="text-red-700">June 15-21, 2025 • Valid in-store and online</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 border border-red-100">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-1">40%</div>
                  <div className="text-sm text-red-700 font-medium">OFF Electronics</div>
                  <p className="text-xs text-gray-600 mt-2">TVs, headphones, gaming</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 border border-red-100">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-1">30%</div>
                  <div className="text-sm text-red-700 font-medium">OFF Home Goods</div>
                  <p className="text-xs text-gray-600 mt-2">Furniture, decor, bedding</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 border border-red-100">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-1">25%</div>
                  <div className="text-sm text-red-700 font-medium">OFF Beauty</div>
                  <p className="text-xs text-gray-600 mt-2">Skincare, makeup, hair</p>
                </div>
              </div>
            </div>
          </div>

          {/* Target Circle Mastery */}
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">🔴 Target Circle: Your Secret Weapon</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Target Circle is free and offers the deepest discounts. Here's how to maximize every benefit.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-purple-50 rounded-2xl p-8 border border-red-200">
              <h3 className="text-xl font-bold text-red-900 mb-6">Circle Benefits Breakdown</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-6 border border-red-100">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">🎁 Circle Offers</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Personalized deals up to 50% off</li>
                      <li>• New offers every Sunday</li>
                      <li>• Stack with manufacturer coupons</li>
                      <li>• Activate through Target app</li>
                    </ul>
                    <div className="bg-red-50 rounded p-3 mt-4">
                      <p className="text-xs text-red-700"><strong>Pro tip:</strong> Check Circle offers before shopping - many are personalized to your buying history</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6 border border-red-100">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">💰 1% Earnings</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Earn 1% on every purchase</li>
                      <li>• Receive voucher when you hit $5</li>
                      <li>• No expiration on earnings</li>
                      <li>• Works on sale items too</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-6 border border-red-100">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">🎂 Birthday Perks</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• 5% off entire purchase</li>
                      <li>• Valid for 2 weeks around birthday</li>
                      <li>• Can't combine with RedCard 5% off</li>
                      <li>• Use on big purchases for max savings</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg p-6 border border-red-100">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">⚡ Bonus Offers</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Spend $X, get $Y Circle bonus</li>
                      <li>• Category-specific multipliers</li>
                      <li>• Limited-time boosts (2x, 3x earnings)</li>
                      <li>• Partner store earnings</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Weekly Ad Strategy */}
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">📰 Weekly Ad Mastery</h2>
              <p className="text-lg text-gray-600">
                Target's weekly ad runs Sunday to Saturday. Here's how to maximize every deal.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Current Week Highlights (June 15-21)</h3>
              
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-bold text-gray-900">Electronics Doorbusters</h4>
                    <span className="text-2xl font-bold text-green-600">Save $200+</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p><strong>Apple AirPods Pro:</strong> $179 (reg. $249)</p>
                      <p><strong>Samsung 55" TV:</strong> $399 (reg. $599)</p>
                      <p><strong>Nintendo Switch:</strong> $279 (reg. $299)</p>
                    </div>
                    <div>
                      <p><strong>iPad 10th Gen:</strong> $349 (reg. $449)</p>
                      <p><strong>Sony Headphones:</strong> $89 (reg. $149)</p>
                      <p><strong>Gaming Keyboards:</strong> $39 (reg. $79)</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-bold text-gray-900">Home & Garden</h4>
                    <span className="text-2xl font-bold text-green-600">30% Off</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p><strong>Patio Furniture:</strong> Buy 1, Get 1 30% off</p>
                      <p><strong>Storage Solutions:</strong> 25% off entire department</p>
                    </div>
                    <div>
                      <p><strong>Garden Center:</strong> 20% off plants & soil</p>
                      <p><strong>Kitchen Appliances:</strong> $20 off $100+</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-bold text-gray-900">Grocery & Essentials</h4>
                    <span className="text-2xl font-bold text-green-600">Buy 2 Get 1</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p><strong>Snacks & Beverages:</strong> Mix & match deals</p>
                      <p><strong>Personal Care:</strong> P&G brands 30% off</p>
                    </div>
                    <div>
                      <p><strong>Cleaning Supplies:</strong> $5 gift card with $20</p>
                      <p><strong>Baby Products:</strong> Buy 2, get $10 gift card</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Coupon Stacking Strategy */}
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">🔥 The Ultimate Stacking Strategy</h2>
              <p className="text-lg text-gray-600">
                Target allows multiple discounts on one purchase. Here's how to stack them for maximum savings.
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
              <h3 className="text-xl font-bold text-green-900 mb-6">The Perfect Stack (Real Example)</h3>
              
              <div className="bg-white rounded-lg p-6 border border-green-100 mb-6">
                <h4 className="text-lg font-bold text-gray-900 mb-4">🧴 Beauty Product Example: $67 → $23 (65% savings)</h4>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="text-gray-700">Original Price (L'Oreal skincare set)</span>
                    <span className="font-semibold">$67.00</span>
                  </div>
                  
                  <div className="flex justify-between items-center text-green-600">
                    <span>Weekly Ad Sale (30% off)</span>
                    <span>-$20.10</span>
                  </div>
                  
                  <div className="flex justify-between items-center text-green-600">
                    <span>Circle Offer (additional $5 off $25)</span>
                    <span>-$5.00</span>
                  </div>
                  
                  <div className="flex justify-between items-center text-green-600">
                    <span>Manufacturer Coupon ($3 off)</span>
                    <span>-$3.00</span>
                  </div>
                  
                  <div className="flex justify-between items-center text-green-600">
                    <span>RedCard 5% discount</span>
                    <span>-$1.95</span>
                  </div>
                  
                  <div className="flex justify-between items-center text-green-600">
                    <span>Circle Earnings (1% back)</span>
                    <span>-$0.37</span>
                  </div>
                  
                  <div className="flex justify-between items-center pt-2 border-t border-gray-200 font-bold text-lg">
                    <span className="text-gray-900">Final Price</span>
                    <span className="text-green-600">$23.58</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-100 rounded-lg p-4">
                <h4 className="font-bold text-green-800 mb-2">Stacking Order (Critical!):</h4>
                <ol className="list-decimal list-inside space-y-1 text-green-700 text-sm">
                  <li>Apply Circle offers first (they calculate from original price)</li>
                  <li>Use manufacturer coupons second</li>
                  <li>RedCard discount applies automatically to final amount</li>
                  <li>Circle earnings calculated on post-discount total</li>
                </ol>
              </div>
            </div>
          </section>

          {/* Target App Features */}
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">📱 Target App: Hidden Money-Saving Features</h2>
              <p className="text-lg text-gray-600">
                The Target app has exclusive features that can save you hundreds per year.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                <h3 className="text-xl font-bold text-purple-900 mb-4">🛒 Cartwheel Integration</h3>
                <ul className="space-y-3 text-purple-800">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">Scan barcodes for instant discounts</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">Add items to list for price drop alerts</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">Check clearance prices while in-store</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">Digital wallet for fast checkout</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-xl font-bold text-blue-900 mb-4">🔍 Store Maps & Inventory</h3>
                <ul className="space-y-3 text-blue-800">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">Real-time stock levels at your store</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">Interactive store maps with aisle numbers</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">Check other store inventories</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">Reserve items for store pickup</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Browser Extension Enhancement */}
          <section className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 text-white">
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold">Boost Your Target Savings with Browser Extensions</h2>
              <p className="text-xl text-indigo-100 leading-relaxed max-w-2xl mx-auto">
                While Target Circle is great, browser extensions can find additional codes and compare prices across stores. Stack them with Circle offers for maximum savings.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white bg-opacity-10 rounded-xl p-6 text-left">
                  <h3 className="text-xl font-bold mb-3">WikiBuy Price Comparison</h3>
                  <ul className="space-y-2 text-indigo-100">
                    <li>• Compares Target prices with 40,000+ stores</li>
                    <li>• Finds better deals on identical items</li>
                    <li>• Works alongside Target Circle offers</li>
                    <li>• Saved users $127M at major retailers</li>
                  </ul>
                  <button 
                    onClick={() => {
                      console.log('WikiBuy install clicked - DEMO MODE')
                      alert('Demo Mode: In production, this would redirect to WikiBuy extension download')
                    }}
                    className="mt-4 w-full px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Install WikiBuy Free
                  </button>
                </div>
                
                <div className="bg-white bg-opacity-10 rounded-xl p-6 text-left">
                  <h3 className="text-xl font-bold mb-3">Honey Coupon Finder</h3>
                  <ul className="space-y-2 text-indigo-100">
                    <li>• Automatically tests coupon codes at checkout</li>
                    <li>• Finds codes Target Circle might miss</li>
                    <li>• Earn Honey Gold points for rewards</li>
                    <li>• Works on 30,000+ websites</li>
                  </ul>
                  <button 
                    onClick={() => {
                      console.log('Honey install clicked - DEMO MODE')
                      alert('Demo Mode: In production, this would redirect to Honey extension download')
                    }}
                    className="mt-4 w-full px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Install Honey Free
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Seasonal Shopping Calendar */}
          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center">📅 Target's Best Deal Seasons</h2>
            
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
              <div className="bg-gray-50 px-6 py-4">
                <h3 className="text-lg font-semibold text-gray-900">When to Shop for Maximum Savings</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Season</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Best Categories</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Typical Savings</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 font-medium text-gray-900">January</td>
                      <td className="px-6 py-4 text-gray-700">Holiday clearance, fitness equipment, home organization</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">50-70% off</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-gray-900">Back to School (Aug)</td>
                      <td className="px-6 py-4 text-gray-700">School supplies, electronics, dorm essentials</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">25-50% off</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-gray-900">Black Friday Week</td>
                      <td className="px-6 py-4 text-gray-700">Electronics, toys, home goods, gift cards</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">30-60% off</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-gray-900">Spring (March-April)</td>
                      <td className="px-6 py-4 text-gray-700">Patio furniture, garden supplies, Easter items</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">20-40% off</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Pro Tips Section */}
          <section className="bg-gray-900 rounded-3xl p-8 text-white">
            <h2 className="text-3xl font-bold text-center mb-8">💡 Target Shopping Pro Tips</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white bg-opacity-10 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">📦 Clearance Schedule</h3>
                  <ul className="text-gray-200 text-sm space-y-2">
                    <li>• <strong>Monday:</strong> Electronics, kids' items, baby</li>
                    <li>• <strong>Tuesday:</strong> Domestics, women's clothing</li>
                    <li>• <strong>Wednesday:</strong> Men's clothing, health & beauty</li>
                    <li>• <strong>Thursday:</strong> Shoes, lingerie, housewares</li>
                    <li>• <strong>Friday:</strong> Auto, jewelry, hardware</li>
                  </ul>
                </div>
                
                <div className="bg-white bg-opacity-10 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">🏷️ Price Tag Codes</h3>
                  <ul className="text-gray-200 text-sm space-y-2">
                    <li>• <strong>Ending in .98:</strong> Regular price</li>
                    <li>• <strong>Ending in .04 or .06:</strong> Clearance</li>
                    <li>• <strong>Ending in .00:</strong> Manager special/final clearance</li>
                    <li>• <strong>Small font size:</strong> Usually means clearance</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white bg-opacity-10 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">🎯 Price Match Policy</h3>
                  <ul className="text-gray-200 text-sm space-y-2">
                    <li>• Matches Amazon, Best Buy, Walmart, etc.</li>
                    <li>• Must be identical item and in stock</li>
                    <li>• Excludes marketplace sellers</li>
                    <li>• Can combine with RedCard discount</li>
                  </ul>
                </div>
                
                <div className="bg-white bg-opacity-10 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">📱 Exclusive App Deals</h3>
                  <ul className="text-gray-200 text-sm space-y-2">
                    <li>• App-only Circle offers</li>
                    <li>• Early access to sales</li>
                    <li>• Mobile coupons in wallet</li>
                    <li>• Push notifications for flash sales</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-r from-red-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <div className="text-center text-white space-y-8">
            <h2 className="text-3xl font-bold">Never Miss Target's Best Deals</h2>
            <p className="text-xl text-red-100 max-w-2xl mx-auto">
              Get weekly Target deal alerts, Circle offer updates, and exclusive shopping strategies delivered to your inbox.
            </p>
            <div className="max-w-md mx-auto">
              <EmailForm 
                placeholder="Enter email for Target deal alerts"
                buttonText="Get Target Deals"
                className="[&_input]:bg-white [&_input]:text-gray-900 [&_input]:border-0 [&_input]:rounded-l-lg [&_button]:bg-yellow-400 [&_button]:text-gray-900 [&_button]:hover:bg-yellow-300 [&_button]:font-semibold [&_button]:rounded-r-lg"
              />
            </div>
            <p className="text-sm text-red-200">
              Expert tips weekly • Circle offer alerts • Unsubscribe anytime
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
