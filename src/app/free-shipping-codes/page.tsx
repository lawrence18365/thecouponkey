import { Metadata } from 'next';
import Breadcrumbs from '@/components/ui/breadcrumbs';
import CopyCodeButton from '@/components/copy-code-button';
import { Truck, Gift, Star, Clock } from 'lucide-react';
import Link from 'next/link';
import { realAffiliateOffers as liveAffiliateOffers } from '@/data/real-affiliate-offers';

export const metadata: Metadata = {
  title: 'Free Shipping Codes 2024 - No Minimum Orders | The Coupon Key',
  description: 'Find the best free shipping codes and coupons with no minimum purchase required. Save on shipping from top retailers like Amazon, Target, and more.',
  keywords: 'free shipping codes, free shipping coupons, no minimum shipping, free delivery codes, shipping discounts',
  alternates: {
    canonical: '/free-shipping-codes',
  },
  openGraph: {
    title: 'Free Shipping Codes 2024 - No Minimum Required',
    description: 'Get free shipping codes from top retailers. No minimum purchase required on many offers.',
    url: 'https://thecouponkey.com/free-shipping-codes',
  },
};

// Filter real offers for free shipping
const freeShippingOffers = liveAffiliateOffers.filter(offer => 
  offer.type === 'free-shipping' || 
  offer.description.toLowerCase().includes('free shipping') ||
  offer.title.toLowerCase().includes('free shipping')
);

// Additional high-value free shipping offers (commonly searched)
const popularFreeShippingOffers = [
  {
    store: 'Amazon Prime',
    discount: 'Free 2-Day Shipping',
    description: 'Free shipping on millions of items with Prime membership',
    code: 'PRIME',
    category: 'Everything',
    minOrder: 'Prime Members',
    featured: true
  },
  {
    store: 'Target',
    discount: 'Free Shipping',
    description: 'Free shipping on orders $35+ or with RedCard',
    code: 'None needed',
    category: 'Department Store',
    minOrder: '$35+',
    featured: true
  },
  {
    store: 'Walmart',
    discount: 'Free Shipping',
    description: 'Free shipping on orders $35+ or with Walmart+',
    code: 'None needed',
    category: 'Department Store',
    minOrder: '$35+',
    featured: true
  },
  {
    store: 'Best Buy',
    discount: 'Free Shipping',
    description: 'Free shipping on most orders, no minimum',
    code: 'None needed',
    category: 'Electronics',
    minOrder: 'No minimum',
    featured: false
  },
  {
    store: 'Nike',
    discount: 'Free Shipping & Returns',
    description: 'Free shipping and returns for Nike members',
    code: 'NIKEFREE',
    category: 'Athletic Wear',
    minOrder: 'Members only',
    featured: false
  },
  {
    store: 'Nordstrom',
    discount: 'Free Shipping & Returns',
    description: 'Free shipping and returns on all orders',
    code: 'None needed',
    category: 'Fashion',
    minOrder: 'No minimum',
    featured: false
  }
];

const shippingTips = [
  {
    title: 'Join Store Memberships',
    description: 'Many retailers offer free shipping for members (Amazon Prime, Target RedCard, etc.)',
    icon: '👑'
  },
  {
    title: 'Reach Minimum Thresholds',
    description: 'Most stores offer free shipping on orders $35-$50+',
    icon: '📦'
  },
  {
    title: 'Look for Promotions',
    description: 'Free shipping weekends and holiday promotions are common',
    icon: '🎁'
  },
  {
    title: 'Bundle Your Orders',
    description: 'Combine multiple items to reach free shipping minimums',
    icon: '📋'
  }
];

export default function FreeShippingCodesPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Free Shipping Codes', href: '/free-shipping-codes' }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://thecouponkey.com/free-shipping-codes",
    "name": "Free Shipping Codes 2024",
    "description": "Best free shipping codes and coupons with no minimum orders",
    "publisher": {
      "@id": "https://thecouponkey.com/#organization"
    },
    "mainEntity": {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How can I get free shipping?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can get free shipping by using promo codes, reaching minimum order amounts, joining store memberships, or shopping during free shipping promotions."
          }
        },
        {
          "@type": "Question",
          "name": "Do free shipping codes expire?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, free shipping codes have expiration dates. Always check the expiration date before using a code."
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      
      <Breadcrumbs customItems={breadcrumbItems} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white py-16 px-8 rounded-2xl">
          <div className="flex justify-center mb-4">
            <Truck className="w-16 h-16 text-yellow-300" />
          </div>
          <h1 className="text-5xl font-bold mb-4">
            Free Shipping Codes 2024
          </h1>
          <p className="text-xl mb-6 max-w-3xl mx-auto">
            Save on shipping costs with verified free shipping codes and coupons. Many with no minimum purchase required!
          </p>
          <div className="flex justify-center items-center space-x-6 text-lg">
            <div className="flex items-center">
              <Star className="w-5 h-5 mr-2" />
              <span>Verified Codes</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              <span>Updated Daily</span>
            </div>
          </div>
        </div>

        {/* Real Free Shipping Offers from Skimlinks */}
        {freeShippingOffers.length > 0 && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Gift className="w-8 h-8 mr-3 text-green-600" />
              Live Free Shipping Offers
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {freeShippingOffers.map((offer, index) => (
                <div key={index} className="bg-white border-2 border-green-200 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{offer.merchant}</h3>
                      <p className="text-sm text-gray-600">{offer.category}</p>
                    </div>
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {offer.discount}
                    </span>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{offer.description}</p>
                  
                  {offer.code && (
                    <div className="border-t pt-4 mb-4">
                      <div className="flex justify-between items-center">
                        <span className="font-mono text-lg bg-gray-100 px-3 py-1 rounded">
                          {offer.code}
                        </span>
                        <CopyCodeButton 
                          code={offer.code}
                          className="text-blue-600 hover:text-blue-800 text-sm"
                        >Copy Code</CopyCodeButton>
                      </div>
                    </div>
                  )}
                  
                  <Link 
                    href={offer.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center block"
                  >
                    Get Free Shipping
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Popular Free Shipping Offers */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Popular Free Shipping Offers</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {popularFreeShippingOffers.map((offer, index) => (
              <div key={index} className={`bg-white border rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow ${offer.featured ? 'border-green-300 bg-green-50' : 'border-gray-200'}`}>
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{offer.store}</h3>
                    <p className="text-sm text-gray-600">{offer.category}</p>
                  </div>
                  <span className={`px-2 py-1 rounded text-sm font-semibold ${
                    offer.featured 
                      ? 'bg-green-600 text-white' 
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {offer.discount}
                  </span>
                </div>
                
                <p className="text-gray-700 mb-3">{offer.description}</p>
                
                <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                  <span>Minimum: {offer.minOrder}</span>
                  <span>Code: {offer.code}</span>
                </div>
                
                <Link 
                  href={`/stores/${offer.store.toLowerCase().replace(/\s+/g, '-')}`}
                  className="w-full bg-gray-900 text-white px-4 py-2 rounded font-semibold hover:bg-gray-800 transition-colors text-center block"
                >
                  Shop {offer.store}
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Free Shipping Tips */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">How to Get Free Shipping</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {shippingTips.map((tip, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{tip.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{tip.title}</h3>
                <p className="text-sm text-gray-600">{tip.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-900 to-green-900 text-white py-12 px-8 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Never Pay for Shipping Again</h2>
          <p className="text-lg mb-6">Get free shipping alerts and exclusive no-minimum offers delivered to your inbox</p>
          <div className="flex justify-center">
            <div className="flex max-w-md w-full">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-l-lg text-gray-900"
              />
              <button className="bg-green-600 px-6 py-3 rounded-r-lg font-semibold hover:bg-green-700 transition-colors">
                Get Alerts
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}