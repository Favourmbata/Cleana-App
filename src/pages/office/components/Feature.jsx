import React from 'react'
import { Complaint } from './Complaint'
import { Link } from 'react-router-dom'

const Feature = () => {
  return (
    <>
      <div className="feature feature--one padding-tb">
        <div className="container">
          <div className="section__header text-center wow fadeInUp" data-wow-delay=".5s">
            <h5><img src="/images/header/section/01.png" alt="Cleana" /> Our Introduction <img src="/images/header/section/02.png" alt="Cleana" /></h5>
            <h2>Reasons Why People Choose Us</h2>
          </div>
          <div className="row justify-content-center align-items-center g-4">
            <div className="col-xl-3 col-md-6 col-12 wow fadeInUp" data-wow-delay=".5s">
              <div className="feature__item text-center">
                <div className="feature__thumb">
                  <img src="/images/feature/icon/01.png" alt="rajibraj" />
                </div>
                <div className="feature__content">
                  <h5>2M+ People Trusted</h5>
                  <p>Experienced counsel in haddock and institutional arbitration in legal hubs like Singapore.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-12 wow fadeInUp" data-wow-delay=".5s">
              <div className="feature__item text-center">
                <div className="feature__thumb">
                  <img src="/images/feature/icon/02.png" alt="rajib raj" />
                </div>
                <div className="feature__content">
                  <h5>Over 400+ cleaner</h5>
                  <p>Experienced counsel in haddock and institutional arbitration in legal hubs like Singapore.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-12 wow fadeInUp" data-wow-delay=".5s">
              <div className="feature__item text-center">
                <div className="feature__thumb">
                  <img src="/images/feature/icon/03.png" alt="rajib raj" />
                </div>
                <div className="feature__content">
                  <h5>100% Satisfaction</h5>
                  <p>Experienced counsel in haddock and institutional arbitration in legal hubs like Singapore.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-12 wow fadeInUp" data-wow-delay=".5s">
              <div className="feature__item text-center">
                <div className="feature__thumb">
                  <img src="/images/feature/icon/04.png" alt="rajib raj" />
                </div>
                <div className="feature__content">
                  <h5>Cost Effective</h5>
                  <p>Experienced counsel in haddock and institutional arbitration in legal hubs like Singapore.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-4">
            <Link
              className="btn btn-primary lab-btn bg-them e2" data-bs-toggle="modal" data-bs-target="#exampleModal"
              to={"/"}>Send Complain</Link>
          </div>
        </div>
      </div>

      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-6" id="exampleModalLabel">Send complaint</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <Complaint />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Feature
