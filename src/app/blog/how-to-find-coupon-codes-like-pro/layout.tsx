import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Find Coupon Codes Like a Pro: 12 Expert Methods That Actually Work',
  description: 'Learn the insider secrets to finding coupon codes that actually work. Our proven methods help you discover hidden discounts and exclusive promo codes for any store.',
  keywords: 'how to find coupon codes, where to find promo codes, coupon code finder, discount codes, how to get coupons, coupon hunting tips',
  openGraph: {
    title: 'How to Find Coupon Codes Like a Pro: 12 Expert Methods',
    description: 'Learn the insider secrets to finding coupon codes that actually work. Our proven methods help you discover hidden discounts.',
    type: 'article',
    publishedTime: '2025-06-15T11:00:00.000Z',
    authors: ['DealFinder Team'],
    section: 'How-To Guides',
    tags: ['Coupon Codes', 'Savings Tips', 'Shopping', 'Deals', 'Discounts'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Find Coupon Codes Like a Pro: 12 Expert Methods',
    description: 'Learn the insider secrets to finding coupon codes that actually work. Proven methods for any store.',
  },
  alternates: {
    canonical: '/blog/how-to-find-coupon-codes-like-pro'
  }
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
