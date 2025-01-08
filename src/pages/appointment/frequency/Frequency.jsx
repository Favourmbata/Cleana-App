import React, { useContext, useState } from 'react';
import ButtonGroup from '../components/Button';
import SelectInput from '../components/Select';
import { BookingContext } from '../../../context/BookingContext';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getAllFrequency, getRate } from '../../../../apis/contact';
import Input from '../components/Input';
import toast from 'react-hot-toast';
import { ButtonLoader } from '../../../../Utils/Utils';

const Frequency = () => {
  // Access booking context
  const { bookingDetails, setBookingDetails, setActiveStep } = useContext(BookingContext);
  const navigate = useNavigate();

  const { data: servicesOption, isPending:isFrequencyLoading } = useQuery({
    queryKey: ["frequency"],
    queryFn: getAllFrequency
  })


  console.log("ser opt", servicesOption)

  // const servicesOption = ['Weekly', 'Fortnightly', 'One-off'];

  const hoursOption = [
    '2 hours', '2.5 hours', '3 hours', '3.5 hours', '4 hours', '4.5 hours', '5 hours', '5.5 hours', '6 hours', '6.5 hours', '7 hours', '7.5 hours', '8 hours', '8.5 hours', '9 hours', '9.5 hours', '10 hours',
    '10.5 hours', '11 hours', '11.5 hours', '12 hours', '12.5 hours', '13 hours', '13.5 hours', '14 hours', '14.5 hours', '15 hours', '15.5 hours', '16 hours', '16.5 hours', '17 hours', '17.5 hours', '18 hours', '18.5 hours',
    '19 hours', '19.5 hours', '20 hours', '20.5 hours', '21 hours', '21.5 hours', '22 hours', '22.5 hours', '23 hours', '23.5 hours', '24 hours', '24.5 hours', '25 hours', '25.5 hours', '26 hours', '26.5 hours', '27 hours',
    '27.5 hours', '28 hours', '28.5 hours', '29 hours', '29.5 hours', '30 hours', '30.5 hours', '31 hours', '31.5 hours', '32 hours', '32.5 hours', '33 hours', '33.5 hours', '34 hours', '34.5 hours', '35 hours', '35.5 hours',
    '36 hours', '36.5 hours', '37 hours', '37.5 hours', '38 hours', '38.5 hours', '39 hours', '39.5 hours', '40 hours', '40.5 hours', '41 hours', '41.5 hours', '42 hours', '42.5 hours', '43 hours', '43.5 hours', '44 hours',
    '44.5 hours', '45 hours', '45.5 hours', '46 hours', '46.5 hours', '47 hours', '47.5 hours', '48 hours'
  ];

  const [showDateforOneOff, setShowDateforOneOff] = useState(false);

  // Function to update booking details
  const handleSelectionChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));

    // If "One-off" is selected, show the date input field
    if (value === "One-off") {
      setShowDateforOneOff(true);
    } else {
      setShowDateforOneOff(false);
    }

  };

  const handleContinue = () => {
    // Validate that both required fields are filled
    if (bookingDetails.frequency && bookingDetails.hours) {
      setActiveStep(2);
      navigate('/appointment/requirement');
    } else {
      alert('Please fill all fields.');
    }
  };
  

  return (
    <>
    {isFrequencyLoading ? (
      <div className="d-flex align-items-center">
      <ButtonLoader />
      </div>
    ) : (
    <div>
      {/* Service Frequency */}
      <ButtonGroup
        title="How often do you need our services?"
        options={servicesOption || []}
        selected={bookingDetails.frequency}
        onSelect={(value) => {

          setBookingDetails((prevDetails) => ({
            ...prevDetails,
            frequency: value,
          }));

          if (value === "One-off") {
            setShowDateforOneOff(true);
          } else {
            setShowDateforOneOff(false);
          }
        }}
      />

      {showDateforOneOff && (
        <div>
          <h6>When would you like the clean?</h6>
          <Input
            type="date"
            description="Please note: We do not do end of tenancy or builders cleans & products must be supplied"
            value={bookingDetails.date} // Use this to set the date value
            onChange={(e) => handleSelectionChange(e)} // Handle date change
          />
        </div>
      )}

      {/* Service Hours */}
      <SelectInput
        title="How many hours do you need?"
        description="Did you know? Most clients in NW9-5 require 3 hours per week"
        before_select="please select hours"
        options={hoursOption}
        name="hours"
        value={bookingDetails.hours}
        onChange={handleSelectionChange}
      />

      {/* Discount Code */}
      <div className="mt-5 my-4">
        <h6>Do you have a discount code?</h6>
        <div className="d-flex align-items-center gap-2">
          <input
            className="w-75"
            required
            name="discountCode"
            value={bookingDetails.discountCode || ''}
            onChange={handleSelectionChange}
            type="text"
            placeholder="Enter Code"
          />
          <button
            style={{ fontSize: '14px' }}
            className="btn btn-primary btn-lg px-5 border-radius-1 border-none bg-primary text-white"
          >
            Apply
          </button>
        </div>
      </div>

      {/* Continue Button */}
      <div className="my-5">
        <button
          style={{ fontSize: '18px' }}
          className="btn btn-primary btn-lg px-5 border-radius-1 border-none bg-primary text-white"
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
    </div>

    )}
    </>
  );
};

export default Frequency;