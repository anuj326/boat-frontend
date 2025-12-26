import type { Product } from "../data";

type Props = {
    products: Product[];
    cart: Product[];
    addToCart: (p: Product) => void;
    openCart: () => void;
    hasOrdered: boolean;
};

export default function ProductGrid({
    products,
    cart,
    addToCart,
    openCart,
    hasOrdered
}: Props) {
    const cartItem = cart[0];

    return (
        <div className="row g-3">
            {products.map((p) => {
                const isAdded = cartItem?.name === p.name;
                const disableOther = cart.length === 1 && !isAdded;
                const discount = Math.round(
                    ((p.oldPrice - p.price) / p.oldPrice) * 100
                );

                return (
                    <div key={p.name} className="col-6 col-md-4 col-lg-3">
                        {/* 👆 THIS LINE FIXES YOUR ISSUE */}

                        <div className="card h-100 shadow-sm">
                            <img
                                src={p.img}
                                className="card-img-top p-2"
                                style={{ height: 140, objectFit: "contain" }}
                            />

                            <div className="card-body d-flex flex-column">
                                <h6 className="card-title">{p.name}</h6>

                                <p className="mb-2">
                                    <b>₹{p.price}</b>{" "}
                                    <del className="text-muted">₹{p.oldPrice}</del>{" "}
                                    <span className="text-success">{discount}% off</span>
                                </p>

                                <button
                                    className={`btn w-100 ${hasOrdered
                                            ? "btn-secondary"
                                            : isAdded
                                                ? "btn-success"
                                                : disableOther
                                                    ? "btn-secondary"
                                                    : "btn-dark"
                                        }`}
                                    disabled={hasOrdered || disableOther}
                                    onClick={() =>
                                        isAdded ? openCart() : addToCart(p)
                                    }
                                >
                                    {hasOrdered
                                        ? "Order Already Placed"
                                        : isAdded
                                            ? "Checkout"
                                            : disableOther
                                                ? "Only 1 item allowed"
                                                : "Add to Cart"}
                                </button>

                            </div>
                        </div>

                    </div>
                );
            })}
        </div>
    );
}
