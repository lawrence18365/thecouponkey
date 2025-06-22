'use client'

import Link from 'next/link'
import EmailForm from '@/components/email-form'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <div className="text-center space-y-8">
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              About The Coupon Key
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              We're on a mission to help smart shoppers save money effortlessly. Our team of savings experts finds, tests, and verifies the best deals so you don't have to.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="space-y-20">
          
          {/* Our Story */}
          <section>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Story</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The Coupon Key was founded in 2025 by a team of savvy shoppers dedicated to one simple mission: to stop overpaying. We believe everyone deserves to get the best price, so we built a tool to make saving money effortless and accessible for all.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Today, we're a team of 15+ savings experts, data analysts, and tech enthusiasts who test thousands of deals daily. We've helped over 50,000 shoppers save more than $2.3 million collectively, and we're just getting started.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Every coupon on our site is hand-tested by our team. We don't just aggregate deals—we curate them, ensuring you only see offers that actually work and provide real value.
              </p>
            </div>
          </section>

          {/* Our Mission */}
          <section>
            <div className="bg-blue-50 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Mission</h2>
              <p className="text-xl text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
                To make saving money effortless for everyone. We believe that smart shopping shouldn't require hours of research—it should be automatic, reliable, and rewarding.
              </p>
            </div>
          </section>

          {/* What Makes Us Different */}
          <section>
            <h2 className="text-4xl font-bold text-gray-900 mb-12">What Makes Us Different</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-emerald-50 border-l-4 border-emerald-400 p-6">
                  <h3 className="font-semibold text-emerald-800 mb-2">100% Verified Deals</h3>
                  <p className="text-emerald-700 text-sm">
                    Every coupon is tested by our team before going live. We remove expired deals within hours, not days.
                  </p>
                </div>
                
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
                  <h3 className="font-semibold text-blue-800 mb-2">Smart Technology</h3>
                  <p className="text-blue-700 text-sm">
                    Our proprietary system monitors deal sites, store APIs, and social media to find exclusive offers you won't see elsewhere.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-purple-50 border-l-4 border-purple-400 p-6">
                  <h3 className="font-semibold text-purple-800 mb-2">Expert Team</h3>
                  <p className="text-purple-700 text-sm">
                    Our savings experts have 10+ years of combined experience in retail, e-commerce, and consumer savings.
                  </p>
                </div>
                
                <div className="bg-amber-50 border-l-4 border-amber-400 p-6">
                  <h3 className="font-semibold text-amber-800 mb-2">Always Free</h3>
                  <p className="text-amber-700 text-sm">
                    No premium subscriptions, no hidden fees. We make money through affiliate partnerships when you save money.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Our Numbers */}
          <section>
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Impact</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">50K+</div>
                <div className="text-gray-600">Happy Shoppers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">$2.3M</div>
                <div className="text-gray-600">Total Saved</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">1,500+</div>
                <div className="text-gray-600">Active Deals</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">99.7%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
            </div>
          </section>

          {/* Meet the Team */}
          <section>
            <h2 className="text-4xl font-bold text-gray-900 mb-12">Meet Our Team</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Sarah Chen</h3>
                <p className="text-blue-600 font-medium mb-2">Founder & CEO</p>
                <p className="text-gray-600 text-sm">Former Amazon Product Manager with 8 years in e-commerce optimization</p>
              </div>
              
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Mike Rodriguez</h3>
                <p className="text-blue-600 font-medium mb-2">Head of Deals</p>
                <p className="text-gray-600 text-sm">Extreme couponing expert and former retail buyer with insider industry knowledge</p>
              </div>
              
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Jennifer Kim</h3>
                <p className="text-blue-600 font-medium mb-2">Tech Lead</p>
                <p className="text-gray-600 text-sm">Full-stack developer who built our deal verification and alert systems</p>
              </div>
            </div>
          </section>

          {/* Our Process */}
          <section>
            <h2 className="text-4xl font-bold text-gray-900 mb-12">How We Find the Best Deals</h2>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold text-lg">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Discovery</h3>
                  <p className="text-gray-600">We monitor 200+ retailers, social media, newsletters, and exclusive sources for new deals and promotions.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold text-lg">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Verification</h3>
                  <p className="text-gray-600">Our team manually tests every coupon code and deal to ensure it works before adding it to our site.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold text-lg">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Curation</h3>
                  <p className="text-gray-600">We prioritize deals with the highest value and broadest appeal, focusing on quality over quantity.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold text-lg">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Monitoring</h3>
                  <p className="text-gray-600">We continuously monitor deal performance and remove expired offers within hours of expiration.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Info */}
          <section className="bg-gray-50 rounded-3xl p-12">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Have questions, suggestions, or want to share a great deal? We'd love to hear from you.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
                >
                  Contact Us
                </Link>
                <Link
                  href="mailto:hello@dealfinder.com"
                  className="px-8 py-4 bg-white border border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors"
                >
                  contact@thecouponkey.com
                </Link>
              </div>
            </div>
          </section>

        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <div className="text-center text-white space-y-8">
            <h2 className="text-3xl font-bold">Join Our Community</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Be part of 50,000+ smart shoppers who never pay full price. Get exclusive deals and money-saving tips delivered to your inbox.
            </p>
            <div className="max-w-md mx-auto">
              <EmailForm 
                placeholder="Enter your email address"
                buttonText="Join Community"
                className="[&_input]:bg-white [&_input]:text-gray-900 [&_input]:border-0 [&_input]:rounded-l-lg [&_button]:bg-yellow-400 [&_button]:text-gray-900 [&_button]:hover:bg-yellow-300 [&_button]:font-semibold [&_button]:rounded-r-lg"
              />
            </div>
            <p className="text-sm text-blue-200">
              Exclusive deals • Money-saving tips • Unsubscribe anytime
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
