import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fashion Coupons & Deals - Save Up to 70% on Clothing | The Coupon Key',
  description: 'Find the best fashion coupons and deals. Save up to 70% on clothing, shoes, accessories, and beauty products from top fashion brands.',
  keywords: 'fashion coupons, clothing deals, shoe discounts, fashion promo codes, designer deals, apparel coupons, style savings',
  openGraph: {
    title: 'Fashion Coupons & Deals - Save Up to 70% on Clothing',
    description: 'Find verified fashion coupons and exclusive deals on clothing, shoes, and accessories.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fashion Coupons & Deals - Save Up to 70% on Clothing',
    description: 'Find verified fashion coupons and exclusive deals on clothing, shoes, and accessories.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function FashionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
