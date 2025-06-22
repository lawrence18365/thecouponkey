// Real affiliate offers data extracted from Skimlinks feed
// This replaces all placeholder affiliate links with REAL working ones

export interface RealAffiliate {
  id: string;
  store: string;
  title: string;
  description: string;
  discount: string;
  code?: string;
  affiliateUrl: string;
  category: string;
  validFrom: string;
  validUntil: string;
  featured: boolean;
  offerType: 'sale' | 'coupon' | 'cashback';
}

// REAL OFFERS from your Skimlinks account
export const realAffiliateOffers: RealAffiliate[] = [
  {
    id: 'ugreen-3251254',
    store: 'UGREEN',
    title: 'Get an extra 20% off!',
    description: 'Tech accessories, chargers, and USB hubs',
    discount: '20% Off',
    code: 'UGREEN20AFF',
    affiliateUrl: 'https://www.ugreen.com/collections/affiliate?skimoffer=3251254',
    category: 'Electronics',
    validFrom: '1 May 2025',
    validUntil: '31 Dec 2025',
    featured: true,
    offerType: 'coupon'
  },
  {
    id: 'glassesusa-1993080',
    store: 'GlassesUSA',
    title: 'Buy One Get One Free (BOGO)',
    description: 'Eyeglasses and sunglasses + Free shipping',
    discount: 'BOGO',
    code: 'BOGOFREE',
    affiliateUrl: 'https://glassesusa.com?skimoffer=1993080',
    category: 'Fashion',
    validFrom: '1 Jul 2024',
    validUntil: '31 Dec 2025',
    featured: true,
    offerType: 'coupon'
  },
  {
    id: 'glassesusa-1968581',
    store: 'GlassesUSA',
    title: '60% Off Frames',
    description: 'Eyeglasses & sunglasses with basic Rx lenses + Free shipping',
    discount: '60% Off',
    code: 'DESIGNER40',
    affiliateUrl: 'https://www.glassesusa.com?skimoffer=1968581',
    category: 'Fashion',
    validFrom: '1 Jul 2024',
    validUntil: '31 Dec 2025',
    featured: false,
    offerType: 'coupon'
  },
  {
    id: 'fracture-1795328',
    store: 'Fracture',
    title: 'Free shipping storewide',
    description: 'Photo printing and custom photo gifts',
    discount: 'Free Shipping',
    affiliateUrl: 'https://fractureme.com/deals/?skimoffer=1795328',
    category: 'Gifts',
    validFrom: '1 Sep 2022',
    validUntil: '31 Dec 2030',
    featured: false,
    offerType: 'sale'
  },
  {
    id: 'lively-865384',
    store: 'LIVELY',
    title: '10% OFF storewide',
    description: 'Lingerie and intimate apparel',
    discount: '10% Off',
    code: 'SAVE10PERCENT',
    affiliateUrl: 'https://www.wearlively.com/?skimoffer=865384',
    category: 'Fashion',
    validFrom: '19 Nov 2019',
    validUntil: '31 Dec 2025',
    featured: false,
    offerType: 'coupon'
  },
  {
    id: 'bistromd-582371',
    store: 'Bistro MD',
    title: '25% OFF storewide with free shipping',
    description: 'Meal delivery and diet plans',
    discount: '25% Off',
    affiliateUrl: 'https://bistromd.com?skimoffer=582371',
    category: 'Food & Dining',
    validFrom: '16 Nov 2018',
    validUntil: '30 Nov 2099',
    featured: true,
    offerType: 'sale'
  },
  {
    id: 'schutz-3277859',
    store: 'Schutz Shoes',
    title: 'Flash Sale: Extra 15% off',
    description: 'Designer shoes and footwear',
    discount: '15% Off',
    code: 'FLASH15',
    affiliateUrl: 'https://schutz-shoes.com/collections/flash-sale?skimoffer=3277859',
    category: 'Fashion',
    validFrom: '21 Jun 2025',
    validUntil: '25 Jun 2025',
    featured: true,
    offerType: 'coupon'
  },
  {
    id: 'untuckit-3277823',
    store: 'UNTUCKit',
    title: 'Wrinkle-Free Sale',
    description: 'Men\'s shirts and casual wear',
    discount: 'Up to 40% Off',
    affiliateUrl: 'https://www.untuckit.com/?skimoffer=3277823',
    category: 'Fashion',
    validFrom: '21 Jun 2025',
    validUntil: '24 Jun 2025',
    featured: false,
    offerType: 'sale'
  },
  {
    id: 'princetonreview-3277822',
    store: 'The Princeton Review',
    title: 'Get up to $1000 off SAT prep',
    description: 'Test preparation and tutoring services',
    discount: 'Up to $1000 Off',
    affiliateUrl: 'https://www.princetonreview.com/?skimoffer=3277822',
    category: 'Education',
    validFrom: '21 Jun 2025',
    validUntil: '24 Jun 2025',
    featured: false,
    offerType: 'sale'
  },
  {
    id: 'hugoboss-3277718',
    store: 'Hugo Boss',
    title: 'Final Reductions Sale',
    description: 'Men\'s and women\'s luxury fashion',
    discount: 'Up to 60% Off',
    affiliateUrl: 'https://www.hugoboss.com/us/sale-men-all-styles/?LSNSUBSITE=LSNSUBSITE&encrypted_id=TnL5HPStwNw&offer_id=1777405&creative_type=3&creative_id=563&skimoffer=3277718',
    category: 'Fashion',
    validFrom: '19 Jun 2025',
    validUntil: '3 Jul 2025',
    featured: true,
    offerType: 'sale'
  }
];

// Helper functions to work with real affiliate data
export const getFeaturedOffers = () => realAffiliateOffers.filter(offer => offer.featured);

export const getOffersByCategory = (category: string) => 
  realAffiliateOffers.filter(offer => offer.category.toLowerCase() === category.toLowerCase());

export const getOffersByStore = (store: string) => 
  realAffiliateOffers.filter(offer => offer.store.toLowerCase() === store.toLowerCase());

export const getCurrentOffers = () => {
  const now = new Date();
  return realAffiliateOffers.filter(offer => {
    const validUntil = new Date(offer.validUntil);
    return validUntil > now;
  });
};

export const getCouponOffers = () => realAffiliateOffers.filter(offer => offer.code);

export const trackAffiliateClick = (offerId: string, store: string) => {
  // Track with Google Analytics if available
  if (typeof window !== 'undefined' && (window as any).trackAffiliateClick) {
    (window as any).trackAffiliateClick(offerId, store, 'skimlinks');
  }
  
  // You can add additional tracking here
  console.log(`Affiliate click tracked: ${store} - ${offerId}`);
};