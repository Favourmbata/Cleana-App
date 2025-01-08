import React, { useRef, useState } from 'react';
import Input from '../appointment/components/Input';
import { Apply } from './apply/Apply';
import toast from 'react-hot-toast';

const Recruitment = () => {

  return (
    <>
      <div>
        <div className="fourzero py-5">
          <div className="container">
            <div className="section__wrapper">
              <div className="row justify-content-center g-4 align-items-center">
                <div className="col-lg-5 col-12">
                  <div className="fourzero__item">
                    <div className="fourzero__content">
                      <h2>Looking for a flexible part-time Cleaning job</h2>
                      <p>If you're a fantastic cleaner, who's friendly and reliable, we can arrange secure cleaning jobs for you that offer the flexibility and convenience you need to fit around your family and other commitments.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 col-12">
                  <div className="fourzero__item">
                    <div className="fourzero__thumb text-center" >
                      <img src="/images/team/recruitment.avif" alt="rajibraj" className='img-responsive w-full h-full' style={{ borderRadius: "10%" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

          <div>
            <Apply />
          </div>
      </div>
    </>
  );
};

export default Recruitment;