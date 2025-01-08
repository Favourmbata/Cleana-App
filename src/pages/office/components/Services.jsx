import React from 'react'

const Services = () => {
  return (
    <div className="choose choose--one padding-tb bg-img" style={{backgroundImage: "url(/images/bg/03.jpg)"}}>
    <div className="container">
      <div className="row">
        <div className="col-xl-6 col-lg-8 col-12">
          <div className="section__header ms-0 wow fadeInUp" data-wow-delay=".5s">
            <h5>Why Choose Us <img src="/images/header/section/02.png" alt="pricing" /></h5>
            <h2>Our Expertise Making Your Business Shine</h2>
            <p>We are proud to offer top rangen comprehensve employmen services such and aser payroll and benefts adminitration management and asstance with global business range employment employer compliance.</p>
          </div>
          <div className="section__wrapper wow fadeInUp" data-wow-delay=".5s">
            <div className="row g-4">
              <div className="col-sm-6 col-12">
                <div className="choose__item">
                  <div className="choose__thumb">
                    <img src="/images/choose/icon/01.png" alt="pricing" />
                  </div>
                  <div className="choose__content">
                    <h5>Affordable Pricings</h5>
                    <p>Sed ut perspicuity's under Omnis site nates ersatz access</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-12">
                <div className="choose__item">
                  <div className="choose__thumb">
                    <img src="/images/choose/icon/02.png" alt="pricing" />
                  </div>
                  <div className="choose__content">
                    <h5>Instant Order Update</h5>
                    <p>Sed ut perspicuity's under Omnis site nates ersatz access</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-12">
                <div className="choose__item">
                  <div className="choose__thumb">
                    <img src="/images/choose/icon/03.png" alt="pricing" />
                  </div>
                  <div className="choose__content">
                    <h5>Best Clean Results</h5>
                    <p>Sed ut perspicuity's under Omnis site nates ersatz access</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-12">
                <div className="choose__item">
                  <div className="choose__thumb">
                    <img src="/images/choose/icon/04.png" alt="pricing" />
                  </div>
                  <div className="choose__content">
                    <h5>Express Fast Delivery</h5>
                    <p>Sed ut perspicuity's under Omnis site nates ersatz access</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        {/* <a href="appointment.html" className="lab-btn">Book Appointment</a> */}
    </div>
  </div>
  )
}

export default Services
