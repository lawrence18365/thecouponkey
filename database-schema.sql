-- Coupon Website Database Schema
-- Run this SQL in your Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Categories table
CREATE TABLE categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(100) NOT NULL UNIQUE,
  slug VARCHAR(100) NOT NULL UNIQUE,
  description TEXT,
  icon VARCHAR(50),
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Stores table
CREATE TABLE stores (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(100) NOT NULL,
  slug VARCHAR(100) NOT NULL UNIQUE,
  logo_url TEXT,
  website_url TEXT NOT NULL,
  category_id UUID REFERENCES categories(id) ON DELETE SET NULL,
  is_featured BOOLEAN DEFAULT false,
  affiliate_network VARCHAR(20) DEFAULT 'manual',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Coupons table
CREATE TABLE coupons (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR(200) NOT NULL,
  code VARCHAR(50),
  type VARCHAR(20) NOT NULL DEFAULT 'code' CHECK (type IN ('code', 'deal', 'cashback')),
  discount_type VARCHAR(20) NOT NULL DEFAULT 'percentage' CHECK (discount_type IN ('percentage', 'fixed', 'free_shipping', 'other')),
  discount_value DECIMAL(10,2),
  affiliate_url TEXT NOT NULL,
  store_id UUID NOT NULL REFERENCES stores(id) ON DELETE CASCADE,
  category_id UUID NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
  description TEXT NOT NULL,
  terms TEXT,
  expires_at TIMESTAMP WITH TIME ZONE,
  is_featured BOOLEAN DEFAULT false,
  is_verified BOOLEAN DEFAULT false,
  click_count INTEGER DEFAULT 0,
  success_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Email subscribers table
CREATE TABLE email_subscribers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) NOT NULL UNIQUE,
  is_active BOOLEAN DEFAULT true,
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  unsubscribed_at TIMESTAMP WITH TIME ZONE
);

-- Coupon clicks tracking table
CREATE TABLE coupon_clicks (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  coupon_id UUID NOT NULL REFERENCES coupons(id) ON DELETE CASCADE,
  ip_address INET,
  user_agent TEXT,
  clicked_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  converted BOOLEAN DEFAULT false
);

-- Indexes for performance
CREATE INDEX idx_stores_category_id ON stores(category_id);
CREATE INDEX idx_stores_slug ON stores(slug);
CREATE INDEX idx_stores_featured ON stores(is_featured);

CREATE INDEX idx_coupons_store_id ON coupons(store_id);
CREATE INDEX idx_coupons_category_id ON coupons(category_id);
CREATE INDEX idx_coupons_featured ON coupons(is_featured);
CREATE INDEX idx_coupons_expires_at ON coupons(expires_at);
CREATE INDEX idx_coupons_type ON coupons(type);

CREATE INDEX idx_categories_slug ON categories(slug);
CREATE INDEX idx_categories_featured ON categories(is_featured);

CREATE INDEX idx_coupon_clicks_coupon_id ON coupon_clicks(coupon_id);
CREATE INDEX idx_coupon_clicks_clicked_at ON coupon_clicks(clicked_at);

CREATE INDEX idx_email_subscribers_email ON email_subscribers(email);
CREATE INDEX idx_email_subscribers_active ON email_subscribers(is_active);

-- RPC function for incrementing click count
CREATE OR REPLACE FUNCTION increment_click_count(coupon_id UUID)
RETURNS INTEGER AS $$
BEGIN
  UPDATE coupons 
  SET click_count = click_count + 1 
  WHERE id = coupon_id;
  
  RETURN (SELECT click_count FROM coupons WHERE id = coupon_id);
END;
$$ LANGUAGE plpgsql;

-- Trigger for updating updated_at timestamps
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_stores_updated_at BEFORE UPDATE ON stores
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_coupons_updated_at BEFORE UPDATE ON coupons
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Insert sample categories (10 major categories for wide net strategy)
INSERT INTO categories (name, slug, description, is_featured) VALUES
('Electronics', 'electronics', 'Tech gadgets, computers, phones and electronics', true),
('Fashion', 'fashion', 'Clothing, shoes, accessories and fashion items', true),
('Home & Garden', 'home-garden', 'Home improvement, furniture, decor and garden supplies', true),
('Travel', 'travel', 'Hotels, flights, car rentals and travel bookings', true),
('Food & Dining', 'food-dining', 'Restaurants, food delivery and grocery services', false),
('Beauty & Health', 'beauty-health', 'Cosmetics, skincare, supplements and health products', false),
('Sports & Outdoors', 'sports-outdoors', 'Athletic gear, outdoor equipment and fitness items', false),
('Software & Apps', 'software-apps', 'Digital software, apps and online services', false),
('Books & Education', 'books-education', 'Books, courses, educational materials and learning platforms', false),
('Entertainment', 'entertainment', 'Streaming services, games, movies and entertainment', false);

-- Sample stores (you can expand this list)
INSERT INTO stores (name, slug, logo_url, website_url, category_id, is_featured, affiliate_network) VALUES
-- Electronics
('Amazon', 'amazon', 'https://logo.clearbit.com/amazon.com', 'https://amazon.com', 
 (SELECT id FROM categories WHERE slug = 'electronics'), true, 'manual'),
('Best Buy', 'best-buy', 'https://logo.clearbit.com/bestbuy.com', 'https://bestbuy.com', 
 (SELECT id FROM categories WHERE slug = 'electronics'), true, 'manual'),
('Newegg', 'newegg', 'https://logo.clearbit.com/newegg.com', 'https://newegg.com', 
 (SELECT id FROM categories WHERE slug = 'electronics'), false, 'manual'),

-- Fashion  
('Nike', 'nike', 'https://logo.clearbit.com/nike.com', 'https://nike.com', 
 (SELECT id FROM categories WHERE slug = 'fashion'), true, 'manual'),
('Adidas', 'adidas', 'https://logo.clearbit.com/adidas.com', 'https://adidas.com', 
 (SELECT id FROM categories WHERE slug = 'fashion'), true, 'manual'),
('H&M', 'hm', 'https://logo.clearbit.com/hm.com', 'https://hm.com', 
 (SELECT id FROM categories WHERE slug = 'fashion'), false, 'manual'),

-- Travel
('Booking.com', 'booking', 'https://logo.clearbit.com/booking.com', 'https://booking.com', 
 (SELECT id FROM categories WHERE slug = 'travel'), true, 'manual'),
('Expedia', 'expedia', 'https://logo.clearbit.com/expedia.com', 'https://expedia.com', 
 (SELECT id FROM categories WHERE slug = 'travel'), true, 'manual'),

-- Home & Garden
('Home Depot', 'home-depot', 'https://logo.clearbit.com/homedepot.com', 'https://homedepot.com', 
 (SELECT id FROM categories WHERE slug = 'home-garden'), true, 'manual'),
('IKEA', 'ikea', 'https://logo.clearbit.com/ikea.com', 'https://ikea.com', 
 (SELECT id FROM categories WHERE slug = 'home-garden'), false, 'manual');

-- Sample coupons (mix of codes and deals)
INSERT INTO coupons (title, code, type, discount_type, discount_value, affiliate_url, store_id, category_id, description, is_featured, is_verified, expires_at) VALUES
('20% Off Electronics', 'TECH20', 'code', 'percentage', 20, 'https://amazon.com?tag=yourcouponsite', 
 (SELECT id FROM stores WHERE slug = 'amazon'), (SELECT id FROM categories WHERE slug = 'electronics'), 
 'Save 20% on all electronics with this exclusive code', true, true, '2025-12-31 23:59:59'),

('Free Shipping on Orders $35+', NULL, 'deal', 'free_shipping', NULL, 'https://bestbuy.com?tag=yourcouponsite', 
 (SELECT id FROM stores WHERE slug = 'best-buy'), (SELECT id FROM categories WHERE slug = 'electronics'), 
 'Free standard shipping on all orders over $35', true, true, NULL),

('Up to 50% Off Nike Shoes', NULL, 'deal', 'percentage', 50, 'https://nike.com?tag=yourcouponsite', 
 (SELECT id FROM stores WHERE slug = 'nike'), (SELECT id FROM categories WHERE slug = 'fashion'), 
 'Huge savings on selected Nike footwear styles', true, true, '2025-07-31 23:59:59'),

('Student Discount - 10% Off', 'STUDENT10', 'code', 'percentage', 10, 'https://adidas.com?tag=yourcouponsite', 
 (SELECT id FROM stores WHERE slug = 'adidas'), (SELECT id FROM categories WHERE slug = 'fashion'), 
 'Exclusive student discount on all Adidas products', false, true, NULL),

('Book Hotels with 15% Off', 'HOTEL15', 'code', 'percentage', 15, 'https://booking.com?tag=yourcouponsite', 
 (SELECT id FROM stores WHERE slug = 'booking'), (SELECT id FROM categories WHERE slug = 'travel'), 
 'Save 15% on hotel bookings worldwide', true, true, '2025-09-30 23:59:59');

-- Enable Row Level Security (optional - for future admin features)
-- ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE stores ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE coupons ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE email_subscribers ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE coupon_clicks ENABLE ROW LEVEL SECURITY;
