import { useState, useMemo } from "react";
import type { UserDetails } from "../types/types";

type Props = {
  show: boolean;
  onSubmit: (details: UserDetails) => void;
  onClose: () => void;
};

export default function CheckoutForm({
  show,
  onSubmit,
  onClose
}: Props) {
  if (!show) return null;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");

  // ✅ VALIDATION LOGIC
  const isFormValid = useMemo(() => {
    const isPhoneValid = /^\d{10}$/.test(phone);
    const isPincodeValid = /^\d{6}$/.test(pincode);


    return (
      name.trim().length > 0 &&
      isPhoneValid &&
      address.trim().length > 0 &&
      isPincodeValid
    );
  }, [name, phone, address, pincode]);

    const handleSubmit = () => {
  onSubmit({
    name,
    phone,
    address,
    pincode
  });
};


  return (
    <div className="modal show d-block bg-dark bg-opacity-50">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">

          {/* HEADER */}
          <div className="modal-header">
            <h5>Delivery Details</h5>
            <button className="btn-close" onClick={onClose} />
          </div>

          {/* BODY */}
          <div className="modal-body">
            <input
              className="form-control mb-2"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              className="form-control mb-2"
              placeholder="Phone Number"
              value={phone}
              maxLength={10}
              onChange={(e) =>
                setPhone(e.target.value.replace(/\D/g, ""))
              }
            />

            <textarea
              className="form-control mb-2"
              placeholder="Full Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />

            <input
              className="form-control mb-2"
              placeholder="Pincode"
              value={pincode}
              maxLength={6}
              onChange={(e) =>
                setPincode(e.target.value.replace(/\D/g, ""))
              }
            />

            {/* OPTIONAL HELPER TEXT */}
            {!isFormValid && (
              <small className="text-muted">
                Please fill all fields correctly to continue.
              </small>
            )}
          </div>

          {/* FOOTER */}
          <div className="modal-footer">
            <button
              className="btn btn-success w-100"
              disabled={!isFormValid}
              onClick={handleSubmit}
            >
              Proceed to Payment
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
