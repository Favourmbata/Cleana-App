import React, { useState } from 'react'
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { complaintApi } from '../../../../apis/contact';
import { ButtonLoader } from '../../../../Utils/Utils';

export const Complaint = () => {

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    postcode: "",
    enquiryType: "",
    message: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
  }

  const { mutateAsync, isPending } = useMutation({ mutationFn: complaintApi })

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await mutateAsync(formData)
      toast.success(`Complain Submitted Successfully`)
      setFormData({
        fullName: "",
        phoneNumber: "",
        emailAddress: "",
        postcode: "",
        message: ""
      });
    } catch (error) {
      toast.error(`${error?.message}`)
    }
  }

  const check = isPending

  return (
    <>
      <div>
        <div className="contact padding-tb pt-0">
          <div className="container">
            <div className=".contact__area">
              <div className="row">
                <div className="col-12">
                  <p>We're sorry to hear you are having problems. Let us know as much information as possible when submitting a complaint</p>
                  <div className="section__wrapper">
                    <form onSubmit={handleSubmit}>
                      <div className="row g-4">
                        <div className="col-12">
                          <input required value={formData.fullName} onChange={handleChange} type="text" placeholder="Full name*" name="fullName" id="name" />
                        </div>
                        <div className="col-12">
                          <input required type="email" value={formData.emailAddress} onChange={handleChange} placeholder="Email*" name="emailAddress" id="company" />
                        </div>
                        <div className="col-12">
                          <input required type="number" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone number*" name="phoneNumber" id="email" />
                        </div>
                        <div className="col-12">
                          <input required type="text" value={formData.postcode} onChange={handleChange} placeholder="Postcode*" name="postcode" id="subject" />
                        </div>
                        <div className="col-12">
                          <textarea required name="message" value={formData.message} onChange={handleChange} id="massage" rows="5" placeholder="Massage"></textarea>
                        </div>
                        <div className="col-12">
                          <button type="submit" className="lab-btn" disabled={check}>
                            {check ? <ButtonLoader />
                              :
                              <span>Send complain</span>
                            }
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>)
}