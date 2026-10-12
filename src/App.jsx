import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import FilterBar from './components/FilterBar'
import FoodCard from './components/FoodCard'
import Cart from './components/Cart'
import Toast from './components/Toast'
import { foodData } from './data/foodData'

function App() {
  const [cartItems, setCartItems] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [toast, setToast] = useState(null)

  // Load cart from localStorage
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('foodieCart')
      if (savedCart) {
        const parsed = JSON.parse(savedCart)
        setCartItems(Array.isArray(parsed) ? parsed : [])
      }
    } catch (error) {
      console.error('Failed to load cart', error)
      setCartItems([])
    }
  }, [])

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem('foodieCart', JSON.stringify(cartItems))
  }, [cartItems])

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id)
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
    setToast({ message: `${product.name} added to cart!`, type: 'success' })
  }

  const updateQuantity = (id, newQuantity) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
    setToast({ message: 'Item removed from cart', type: 'success' })
  }

  const placeOrder = () => {
    if (cartItems.length === 0) {
      setToast({ message: 'Your cart is empty!', type: 'error' })
      return
    }
    setCartItems([])
    setToast({ message: 'Order placed successfully! 🎉', type: 'success' })
  }

  const filteredFood = foodData.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    // Body ko transparent rakha hai taaki index.css ka gradient dikhe
    <div className="min-h-screen bg-transparent font-sans selection:bg-emerald-500/30">
      <Navbar cartCount={cartCount} />
      
      {/* Container ko wider kiya (1600px) taaki cards khul ke aayein */}
      <main className="container mx-auto px-6 py-12 max-w-[1600px]">
        
        {/* Main 12-Column Grid Setup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* MENU SECTION (8 Columns) */}
          <div className="lg:col-span-8 xl:col-span-9 space-y-10">
            
            <FilterBar
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            />

            {filteredFood.length === 0 ? (
              // Empty State - Glassmorphism Style
              <div className="bg-white/5 backdrop-blur-2xl rounded-[3rem] p-24 text-center border border-white/10 shadow-2xl">
                <span className="text-9xl block mb-8 opacity-20">🔍</span>
                <h3 className="text-3xl font-black text-white mb-3 uppercase tracking-[0.3em]">No Dishes Found</h3>
                <p className="text-gray-500 font-bold text-lg">Try a different search or category</p>
              </div>
            ) : (
              /* THE WIDE LIST: Flex-col use kiya hai grid ki jagah taaki horizontal cards fit aayein */
              <div className="flex flex-col gap-10">
                {filteredFood.map((item) => (
                  <FoodCard key={item.id} item={item} onAddToCart={addToCart} />
                ))}
              </div>
            )}
          </div>

          {/* CART SECTION (4 Columns) - Sticky rakha hai taaki scroll pe sath chale */}
          {/* <div className="lg:col-span-4 xl:col-span-3 sticky top-28">
            <Cart
              cartItems={cartItems}
              onUpdateQuantity={updateQuantity}
              onRemoveItem={removeFromCart}
              onPlaceOrder={placeOrder}
            />
          </div> */}
{/* CART SECTION (4 Columns) - Sticky with max height limit */}
{/* CART SECTION (4 Columns) - Ab ye normal scroll hoga page ke sath */}
<div className="lg:col-span-4 xl:col-span-3">
  <Cart
    cartItems={cartItems}
    onUpdateQuantity={updateQuantity}
    onRemoveItem={removeFromCart}
    onPlaceOrder={placeOrder}
  />
</div>
        </div>
      </main>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  )
}

export default App