import { useState } from 'react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select'
import { Search, ShoppingCart, Star } from 'lucide-react'
import { Product } from '../types'

interface ProductsPageProps {
  addToCart: (product: Product) => void
}

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Premium Headphones',
    price: 89.99,
    description: 'High-quality wireless headphones with noise cancellation',
    category: 'Electronics',
    image: 'headphones',
    stock: 15
  },
  {
    id: '2',
    name: 'Smart Watch',
    price: 249.99,
    description: 'Feature-rich smartwatch with health tracking',
    category: 'Electronics',
    image: 'watch',
    stock: 8
  },
  {
    id: '3',
    name: 'Leather Backpack',
    price: 79.99,
    description: 'Genuine leather backpack with laptop compartment',
    category: 'Fashion',
    image: 'backpack',
    stock: 20
  },
  {
    id: '4',
    name: 'Running Shoes',
    price: 129.99,
    description: 'Professional running shoes with advanced cushioning',
    category: 'Sports',
    image: 'shoes',
    stock: 12
  },
  {
    id: '5',
    name: 'Coffee Maker',
    price: 159.99,
    description: 'Automatic coffee maker with built-in grinder',
    category: 'Home',
    image: 'coffee',
    stock: 6
  },
  {
    id: '6',
    name: 'Yoga Mat',
    price: 34.99,
    description: 'Non-slip yoga mat with carrying strap',
    category: 'Sports',
    image: 'yoga',
    stock: 25
  }
]

export default function ProductsPage({ addToCart }: ProductsPageProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [products] = useState<Product[]>(mockProducts)

  const categories = ['all', ...Array.from(new Set(products.map(p => p.category)))]

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      
      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-full md:w-48">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map(category => (
              <SelectItem key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="bg-gray-200 border-2 border-dashed rounded-lg h-48 mb-4 flex items-center justify-center">
                <span className="text-gray-500">{product.image}</span>
              </div>
              <CardTitle className="text-lg">{product.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm mb-2">{product.description}</p>
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl font-bold text-indigo-600">${product.price}</span>
                <span className="text-sm text-gray-500">Stock: {product.stock}</span>
              </div>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-2 text-sm text-gray-500">(4.5)</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                onClick={() => addToCart(product)}
                className="w-full"
                disabled={product.stock === 0}
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No products found matching your criteria.</p>
        </div>
      )}
    </div>
  )
}