import { useEffect, useState } from "react";
import { products, products2, type Product } from "../data";
import Banner from "./Banner";
import CartModal from "./CartModal";
import Navbar from "./Navbar";
import ProductGrid from "./ProductGrid";
import PaymentScreen from "./PaymentScreen";
import CheckoutForm from "./CheckoutForm";
import type { Order, UserDetails } from "../types/types";
import OrderModal from "./OrderModal";
import PopupModal from "./PopupModal";
import popUpImage from '../assets/pop-up.png'

const ORDER_KEY = "boat_order";

export default function Home() {
    const [cart, setCart] = useState<Product[]>([]);
     const [hasOrdered, setHasOrdered] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [showCheckoutForm, setShowCheckoutForm] = useState(false);
    const [showPayment, setShowPayment] = useState(false);
    const [paymentStatus, setPaymentStatus] =
        useState<"idle" | "pending">("idle");
    const [userDetails, setUserDetails] = useState<UserDetails | null>(null); 
    const [showOrders, setShowOrders] = useState(false);
    const [showPopup, setShowPopup] = useState(true);
 
    
useEffect(() => {
  const existingOrder = localStorage.getItem(ORDER_KEY);

  if (existingOrder) {
    setHasOrdered(true);
    setCart([]); // ensure cart is empty
    setPaymentStatus("pending");
  }
}, []);


  const addToCart = (product: Product) => {
    if (hasOrdered) {
      alert("You have already placed an order.");
      return;
    }
    if (cart.length === 1) return;
    setCart([product]);
  };

    const submitCheckoutForm = (details: UserDetails) => {
    setUserDetails(details);
    setShowCheckoutForm(false);
    setShowPayment(true);
  };

    const removeFromCart = () => {
        setCart([]);
        setShowCart(false);
        setShowCheckoutForm(false);
        setShowPayment(false);
        setPaymentStatus("idle");
    };

    const resetFlow = () => {
        setCart([]);
        setShowCart(false);
        setShowCheckoutForm(false);
        setShowPayment(false);
        setPaymentStatus("idle");
    };

    const openCheckoutForm = () => {
        setShowCart(false);
        setShowCheckoutForm(true);
    };

  const completePayment = () => {
    if (!cart[0] || !userDetails) return;

    const order: Order = {
      product: cart[0],
      user: userDetails,
      paymentStatus: "pending",
      orderedAt: new Date().toISOString()
    };

    localStorage.setItem(ORDER_KEY, JSON.stringify(order));

    setPaymentStatus("pending");
    setHasOrdered(true);
    setCart([]);
  };

    const closePopup = () => {
    setShowPopup(false);
  };


    return (
        <>
            <Navbar
                cartCount={cart.length}
                onCartClick={() => setShowCart(true)}
                onOrdersClick={() => setShowOrders(true)}
                />

                <OrderModal
                    show={showOrders}
                    onClose={() => setShowOrders(false)}
                    />



            <Banner
                image="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Artboard_1_ce94c157-362a-40dc-a0e9-33a017ea80c6.png?v=1753943365"
                height="200px"
            />


            <div className="container my-4">
                <h5 className="fw-bold mb-3">Featured Products</h5>
                <ProductGrid
                    products={products}
                    cart={cart}
                    hasOrdered={hasOrdered}
                    addToCart={addToCart}
                    openCart={() => setShowCart(true)}
                />
            </div>
            <Banner
                image="https://www.boat-lifestyle.com/cdn/shop/files/Gift-With-boAt_WEB_copy_5f3a452e-8f81-4cc3-a4ef-9d479e8f9f63_1440x.gif?v=1733999495"
                height="100px"
            />
            <div className="container my-4">
                <h5 className="fw-bold mb-3">Trending Products</h5>
                <ProductGrid
                    products={products2}
                    cart={cart}
                    hasOrdered={hasOrdered}
                    addToCart={addToCart}
                    openCart={() => setShowCart(true)}
                />
            </div>

            <CartModal
                cart={cart}
                show={showCart}
                onClose={() => setShowCart(false)}
                onCheckout={openCheckoutForm}
                onRemove={removeFromCart}
            />


            <CheckoutForm
                show={showCheckoutForm}
                onSubmit={submitCheckoutForm}
                onClose={resetFlow}
            />

            <PaymentScreen
                show={showPayment}
                status={paymentStatus}
                onComplete={completePayment}
                onClose={resetFlow}
            />

            <PopupModal
        show={showPopup}
        image={popUpImage}
        onClose={closePopup}
      />


        </>
    );
}
