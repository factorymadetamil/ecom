export interface Product {
  id: string
  name: string
  price: number
  description: string
  category: string
  image: string
  stock: number
}

export interface CartItem extends Product {
  quantity: number
}

export interface User {
  id: string
  name: string
  email: string
  role: 'superadmin' | 'admin' | 'user'
  avatar?: string
}

export interface Order {
  id: string
  items: CartItem[]
  total: number
  status: 'pending' | 'processing' | 'shipped' | 'delivered'
  createdAt: Date
  shippingAddress: {
    street: string
    city: string
    state: string
    zip: string
  }
}
