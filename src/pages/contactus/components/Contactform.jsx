import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react'
import { contactApi } from '../../../../apis/contact';
import toast from 'react-hot-toast';
import { ButtonLoader } from '../../../../Utils/Utils';

const Contactform = () => {

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    postcode: "",
    message: ""
  })

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name] : value})
  }

  const { mutateAsync, isPending } = useMutation({ mutationFn: contactApi })

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await mutateAsync(formData)
      toast.success(response?.message || `Contact Submitted Successfully`)
      setFormData({
        fullName: "",
        phoneNumber: "",
        emailAddress: "",
        postcode: "",
        message: ""
      })
    } catch (error) {
      toast.error(`${error?.message}`)
    }

  }

  const check = isPending

  return (
    <>
      <div>
        <div className="contact contact--one padding-tb pt-0">
          <div className="container">
            <div className="contact__area">
              <div className="row">
                <div className="col-xl-6 col-lg-8 col-12">
                  <div className="section__header">
                    <h5>Get a Free Estimate <img src="/images/header/section/01.png" alt="rajibraj" /></h5>
                     <h2>Contact for the Services</h2>
                  </div>
                  <div className="section__wrapper">
                    <form onSubmit={handleSubmit}>
                      <div className="row g-4">
                        <div className="col-12">
                          <input required value={formData.fullName} onChange={handleChange}  type="text" placeholder="Full name*" name="fullName" id="name" />
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
                          <textarea required name="message" value={formData.message} onChange={handleChange} id="massage" rows="8" placeholder="Massage"></textarea>
                        </div>
                        <div className="col-12">
                          <button type="submit" className="lab-btn" disabled={check}>
                            {check ? <ButtonLoader />
                            :
                            <span>submit now</span>
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
    </>
  )
}

export default Contactform;