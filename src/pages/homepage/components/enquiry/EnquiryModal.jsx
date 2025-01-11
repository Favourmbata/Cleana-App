
import React, { useState } from 'react';
import axios from 'axios';
import "./enquiry.css";

const EnquiryModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    postcode: '',
    enquiryType: '',
    message: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://perfect-maid-backend.onrender.com/api/v1/enquiry', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (response.status) {
        setSuccess('Enquiry sent successfully!');
        setError('');  
      }

     
      setFormData({
        fullName: '',
        phoneNumber: '',
        emailAddress: '',
       postcode: '',
        enquiryType: '',
        message: ''
      });

    } catch (err) {
     
      console.error(err.response ? err.response.data : err.message);
      setError('Failed to send enquiry. Please try again.');
      setSuccess('');  
    }
    onClose();  
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="modal-close-button" onClick={onClose}>×</button> 
        <h2 className="modal-header">Enquire about our services</h2>
        <p className="modal-description">
          Simply leave your name and a form of contact, and we'll get back to you as soon as possible.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="telephonenumber">Telephone Number</label>
              <input
                type="tel"
                id="phoneNumberr"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group form-group-full">
              <label htmlFor="email">Email Address</label>
              <input
                type="emailAddress"
                id="emailAddress"
                name="emailAddress"
                value={formData.emailAddress}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="postcode">Post Code</label>
              <input
                type="postcode"
                id="postcode"
                name="postcode"
                value={formData.postcode}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="enquiry-type-select">Enquiry Type</label>
              <select
                id="enquiry-type-select"
                name="enquiryType"
                value={formData.enquiryType}
                onChange={handleChange}
                required
              >
                <option value="" disabled selected>Enquiry type?</option>
                <option value="client_weekly">Having a weekly cleaner</option>
                <option value="client_fortnightly">Having a fortnightly cleaner</option>
                <option value="client_oneoff">Having a one-off clean</option>
                <option value="client_existing">I'm an existing client</option>
                <option value="recruitment">Looking for a cleaning job</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
            ></textarea>
          </div>

          <button type="submit" className="modal-submit-button">
            Send Enquiry
          </button>
        </form>

        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
      </div>
    </div>
  );
};

export default EnquiryModal;
