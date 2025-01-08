import React, { useState } from 'react';
import { dummyContent } from '../../constants/dummy';
import { Link, useLocation } from 'react-router-dom';
import { Enquire } from '../enquire/Enquire';

export const Header = () => {
  const { pathname } = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className=".header header--one">
        <div className="header__bottom">
          <div className="container-fluid">
            <div className="area">
              <div className="logo">
                <Link to={"/"}>
                  <img src="/images/header/logo/01.png" alt="logo" />
                </Link>
              </div>
              <div className="main-menu">
                <div className={isOpen ? "menu active" : "menu"}>
                  <ul>
                    {dummyContent.header.map((item) => (
                      <li key={item.link}>
                        {item.name === 'Enquiry' ? (
                          <Link to={"#"}
                          data-bs-toggle="modal" data-bs-target="#exampleModal"
                            className={`${
                              pathname === item?.link && 'text-primary'
                            }`}
                          >
                            {item.name}
                          </Link>
                        ) : (
                          <Link
                            to={item.link}
                            className={`active .fw-normal ${
                              pathname === item?.link && 'text-primary'
                            }`}
                          >
                            {item.name}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                  <Link to={"/appointment"} className="lab-btn">
                    Book Service
                  </Link>
                </div>

                <div className="header__bararea">
                  <div
                    onClick={handleOpen}
                    className={
                      isOpen
                        ? 'header__bar d-xl-none active'
                        : 'header__bar d-xl-none'
                    }
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Bootstrap Modal */}
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
  );
};
