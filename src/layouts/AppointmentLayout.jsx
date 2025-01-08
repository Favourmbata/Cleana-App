import React from 'react'
import { Outlet } from 'react-router-dom'

const AppointmentLayout = () => {
  return (
    <>
      <div>

        <div class="pageheader padding-tb bg-img" style={{ backgroundImage: "url(/images/header/section/pageheader.jpg)" }}>
          <div class="container">
            <div class="pageheader__area text-center">
              <h2>Appointment</h2>
            </div>
          </div>
        </div>

        <div className="contact contact--two" style={{ backgroundImage: "url(assets/images/bg/04.jpg)" }}>
          <div className="container">
            <div className="contact__area">
              <div className="row g-5 align-items-center">
                <Outlet />
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
    </>
  )
}

export default AppointmentLayout
