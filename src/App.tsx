import { useState } from "react";
import { products, products2, type Product } from "./data";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import ProductGrid from "./components/ProductGrid";
import CartModal from "./components/CartModal";
import Home from "./components/Home";

export default function App() {
  const [cart, setCart] = useState<Product[]>([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product: Product) => {
    if (cart.length === 1) return;
    setCart([product]);
  };

  return (
    <>
      <Home/>
    </>
  );
}
