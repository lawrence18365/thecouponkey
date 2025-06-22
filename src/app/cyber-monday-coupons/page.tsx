import { Metadata } from 'next';
import Breadcrumbs from '@/components/ui/breadcrumbs';
import { Zap, Monitor, ShoppingCart, Clock } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cyber Monday Coupons 2024 - Online Deals & Discounts | The Coupon Key',
  description: 'Best Cyber Monday coupons and online deals for 2024. Save up to 80% on electronics, software, digital services, and more.',
  keywords: 'cyber monday coupons, cyber monday deals, online discounts, digital deals, tech coupons, cyber monday sales 2024',
  alternates: {
    canonical: '/cyber-monday-coupons',
  },
  openGraph: {
    title: 'Cyber Monday Coupons 2024 - Biggest Online Deals',
    description: 'Exclusive Cyber Monday coupons and digital deals. Save big on tech, software, and online services.',
    url: 'https://thecouponkey.com/cyber-monday-coupons',
  },
};

const cyberMondayDeals = [
  {
    store: 'Adobe',
    discount: '60% Off',
    category: 'Software',
    description: 'Creative Cloud, Photoshop, and other creative software',
    code: 'CYBER60',
    featured: true
  },
  {
    store: 'Microsoft',
    discount: '50% Off',
    category: 'Software & Gaming',
    description: 'Office 365, Xbox Game Pass, and Surface devices',
    code: 'MS50',
    featured: true
  },
  {
    store: 'Amazon',
    discount: 'Up to 70% Off',
    category: 'Tech & Electronics',
    description: 'Fire tablets, Echo devices, and Kindle e-readers',
    code: 'CYBERTECH',
    featured: true
  },
  {
    store: 'Best Buy',
    discount: 'Up to 65% Off',
    category: 'Electronics',
    description: 'Laptops, phones, gaming gear, and smart home devices',
    code: 'BESTCYBER',
    featured: false
  },
  {
    store: 'Norton',
    discount: '70% Off',
    category: 'Security Software',
    description: 'Antivirus, VPN, and identity protection services',
    code: 'NORTON70',
    featured: false
  },
  {
    store: 'Udemy',
    discount: '85% Off',
    category: 'Online Learning',
    description: 'Programming, design, and business courses',
    code: 'LEARN85',
    featured: false
  }
];

export default function CyberMondayPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Cyber Monday Coupons', href: '/cyber-monday-coupons' }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://thecouponkey.com/cyber-monday-coupons",
    "name": "Cyber Monday Coupons 2024",
    "description": "Best Cyber Monday coupons and online deals for 2024",
    "publisher": {
      "@id": "https://thecouponkey.com/#organization"
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
        <div className="text-center mb-12 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white py-16 px-8 rounded-2xl">
          <div className="flex justify-center mb-4">
            <Zap className="w-16 h-16 text-yellow-300" />
          </div>
          <h1 className="text-5xl font-bold mb-4">
            Cyber Monday Coupons 2024
          </h1>
          <p className="text-xl mb-6 max-w-3xl mx-auto">
            The biggest online shopping event continues! Save up to 85% on software, electronics, digital services, and more.
          </p>
          <div className="flex justify-center items-center space-x-6 text-lg">
            <div className="flex items-center">
              <Monitor className="w-5 h-5 mr-2" />
              <span>Online Only</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              <span>24 Hours Only</span>
            </div>
          </div>
        </div>

        {/* Featured Deals */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <ShoppingCart className="w-8 h-8 mr-3 text-blue-600" />
            Top Cyber Monday Deals
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cyberMondayDeals.filter(deal => deal.featured).map((deal, index) => (
              <div key={index} className="bg-white border-2 border-blue-200 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{deal.store}</h3>
                    <p className="text-sm text-gray-600">{deal.category}</p>
                  </div>
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {deal.discount}
                  </span>
                </div>
                
                <p className="text-gray-700 mb-4">{deal.description}</p>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-mono text-lg bg-gray-100 px-3 py-1 rounded">
                      {deal.code}
                    </span>
                    <button className="text-blue-600 hover:text-blue-800 text-sm">Copy Code</button>
                  </div>
                </div>
                
                <Link 
                  href={`/stores/${deal.store.toLowerCase().replace(/\s+/g, '-')}`}
                  className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors block text-center"
                >
                  Shop {deal.store}
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* All Deals */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">More Cyber Monday Deals</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {cyberMondayDeals.filter(deal => !deal.featured).map((deal, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{deal.store}</h3>
                    <p className="text-sm text-gray-600">{deal.category}</p>
                  </div>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-semibold">
                    {deal.discount}
                  </span>
                </div>
                
                <p className="text-gray-700 mb-4">{deal.description}</p>
                
                <div className="flex justify-between items-center">
                  <span className="font-mono bg-gray-100 px-2 py-1 rounded text-sm">
                    {deal.code}
                  </span>
                  <Link 
                    href={`/stores/${deal.store.toLowerCase().replace(/\s+/g, '-')}`}
                    className="bg-gray-900 text-white px-4 py-2 rounded font-semibold hover:bg-gray-800 transition-colors text-sm"
                  >
                    Get Deal
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-12 px-8 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Don't Miss Tomorrow's Deals</h2>
          <p className="text-lg mb-6">Get exclusive Cyber Monday alerts and digital deal notifications</p>
          <div className="flex justify-center">
            <div className="flex max-w-md w-full">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-l-lg text-gray-900"
              />
              <button className="bg-blue-600 px-6 py-3 rounded-r-lg font-semibold hover:bg-blue-700 transition-colors">
                Get Alerts
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}