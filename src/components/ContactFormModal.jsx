import React, { useState } from "react";
import "../styles/ContactFormModal.css";

const ContactFormModal = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
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
  );
};

export default ContactFormModal;