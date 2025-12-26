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
  const [paymentMethod, setPaymentMethod] =
    useState<UserDetails["paymentMethod"] | "">("");

  // ✅ VALIDATION LOGIC
  const isFormValid = useMemo(() => {
    const isPhoneValid = /^\d{10}$/.test(phone);
    const isPincodeValid = /^\d{6}$/.test(pincode);

    return (
      name.trim().length > 0 &&
      isPhoneValid &&
      address.trim().length > 0 &&
      isPincodeValid &&
      paymentMethod !== ""
    );
  }, [name, phone, address, pincode, paymentMethod]);

  const handleSubmit = () => {
    if (!isFormValid) return;

    onSubmit({
      name,
      phone,
      address,
      pincode,
      paymentMethod: paymentMethod as UserDetails["paymentMethod"]
    });
  };

  return (
    <div className="modal show d-block bg-dark bg-opacity-50">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">

          {/* HEADER */}
          <div className="modal-header">
            <h5>Delivery & Payment</h5>
            <button className="btn-close" onClick={onClose} />
          </div>

          {/* BODY */}
          <div className="modal-body">

            {/* USER DETAILS */}
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
              className="form-control mb-3"
              placeholder="Pincode"
              value={pincode}
              maxLength={6}
              onChange={(e) =>
                setPincode(e.target.value.replace(/\D/g, ""))
              }
            />

            {/* PAYMENT METHOD */}
            <h6 className="mb-2">Select Payment Method</h6>

           {/* PAYMENT METHOD */}
<h6 className="mb-2">Select Payment Method</h6>

<div className="d-flex flex-wrap gap-3 mb-3">

  {/* GPay */}
  <label className={`border rounded p-2 text-center payment-option
    ${paymentMethod === "gpay" ? "border-success" : ""}`}>
    <input
      type="radio"
      name="payment"
      value="gpay"
      className="d-none"
      checked={paymentMethod === "gpay"}
      onChange={() => setPaymentMethod("gpay")}
    />
    <img
      width={45}
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo2H45E7LPl93gI0RFPGkZ9YPW1YzCSTR4jQ&s"
      alt="GPay"
    />
  </label>

  {/* PhonePe */}
  <label className={`border rounded p-2 text-center payment-option
    ${paymentMethod === "phonepe" ? "border-success" : ""}`}>
    <input
      type="radio"
      name="payment"
      value="phonepe"
      className="d-none"
      checked={paymentMethod === "phonepe"}
      onChange={() => setPaymentMethod("phonepe")}
    />
    <img
      width={45}
      src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/phonepe-icon.png"
      alt="PhonePe"
    />
  </label>

  {/* Paytm */}
  <label className={`border rounded p-2 text-center payment-option
    ${paymentMethod === "paytm" ? "border-success" : ""}`}>
    <input
      type="radio"
      name="payment"
      value="paytm"
      className="d-none"
      checked={paymentMethod === "paytm"}
      onChange={() => setPaymentMethod("paytm")}
    />
    <img
      width={45}
      src="https://media.licdn.com/dms/image/v2/D4E12AQHV3OFLwpWO7w/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1707236126574?e=2147483647&v=beta&t=WjqYnI5wn9-16XwcTrbqsIeBrMSgCVf_hLQl-H0Z2Bo"
      alt="Paytm"
    />
  </label>

  {/* BharatPe */}
  <label className={`border rounded p-2 text-center payment-option
    ${paymentMethod === "bharatpay" ? "border-success" : ""}`}>
    <input
      type="radio"
      name="payment"
      value="bharatpay"
      className="d-none"
      checked={paymentMethod === "bharatpay"}
      onChange={() => setPaymentMethod("bharatpay")}
    />
    <img
      width={45}
      src="https://cdn.aptoide.com/imgs/9/4/0/940e776217e43b903ae1a0a5d82ac042_icon.png"
      alt="BharatPe"
    />
  </label>

  {/* UPI */}
  <label className={`border rounded p-2 text-center payment-option
    ${paymentMethod === "upi" ? "border-success" : ""}`}>
    <input
      type="radio"
      name="payment"
      value="upi"
      className="d-none"
      checked={paymentMethod === "upi"}
      onChange={() => setPaymentMethod("upi")}
    />
    <span className="fw-bold">UPI</span>
  </label>

</div>


            {!isFormValid && (
              <small className="text-muted">
                Fill all details and select a payment method to continue.
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
