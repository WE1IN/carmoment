export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  image: string
  category: 'sport' | 'luxury' | 'classic' | 'modern'
  inStock: boolean
  rating: number
  reviews: number
  specifications: {
    material: string
    size: string
    weight: string
    finish: string
  }
}

export interface CartItem {
  product: Product
  quantity: number
}

export interface Cart {
  items: CartItem[]
  total: number
}
