import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonGroup from '../components/Button';
import TextArea from '../components/Textarea';
import SelectInput from '../components/Select';
import { BookingContext } from '../../../context/BookingContext';
import Input from '../components/Input';

const Requirement = () => {
  const { bookingDetails, setBookingDetails, setActiveStep } = useContext(BookingContext);
  const navigate = useNavigate();

  // Options for each category
  const cleaningDayOptions = ['Flexible', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const cleaningTimeOptions = ['Flexible - anytime', 'Morning - before 12pm', 'Afternoon - after 12pm'];
  const meetCleanerFirstOptions = ['Yes', 'No'];
  const parkingAvailableOptions = ['Parking is available', 'No parking available'];
  const petOptions = ['No pets', 'Dogs', 'Cats', 'Other'];
  const ironingOptions = ['Yes', 'No'];
  const accessPropertyOptions = ['I will provide keys', 'I will let the cleaner in'];
  const referralOptions = ['Google', 'Instagram', 'Facebook', 'X', 'WhatsApp'];

  // Update booking details
  // const handleSelectionChange = (name, value) => {
  //   setBookingDetails((prevDetails) => ({
  //     ...prevDetails,
  //     [name]: value,
  //   }));
  // };

  const handleSelectionChange = (name, value) => {
    setBookingDetails((prevDetails) => {
      let currentValue = prevDetails[name];

      if (name === 'cleaningDays') {
        if (value === 'Flexible') {
          // If "Flexible" is selected, clear all other selections
          return { ...prevDetails, [name]: 'Flexible' };
        } else {
          // If "Flexible" is already selected, clear it and add the new value
          if (currentValue === 'Flexible') {
            currentValue = [];
          }

          // Toggle selection of the value
          if (Array.isArray(currentValue)) {
            const isSelected = currentValue.includes(value);
            const updatedValue = isSelected
              ? currentValue.filter((day) => day !== value)
              : [...currentValue, value];

            return { ...prevDetails, [name]: updatedValue };
          } else {
            return { ...prevDetails, [name]: [value] };
          }
        }
      }

      // Handle other fields normally
      return { ...prevDetails, [name]: value };
    });
  };


  // Navigate to the next step
  const handleContinue = () => {
    if (bookingDetails.cleaningDays && bookingDetails.hours) {
      setActiveStep(3);
      navigate('/appointment/details');
    } else {
      alert('Please fill all required fields.');
    }
  };

  return (
    <div>
      {/* Cleaning Day */}
      <ButtonGroup
        title="What is your preferred cleaning day?"
        description="We will have more choice of available cleaners if you are flexible regarding the cleaning day and start time."
        options={cleaningDayOptions}
        selected={Array.isArray(bookingDetails.cleaningDays) ? bookingDetails.cleaningDays : [bookingDetails.cleaningDays]}
        onSelect={(value) => handleSelectionChange('cleaningDays', value)}
      />


      {/* Cleaning Time */}
      <ButtonGroup
        title="What time would you prefer?"
        options={cleaningTimeOptions}
        selected={bookingDetails.cleaningTime}
        onSelect={(value) => handleSelectionChange('cleaningTime', value)}
      />

      {/* Meet Cleaner First */}
      <ButtonGroup
        title="Do you want to meet your cleaner first?"
        description="If you are passing on a set of keys so the cleaner can access your property, you should arrange to meet them first."
        options={meetCleanerFirstOptions}
        selected={bookingDetails.meetCleanerFirst}
        onSelect={(value) => handleSelectionChange('meetCleanerFirst', value)}
      />

      {/* Start Date */}
      <h6>When would you like your service to start?</h6>
      <Input
        type={"date"}
        // description="Please let us know at least 2 different dates & times:"
        value={bookingDetails.startDate || ''}
        onChange={(e) => handleSelectionChange('startDate', e.target.value)}
      />

      {/* Parking Availability */}
      <ButtonGroup
        title="Is parking available nearby?"
        description="If you are passing on a set of keys so the cleaner can access your property, you should arrange to meet them first."
        options={parkingAvailableOptions}
        selected={bookingDetails.parkingAvailable}
        onSelect={(value) => handleSelectionChange('parkingAvailable', value)}
      />

      {/* Pets */}
      <ButtonGroup
        title="Do you require any ironing?"
        options={ironingOptions}
        selected={bookingDetails.ironing}
        onSelect={(value) => handleSelectionChange('ironing', value)}
      />

      <ButtonGroup
        title="Do you have any pets?"
        options={petOptions}
        selected={bookingDetails.pet}
        onSelect={(value) => handleSelectionChange('pet', value)}
      />

      {/* Access Property */}
      <ButtonGroup
        title="How will your cleaner access the property?"
        options={accessPropertyOptions}
        selected={bookingDetails.accessProperty}
        onSelect={(value) => handleSelectionChange('accessProperty', value)}
      />

      {/* Additional Comments */}
      <TextArea
        title="Do you have any further comments or required information for us?"
        placeholder="Enter your message"
        value={bookingDetails.comment || ''}
        onChange={(e) => handleSelectionChange('comment', e.target.value)}
      />

      {/* Referral Source */}
      <SelectInput
        title="Where did you hear about us?"
        options={referralOptions}
        before_select="Please select"
        name="referral"
        value={bookingDetails.referral || ''}
        onChange={(e) => handleSelectionChange('referral', e.target.value)}
      />

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
  );
};

export default Requirement;