import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PostalCode = () => {
  const [postalCode, setPostalCode] = useState('');
  const [postalData, setPostalData] = useState(null);
  const [error, setError] = useState(null);
  
  const navigate = useNavigate();

  const handlePostalSearch = async () => {
    if (!postalCode) {
      setError('Please enter a postal code.');
      return;
    }

    try {
      const response = await fetch(
        `https://perfect-maid-backend.onrender.com/api/v1/booking/address/${postalCode}`
      );
      const data = await response.json();

      if (data.length > 0) {
        setPostalData(data[0]); 
        navigate('/local-office');
      } else {
        setError('No data found for this postal code.');
      }
    } catch (err) {
      setError('Failed to fetch postal data');
    }
  };

  return (
    <div className="bg-[#26223d] py-10 text-center postal-container"
     style={{
    background: "#26223d",
    textAlign: "center",
    paddingTop: "40px",
    paddingBottom: "40px",
    borderRadius: "12px",
    maxWidth: "1000px",
    margin: "0 auto",
    width: "100%",
      
      }}
      >
     <p className=" text-[#1f2a59] text-xl font-medium max-w-xl mx-auto" 
     style={{
      marginBottom: "20px",
      color:"#ffff"
      }}>
    As one of the UK's leading cleaning agencies we have years of <br/>
    experience in sourcing excellent cleaners for all of our clients. <br/>
    Leave the cleaning of your home to the professionals.
  </p>
  <div className="d-flex justify-content-center flex-column flex-md-row gap-3 mt-4 postal-flex px-5 " 
 
   >
     <div className="w-90" style={{ maxWidth: "320px"}}>
          <input
            type="text"
            placeholder="Enter postal code"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            className="form-control"
          />
        </div>
          <div className="w-90   " style={{ maxWidth: "320px"}}>
          <button
            className="btn btn-success  h-100"
            onClick={handlePostalSearch}
          >
            Find my local office
          </button>
        </div>

       </div>

  {error && <p className="text-red-500 text-sm mt-4">{error}</p>}

   <style>
    {`
      @media (max-width: 640px) {
        .flex {
          flex-direction: column !important;
        }
        
        input, button {
        width: 100% !important;
        padding-left: 20px !important;
        padding-right: 20px !important;
        padding-top: 10px !important;
        padding-bottom: 10px !important;
      }
         
           
    `}
  </style>
  

</div>

  );
};

export default PostalCode;
