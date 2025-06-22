// Real Skimlinks offers - LIVE COMMISSION EARNING DATA
// Updated from your actual Skimlinks dashboard

export interface RealOffer {
  id: string;
  store: string;
  title: string;
  description: string;
  discount: string;
  code?: string;
  category: string;
  affiliateUrl: string;
  startDate: string;
  endDate: string;
  featured: boolean;
  country: string[];
}

// LIVE OFFERS FROM YOUR SKIMLINKS DASHBOARD
export const realOffers: RealOffer[] = [
  {
    id: '3277816',
    store: 'Macy\'s',
    title: '40% Off Dresses and Dressy Tops/Bottoms from Teresa Syndonna',
    description: '40% Off Dresses and Dressy Tops/Bottoms from Teresa Syndonna',
    discount: '40% Off',
    category: 'Fashion',
    affiliateUrl: 'https://www.macys.com/shop/featured/terese-sydonna/Price_discount_range/40_PERCENT_%20off%20&%20more?cm_kws_ac=terese+&ss=true&skimoffer=3277816',
    startDate: '2025-06-27',
    endDate: '2025-06-30',
    featured: true,
    country: ['US']
  },
  {
    id: '3277815',
    store: 'Macy\'s',
    title: 'Up to 30% off Wireless Headphones from Beats',
    description: 'Up to 30% off Wireless Headphones from Beats',
    discount: 'Up to 30% Off',
    category: 'Electronics',
    affiliateUrl: 'https://www.macys.com/shop/electronics/headphones-headsets/wireless-headphones/Brand,Price_discount_range/Beats,20_PERCENT_%20off%20&%20more?id=341118&skimoffer=3277815',
    startDate: '2025-06-27',
    endDate: '2025-06-30',
    featured: true,
    country: ['US']
  },
  {
    id: '1993080',
    store: 'GlassesUSA',
    title: 'Buy One Get One Free (BOGO) for eyeglasses and sunglasses',
    description: 'Buy One Get One Free (BOGO) for eyeglasses and sunglasses + Free shipping to your doorstep.',
    discount: 'BOGO Free',
    code: 'BOGOFREE',
    category: 'Eyewear',
    affiliateUrl: 'https://glassesusa.com?skimoffer=1993080',
    startDate: '2024-07-01',
    endDate: '2025-12-31',
    featured: true,
    country: ['US']
  },
  {
    id: '1968581',
    store: 'GlassesUSA',
    title: '60% Off Frames for eyeglasses & sunglasses',
    description: 'Limited Time! 60% Off Frames for eyeglasses & sunglasses with basic Rx lenses + Free shipping to your doorstep.',
    discount: '60% Off',
    code: 'DESIGNER40',
    category: 'Eyewear',
    affiliateUrl: 'https://www.glassesusa.com?skimoffer=1968581',
    startDate: '2024-07-01',
    endDate: '2025-12-31',
    featured: true,
    country: ['US']
  },
  {
    id: '3277754',
    store: 'Bloomingdale\'s',
    title: 'Save 70% on a Great Selection of Bloomingdale\'s Fine Collection',
    description: 'Save 70% on a Great Selection of Bloomingdale\'s Fine Collection!',
    discount: '70% Off',
    category: 'Jewelry',
    affiliateUrl: 'https://www.bloomingdales.com/shop/sale/diamonds/Price_discount_range/70_PERCENT_%20off%20&%20more?id=1139959&m_sc=aff&ranPublisherID=TnL5HPStwNw&ranLinkID=10007363&ranLinkTypeID=3&pubNAME=Skimlinks.com&skimoffer=3277754',
    startDate: '2025-06-19',
    endDate: '2025-06-23',
    featured: true,
    country: ['US']
  },
  {
    id: '3277764',
    store: 'Hugo Boss',
    title: 'Final Reductions Sale: Up to 60% Off Women\'s Styles',
    description: 'Final Reductions Sale at Hugo Boss: Up to 60% Off Women\'s Styles!',
    discount: 'Up to 60% Off',
    category: 'Fashion',
    affiliateUrl: 'https://www.hugoboss.com/us/sale-women-all-styles/?LSNSUBSITE=LSNSUBSITE&encrypted_id=TnL5HPStwNw&offer_id=1777405&creative_type=3&creative_id=565&skimoffer=3277764',
    startDate: '2025-06-19',
    endDate: '2025-07-03',
    featured: true,
    country: ['US']
  },
  {
    id: '3277737',
    store: 'Calvin Klein',
    title: 'Extra 20% Off $100 Plus',
    description: 'Extra 20% Off $100 Plus!',
    discount: '20% Off',
    category: 'Fashion',
    affiliateUrl: 'https://www.calvinklein.us/en/?cid=aff_Skimlinks.com_US_Sub-Network_bau_na&LSNSUBSITE=LSNSUBSITE&AFFID=Sub-Network&skimoffer=3277737',
    startDate: '2025-06-19',
    endDate: '2025-06-28',
    featured: false,
    country: ['US']
  },
  {
    id: '3277758',
    store: 'Betsey Johnson',
    title: 'Save Up to 60% Off Select Styles',
    description: 'Save Up to 60% Off Select Styles This Weekend with Code HOTDOG. Shop Now Before the Sale Ends!',
    discount: 'Up to 60% Off',
    code: 'HOTDOG',
    category: 'Fashion',
    affiliateUrl: 'https://betseyjohnson.com/collections/sale-clearance?skimoffer=3277758',
    startDate: '2025-06-20',
    endDate: '2025-07-01',
    featured: false,
    country: ['US']
  },
  {
    id: '865384',
    store: 'LIVELY',
    title: '10% OFF storewide',
    description: '10% OFF storewide',
    discount: '10% Off',
    code: 'SAVE10PERCENT',
    category: 'Fashion',
    affiliateUrl: 'https://www.wearlively.com/?skimoffer=865384',
    startDate: '2019-11-19',
    endDate: '2025-12-31',
    featured: false,
    country: ['US']
  },
  {
    id: '1795328',
    store: 'Fracture',
    title: 'Free shipping on storewide',
    description: 'Free shipping on storewide',
    discount: 'Free Shipping',
    category: 'Photography',
    affiliateUrl: 'https://fractureme.com/deals/?skimoffer=1795328',
    startDate: '2022-09-01',
    endDate: '2030-12-31',
    featured: false,
    country: ['US']
  }
];

// Helper functions for working with real offers
export const getFeaturedOffers = () => realOffers.filter(offer => offer.featured);

export const getOffersByCategory = (category: string) => 
  realOffers.filter(offer => offer.category.toLowerCase() === category.toLowerCase());

export const getActiveOffers = () => {
  const now = new Date();
  return realOffers.filter(offer => {
    const endDate = new Date(offer.endDate);
    return endDate > now;
  });
};

export const getOffersByStore = (store: string) => 
  realOffers.filter(offer => offer.store.toLowerCase().includes(store.toLowerCase()));

// Track affiliate clicks for analytics
export const trackAffiliateClick = (offerId: string, store: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'affiliate_click', {
      offer_id: offerId,
      store_name: store,
      value: 1
    });
  }
};