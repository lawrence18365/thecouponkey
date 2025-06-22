export default function robots() {
  // Use environment variable for domain or fallback for development
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL 
    ? `https://${process.env.VERCEL_URL}` 
    : 'http://localhost:3000'
    
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/.next/',
          '/private/',
          '/_next/',
        ],
      },
      // Allow search engines to crawl our key money-making pages
      {
        userAgent: '*',
        allow: [
          '/blog/',
          '/stores/',
          '/categories/',
          '/coupons/',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
