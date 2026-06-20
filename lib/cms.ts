// CMS Abstraction Layer
// This file serves as the CMS-ready architecture. It currently uses static fallback data 
// to ensure 100% visual fidelity while the Supabase tables are empty or unconfigured.
// Swap these with direct Supabase calls once the CMS is seeded.

export interface Service {
  slug: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  content: string;
}

export interface PodcastEpisode {
  id: string;
  title: string;
  description: string;
  date: string;
  duration: string;
  audioUrl: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  content: string;
}

// Fallback Data to preserve identical Stitch Export fidelity

const fallbackServices: Service[] = [
  {
    slug: 'addiction-recovery',
    title: 'Addiction Recovery Support',
    description: 'Structured, evidence-based approaches integrated with holistic practices for sustainable healing.',
    price: 'From $150',
    duration: '60 min',
    content: '' // This would contain the long-form HTML/Markdown for the service page
  },
  {
    slug: 'ayurveda',
    title: 'Ayurvedic Healing',
    description: 'Ancient wisdom applied to modern imbalances to restore your doshic harmony.',
    price: 'From $120',
    duration: '90 min',
    content: ''
  },
  // Add other services as needed...
];

export async function getServices(): Promise<Service[]> {
  // const supabase = await createClient();
  // const { data } = await supabase.from('services').select('*');
  // return data || fallbackServices;
  return fallbackServices;
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  return fallbackServices.find(s => s.slug === slug) || null;
}

export async function getPodcastEpisodes(): Promise<PodcastEpisode[]> {
  return [
    {
      id: 'ep-01',
      title: 'The Neuroscience of Surrender',
      description: 'We explore how letting go physically rewires the brain for deeper resilience.',
      date: 'Oct 12, 2024',
      duration: '45:20',
      audioUrl: '#'
    }
  ];
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  return [];
}
