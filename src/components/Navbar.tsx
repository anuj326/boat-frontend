type Props = {
  cartCount: number;
  onCartClick: () => void;
  onOrdersClick: () => void;
};

export default function Navbar({
  cartCount,
  onCartClick,
  onOrdersClick
}: Props) {
  return (
    <nav className="navbar bg-white shadow-sm px-4 sticky-top d-flex justify-content-between">
      <span className="fw-bold fs-4">
        bo<span className="text-danger">A</span>t
      </span>

      <div className="d-flex gap-3 align-items-center">
        {/* 📦 Orders Icon */}
        <button
          className="btn position-relative"
          onClick={onOrdersClick}
          title="My Orders"
        >
          <img width={22} src="https://uxwing.com/wp-content/themes/uxwing/download/e-commerce-currency-shopping/order-placed-purchased-icon.svg" alt="" />
        </button>

        {/* 🛒 Cart Icon */}
        <button
          className="btn position-relative"
          onClick={onCartClick}
        >
          🛒
          <span className="badge bg-danger ms-1">
            {cartCount}
          </span>
        </button>
      </div>
    </nav>
  );
}
