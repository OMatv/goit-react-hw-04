import ImageCard from "./ImageCard";
import styles from "./ImageGallery.module.css";

export default function ImageGallery({ images, openModal }) {
  return (
    <ul className={styles.gallery}>
      {images.map((image) => (
        <li key={image.id} className={styles.galleryItem}>
          <ImageCard image={image} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
}
