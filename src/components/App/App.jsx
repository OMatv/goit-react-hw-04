import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import styles from "./App.module.css";

export default function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos`,
          {
            params: {
              query,
              page,
              per_page: 12,
              client_id: "St9AFIrYU0aQI09YxF_W4IuWImTsr6Veu_assiJTOiE", // З
            },
          }
        );
        setImages((prevImages) => [...prevImages, ...response.data.results]);
        setError(false);
      } catch (error) {
        setError("Failed to fetch images");
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const handleSearchSubmit = (query) => {
    setQuery(query);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (image) => {
    setModalImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalImage(null);
  };

  return (
    <div className={styles.AppContainer}>
      <SearchBar onSubmit={handleSearchSubmit} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} openModal={openModal} />
      {loading && <Loader />}
      {images.length > 0 && !loading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {showModal && modalImage && (
        <ImageModal
          isOpen={showModal}
          onRequestClose={closeModal}
          image={modalImage}
        />
      )}
    </div>
  );
}
