import React, { useState } from "react";
import { Bed, Bath, Car, Droplet, Wifi, Phone, Mail } from "lucide-react";
import ImageViewer from "../components/ImageViewer";
import "../styles/ImageViewer.css";
import "../styles/PropertyDetails.css";

const PropertyDetails = () => {
  const [view, setView] = useState("");
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [isImageViewerVisible, setIsImageViewerVisible] = useState(true);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const images = [
    "/src/assets/images/House-1.jpg",
    "/src/assets/images/House-2.avif",
    "/src/assets/images/House-3.jpg",
  ];

  const handleViewChange = (newView) => {
    setView(newView);
    setIsButtonVisible(false);
    setIsImageViewerVisible(false);
  };

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <div className="property-details-container">
      {/* Image Viewer Section */}
      <div className="image-viewer">
        {isImageViewerVisible && view === "" && (
          <ImageViewer
            images={images}
            setShowButton={setIsButtonVisible}
            setShowImageViewer={setIsImageViewerVisible}
          />
        )}
      </div>

      {/* Property Details Section */}
      <div className="property-details">
        {isButtonVisible && (
          <div className="dual-button">
            <span onClick={() => handleViewChange("photos")}>Photos</span>
            <span onClick={() => handleViewChange("virtualTour")}>Virtual Tour</span>
          </div>
        )}

        <div className="property-info-card">
          <div className="property-info">
            <h2>180 Northmead</h2>
            <p>180 N'th Street, Northmead, Lusaka</p>
            <p className="location">Northmead</p>
            <div className="pricing">
              <h3>K2,0000/Month</h3>
            </div>
          </div>
        </div>

        {view === "photos" && (
          <div className="photo-grid">
            <h2>Photo Grid</h2>
            <div className="grid">
              {images.map((image, index) => (
                <img key={index} src={image} alt={`House ${index + 1}`} />
              ))}
            </div>
          </div>
        )}

        {view === "virtualTour" && (
          <div className="virtual-tour">
            <h2>Virtual Tour</h2>
            <iframe
              src="https://example.com/virtual-tour"
              title="Virtual Tour"
              width="100%"
              height="500px"
            ></iframe>
          </div>
        )}

        <div className="amenities">
          <div className="amenity"><Bed size={20} /> 2 Bedrooms</div>
          <div className="amenity"><Bath size={20} /> 2 Bathrooms</div>
          <div className="amenity"><Car size={20} /> 1 Car Parking</div>
          <div className="amenity"><Droplet size={20} /> Running Water</div>
          <div className="amenity"><Wifi size={20} /> Wifi</div>
        </div>

        <div className="property-description">
          <h2>Property Description</h2>
          <p>
            This beautiful property located in Northmead offers a serene environment with modern amenities.
            The house features spacious bedrooms, a well-equipped kitchen, and a cozy living room.
            The property is perfect for families looking for a comfortable and convenient living space.
          </p>
        </div>

        <div className="additional-amenities">
          <h2>Additional Amenities</h2>
          <ul>
            <li>Swimming Pool</li>
            <li>Gym</li>
            <li>24/7 Security</li>
            <li>Backup Generator</li>
            <li>Children's Play Area</li>
          </ul>
        </div>

        {/* Request Tour Button and Popup */}
        <div className="request-tour-container">
          <button className="request-tour-button" onClick={togglePopup}>
            Request Tour
          </button>

          {isPopupVisible && (
            <div className="popup-overlay">
              <div className="popup-content">
                <h2>Schedule a Tour</h2>
                <form>
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input type="text" id="firstName" name="firstName" required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="email@example.com"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="moveInDate">Move-In Date *</label>
                    <input type="date" id="moveInDate" name="moveInDate" required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="tel" id="phone" name="phone" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="preferredDate">Preferred Date</label>
                    <input type="date" id="preferredDate" name="preferredDate" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Custom Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      placeholder="I would like to schedule a tour."
                      maxLength="400"
                    ></textarea>
                    <small>32 out of 400 characters</small>
                  </div>

                  <div className="form-group checkbox-group">
                    <input type="checkbox" id="emailListings" name="emailListings" />
                    <label htmlFor="emailListings">
                      Email me listings and apartment-related info
                    </label>
                  </div>

                  <button type="submit" className="submit-button">
                    Send Message
                  </button>
                </form>

                <button className="close-button" onClick={togglePopup}>
                  &times;
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="contact-form">
          <h2>Contact Us</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="4" required></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>

        <div className="contact-info">
          <h2>Contact Information</h2>
          <p><Phone size={20} /> +260 123 456 789</p>
          <p><Mail size={20} /> info@example.com</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
