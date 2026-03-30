import { MetadataRoute } from 'next'
import { personal } from '@/data/personal'

export default function sitemap(): MetadataRoute.Sitemap {
  // We use your personal website URL as the base URL for the sitemap
  const baseUrl = personal.website || 'https://ankurraj.tech'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // If you add multiple pages (e.g. /blog, /about), you can add them below
    // {
    //   url: `${baseUrl}/blog`,
    //   lastModified: new Date(),
    //   changeFrequency: 'weekly',
    //   priority: 0.8,
    // },
  ]
}
