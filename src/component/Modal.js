import "./Modal.css";

function Modal({ show, onclose, children }) {
  if (!show) {
    return null;
  }
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onclick={onclose}>
          success..! otp sent to your email.please check inbox.
        </button>
      </div>
    </div>
  );
}
export default Modal;
