import React from 'react'
import Contactform from './components/Contactform'

const Contactus = () => {
  return (
    <>
      <div className="contact contact--three padding-tb">
        <div className="container">
          <div className="section__header text-center">
            <h5><img src="/images/header/section/01.png" alt="Cleana" /> Contact For Services <img src="/images/header/section/02.png" alt="Cleana" /></h5>
            <h2>We’re Here to Help You</h2>
          </div>
          <div className="section__wrapper">
            <div className="row justify-content-center g-4">
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="contact__item">
                  <div className="contact__icon">
                    <img src="/images/contact/icon/01.png" alt="rajib raj" />
                  </div>
                  <div className="contact__content">
                    <h5>Visit Us Daily:</h5>
                    <p>218 New Elephent Road, Gulshan-1060 10 Gren Road, Dhaka-1100.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="contact__item">
                  <div className="contact__icon">
                    <img src="/images/contact/icon/02.png" alt="rajib raj" />
                  </div>
                  <div className="contact__content">
                    <h5>Visit Us Daily:</h5>
                    <p>Monday - Thusday : 9:30am - 6:30pm</p>
                    <p>Friday : <span>Closed</span></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="contact__item">
                  <div className="contact__icon">
                    <img src="/images/contact/icon/03.png" alt="rajib raj" />
                  </div>
                  <div className="contact__content">
                    <h5>Phone number</h5>
                    <p>+880 1234 567 890 <b>292 09 - 845 632</b></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Contactform />
    </>
  )
}

export default Contactus
