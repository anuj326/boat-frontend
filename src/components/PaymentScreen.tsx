import qrImage from "../assets/boat-qr.jpeg";

type Props = {
  show: boolean;
  status: "idle" | "pending";
  onComplete: () => void;
  onClose: () => void;
};

export default function PaymentScreen({
  show,
  status,
  onComplete,
  onClose
}: Props) {
  if (!show) return null;

  return (
    <div className="modal show d-block bg-dark bg-opacity-50">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content text-center">

          <div className="modal-header">
            <h5>Payment</h5>
            <button className="btn-close" onClick={onClose} />
          </div>

          <div className="modal-body p-4">
            {status === "idle" && (
              <>
                <h6>Scan QR to Pay</h6>
                <img
                  src={qrImage}
                  className="my-3"
                />
                <button
                  className="btn btn-success w-100"
                  onClick={onComplete}
                >
                  Complete Payment
                </button>
              </>
            )}

            {status === "pending" && (
              <>
                <div className="celebration">🎉 🎊 🎉</div>
                <h5 className="text-warning mt-3">
                  Payment Pending
                </h5>
                <p>Awaiting confirmation from bank.</p>
              </>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
