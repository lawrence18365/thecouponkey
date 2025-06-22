import type { Metadata } from "next";

export const metadata: Metadata = {
  title: '5 Best Browser Extensions That Save Money Automatically in 2025',
  description: 'Discover the top browser extensions that automatically find coupons, compare prices, and save you money while shopping online. WikiBuy, Honey, Rakuten & more.',
  keywords: 'automatic coupon finder, browser extensions save money, wikibuy, honey extension, automatic coupon codes, price comparison extensions',
  openGraph: {
    title: '5 Best Browser Extensions That Save Money Automatically in 2025',
    description: 'Discover the top browser extensions that automatically find coupons, compare prices, and save you money while shopping online.',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '5 Best Browser Extensions That Save Money Automatically in 2025',
    description: 'Discover the top browser extensions that automatically find coupons, compare prices, and save you money while shopping online.',
  },
};

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
