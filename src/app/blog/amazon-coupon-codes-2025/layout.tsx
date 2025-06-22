import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Amazon Coupon Codes 2025: 50+ Working Codes & Hidden Deals',
  description: 'Get the latest Amazon coupon codes for 2025. Our verified list includes exclusive promo codes, Prime deals, and secret discounts that save up to 70% on everything.',
  keywords: 'amazon coupon codes, amazon promo codes 2025, amazon discount codes, amazon deals, amazon prime coupons, amazon savings',
  openGraph: {
    title: 'Amazon Coupon Codes 2025: 50+ Working Codes & Hidden Deals',
    description: 'Get the latest Amazon coupon codes for 2025. Our verified list includes exclusive promo codes, Prime deals, and secret discounts.',
    type: 'article',
    publishedTime: '2025-06-15T10:00:00.000Z',
    authors: ['DealFinder Team'],
    section: 'Shopping Guides',
    tags: ['Amazon', 'Coupon Codes', 'Deals', 'Shopping', 'Savings'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amazon Coupon Codes 2025: 50+ Working Codes & Hidden Deals',
    description: 'Get the latest Amazon coupon codes for 2025. Our verified list includes exclusive promo codes and Prime deals.',
  },
  alternates: {
    canonical: '/blog/amazon-coupon-codes-2025'
  }
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
