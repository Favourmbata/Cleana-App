import React from 'react'
import Faq from './Faq'
import { allFAQs } from '../../../../constants/dummy'


const Faqsection = () => {

  return (
    <div className="faq padding-tb">
      <div className="container">
        <div className="section__wrapper">
          <div className="row g-xl-4 g-5 justify-content-between align-items-center">
            <div className="col-xl-6 col-lg-8 col-12">
              <div className="faq__content wow fadeInUp" data-wow-delay=".5s">
                <div className="section__header">
                  <h5>Our Company FAQs <img src="/images/header/section/02.png" alt="Cleana" /></h5>
                  <h2>Frequently Asked Question from Our Clients</h2>
                  <p>We are proud to offer top rangen comprehensve employmen services such and aser payroll and benefts adminitration management and asstance with global business range employment employer compliance.</p>
                </div>
                <div className="accordion accordion-flush" id="faqAccordion">
                  {allFAQs.map((item, index) => (
                    <Faq
                      key={index}
                      major_content={item.major_content}
                      minor_content={item.minor_content}
                    />
                  ))}

                  {/* <div className="accordion-item">
                    <h6 className="accordion-header" id="faqTwo">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <span className="accordion-headerText">Our proprietary enables Quality</span>
                      </button>
                    </h6>
                    <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="faqTwo" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        <p>Since 2000 we have beans and visionary and are reliable software engineering partner for worlds class brands an We are an boutique digital transformation consultancy.</p>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h6 className="accordion-header" id="faqThree">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <span className="accordion-headerText">How stay calm from the first time</span>
                      </button>
                    </h6>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="faqThree" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        <p>Since 2000 we have beans and visionary and are reliable software engineering partner for worlds class brands an We are an boutique digital transformation consultancy.</p>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h6 className="accordion-header" id="faqFour">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        <span className="accordion-headerText">Visit our office and see services</span>
                      </button>
                    </h6>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="faqFour" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        <p>Since 2000 we have beans and visionary and are reliable software engineering partner for worlds class brands an We are an boutique digital transformation consultancy.</p>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-4 col-12">
              <div className="faq__thumb wow fadeInUp" data-wow-delay=".5s">
                <img src="/images/faq/01.png" alt="Cleana" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faqsection
