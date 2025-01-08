import React, { useContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import "../pages/appointment/appointment.css";
import { BookingContext } from '../context/BookingContext';
import { useMutation } from '@tanstack/react-query';
import { getRate } from '../../apis/contact';

const DetailLayout = () => {
  const { bookingDetails, activeStep } = useContext(BookingContext);

  const [rateResponse, setRateResponse] = useState("")
  const [ratePayload, setRatePayload] = useState({
    frequency: bookingDetails?.frequency || "",
    hours: bookingDetails?.hour,
    oneOffDate: ""
  })

  const { mutateAsync: getRateMutation } = useMutation({
    mutationKey: ["get-rate"],
    mutationFn: getRate,
    onSuccess: (data) => {
      setRateResponse(data)
      toast.success(data?.message)
    },
    onError: () => {

    }
  })

  useEffect(() => {
    setRatePayload({
      frequency: bookingDetails?.frequency || '',
      hours: bookingDetails?.hours || '',
      oneOffDate: ''
    });
  }, [bookingDetails]);

  useEffect(() => {
    if (ratePayload.frequency && ratePayload.hours) {
      getRateMutation(ratePayload);
    }
  }, [ratePayload.frequency, ratePayload.hours]);


  console.log("resp", rateResponse)
  return (
    <div className='container'>
      <div className="stepper d-flex justify-content-between align-items-center">
        <div className={`step ${activeStep >= 1 ? 'active' : ''}`}>
          <span className="step-number">1</span> Frequency
        </div>
        <div className={`step ${activeStep >= 2 ? 'active' : ''}`}>
          <span className="step-number">2</span> Requirements
        </div>
        <div className={`step ${activeStep >= 3 ? 'active' : ''}`}>
          <span className="step-number">3</span> Details
        </div>
        <div className={`step ${activeStep >= 4 ? 'active' : ''}`}>
          <span className="step-number">4</span> Complete
        </div>
      </div>

      <div className="row g-5">
        <div className="col-12 col-md-6">
          <Outlet />
        </div>

        <div className="col-12 col-md-6">
          <div className="bg-white p-4 my-3">
            <span>Your price</span>
            {rateResponse ? (
              <div className='fs-4'>$ {rateResponse?.cleanerFee} per hour</div>
            ) : (
              <h6>Selected hour</h6>
            )}
          </div>

          <div className="bg-white p-4 my-3 sticky-top">
            <h6>Booking summary</h6>

            <div style={{ fontSize: "14px" }}>
              <p>{bookingDetails.frequency}</p>
              <p> {bookingDetails.hours}</p>
              <p> {bookingDetails.discountCode} </p>
              <p>{bookingDetails.cleaningDays}</p>
              <p> {bookingDetails.cleaningTime}</p>
              <p> {bookingDetails.meetCleanerFirst}</p>
              <p> {bookingDetails.parkingAvailable}</p>
              {bookingDetails.ironing && <p> Ironing : {bookingDetails.ironing}</p>}
              <p> {bookingDetails.pet}</p>
              <p> {bookingDetails.accessProperty}</p>
              <p> {bookingDetails.comment}</p>
              <p> {bookingDetails.referral}</p>
              <div className='d-flex align-items-center gap-1'>
                <div> {bookingDetails.title}</div>
                <div> {bookingDetails.firstname}</div>
                <div> {bookingDetails.lastname}</div>
              </div>
              {bookingDetails.address &&
                <div className='d-flex align-items-center gap-1'>
                  Address: <div> {bookingDetails.address}</div>
                </div>}

                {bookingDetails.mobile_number && (
                  <div className='d-flex align-items-center gap-1'>
                    Tel: <div> {bookingDetails.mobile_number}</div>
                  </div>
                )}

              <div> {bookingDetails.landline}</div>

              {bookingDetails.email && (
                <div className='d-flex align-items-center gap-1'>
                  Email: <div> {bookingDetails.email}</div>
                </div>
              )}

              {bookingDetails.preferedContact && (
                <div className='d-flex align-items-center gap-1'>
                  Preferred Contact Method: <div> {bookingDetails.preferedContact}</div>
                </div>
              )}
              <hr />
            </div>
            Booking for NW95BZ
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailLayout;
