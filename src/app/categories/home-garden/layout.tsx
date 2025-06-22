import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home & Garden Coupons & Deals - Save Up to 60% | The Coupon Key',
  description: 'Find the best home & garden coupons and deals. Save up to 60% on furniture, decor, appliances, and garden essentials from top retailers.',
  keywords: 'home and garden coupons, furniture deals, home decor discounts, appliance coupons, garden deals, home improvement coupons',
  openGraph: {
    title: 'Home & Garden Coupons & Deals - Save Up to 60%',
    description: 'Find verified home & garden coupons and exclusive deals on furniture, decor, and appliances.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home & Garden Coupons & Deals - Save Up to 60%',
    description: 'Find verified home & garden coupons and exclusive deals on furniture, decor, and appliances.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function HomeGardenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
