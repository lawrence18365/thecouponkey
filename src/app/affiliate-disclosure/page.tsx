export const metadata = {
  title: 'Affiliate Disclosure - The Coupon Key',
  description: 'Learn about The Coupon Key\'s affiliate partnerships and how we may earn commissions from the deals we share.',
}

export default function AffiliateDisclosurePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Affiliate Disclosure
            </h1>
            <p className="text-lg text-gray-600">
              Last updated: June 16, 2025
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
          <div className="prose prose-lg max-w-none">
            
            {/* Important Notice */}
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-blue-800">Important Notice</h3>
                  <p className="mt-2 text-blue-700">
                    The Coupon Key participates in affiliate marketing programs and may receive compensation 
                    when you make purchases through links on our website. This disclosure is made in accordance 
                    with the Federal Trade Commission's (FTC) guidelines.
                  </p>
                </div>
              </div>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Affiliate Programs?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Affiliate programs are marketing arrangements where retailers pay commissions to websites like 
                The Coupon Key for directing customers to their stores. When you click on a coupon, deal, or 
                store link on our website and make a purchase, we may receive a small commission from the retailer.
              </p>
              <p className="text-gray-600 leading-relaxed">
                This commission does not affect the price you pay for products or services. In fact, our affiliate 
                partnerships often allow us to provide you with exclusive coupons and deals that can save you money.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Affiliate Partners</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The Coupon Key partners with various retailers and affiliate networks, including but not limited to:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Major Retailers</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Amazon Associates</li>
                    <li>Target</li>
                    <li>Walmart</li>
                    <li>Best Buy</li>
                    <li>Nike</li>
                    <li>And many more...</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Affiliate Networks</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Commission Junction (CJ Affiliate)</li>
                    <li>ShareASale</li>
                    <li>Impact Radius</li>
                    <li>Rakuten Advertising</li>
                    <li>PartnerStack</li>
                    <li>Other networks</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                We add new partners regularly to bring you the best deals and savings opportunities. 
                Our affiliate relationships are always disclosed and do not influence our editorial content.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How Affiliate Links Work</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">You Click a Link</h3>
                    <p className="text-gray-600 text-sm">
                      When you click on a coupon code, deal, or store link on our website, 
                      you may be redirected through an affiliate tracking link.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Tracking Cookie is Set</h3>
                    <p className="text-gray-600 text-sm">
                      The retailer's website sets a tracking cookie on your browser that identifies 
                      The Coupon Key as the referring source.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">You Make a Purchase</h3>
                    <p className="text-gray-600 text-sm">
                      If you complete a purchase within the cookie period (usually 24 hours to 30 days), 
                      the retailer tracks this as a referral from our website.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Commission is Earned</h3>
                    <p className="text-gray-600 text-sm">
                      The retailer pays The Coupon Key a small commission (typically 1-10% of your purchase) 
                      for referring you to their store.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Editorial Independence</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                While we participate in affiliate programs, our editorial content remains independent and unbiased:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li><strong>No pay-for-play:</strong> Retailers cannot pay us to feature their deals more prominently</li>
                <li><strong>Quality first:</strong> We only promote deals and coupons that provide genuine value to our users</li>
                <li><strong>Transparent rankings:</strong> Our deal rankings are based on savings potential and user interest, not commission rates</li>
                <li><strong>Honest reviews:</strong> Our product and service recommendations are based on merit, not affiliate earnings</li>
                <li><strong>User benefit focus:</strong> We prioritize what's best for our users over what earns us the most commission</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                Our goal is to help you save money, and affiliate commissions simply allow us to keep the website free and continue finding great deals for you.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Impact on You as a User</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">No Additional Cost</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                When you make a purchase through our affiliate links, you pay the same price as you would if you 
                visited the retailer directly. The commission we receive comes from the retailer's marketing budget, 
                not from any additional charges to you.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Often Better Deals</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our affiliate partnerships frequently provide access to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
                <li>Exclusive coupon codes not available elsewhere</li>
                <li>Special promotional offers for our users</li>
                <li>Early access to sales and deals</li>
                <li>Unique discount opportunities</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Supporting Our Service</h3>
              <p className="text-gray-600 leading-relaxed">
                When you use our affiliate links, you're helping to support The Coupon Key at no extra cost to yourself. 
                This allows us to continue providing free access to thousands of coupons and deals, maintain our website, 
                and invest in finding even better savings for our community.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Compensation</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The Coupon Key may receive different types of compensation from affiliate partnerships:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Sales Commissions</h3>
                  <p className="text-gray-600 text-sm">
                    A percentage of the sale amount when you make a purchase through our links (typically 1-10%).
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Click-Through Payments</h3>
                  <p className="text-gray-600 text-sm">
                    Small payments for directing traffic to partner websites, regardless of whether a purchase is made.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Lead Generation</h3>
                  <p className="text-gray-600 text-sm">
                    Compensation for users who sign up for services or newsletters through our referral links.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Subscription Referrals</h3>
                  <p className="text-gray-600 text-sm">
                    Ongoing commissions for subscription services that users sign up for through our links.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Amazon Associates Disclosure</h2>
              <div className="bg-amber-50 border-l-4 border-amber-400 p-4">
                <p className="text-amber-800 text-sm leading-relaxed">
                  "The Coupon Key is a participant in the Amazon Services LLC Associates Program, an affiliate 
                  advertising program designed to provide a means for sites to earn advertising fees by advertising 
                  and linking to Amazon.com. As an Amazon Associate, we earn from qualifying purchases."
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Privacy and Data</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                When you click on affiliate links, the following may occur:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>The retailer may set tracking cookies on your device</li>
                <li>Your click and potential purchase may be tracked for commission purposes</li>
                <li>Aggregated performance data may be shared with affiliate networks</li>
                <li>No personal information is shared beyond what's necessary for tracking purchases</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                For more details about how we handle your data, please review our 
                <a href="/privacy" className="text-blue-600 hover:text-blue-700 font-medium"> Privacy Policy</a>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Identify Affiliate Links</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We strive to be transparent about our affiliate relationships. You can identify affiliate content in several ways:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>This disclosure page clearly outlines our affiliate practices</li>
                <li>Affiliate disclosure notices appear in our website footer</li>
                <li>Some affiliate links may include tracking parameters in the URL</li>
                <li>Product reviews and recommendations include affiliate disclosures when applicable</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                If you prefer not to use affiliate links, you can always navigate directly to retailer websites 
                by typing their URLs into your browser address bar.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions About Affiliate Relationships</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We believe in complete transparency with our users. If you have any questions about:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 mb-6">
                <li>Our affiliate partnerships</li>
                <li>How commissions work</li>
                <li>Specific retailer relationships</li>
                <li>Our editorial independence</li>
                <li>Any aspect of our affiliate program</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                Please don't hesitate to contact us at 
                <a href="mailto:contact@thecouponkey.com" className="text-blue-600 hover:text-blue-700 font-medium"> contact@thecouponkey.com</a>. 
                We're happy to provide additional information about any affiliate relationship or explain how our partnerships work.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Legal Compliance</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                This disclosure is made in compliance with:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
                <li>Federal Trade Commission (FTC) Guidelines on Endorsements and Testimonials</li>
                <li>FTC's Guides Concerning the Use of Endorsements and Testimonials in Advertising</li>
                <li>General Data Protection Regulation (GDPR) transparency requirements</li>
                <li>California Consumer Privacy Act (CCPA) disclosure requirements</li>
                <li>All applicable federal and state laws regarding affiliate marketing</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                We regularly review and update our affiliate practices to ensure ongoing compliance with all applicable regulations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Disclosure</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this affiliate disclosure from time to time to reflect changes in our affiliate partnerships, 
                legal requirements, or business practices. We will post any updates on this page and update the 
                "Last updated" date at the top of this page. We encourage you to review this disclosure periodically 
                to stay informed about how we work with affiliate partners.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions about this affiliate disclosure, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700"><strong>Email:</strong> contact@thecouponkey.com</p>
                <p className="text-gray-700"><strong>Subject Line:</strong> "Affiliate Disclosure Question"</p>
                <p className="text-gray-700"><strong>Response time:</strong> Within 48 hours</p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  )
}
