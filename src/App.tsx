import { useState, useEffect } from 'react'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import CartPage from './pages/CartPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import PaymentPage from './pages/PaymentPage'
import AuthPage from './pages/AuthPage'
import AdminDashboard from './pages/AdminDashboard'
import { CartItem, User } from './types'

type PageType = 'home' | 'products' | 'cart' | 'about' | 'contact' | 'payment' | 'auth' | 'admin'

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home')
  const [cart, setCart] = useState<CartItem[]>([])
  const [user, setUser] = useState<User | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    // Check for saved auth state
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
      setIsAuthenticated(true)
    }

    // Load cart from localStorage
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }
  }, [])

  useEffect(() => {
    // Save cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (product: any) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id)
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prevCart, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (productId: string) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId))
  }

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity === 0) {
      removeFromCart(productId)
    } else {
      setCart(prevCart =>
        prevCart.map(item =>
          item.id === productId ? { ...item, quantity } : item
        )
      )
    }
  }

  const handleAuth = (userData: User) => {
    setUser(userData)
    setIsAuthenticated(true)
    localStorage.setItem('user', JSON.stringify(userData))
    setCurrentPage('home')
  }

  const handleLogout = () => {
    setUser(null)
    setIsAuthenticated(false)
    localStorage.removeItem('user')
    setCurrentPage('home')
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />
      case 'products':
        return <ProductsPage addToCart={addToCart} />
      case 'cart':
        return <CartPage cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} setCurrentPage={setCurrentPage} />
      case 'about':
        return <AboutPage />
      case 'contact':
        return <ContactPage />
      case 'payment':
        return <PaymentPage cart={cart} setCurrentPage={setCurrentPage} />
      case 'auth':
        return <AuthPage onAuth={handleAuth} />
      case 'admin':
        return <AdminDashboard user={user} />
      default:
        return <HomePage setCurrentPage={setCurrentPage} />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        user={user}
        isAuthenticated={isAuthenticated}
        onLogout={handleLogout}
      />
      <main className="fade-in">
        {renderPage()}
      </main>
    </div>
  )
}