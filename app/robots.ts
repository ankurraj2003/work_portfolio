import { MetadataRoute } from 'next'
import { personal } from '@/data/personal'

export default function robots(): MetadataRoute.Robots {
  // Use the website URL from personal data, falling back to ankurraj.tech
  const baseUrl = personal.website || 'https://ankurraj.tech'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // If you had private routes like a dashboard, you would disallow them here
      // disallow: '/private/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
