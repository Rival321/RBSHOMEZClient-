import React, { useState } from "react";
import "../styles/ImageViewer.css";

const ImageViewer = ({ images, setShowButton, setShowImageViewer }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    if (touchStartX - touchEndX > 50) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    } else if (touchEndX - touchStartX > 50) {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }
  };

  const handleTap = () => {
    console.log("Image tapped, hiding the buttons");
    setShowButton(false); // Hide buttons
  };

  return (
    <div
      className="image-viewer"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onClick={handleTap} 
    >
      <img
        src={images[currentIndex]}
        alt="Property"
        className="property-image"
      />
    </div>
  );
};

export default ImageViewer;
