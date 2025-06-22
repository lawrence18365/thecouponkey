import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Buy Coupons & Promo Codes - Save Up to 50% | The Coupon Key',
  description: 'Find the latest Best Buy coupons and promo codes. Save up to 50% on electronics, gaming gear, TVs, laptops, and tech accessories with verified deals.',
  keywords: 'Best Buy coupons, Best Buy promo codes, Best Buy deals, electronics coupons, gaming deals, laptop discounts, TV sales, tech coupons',
  openGraph: {
    title: 'Best Buy Coupons & Promo Codes - Save Up to 50%',
    description: 'Find verified Best Buy coupons and exclusive deals on electronics, gaming, and tech.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Buy Coupons & Promo Codes - Save Up to 50%',
    description: 'Find verified Best Buy coupons and exclusive deals on electronics, gaming, and tech.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function BestBuyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
