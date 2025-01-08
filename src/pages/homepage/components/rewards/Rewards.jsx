import React from 'react'

const Rewards = () => {
  return (
    <>
      <div className="counter counter--one padding-tb bg-img" style={{ backgroundImage: "url(/images/bg/02.jpg)" }}>
        <div className="container">
          <div className="section__header text-center wow fadeInUp" data-wow-delay=".5s">
            <h5><img src="/images/header/section/03.png" alt="Cleana" /> Our best achievement <img src="/images/header/section/04.png" alt="Cleana" /></h5>
            <h2>We feel very proud for our great achievement</h2>
          </div>
          <div className="section__wrapper">
            <div className="row justify-content-center g-4">
              <div className="col-xl-3 col-lg-4 col-sm-6 col-12 wow fadeInUp" data-wow-delay=".5s">
                <div className="counter__item">
                  <div className="counter__thumb">
                    <img src="/images/counter/icon/01.png" alt="rajib raj" />
                  </div>
                  <div className="counter__count">
                    <h3 className="odometer" data-odometer-final="1984">0</h3>
                  </div>
                  <div className="counter__title">
                    <h6>Happy Clients</h6>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-12 wow fadeInUp" data-wow-delay=".5s">
                <div className="counter__item">
                  <div className="counter__thumb">
                    <img src="/images/counter/icon/02.png" alt="rajib raj" />
                  </div>
                  <div className="counter__count">
                    <h3 className="odometer" data-odometer-final="999">0</h3>
                  </div>
                  <div className="counter__title">
                    <h6>Service Guarantee</h6>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-12 wow fadeInUp" data-wow-delay=".5s">
                <div className="counter__item">
                  <div className="counter__thumb">
                    <img src="/images/counter/icon/03.png" alt="rajib raj" />
                  </div>
                  <div className="counter__count">
                    <h3 className="odometer" data-odometer-final="144">0</h3>
                  </div>
                  <div className="counter__title">
                    <h6>total Cleaners</h6>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-12 wow fadeInUp" data-wow-delay=".5s">
                <div className="counter__item">
                  <div className="counter__thumb">
                    <img src="/images/counter/icon/04.png" alt="rajib raj" />
                  </div>
                  <div className="counter__count">
                    <h3 className="odometer" data-odometer-final="180">0</h3>
                  </div>
                  <div className="counter__title">
                    <h6>Cleans Completed</h6>
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

export default Rewards
