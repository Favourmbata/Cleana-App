import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Enquire } from '../../../../components/enquire/Enquire'
import Contactform from '../../../contactus/components/Contactform'

const Hero = () => {

  return (
    <>
      <div>
        <div className="banner banner--two bg-img" style={{ backgroundImage: "url(/images/banner/bg-2.jpg)" }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-7 col-12">
                <div className="banner__content wow fadeInUp" data-wow-delay=".5s">
                  <div className="banner__thumb">
                    <img src="/images/banner/shape/01.jpg" alt="Cleana" />
                  </div>
                  <h2>need cleaning service?</h2>
                  <p>Our professional and experienced cleaning staff does the job right the first time.</p>
                  {/* <button> */}
                  <Link data-bs-toggle="modal" data-bs-target="#exampleModal"
                    to={"/"} className="lab-btn bg-theme2">Enquire now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-6" id="exampleModalLabel">Enquire about our services</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <Enquire />
            </div>
          </div>
        </div>
      </div>



    </>
  )
}

export default Hero
