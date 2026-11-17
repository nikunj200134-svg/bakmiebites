export interface NutritionFact {
  label: string;
  per100g: string;
  perServing: string;
}

export interface ProductItem {
  slug: string;
  id: string;
  name: string;
  flavour: string;
  tagline: string;
  tag: string;
  showPrice?: boolean;
  price?: string;
  numericPrice?: number;
  bgColor: string;
  accentTint: string;
  textColor: string;
  image: string;
  images: string[];
  badges: string[];
  highlights: string[];
  description: string;
  ingredients: string;
  nutrition: {
    servingSize: string;
    items: NutritionFact[];
  };
  tastesFeelsDoes: {
    tastesTitle: string;
    tastesDesc: string;
    feelsTitle: string;
    feelsDesc: string;
    doesTitle: string;
    doesDesc: string;
  };
  related: string[];
}

export const PRODUCTS: ProductItem[] = [
  {
    slug: 'peri-peri',
    id: 'peri-peri',
    name: 'BAKMIEBITES POPCORN',
    flavour: 'PERI PERI CRUNCH',
    tagline: 'The fiery, plant-powered snack your pantry is missing.',
    tag: 'NEW',
    showPrice: false,
    price: '₹240',
    numericPrice: 240,
    bgColor: 'var(--orange-red)',
    accentTint: '#FFF4EA',
    textColor: 'var(--orange-red)',
    image: '/images/products/pexels-sarah-rosado-1025745902-39816189.webp',
    images: [
      '/images/products/pexels-sarah-rosado-1025745902-39816189.webp',
      '/images/products/pexels-helloaesthe-8652476.webp',
      '/images/products/pexels-kontraa-35854766.webp',
      '/images/hero/pexels-electra-studio-32883186-30925503.webp',
    ],
    badges: ['NATURAL PROTEIN', 'HIGH FIBRE', 'NO PALM OIL'],
    highlights: ['Natural Protein', 'High Fibre', 'No Palm Oil'],
    description:
      'Popped hot in pure refined sunflower oil and generously tossed in crushed African bird’s eye chilli, roasted garlic, paprika, and garden herbs. High in whole-grain fibre and natural plant protein.',
    ingredients:
      'Corn Kernels (72%), Refined Sunflower Oil (18%), Peri Peri Seasoning [Chilli Powder, Garlic Powder, Onion Powder, Black Pepper, Oregano, Citric Acid (E330), Salt]. Contains NO Palm Oil, NO Artificial Colours, NO Preservatives. (TODO: Verify exact back-of-pack label)',
    nutrition: {
      servingSize: '30g (About 1.5 cups)',
      items: [
        { label: 'Energy (Calories)', per100g: '490 kcal', perServing: '147 kcal' },
        { label: 'Protein', per100g: '8.4 g', perServing: '2.5 g' },
        { label: 'Dietary Fibre', per100g: '9.2 g', perServing: '2.8 g' },
        { label: 'Total Carbohydrates', per100g: '62.0 g', perServing: '18.6 g' },
        { label: 'Total Fat (Sunflower Oil)', per100g: '23.0 g', perServing: '6.9 g' },
        { label: 'Saturated Fat', per100g: '2.8 g', perServing: '0.8 g' },
        { label: 'Trans Fat', per100g: '0.0 g', perServing: '0.0 g' },
        { label: 'Cholesterol', per100g: '0.0 mg', perServing: '0.0 mg' },
        { label: 'Sodium', per100g: '520 mg', perServing: '156 mg' },
      ],
    },
    tastesFeelsDoes: {
      tastesTitle: 'TASTES BOLD & FIERY',
      tastesDesc: 'Spicy African bird’s eye chillies and tangy herbs delivering an authentic masala crunch.',
      feelsTitle: 'FEELS LIGHT & CRISPY',
      feelsDesc: 'Popped in refined sunflower oil with zero trans fats so you stay energized, never heavy.',
      doesTitle: 'DOES GOOD FOR YOU',
      doesDesc: '100% whole-grain corn rich in dietary fibre and natural plant-powered fuel.',
    },
    related: ['tangy-tomato', 'cheddar-cheese', 'variety-trio'],
  },
  {
    slug: 'tangy-tomato',
    id: 'tangy-tomato',
    name: 'BAKMIEBITES POPCORN',
    flavour: 'TANGY TOMATO',
    tagline: 'Sun-ripened tomatoes meets zesty Indian chaat spices.',
    tag: 'POPULAR',
    showPrice: false,
    price: '₹240',
    numericPrice: 240,
    bgColor: 'var(--lilac)',
    accentTint: '#F7F2FA',
    textColor: 'var(--orange-red)',
    image: '/images/products/pexels-75310099-9082450.webp',
    images: [
      '/images/products/pexels-75310099-9082450.webp',
      '/images/products/pexels-irina-2159736725-39286240.webp',
      '/images/products/pexels-irina-2159736725-39286241.webp',
      '/images/hero/pexels-tima-miroshnichenko-7991162.webp',
    ],
    badges: ['NATURAL PROTEIN', 'HIGH FIBRE', 'NO PALM OIL'],
    highlights: ['Natural Protein', 'High Fibre', 'No Palm Oil'],
    description:
      'Juicy, sun-drenched tomatoes blended with tangy chaat spices and Himalayan rock salt. A nostalgic, lip-smacking crunch that is 100% vegan and cholesterol free.',
    ingredients:
      'Corn Kernels (73%), Refined Sunflower Oil (18%), Tangy Tomato Seasoning [Tomato Powder, Sugar, Black Salt, Cumin Powder, Dry Mango (Amchur), Citric Acid (E330), Natural Spices]. Contains NO Palm Oil, NO Artificial Colours. (TODO: Verify exact back-of-pack label)',
    nutrition: {
      servingSize: '30g (About 1.5 cups)',
      items: [
        { label: 'Energy (Calories)', per100g: '485 kcal', perServing: '145 kcal' },
        { label: 'Protein', per100g: '8.1 g', perServing: '2.4 g' },
        { label: 'Dietary Fibre', per100g: '8.9 g', perServing: '2.7 g' },
        { label: 'Total Carbohydrates', per100g: '63.5 g', perServing: '19.0 g' },
        { label: 'Total Fat (Sunflower Oil)', per100g: '22.5 g', perServing: '6.7 g' },
        { label: 'Saturated Fat', per100g: '2.6 g', perServing: '0.8 g' },
        { label: 'Trans Fat', per100g: '0.0 g', perServing: '0.0 g' },
        { label: 'Cholesterol', per100g: '0.0 mg', perServing: '0.0 mg' },
        { label: 'Sodium', per100g: '490 mg', perServing: '147 mg' },
      ],
    },
    tastesFeelsDoes: {
      tastesTitle: 'TASTES TANGY & SWEET',
      tastesDesc: 'Sun-dried tomatoes paired with desi amchur and chaat seasonings for an addictive tang.',
      feelsTitle: 'FEELS REFRESHING',
      feelsDesc: 'Lightly seasoned and popped without palm oil for a clean mouthfeel and crisp snap.',
      doesTitle: 'DOES GOOD FOR DIGESTION',
      doesDesc: 'High fibre whole grains that support healthy gut bacteria and sustained satiety.',
    },
    related: ['peri-peri', 'cheddar-cheese', 'variety-trio'],
  },
  {
    slug: 'cheddar-cheese',
    id: 'cheddar-cheese',
    name: 'BAKMIEBITES POPCORN',
    flavour: 'CHEDDAR CHEESE',
    tagline: 'Golden melted cheddar coating every single fluffy kernel.',
    tag: 'BEST SELLER',
    showPrice: false,
    price: '₹240',
    numericPrice: 240,
    bgColor: 'var(--green)',
    accentTint: '#F2F8ED',
    textColor: 'var(--yellow)',
    image: '/images/products/pexels-dan-danu-2163473396-39801911.webp',
    images: [
      '/images/products/pexels-dan-danu-2163473396-39801911.webp',
      '/images/products/pexels-elsa-olofsson-3357043-5331317.webp',
      '/images/products/pexels-keegan-evans-10986-57043.webp',
      '/images/hero/pexels-kubranurcakiroglu-39215867.webp',
    ],
    badges: ['NATURAL PROTEIN', 'HIGH FIBRE', 'NO PALM OIL'],
    highlights: ['Natural Protein', 'High Fibre', 'No Palm Oil'],
    description:
      'Golden melted cheddar seasoning gently dusted over extra-large butterfly popcorn kernels. Velvety, savoury, and intensely satisfying for late-night movie sessions.',
    ingredients:
      'Corn Kernels (71%), Refined Sunflower Oil (18%), Cheddar Cheese Seasoning [Milk Solids, Cheese Powder, Maltodextrin, Salt, Onion Powder, Natural Flavouring Substance, Lactic Acid (E270)]. Contains Milk. (TODO: Verify exact back-of-pack label)',
    nutrition: {
      servingSize: '30g (About 1.5 cups)',
      items: [
        { label: 'Energy (Calories)', per100g: '505 kcal', perServing: '152 kcal' },
        { label: 'Protein', per100g: '9.0 g', perServing: '2.7 g' },
        { label: 'Dietary Fibre', per100g: '8.5 g', perServing: '2.5 g' },
        { label: 'Total Carbohydrates', per100g: '60.0 g', perServing: '18.0 g' },
        { label: 'Total Fat (Sunflower Oil)', per100g: '25.0 g', perServing: '7.5 g' },
        { label: 'Saturated Fat', per100g: '3.4 g', perServing: '1.0 g' },
        { label: 'Trans Fat', per100g: '0.0 g', perServing: '0.0 g' },
        { label: 'Cholesterol', per100g: '2.0 mg', perServing: '0.6 mg' },
        { label: 'Sodium', per100g: '540 mg', perServing: '162 mg' },
      ],
    },
    tastesFeelsDoes: {
      tastesTitle: 'TASTES RICH & SAVOURY',
      tastesDesc: 'Deep aged cheddar warmth with a buttery aroma that fills the room upon opening.',
      feelsTitle: 'FEELS MELT-IN-MOUTH',
      feelsDesc: 'Fluffy large kernels that dissolve cleanly without annoying unpopped hulls.',
      doesTitle: 'DOES DELIVER REAL ENERGY',
      doesDesc: 'Packed with whole-grain sustenance and satisfying protein to crush afternoon hunger.',
    },
    related: ['peri-peri', 'tangy-tomato', 'variety-trio'],
  },
  {
    slug: 'variety-trio',
    id: 'variety-trio',
    name: 'BAKMIEBITES POPCORN',
    flavour: 'VARIETY 3-PACK',
    tagline: 'All 3 signature flavours in one supreme crunch box.',
    tag: 'TRIO PACK',
    showPrice: false,
    price: '₹349',
    numericPrice: 349,
    bgColor: 'var(--sky)',
    accentTint: '#EEF9FC',
    textColor: 'var(--teal)',
    image: '/images/products/pexels-john-booth-70201160-8610548.webp',
    images: [
      '/images/products/pexels-john-booth-70201160-8610548.webp',
      '/images/products/pexels-sarah-rosado-1025745902-39816189.webp',
      '/images/products/pexels-75310099-9082450.webp',
      '/images/products/pexels-dan-danu-2163473396-39801911.webp',
    ],
    badges: ['NATURAL PROTEIN', 'HIGH FIBRE', 'NO PALM OIL'],
    highlights: ['Natural Protein', 'High Fibre', 'No Palm Oil'],
    description:
      'Can’t pick just one? The Ultimate BakmieBites Sampler includes Peri Peri, Tangy Tomato, and Cheddar Cheese. Handcrafted in small batches with zero palm oil.',
    ingredients:
      'Contains 1 Pouch of Peri Peri Popcorn, 1 Pouch of Tangy Tomato Popcorn, and 1 Pouch of Cheddar Cheese Popcorn. See individual packs for specific allergen details. (TODO: Verify exact back-of-pack label)',
    nutrition: {
      servingSize: '30g (Assorted)',
      items: [
        { label: 'Average Energy', per100g: '493 kcal', perServing: '148 kcal' },
        { label: 'Average Protein', per100g: '8.5 g', perServing: '2.5 g' },
        { label: 'Average Fibre', per100g: '8.9 g', perServing: '2.7 g' },
        { label: 'Average Total Fat', per100g: '23.5 g', perServing: '7.0 g' },
        { label: 'Trans Fat', per100g: '0.0 g', perServing: '0.0 g' },
        { label: 'Cholesterol', per100g: '< 1 mg', perServing: '< 0.3 mg' },
      ],
    },
    tastesFeelsDoes: {
      tastesTitle: 'EVERY CRAVING COVERED',
      tastesDesc: 'From fiery peri-peri to zesty tomato and decadent cheddar cheese.',
      feelsTitle: 'ALWAYS FRESH & CRISP',
      feelsDesc: 'Individually nitro-flushed pouches to lock in maximum crunchiness.',
      doesTitle: 'PERFECT FOR SHARING',
      doesDesc: 'Great for gifting, weekend hangouts, road trips, and movie nights with friends.',
    },
    related: ['peri-peri', 'tangy-tomato', 'cheddar-cheese'],
  },
];

export function getProductBySlug(slug: string): ProductItem | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getAllProducts(): ProductItem[] {
  return PRODUCTS;
}
