import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Electronics Coupons & Deals - Save Up to 60% on Tech | DealFinder',
  description: 'Find the best electronics coupons and deals. Save up to 60% on laptops, smartphones, tablets, gaming gear, and tech accessories from top brands.',
  keywords: 'electronics coupons, tech deals, laptop discounts, smartphone coupons, gaming deals, electronics promo codes',
  openGraph: {
    title: 'Electronics Coupons & Deals - Save Up to 60% on Tech | DealFinder',
    description: 'Find the best electronics coupons and deals. Save up to 60% on laptops, smartphones, tablets, and tech accessories.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Electronics Coupons & Deals - Save Up to 60% on Tech | DealFinder',
    description: 'Find the best electronics coupons and deals. Save up to 60% on laptops, smartphones, tablets, and tech accessories.',
  },
};

export default function ElectronicsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
