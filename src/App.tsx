import { useState, useEffect } from "react";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { CartProvider, useCart } from "./context/CartContext";
import Header from "./components/layout/Header";
import SignUpForm from "./components/auth/SignUpForm";
import SignInForm from "./components/auth/SignInForm";
import ProductGrid from "./components/products/ProductGrid";
import CartDrawer from "./components/cart/CartDrawer";
import CheckoutModal from "./components/checkout/CheckoutModal";
import AdminModal from "./components/admin/AdminModal";
import SuccessModal from "./components/ui/SuccessModal";
import Footer from "./components/layout/Footer";
import { initialProducts } from "./data/products";

function AppContent() {
  const { user, isSignedIn, signOut } = useAuth();
  const { cart, clearCart } = useCart();
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(true);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [products, setProducts] = useState(initialProducts);

  const isSuperUser = user?.email === "admin@shophub.com";

  const handleCheckout = () => {
    setShowCheckout(false);
    clearCart();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleAddProduct = (newProduct: any) => {
    setProducts([...products, { ...newProduct, id: Date.now().toString() }]);
  };

  if (!isSignedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex flex-col">
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="w-full max-w-md">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-3xl font-bold">SH</span>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">ShopHub</h1>
                <p className="text-gray-600 text-sm">Your Premium Shopping Destination</p>
              </div>
              
              {showSignUp ? (
                <SignUpForm
                  onToggle={() => {
                    setShowSignUp(false);
                    setShowSignIn(true);
                  }}
                />
              ) : (
                <SignInForm
                  onToggle={() => {
                    setShowSignIn(false);
                    setShowSignUp(true);
                  }}
                />
              )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header
        user={user}
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        onCartClick={() => setIsCartOpen(true)}
        onSignOut={signOut}
        onAdminClick={() => isSuperUser && setShowAdmin(true)}
        isSuperUser={isSuperUser}
      />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Products</h2>
          <p className="text-gray-600">Discover our latest collection</p>
        </div>
        
        <ProductGrid products={products} />
      </main>

      <Footer />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onCheckout={() => {
          setIsCartOpen(false);
          setShowCheckout(true);
        }}
      />

      <CheckoutModal
        isOpen={showCheckout}
        onClose={() => setShowCheckout(false)}
        onCheckout={handleCheckout}
      />

      <AdminModal
        isOpen={showAdmin}
        onClose={() => setShowAdmin(false)}
        onAddProduct={handleAddProduct}
      />

      <SuccessModal
        isOpen={showSuccess}
        message="Order placed successfully!"
      />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </AuthProvider>
  );
}