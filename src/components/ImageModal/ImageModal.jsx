import { useEffect } from "react";
import Modal from "react-modal";
import styles from "./ImageModal.module.css";

Modal.setAppElement("#root");

export default function ImageModal({ isOpen, onRequestClose, image }) {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        onRequestClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onRequestClose]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <img
        src={image.urls.regular}
        alt={image.alt_description}
        className={styles.imageMod}
      />
      <button
        type="button"
        className={styles.closeButton}
        onClick={onRequestClose}
      >
        Close
      </button>
    </Modal>
  );
}
