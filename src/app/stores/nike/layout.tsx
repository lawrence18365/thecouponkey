import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nike Coupons & Promo Codes - Save Up to 40% | The Coupon Key',
  description: 'Find the latest Nike coupons and promo codes. Save up to 40% on shoes, apparel, and athletic gear with verified deals and exclusive offers.',
  keywords: 'Nike coupons, Nike promo codes, Nike deals, athletic wear coupons, sneaker discounts, Nike shoes deals, sportswear coupons',
  openGraph: {
    title: 'Nike Coupons & Promo Codes - Save Up to 40%',
    description: 'Find verified Nike coupons and exclusive deals on shoes, apparel, and athletic gear.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nike Coupons & Promo Codes - Save Up to 40%',
    description: 'Find verified Nike coupons and exclusive deals on shoes, apparel, and athletic gear.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function NikeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
