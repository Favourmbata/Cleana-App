import React from 'react';
import image from "../../../../../public/images/banner/medium-shot-smiley-man-servant-cleaning-table.jpg";
import "./Booking.css"
const Book = () => {
  return (
    <div>
     
      <div
        className=""
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '400px',
        }}
      >
        <h1 className="online">
          Book a trusted cleaner online within minutes
        </h1>
      </div>

      
      <div class="booking-container">
    <div class="form-section">
    <h2 className=''>Where do you require cleaning?</h2>
    <p>Our rates vary across postcodes, so we need to know what the <br/> postcode of your property is.</p>
    <form>
      <input type="text" placeholder="Postcode"  />
      <input type="email" placeholder="Email address"  />
      <button type="submit" className='rounded-md'  >Start online booking</button>
    </form>
  </div>

  <div class="why-section">
    <h3>Why Maid2Clean?</h3>
    <ul>
      <li><span class="check-icon">✔</span> Over 4 million house cleans to date</li>
      <li><span class="check-icon">✔</span> Affordable rates</li>
      <li><span class="check-icon">✔</span> Established cleaning company</li>
      <li><span class="check-icon">✔</span> Reference checked local cleaners</li>
      <li><span class="check-icon">✔</span> Insurance coverage provided</li>
      <li><span class="check-icon">✔</span> Interview cleaner before starting</li>
      <li><span class="check-icon">✔</span> Top rated cleaning services</li>
      <li><span class="check-icon">✔</span> 91% of clients recommend us</li>
    </ul>
  </div>
</div>

    </div>
  );
};

export default Book;
