import React from 'react';
import ImageViewer from '../components/ImageViewer';
import '../styles/Testing.css';

const Testing = () => {
  const images = [
    '/src/assets/images/House-1.jpg',
    '/src/assets/images/House-2.avif',
    '/src/assets/images/House-3.jpg',
  ];

  return (
    <div className="testing-container">
      <h1>Welcome to the testing page Paul</h1>
      <p>Get crazy with your ideas but don't be stupid and slow because others are doing it at 10x speed than you.</p>
      <div className="component-section">
        <h2>ImageViewer Component</h2>
        <ImageViewer images={images} />
      </div>
      <div className="component-section">
        <h2>ContactFormModal Component</h2>
      </div>
    </div>
  );
};

export default Testing;