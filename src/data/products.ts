import type { Product } from '../types/Product'

export const products: Product[] = [
  {
    id: '1',
    name: 'Sport Rim Kerze - Carbon Black',
    description: 'Hochwertige Kerze im Design einer Sportfelge mit Carbon-Finish. Perfekt für Auto-Enthusiasten.',
    price: 24.99,
    originalPrice: 34.99,
    image: '/api/placeholder/300/200',
    category: 'sport',
    inStock: true,
    rating: 4.8,
    reviews: 127,
    specifications: {
      material: 'Premium Bienenwachs',
      size: '8cm x 6cm',
      weight: '180g',
      finish: 'Carbon Black'
    }
  },
  {
    id: '2',
    name: 'Luxury Rim Kerze - Chrome Silver',
    description: 'Exklusive Kerze mit verchromtem Felgen-Design. Ein Statement für jeden Geschäftsmann.',
    price: 39.99,
    image: '/api/placeholder/300/200',
    category: 'luxury',
    inStock: true,
    rating: 4.9,
    reviews: 89,
    specifications: {
      material: 'Soyawachs + Metall',
      size: '8cm x 6cm',
      weight: '200g',
      finish: 'Chrome Silver'
    }
  },
  {
    id: '3',
    name: 'Classic Rim Kerze - Vintage Gold',
    description: 'Zeitlose Eleganz mit Vintage-Gold-Finish. Für Liebhaber klassischer Automobile.',
    price: 29.99,
    image: '/api/placeholder/300/200',
    category: 'classic',
    inStock: true,
    rating: 4.7,
    reviews: 156,
    specifications: {
      material: 'Premium Bienenwachs',
      size: '8cm x 6cm',
      weight: '190g',
      finish: 'Vintage Gold'
    }
  },
  {
    id: '4',
    name: 'Modern Rim Kerze - Matte Black',
    description: 'Futuristisches Design mit mattem Schwarz-Finish. Für moderne Auto-Enthusiasten.',
    price: 27.99,
    image: '/api/placeholder/300/200',
    category: 'modern',
    inStock: true,
    rating: 4.6,
    reviews: 203,
    specifications: {
      material: 'Soyawachs',
      size: '8cm x 6cm',
      weight: '185g',
      finish: 'Matte Black'
    }
  },
  {
    id: '5',
    name: 'Sport Rim Kerze - Racing Red',
    description: 'Dynamische Kerze in Racing-Rot mit sportlichen Details. Für echte Rennsport-Fans.',
    price: 26.99,
    originalPrice: 32.99,
    image: '/api/placeholder/300/200',
    category: 'sport',
    inStock: true,
    rating: 4.8,
    reviews: 94,
    specifications: {
      material: 'Premium Bienenwachs',
      size: '8cm x 6cm',
      weight: '175g',
      finish: 'Racing Red'
    }
  },
  {
    id: '6',
    name: 'Luxury Rim Kerze - Rose Gold',
    description: 'Exquisite Kerze mit Rose-Gold-Finish. Ein Luxus-Statement für besondere Anlässe.',
    price: 44.99,
    image: '/api/placeholder/300/200',
    category: 'luxury',
    inStock: false,
    rating: 4.9,
    reviews: 67,
    specifications: {
      material: 'Soyawachs + Metall',
      size: '8cm x 6cm',
      weight: '210g',
      finish: 'Rose Gold'
    }
  },
  {
    id: '7',
    name: 'Classic Rim Kerze - Antique Bronze',
    description: 'Vintage-Design mit Antique-Bronze-Finish. Für Liebhaber klassischer Eleganz.',
    price: 31.99,
    image: '/api/placeholder/300/200',
    category: 'classic',
    inStock: true,
    rating: 4.7,
    reviews: 112,
    specifications: {
      material: 'Premium Bienenwachs',
      size: '8cm x 6cm',
      weight: '195g',
      finish: 'Antique Bronze'
    }
  },
  {
    id: '8',
    name: 'Modern Rim Kerze - Electric Blue',
    description: 'Futuristische Kerze mit Electric-Blue-Finish. Für moderne Technik-Enthusiasten.',
    price: 28.99,
    image: '/api/placeholder/300/200',
    category: 'modern',
    inStock: true,
    rating: 4.5,
    reviews: 178,
    specifications: {
      material: 'Soyawachs',
      size: '8cm x 6cm',
      weight: '180g',
      finish: 'Electric Blue'
    }
  }
]

export const categories = [
  { id: 'all', name: 'Alle Kerzen', icon: '🕯️' },
  { id: 'sport', name: 'Sport', icon: '🏎️' },
  { id: 'luxury', name: 'Luxus', icon: '💎' },
  { id: 'classic', name: 'Klassisch', icon: '🏛️' },
  { id: 'modern', name: 'Modern', icon: '⚡' }
]
