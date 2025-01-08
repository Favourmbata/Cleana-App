import React from 'react'

const ContactServices = () => {
  return (
    <div>
      <div className="contact contact--two" style={{ backgroundImage: "url(assets/images/bg/04.jpg)" }}>
        <div className="container">
          <div className="contact__area">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6 col-12">
                <div className="section__header wow fadeInUp" data-wow-delay=".5s">
                  <h5>Get a Free Estimate <img src="/images/header/section/01.png" alt="rajibraj" /></h5>
                  <h2>Contact for the Services</h2>
                </div>
                <div className="section__wrapper wow fadeInUp" data-wow-delay=".5s">
                  <form action="#">
                    <div className="row g-4">
                      <div className="col-sm-6 col-12">
                        <input type="text" placeholder="your name*" name="name" id="name" />
                      </div>
                      <div className="col-sm-6 col-12">
                        <input type="text" placeholder="Company*" name="company" id="company" />
                      </div>
                      <div className="col-sm-6 col-12">
                        <input type="text" placeholder="Email Address*" name="email" id="email" />
                      </div>
                      <div className="col-sm-6 col-12">
                        <input type="text" placeholder="Subjects*" name="subject" id="subject" />
                      </div>
                      <div className="col-12">
                        <textarea name="massage" id="massage" rows="8" placeholder="Massage"></textarea>
                      </div>
                      <div className="col-12">
                        <button type="submit" className="lab-btn">submit now</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="contact__thumb wow fadeInUp" data-wow-delay=".5s">
                  <img src="/images/contact/01.png" alt="Cleana" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>    
    </div>
  )
}

export default ContactServices
