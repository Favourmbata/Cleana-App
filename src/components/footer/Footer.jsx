import React from 'react'
import { Link } from 'react-router-dom'
import "../footer/Footer.css"
import { dummyContent } from '../../constants/dummy';

const Footer = () => {
  const date = new Date().getFullYear();

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return (
    <div className='footer_section text-lg-start'>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-12">
            <h4>Pages</h4>

            {dummyContent?.header.map((item, index) => (
              <Link onClick={goToTop} to={item.link} key={index}><p>{item.name}</p></Link>
            ))}
          </div>

          <div className="col-md-3 col-12">
            <h4>Contact Us</h4>
            <p>+234 906 369 7571</p>
            <p>Mon-Fri : 09:30pm - 06:24pm</p>
            <p>
              <a href="mailto:contact@naijabills.com">
                Email: contact@cleaningservices.com
              </a>
            </p>
          </div>

          <div className="col-md-6 col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.4729943540465!2d3.362393339553237!3d6.587977753198212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b926a76c393a9%3A0xeb56c08a8639c34a!2s75%20Opebi%20Rd%2C%20Opebi%2C%20Ikeja%20101233%2C%20Lagos!5e0!3m2!1sen!2sng!4v1715088503098!5m2!1sen!2sng"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className='img-fluid w-100 h-100'></iframe>
          </div>
        </div>
      </div>

      <div className='container mt-5'>
        <div className="row">
          <div className="col-lg-12 col-12">
            <div className="copyright_section text-center">
              <p> &copy; Copyright oluwafemidave {date}. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer