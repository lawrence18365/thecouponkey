import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Coupon Key - Best Coupons & Deals from Top Stores",
  description: "Unlock savings with verified coupons and exclusive deals from your favorite retailers. Find discounts on electronics, fashion, travel, and more.",
  keywords: "coupons, deals, discounts, promo codes, savings, shopping, browser extensions, automatic coupon finder, cash back, The Coupon Key",
  authors: [{ name: "The Coupon Key" }],
  metadataBase: new URL('https://thecouponkey.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "The Coupon Key - Best Coupons & Deals from Top Stores",
    description: "Unlock savings with verified coupons and exclusive deals from your favorite retailers.",
    type: "website",
    locale: "en_US",
    url: 'https://thecouponkey.com',
    siteName: 'The Coupon Key',
  },
  twitter: {
    card: "summary_large_image",
    title: "The Coupon Key - Best Coupons & Deals from Top Stores",
    description: "Unlock savings with verified coupons and exclusive deals from your favorite retailers.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data - Critical for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://thecouponkey.com/#organization",
                  "name": "The Coupon Key",
                  "url": "https://thecouponkey.com",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://thecouponkey.com/logo.png",
                    "width": 512,
                    "height": 512
                  },
                  "description": "The ultimate destination for verified coupons, exclusive deals, and money-saving offers from top retailers worldwide.",
                  "foundingDate": "2024",
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "contactType": "customer service",
                    "url": "https://thecouponkey.com/contact"
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://thecouponkey.com/#website",
                  "url": "https://thecouponkey.com",
                  "name": "The Coupon Key",
                  "description": "Find verified coupons and exclusive deals from top retailers",
                  "publisher": {
                    "@id": "https://thecouponkey.com/#organization"
                  },
                  "potentialAction": [
                    {
                      "@type": "SearchAction",
                      "target": {
                        "@type": "EntryPoint",
                        "urlTemplate": "https://thecouponkey.com/search?q={search_term_string}"
                      },
                      "query-input": "required name=search_term_string"
                    }
                  ]
                }
              ]
            })
          }}
        />
        
        {/* Google Analytics */}
        {/* Google Analytics - Only load if GA_MEASUREMENT_ID is set */}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                  page_title: document.title,
                  page_location: window.location.href,
                });
            
            // Track affiliate link clicks for revenue optimization
            function trackAffiliateClick(affiliate_name, store_name, commission_type) {
              gtag('event', 'affiliate_click', {
                affiliate_name: affiliate_name,
                store_name: store_name,
                commission_type: commission_type,
                value: 1
              });
            }
            
            // Track email signups for lead generation
            function trackEmailSignup(source) {
              gtag('event', 'email_signup', {
                source: source,
                value: 1
              });
            }
            
            // Track extension installs (our highest value conversions)
            function trackExtensionInstall(extension_name) {
              gtag('event', 'extension_install', {
                extension_name: extension_name,
                value: 10 // High value event for revenue tracking
              });
            }
            
                // Make tracking functions globally available
                window.trackAffiliateClick = trackAffiliateClick;
                window.trackEmailSignup = trackEmailSignup;
                window.trackExtensionInstall = trackExtensionInstall;
              `}
            </Script>
          </>
        )}
        
        {/* Affiliate Disclosure - Required for legal compliance */}
        <meta name="disclosure" content="This website contains affiliate links. We may earn a commission when you click on certain links or make purchases through our site." />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased`}
      >
        <Header />
        <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
          {children}
        </main>
        <Footer />
        
        {/* Skimlinks Monetization Script */}
        <Script
          src="https://s.skimresources.com/js/287236X1773803.skimlinks.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
