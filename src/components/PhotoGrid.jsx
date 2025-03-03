import { useState } from "react";
import { X } from "lucide-react";

const PhotoGrid = ({ images, onClose, onSelect }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col p-4 z-50">
      <button className="absolute top-4 right-4 text-white" onClick={onClose}>
        <X size={30} />
      </button>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-8">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Photo ${index}`}
            className="w-full h-40 object-cover cursor-pointer"
            onClick={() => onSelect(img)}
          />
        ))}
      </div>
    </div>
  );
};

const ImageViewer = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showGallery, setShowGallery] = useState(false);

  return (
    <div className="relative w-full flex justify-center items-center">
      <img
        src={selectedImage || images[0]}
        alt="Main Preview"
        className="w-full max-w-2xl object-cover cursor-pointer"
        onClick={() => setShowGallery(true)}
      />
      {showGallery && (
        <PhotoGrid
          images={images}
          onClose={() => setShowGallery(false)}
          onSelect={(img) => {
            setSelectedImage(img);
            setShowGallery(false);
          }}
        />
      )}
    </div>
  );
};

export default ImageViewer;
