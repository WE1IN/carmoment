import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Shop from './components/Shop'
import type { Cart as CartType } from './types/Product'
import './style.css'

const App: React.FC = () => {
  const [cart, setCart] = useState<CartType>({ items: [], total: 0 })
  const [isCartOpen, setIsCartOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar cart={cart} onOpenCart={() => setIsCartOpen(true)} />

      {/* Shop */}
      <Shop 
        cart={cart} 
        setCart={setCart} 
        isCartOpen={isCartOpen} 
        setIsCartOpen={setIsCartOpen} 
      />
    </div>
  )
}

export default App
