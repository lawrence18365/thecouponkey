// Type definitions for our coupon website SaaS

// Database table names for consistency
export const Tables = {
  STORES: 'stores',
  CATEGORIES: 'categories', 
  COUPONS: 'coupons',
  EMAIL_SUBSCRIBERS: 'email_subscribers',
  COUPON_CLICKS: 'coupon_clicks'
} as const;

export type Store = {
  id: string;
  name: string;
  slug: string;
  logo_url: string;
  website_url: string;
  category_id: string;
  is_featured: boolean;
  affiliate_network?: string; // 'manual' | 'shareasale' | 'cj' | 'impact'
  created_at: string;
  updated_at: string;
};

export type Category = {
  id: string;
  name: string;
  slug: string;
  description?: string;
  icon?: string;
  is_featured: boolean;
  created_at: string;
};

export type Coupon = {
  id: string;
  title: string;
  code?: string; // Some deals don't have codes
  type: 'code' | 'deal' | 'cashback';
  discount_type: 'percentage' | 'fixed' | 'free_shipping' | 'other';
  discount_value?: number;
  affiliate_url: string;
  store_id: string;
  category_id: string;
  description: string;
  terms?: string;
  expires_at?: string;
  is_featured: boolean;
  is_verified: boolean;
  click_count: number;
  success_count: number;
  created_at: string;
  updated_at: string;
};

export type EmailSubscriber = {
  id: string;
  email: string;
  is_active: boolean;
  subscribed_at: string;
  unsubscribed_at?: string;
};

export type CouponClick = {
  id: string;
  coupon_id: string;
  ip_address?: string;
  user_agent?: string;
  clicked_at: string;
  converted: boolean;
};

// API Response types
export type CouponWithStore = Coupon & {
  store: Store;
  category: Category;
};

export type StoreWithCoupons = Store & {
  coupons: Coupon[];
  category: Category;
  coupon_count: number;
};

