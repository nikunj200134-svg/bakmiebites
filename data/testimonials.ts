export interface TestimonialItem {
  id: string;
  name: string;
  flavour: string;
  slug: string;
  quote: string;
  stars: number;
  thumbnail: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    name: 'AARAV M.',
    flavour: 'PERI PERI CRUNCH',
    slug: 'peri-peri',
    quote:
      'Genuinely the best peri-peri popcorn I have had. You can taste the real roasted chilli and herbs, and zero greasy residue on your fingers. Absolute staple for my late work sessions!',
    stars: 5,
    thumbnail: '/images/products/pexels-sarah-rosado-1025745902-39816189.webp',
  },
  {
    id: '2',
    name: 'PRIYA S.',
    flavour: 'TANGY TOMATO',
    slug: 'tangy-tomato',
    quote:
      'The tomato flavour hits that perfect nostalgic Indian chaat balance — tangy, sweet, and perfectly savoury. Love that it is made with pure sunflower oil instead of palm oil.',
    stars: 5,
    thumbnail: '/images/products/pexels-75310099-9082450.webp',
  },
  {
    id: '3',
    name: 'ROHIT K.',
    flavour: 'CHEDDAR CHEESE',
    slug: 'cheddar-cheese',
    quote:
      'Super fluffy butterfly kernels with generous cheddar coating on every single piece. The crunch is top-tier and the ingredients list is completely clean.',
    stars: 5,
    thumbnail: '/images/products/pexels-dan-danu-2163473396-39801911.webp',
  },
  {
    id: '4',
    name: 'ANANYA D.',
    flavour: 'VARIETY 3-PACK',
    slug: 'variety-trio',
    quote:
      'Ordered the sampler for our family weekend movie marathon and all three bags vanished before halftime. Incredible crunch, bold seasoning, and 100% whole grain guilt-free snacking.',
    stars: 5,
    thumbnail: '/images/products/pexels-john-booth-70201160-8610548.webp',
  },
];
