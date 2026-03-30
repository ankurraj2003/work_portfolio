import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // We use your personal website URL as the base URL for the sitemap
  const baseUrl = 'https://ankurraj.tech'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
