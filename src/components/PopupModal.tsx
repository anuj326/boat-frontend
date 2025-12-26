type Props = {
  show: boolean;
  image: string;
  onClose: () => void;
};

export default function PopupModal({ show, image, onClose }: Props) {
  if (!show) return null;

  return (
    <div className="modal show d-block bg-dark bg-opacity-75">
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content position-relative border-0">

          {/* ❌ CLOSE ICON */}
          <button
  type="button"
  className="btn-close btn-close-white position-absolute top-0 end-0 m-3"
  onClick={onClose}
/>


          {/* 🖼 IMAGE ONLY */}
          <img
            src={image}
            alt="Popup Banner"
            className="img-fluid rounded"
            // width={300}
          />

        </div>
      </div>
    </div>
  );
}
