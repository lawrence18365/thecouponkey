import { Metadata } from 'next';
import Breadcrumbs from '@/components/ui/breadcrumbs';
import { Flame, Gift, Clock, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Black Friday Deals 2024 - Best Coupons & Discounts | The Coupon Key',
  description: 'Discover the best Black Friday deals and coupons for 2024. Save up to 80% on electronics, fashion, home goods, and more from top retailers.',
  keywords: 'black friday deals, black friday coupons, black friday discounts, cyber deals, holiday savings, black friday sales',
  alternates: {
    canonical: '/black-friday-deals',
  },
  openGraph: {
    title: 'Black Friday Deals 2024 - Up to 80% Off',
    description: 'The biggest Black Friday deals and coupons of the year. Don\'t miss these exclusive offers!',
    url: 'https://thecouponkey.com/black-friday-deals',
  },
};

const blackFridayDeals = [
  {
    store: 'Amazon',
    discount: 'Up to 70% Off',
    category: 'Electronics',
    description: 'Massive discounts on TVs, laptops, headphones, and smart home devices',
    code: 'BLACKFRIDAY70',
    validUntil: 'Nov 30, 2024',
    featured: true
  },
  {
    store: 'Best Buy',
    discount: 'Up to 60% Off',
    category: 'Tech & Gaming',
    description: 'Gaming consoles, smartphones, and tech accessories',
    code: 'TECH60',
    validUntil: 'Nov 29, 2024',
    featured: true
  },
  {
    store: 'Target',
    discount: 'Up to 50% Off',
    category: 'Home & Fashion',
    description: 'Home decor, clothing, toys, and household essentials',
    code: 'TARGET50',
    validUntil: 'Nov 30, 2024',
    featured: false
  },
  {
    store: 'Nike',
    discount: 'Up to 40% Off',
    category: 'Athletic Wear',
    description: 'Sneakers, athletic wear, and sports equipment',
    code: 'NIKE40',
    validUntil: 'Nov 27, 2024',
    featured: false
  },
  {
    store: 'Apple',
    discount: 'Up to $200 Gift Card',
    category: 'Electronics',
    description: 'Gift cards with purchase of eligible Apple products',
    code: 'APPLE200',
    validUntil: 'Nov 29, 2024',
    featured: true
  },
  {
    store: 'Walmart',
    discount: 'Up to 75% Off',
    category: 'Everything',
    description: 'Massive savings across all categories',
    code: 'WALMART75',
    validUntil: 'Nov 30, 2024',
    featured: false
  }
];

const categories = [
  { name: 'Electronics', icon: '📱', deals: 156 },
  { name: 'Fashion & Clothing', icon: '👗', deals: 89 },
  { name: 'Home & Garden', icon: '🏠', deals: 124 },
  { name: 'Toys & Games', icon: '🎮', deals: 67 },
  { name: 'Beauty & Health', icon: '💄', deals: 78 },
  { name: 'Sports & Outdoors', icon: '⚽', deals: 45 }
];

export default function BlackFridayDealsPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Black Friday Deals', href: '/black-friday-deals' }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://thecouponkey.com/black-friday-deals",
    "name": "Black Friday Deals 2024",
    "description": "Best Black Friday deals and coupons for 2024",
    "publisher": {
      "@id": "https://thecouponkey.com/#organization"
    },
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": blackFridayDeals.length,
      "itemListElement": blackFridayDeals.map((deal, index) => ({
        "@type": "Offer",
        "position": index + 1,
        "name": `${deal.store} ${deal.discount}`,
        "description": deal.description,
        "seller": {
          "@type": "Organization",
          "name": deal.store
        },
        "validThrough": deal.validUntil
      }))
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
        <div className="text-center mb-12 bg-gradient-to-r from-red-600 via-red-700 to-black text-white py-16 px-8 rounded-2xl">
          <div className="flex justify-center mb-4">
            <Flame className="w-16 h-16 text-yellow-400" />
          </div>
          <h1 className="text-5xl font-bold mb-4">
            Black Friday Deals 2024
          </h1>
          <p className="text-xl mb-6 max-w-3xl mx-auto">
            Don't miss the biggest shopping event of the year! Save up to 80% on electronics, fashion, home goods, and more from top retailers.
          </p>
          <div className="flex justify-center items-center space-x-6 text-lg">
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              <span>Limited Time Only</span>
            </div>
            <div className="flex items-center">
              <TrendingUp className="w-5 h-5 mr-2" />
              <span>659+ Active Deals</span>
            </div>
          </div>
        </div>

        {/* Featured Deals */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Gift className="w-8 h-8 mr-3 text-red-600" />
            Featured Black Friday Deals
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blackFridayDeals.filter(deal => deal.featured).map((deal, index) => (
              <div key={index} className="bg-white border-2 border-red-200 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{deal.store}</h3>
                    <p className="text-sm text-gray-600">{deal.category}</p>
                  </div>
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
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
                  <p className="text-sm text-gray-500">Valid until {deal.validUntil}</p>
                </div>
                
                <Link 
                  href={`/stores/${deal.store.toLowerCase().replace(/\s+/g, '-')}`}
                  className="mt-4 w-full bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors block text-center"
                >
                  Shop {deal.store} Deals
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* All Deals */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">All Black Friday Deals</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {blackFridayDeals.filter(deal => !deal.featured).map((deal, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{deal.store}</h3>
                    <p className="text-sm text-gray-600">{deal.category}</p>
                  </div>
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-semibold">
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
                    View Deal
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Shop by Category</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <Link
                key={index}
                href={`/categories/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl mb-2">{category.icon}</div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{category.name}</h3>
                <p className="text-xs text-gray-600">{category.deals} deals</p>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 px-8 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Never Miss a Deal</h2>
          <p className="text-lg mb-6">Get Black Friday alerts and exclusive coupons delivered to your inbox</p>
          <div className="flex justify-center">
            <div className="flex max-w-md w-full">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-l-lg text-gray-900"
              />
              <button className="bg-red-600 px-6 py-3 rounded-r-lg font-semibold hover:bg-red-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}