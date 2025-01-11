

import React,{useState} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import image from "../../../../../public/images/banner/medium-shot-smiley-man-servant-cleaning-table.jpg";
import EnquiryModal from '../enquiry/EnquiryModal';
import BookInfo from "../book/BookInfo"
const LocalOffice = () => {
  const location = useLocation();
  const { postalData } = location.state || { postalData: {} };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const navigate = useNavigate();

  const handleBookNow = () => {
   
    navigate("/book");  
     
  };
  const handleSubmit = (formData) => {
    console.log('Form submitted:', formData);
  };
  return (
    <div>
    <div>
      <div
        className="relative flex items-center justify-center text-center h-96"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '400px',
        }}
      >
      </div>

      <div
        className="text-white"
        style={{
          background: "#26223d",
          textAlign: "center",
          paddingTop: "40px",
          paddingBottom: "40px",
          borderRadius: "12px",
          maxWidth: "1000px",
          margin: "20px auto",
          width: "100%",
        }}
      >
        <h1 className="text-lg font-bold mb-4">{postalData.location || ''}</h1>
        <p className="mb-4 px-4" >
          {postalData.info || 'Living in Nigeria can be stressful,so why make life more stressful by doing the cleaning yourself? Get one of our highly experienced house cleaners to give your home that good-as-new look! Regular and one-off cleaning services are available.'}
        </p>

        <div className="d-flex justify-content-center flex-column flex-md-row gap-3 mt-4  px-5" >
          <button
            className="btn btn-success h-100 "
            onClick={handleBookNow}
            style={{
              background: '#8cc63f',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '6px',
              color: 'white',
              maxWidth: "350px",
              
              
            }}
          >
            Book Your Cleaner Online
          </button>
          <button
            className="btn btn-success h-100 w-80"
            onClick={handleOpenModal}
            style={{
              background: '#8cc63f',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '6px',
              color: 'white',
                maxWidth:"350px",
              
            }}
          >
            Enquire about our service
          </button>
        </div>
     
      </div>
      <EnquiryModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        onSubmit={handleSubmit} 
      />
    </div>
     <BookInfo/>
    </div>
  );
};

export default LocalOffice;
