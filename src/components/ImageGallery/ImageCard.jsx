import styles from "./ImageCard.module.css";

export default function ImageCard({ image, openModal }) {
  return (
    <div className={styles.card} onClick={() => openModal(image)}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className={styles.image}
      />
    </div>
  );
}
