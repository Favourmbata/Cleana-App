import React from 'react';
import coffeImage from "../../../../../public/images/banner/businessman1.png";
import "./bookInfo.css"
const BookInfo = () => {
  return (
    <div className="book-info-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', flexWrap: 'wrap' }}>
      <div className="text-container" style={{ flex: 1, paddingRight: '20px' }}>
        <h3>We're local!</h3>
        <p>
          Maid2Clean welcome to my site and Maid2Clean! Thanks for your interest in the cleaning service we provide.
          I am local to the area and have managed this business for years. I take my time to fully vet the cleaners
          that work with me, so you can be rest assured that your cleaning will be top-notch and your home will be
          safe and sound. Don't hesitate to get in touch with me!
        </p>
      </div>
      <div className="image-container">
        <img src={coffeImage} alt="businessman" style={{ maxWidth: '60%', height: 'auto' }} />
      </div>
    </div>
  );
};

export default BookInfo;
