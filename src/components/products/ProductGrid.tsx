import { useCart } from "../../context/CartContext";
import ProductCard from "./ProductCard";
import { initialProducts } from "../../data/products";

interface ProductGridProps {
  products: typeof initialProducts;
}

export default function ProductGrid({ products }: ProductGridProps) {
  const { addToCart } = useCart();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={() => addToCart(product.id)}
        />
      ))}
    </div>
  );
}