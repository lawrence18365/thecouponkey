import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Target Coupons & Weekly Deals 2025: Save Up to 70% Every Week',
  description: 'Get the latest Target coupons, weekly ad deals, and Circle offers. Our expert guide reveals how to stack discounts and save maximum money at Target.',
  keywords: 'target coupons, target deals, target weekly ad, target circle offers, target promo codes, target discounts, target app coupons',
  openGraph: {
    title: 'Target Coupons & Weekly Deals 2025: Save Up to 70%',
    description: 'Get the latest Target coupons, weekly ad deals, and Circle offers. Expert guide to stacking discounts at Target.',
    type: 'article',
    publishedTime: '2025-06-15T12:00:00.000Z',
    authors: ['DealFinder Team'],
    section: 'Store Guides',
    tags: ['Target', 'Coupons', 'Weekly Deals', 'Target Circle', 'Shopping'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Target Coupons & Weekly Deals 2025: Save Up to 70%',
    description: 'Get the latest Target coupons and weekly deals. Expert guide to maximum savings.',
  },
  alternates: {
    canonical: '/blog/target-coupons-weekly-deals-2025'
  }
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
