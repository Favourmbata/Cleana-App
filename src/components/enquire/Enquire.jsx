import React, { useState } from 'react'
import { contactApi, enquiryApi } from '../../../apis/contact';
import { useMutation } from '@tanstack/react-query';
import { ButtonLoader } from '../../../Utils/Utils';
import toast from 'react-hot-toast';

export const Enquire = () => {

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

  const { mutateAsync, isPending } = useMutation({ mutationFn: enquiryApi })

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await mutateAsync(formData)
      toast.success(`Enquiry Submitted Successfully`)
      setFormData({
        fullName: "",
        phoneNumber: "",
        emailAddress: "",
        postcode: "",
        enquiryType: "",
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
                  <p>Simply leave your name and a form of contact, and we'll get back to you as soon as possible.</p>
                  <div className="section__wrapper">
                    <form onSubmit={handleSubmit}>
                      <div className="row g-4">
                        <div className="col-12">
                          <input required value={formData.fullName} onChange={handleChange} type="text" placeholder="Full name*" name="fullName" id="name" />
                        </div>
                        <div className="col-md-6 col-12">
                          <input required type="email" value={formData.emailAddress} onChange={handleChange} placeholder="Email*" name="emailAddress" id="company" />
                        </div>
                        <div className="col-md-6 col-12">
                          <input required type="number" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone number*" name="phoneNumber" id="email" />
                        </div>
                        <div className="col-md-6 col-12">
                          <input required type="text" value={formData.postcode} onChange={handleChange} placeholder="Postcode*" name="postcode" id="subject" />
                        </div>
                        <div className="col-md-6 col-12">
                          <select
                            required
                            value={formData.enquiryType}
                            onChange={handleChange}
                            name="enquiryType"
                            id="enquiryType"
                          >
                            <option value="" disabled>Select Enquiry Type</option>
                            <option value="weekly-cleaner">Having a weekly cleaner</option>
                            <option value="fortnight-cleaner">Having a cleaner fortnight</option>
                            <option value="one-off-clean">Having one-off clean</option>
                            <option value="existing-client">I'm an existing client</option>
                            <option value="cleaning-job">Looking for a cleaning job</option>
                          </select>
                        </div>
                        <div className="col-12">
                          <textarea required name="message" value={formData.message} onChange={handleChange} id="message" rows="5" placeholder="Message"></textarea>
                        </div>
                        <div className="col-12">
                          <button type="submit" className="lab-btn" disabled={check}>
                            {check ? <ButtonLoader />
                              :
                              <span>Send enquiry</span>
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