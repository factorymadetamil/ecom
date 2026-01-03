import { User, ShoppingCart, Shield, LogOut, Menu } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";

interface HeaderProps {
  user: any;
  cartCount: number;
  onCartClick: () => void;
  onSignOut: () => void;
  onAdminClick: () => void;
  isSuperUser: boolean;
}

export default function Header({
  user,
  cartCount,
  onCartClick,
  onSignOut,
  onAdminClick,
  isSuperUser,
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold">SH</span>
              </div>
              <h1 className="text-2xl font-bold text-purple-600">ShopHub</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">
                Products
              </a>
              <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors">
                About
              </a>
              <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">
                Contact
              </a>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2 text-gray-700">
              <User className="w-4 h-4" />
              <span>{user?.name}</span>
            </div>

            {isSuperUser && (
              <Button
                variant="outline"
                size="sm"
                onClick={onAdminClick}
                className="flex items-center space-x-2 bg-purple-50 border-purple-200 hover:bg-purple-100"
              >
                <Shield className="w-4 h-4" />
                <span>Admin</span>
              </Button>
            )}

            <Button
              variant="outline"
              size="sm"
              onClick={onCartClick}
              className="relative"
            >
              <ShoppingCart className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>

            <Button variant="ghost" size="sm" onClick={onSignOut}>
              <LogOut className="w-4 h-4" />
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-2">
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors px-4 py-2">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors px-4 py-2">
                Products
              </a>
              <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors px-4 py-2">
                About
              </a>
              <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors px-4 py-2">
                Contact
              </a>
              <div className="flex items-center space-x-2 text-gray-700 px-4 py-2">
                <User className="w-4 h-4" />
                <span>{user?.name}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}