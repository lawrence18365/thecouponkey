import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Amazon Coupons & Promo Codes - Save Up to 70% | DealFinder',
  description: 'Find the latest Amazon coupons and promo codes. Save up to 70% with verified deals, exclusive discounts, and free shipping offers on electronics, fashion, home goods and more.',
  keywords: 'Amazon coupons, Amazon promo codes, Amazon deals, Amazon discounts, Amazon free shipping, Amazon savings',
  openGraph: {
    title: 'Amazon Coupons & Promo Codes - Save Up to 70% | DealFinder',
    description: 'Find the latest Amazon coupons and promo codes. Save up to 70% with verified deals and exclusive discounts.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amazon Coupons & Promo Codes - Save Up to 70% | DealFinder',
    description: 'Find the latest Amazon coupons and promo codes. Save up to 70% with verified deals and exclusive discounts.',
  },
};

export default function AmazonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
