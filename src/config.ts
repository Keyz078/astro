/**
 * Site-wide configuration
 */

export const SITE_CONFIG = {
  // Localization
  locale: 'id-ID',
  
  // Site metadata
  siteName: 'Laevetain',
  siteDescription: 'Cloud Engineer notes and experiments around Linux, infrastructure, and self-hosted setups',
  author: 'Keyz',
  
  // URLs
  siteURL: new URL('https://example.com'), // Update with your actual domain
  
  // Social links
  social: {
    github: 'https://github.com/keyz078',
    linkedin: 'https://www.linkedin.com/in/luqinthar-sudarsono/',
  },
  
  // Theme
  theme: {
    lightBg: '#f8f5f2',
    darkBg: '#282c34',
  },
  
  // Pagination
  postsPerPage: 10,
  
  // Featured posts max count
  maxFeaturedPosts: 3,
  
  // Latest notes grid sizes
  latestGridCols: 6, // number of latest posts to show
} as const;

/**
 * Format date using site locale
 */
export function formatDate(date: Date | string): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj.toLocaleDateString(SITE_CONFIG.locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Build absolute URL for a path
 */
export function buildAbsoluteURL(path: string): string {
  return new URL(path, SITE_CONFIG.siteURL).href;
}
