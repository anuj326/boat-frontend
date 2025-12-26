
const ORDER_KEY = "boat_order";

type Order = {
  product: {
    name: string;
    price: number;
    img: string;
  };
  user: {
    name: string;
    phone: string;
    address: string;
    pincode: string;
  };
  paymentStatus: string;
  orderedAt: string;
};

type Props = {
  show: boolean;
  onClose: () => void;
};

export default function OrderModal({ show, onClose }: Props) {
  if (!show) return null;

  const storedOrder = localStorage.getItem(ORDER_KEY);
  const order: Order | null = storedOrder
    ? JSON.parse(storedOrder)
    : null;

  return (
    <div className="modal show d-block bg-dark bg-opacity-50">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">

          {/* HEADER */}
          <div className="modal-header">
            <h5>My Order</h5>
            <button className="btn-close" onClick={onClose} />
          </div>

          {/* BODY */}
          <div className="modal-body">
            {!order && (
              <div className="text-center text-muted">
                No previous orders found.
              </div>
            )}

            {order && (
              <>
                {/* PRODUCT */}
                <h6 className="mb-2">Product Details</h6>
                <div className="d-flex gap-3 mb-3">
                  <img
                    src={order.product.img}
                    width={70}
                    alt="product"
                  />
                  <div>
                    <strong>{order.product.name}</strong>
                    <div>₹{order.product.price}</div>
                    <div className="text-warning">
                      Status: {order.paymentStatus}
                    </div>
                  </div>
                </div>

                <hr />

                {/* USER */}
                <h6>User Details</h6>
                <p className="mb-1"><strong>Name:</strong> {order.user.name}</p>
                <p className="mb-1"><strong>Phone:</strong> {order.user.phone}</p>
                <p className="mb-1"><strong>Address:</strong> {order.user.address}</p>
                <p className="mb-1"><strong>Pincode:</strong> {order.user.pincode}</p>

                <hr />

                <small className="text-muted">
                  Ordered on: {new Date(order.orderedAt).toLocaleString()}
                </small>
              </>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
