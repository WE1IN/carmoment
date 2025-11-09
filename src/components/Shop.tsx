import React, { useState, useMemo } from 'react'
import type { Product, Cart as CartType, CartItem } from '../types/Product'
import { products, categories } from '../data/products'
import ProductCard from './ProductCard'
import Cart from './Cart'
import FAQ from './FAQ'

interface ShopProps {
  cart: CartType
  setCart: (cart: CartType) => void
  isCartOpen: boolean
  setIsCartOpen: (open: boolean) => void
}

const Shop: React.FC<ShopProps> = ({ cart, setCart, isCartOpen, setIsCartOpen }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  // Filter products by category
  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') return products
    return products.filter(product => product.category === selectedCategory)
  }, [selectedCategory])

  // Add product to cart
  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.items.find(item => item.product.id === product.id)
      
      if (existingItem) {
        const updatedItems = prevCart.items.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
        return {
          items: updatedItems,
          total: updatedItems.reduce((total, item) => total + (item.product.price * item.quantity), 0)
        }
      } else {
        const newItems = [...prevCart.items, { product, quantity: 1 }]
        return {
          items: newItems,
          total: newItems.reduce((total, item) => total + (item.product.price * item.quantity), 0)
        }
      }
    })
  }

  // Remove product from cart
  const removeFromCart = (productId: string) => {
    setCart(prevCart => {
      const updatedItems = prevCart.items.filter(item => item.product.id !== productId)
      return {
        items: updatedItems,
        total: updatedItems.reduce((total, item) => total + (item.product.price * item.quantity), 0)
      }
    })
  }

  // Update product quantity in cart
  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }

    setCart(prevCart => {
      const updatedItems = prevCart.items.map(item =>
        item.product.id === productId
          ? { ...item, quantity }
          : item
      )
      return {
        items: updatedItems,
        total: updatedItems.reduce((total, item) => total + (item.product.price * item.quantity), 0)
      }
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Felgen-Kerzen Shop
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Einzigartige Kerzen im Design von Premium-Felgen
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white bg-opacity-20 rounded-lg px-4 py-2">
              <span className="text-sm">🕯️ Handgefertigte Kerzen</span>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg px-4 py-2">
              <span className="text-sm">💎 Exklusive Designs</span>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg px-4 py-2">
              <span className="text-sm">🚚 Kostenloser Versand</span>
            </div>
          </div>
        </div>
      </section>

      {/* Kategorien Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Produktliste */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {selectedCategory === 'all' ? 'Alle Produkte' : categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <p className="text-gray-600">
              {filteredProducts.length} Produkt{filteredProducts.length !== 1 ? 'e' : ''} gefunden
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Keine Produkte gefunden</h3>
              <p className="text-gray-600">Versuchen Sie eine andere Kategorie auszuwählen.</p>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Warenkorb Modal */}
      {isCartOpen && (
        <Cart
          cart={cart}
          onRemoveItem={removeFromCart}
          onUpdateQuantity={updateQuantity}
          onClose={() => setIsCartOpen(false)}
        />
      )}
    </div>
  )
}

export default Shop
