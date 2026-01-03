import { MessageCircle, Headphones, Mail, MapPin, Heart } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [chatOpen, setChatOpen] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Subscribed with email: ${email}`);
    setEmail("");
  };

  return (
    <>
      <footer className="bg-gray-900 text-white mt-auto">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold">SH</span>
                </div>
                <h3 className="text-xl font-bold">ShopHub</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Your premium shopping destination for quality products and exceptional service.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors">
                  <span className="text-xs">f</span>
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors">
                  <span className="text-xs">t</span>
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors">
                  <span className="text-xs">in</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Products</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Categories</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Deals</a></li>
                <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
              </ul>
            </div>

            {/* Customer Service */}
            <div className="space-y-4">
              <h4 className="font-semibold">Customer Service</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Return Policy</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="space-y-4">
              <h4 className="font-semibold">Stay Updated</h4>
              <p className="text-gray-400 text-sm">Subscribe to get special offers and updates</p>
              <form onSubmit={handleSubscribe} className="space-y-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-500"
                />
                <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 ShopHub. All rights reserved. Made with <Heart className="w-4 h-4 inline text-red-500" /> by ShopHub Team</p>
          </div>
        </div>
      </footer>

      {/* Chat Bot */}
      <div className="fixed bottom-6 right-6 z-50">
        {chatOpen && (
          <div className="absolute bottom-16 right-0 w-80 bg-white rounded-lg shadow-xl border border-gray-200">
            <div className="bg-purple-600 text-white p-4 rounded-t-lg">
              <h3 className="font-semibold">Chat Assistant</h3>
              <p className="text-sm opacity-90">How can we help you today?</p>
            </div>
            <div className="p-4 h-64 overflow-y-auto">
              <div className="space-y-3">
                <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                  <p className="text-sm">Hello! Welcome to ShopHub. How can I assist you?</p>
                </div>
                <div className="bg-purple-100 rounded-lg p-3 max-w-[80%] ml-auto">
                  <p className="text-sm">I need help with my order</p>
                </div>
                <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                  <p className="text-sm">I'd be happy to help! Can you provide your order number?</p>
                </div>
              </div>
            </div>
            <div className="p-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <Input
                  placeholder="Type your message..."
                  className="flex-1"
                />
                <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                  Send
                </Button>
              </div>
            </div>
          </div>
        )}
        
        <Button
          onClick={() => setChatOpen(!chatOpen)}
          className="w-14 h-14 rounded-full bg-purple-600 hover:bg-purple-700 shadow-lg"
        >
          {chatOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </Button>
      </div>
    </>
  );
}

// Add X import at the top
import { X } from "lucide-react";