import Modal from "react-modal";

export default function ImageModal({ image, onClose }) {
  return (
    <Modal isOpen={!!image} onRequestClose={onClose} contentLabel="Image Modal">
      <button onClick={onClose}>Close</button>
      {image && (
        <div>
          <img src={image.urls.regular} alt={image.alt_description} />
          <p>{image.description || image.alt_description}</p>
          <p>By: {image.user.name}</p>
          <p>Likes: {image.likes}</p>
        </div>
      )}
    </Modal>
  );
}
