import { useState, useEffect } from "react";
import type { Product } from "../data";

const ORDER_KEY = "boat_order";

type Props = {
  cart: Product[];
  show: boolean;
  onClose: () => void;
  onCheckout: () => void;
  onRemove: () => void;
};

export default function CartModal({
  cart,
  show,
  onClose,
  onCheckout,
  onRemove
}: Props) {
  if (!show) return null;
   const [hasOrdered, setHasOrdered] = useState(false);

  useEffect(() => {
    const existingOrder = localStorage.getItem(ORDER_KEY);
  
    if (existingOrder) {
      setHasOrdered(true);
    }
  }, []);



  const total = cart.reduce((sum, p) => sum + p.price, 0);

  return (
    <div className="modal show d-block bg-dark bg-opacity-50">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">

          {/* HEADER */}
          <div className="modal-header">
            <h5>Your Cart</h5>
            <button className="btn-close" onClick={onClose} />
          </div>

          {/* BODY */}
          <div className="modal-body">
            {cart.map((p) => (
              <div
                key={p.name}
                className="d-flex justify-content-between align-items-center mb-3"
              >
                <div className="d-flex gap-3">
                  <img src={p.img} width={60} />
                  <div>
                    <strong>{p.name}</strong>
                    <div>₹{p.price}</div>
                  </div>
                </div>

                {/* ✅ REMOVE BUTTON */}
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={onRemove}
                >
                  Remove
                </button>
              </div>
            ))}
            {hasOrdered && (
  <div className="alert alert-warning text-center my-4">
    You are not allowed to place more than 1 order.
  </div>
)}

          </div>

          {/* FOOTER */}
          <div className="modal-footer justify-content-between">
            <strong>Total: ₹{total}</strong>
            <button className="btn btn-dark" onClick={onCheckout} disabled={hasOrdered}>
              Checkout
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
