'use client';

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { usePathname } from 'next/navigation';

// Interface for a single breadcrumb item
interface BreadcrumbItem {
  label: string;
  href: string;
}

// Props for the Breadcrumbs component
interface BreadcrumbsProps {
  customItems?: BreadcrumbItem[];
  showHome?: boolean;
}

/**
 * Renders a breadcrumb navigation menu.
 * It can automatically generate breadcrumbs from the URL path or display a custom set of items.
 * It also generates JSON-LD structured data for SEO.
 */
export default function Breadcrumbs({ customItems, showHome = true }: BreadcrumbsProps) {
  const pathname = usePathname();

  // Generates breadcrumb items based on the current path or custom items provided
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    if (customItems) {
      return customItems;
    }

    const pathSegments = pathname.split('/').filter(segment => segment !== '');
    const breadcrumbs: BreadcrumbItem[] = [];

    if (showHome) {
      breadcrumbs.push({ label: 'Home', href: '/' });
    }

    let currentPath = '';
    pathSegments.forEach((segment) => {
      currentPath += `/${segment}`;

      // Format segment for display by capitalizing words
      let label = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      // Handle special URL segments with specific labels
      switch (segment) {
        case 'stores':
          label = 'Stores';
          break;
        case 'categories':
          label = 'Categories';
          break;
        case 'deals':
          label = 'Deals';
          break;
        case 'coupons':
          label = 'Coupons';
          break;
        case 'browser-extension':
          label = 'Browser Extension';
          break;
        case 'black-friday-deals':
          label = 'Black Friday Deals';
          break;
        case 'cyber-monday-coupons':
          label = 'Cyber Monday Coupons';
          break;
        case 'free-shipping-codes':
          label = 'Free Shipping Codes';
          break;
        case 'student-discounts':
          label = 'Student Discounts';
          break;
        case 'military-discounts':
          label = 'Military Discounts';
          break;
      }

      breadcrumbs.push({ label, href: currentPath });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  // Do not render if there's only one item (e.g., just "Home")
  if (breadcrumbs.length <= 1) {
    return null;
  }

  // Generate JSON-LD structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `https://thecouponkey.com${item.href}`
    })),
  };

  return (
    <>
      {/* Structured Data for Breadcrumbs - hidden from user, for search engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      {/* Visual Breadcrumbs */}
      <nav
        aria-label="Breadcrumb"
        className="bg-gray-50 border-b border-gray-200 py-3"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 text-sm">
            {breadcrumbs.map((item, index) => {
              const isLast = index === breadcrumbs.length - 1;

              return (
                <li key={item.href} className="flex items-center">
                  {index > 0 && (
                    <ChevronRight className="w-4 h-4 text-gray-400 mr-2" />
                  )}

                  {isLast ? (
                    <span className="text-gray-900 font-medium flex items-center">
                      {item.label === 'Home' && showHome ? (
                        <Home className="w-4 h-4" />
                      ) : (
                        item.label
                      )}
                    </span>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-gray-500 hover:text-gray-700 transition-colors duration-200 flex items-center"
                    >
                      {item.label === 'Home' && showHome ? (
                        <Home className="w-4 h-4" />
                      ) : (
                        item.label
                      )}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
    </>
  );
}

// Hook for generating breadcrumb items in pages
export function useBreadcrumbs(customItems?: BreadcrumbItem[]): BreadcrumbItem[] {
  const pathname = usePathname();

  if (customItems) {
    return customItems;
  }

  const pathSegments = pathname.split('/').filter(segment => segment !== '');
  const breadcrumbs: BreadcrumbItem[] = [{ label: 'Home', href: '/' }];

  let currentPath = '';
  pathSegments.forEach(segment => {
    currentPath += `/${segment}`;
    const label = segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    breadcrumbs.push({ label, href: currentPath });
  });

  return breadcrumbs;
}
