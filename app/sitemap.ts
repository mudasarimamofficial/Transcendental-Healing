import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://transcendentalhealing.com'

  const staticRoutes = [
    '',
    '/contact',
    '/booking',
    '/legal',
    '/podcast',
    '/continuing-education',
    '/blog',
    '/services/yoga',
    '/services/ayurveda',
    '/services/tarot',
    '/services/reflexology',
    '/services/breathwork',
    '/services/astrology',
    '/services/addiction-recovery',
    '/sponsors',
    '/testimonials'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return [...staticRoutes]
}
