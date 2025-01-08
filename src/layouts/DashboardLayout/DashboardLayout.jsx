import React, { useEffect, useRef, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Sidebar from '../../components/sidebar/Sidebar';
import "../../../public/css/style2.css"

const DashboardLayout = () => {

  const [openDropdown, setOpenDropdown] = useState(false);

  const toggleDropdown = (menuName) => {
    setOpenDropdown(openDropdown === menuName ? null : menuName);
  };

  return (
    <div className="main-wrapper">

      <div className="header">

        <div className="header-left">
          <a href="/" className="logo text-white fs-3">
          Cleaning
            {/* <img src="/img/logo.svg" alt="Logo" /> */}
          </a>
          <a href="/" className="logo collapse-logo">
            {/* <img src="/img/collapse-logo.svg" alt="Logo" /> */}
            CS

          </a>
          <a href="/" className="logo2">
            {/* <img src="/img/logo2.png" width="40" height="40" alt="Logo" /> */}
            CS
          </a>
        </div>

        <a id="toggle_btn" href="javascript:void(0);">
          <span className="bar-icon">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </a>

        <div className="page-title-box">
          <h3>Cleaning Services</h3>
        </div>

        <a id="mobile_btn" className="mobile_btn" href="#sidebar"><i className="fa-solid fa-bars"></i></a>

        <ul className="nav user-menu">

          <li className="nav-item dropdown">
            <a href="#" className="dropdown-toggle nav-link" data-bs-toggle="dropdown">
              <i className="fa-regular fa-bell"></i> <span className="badge rounded-pill">3</span>
            </a>
            <div className="dropdown-menu notifications">
              <div className="topnav-dropdown-header">
                <span className="notification-title">Notifications</span>
                <a href="javascript:void(0)" className="clear-noti"> Clear All </a>
              </div>
              <div className="noti-content">
                <ul className="notification-list">
                  <li className="notification-message">
                    <a href="activities.html">
                      <div className="chat-block d-flex">
                        <span className="avatar flex-shrink-0">
                          <img src="/img/profiles/avatar-02.jpg" alt="User Image" />
                        </span>
                        <div className="media-body flex-grow-1">
                          <p className="noti-details"><span className="noti-title">John Doe</span> added new task <span
                            className="noti-title">Patient appointment booking</span></p>
                          <p className="noti-time"><span className="notification-time">4 mins ago</span></p>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="topnav-dropdown-footer">
                <a href="activities.html">View all Notifications</a>
              </div>
            </div>
          </li>

          <li className="nav-item dropdown has-arrow main-drop">
            <a href="#" className="dropdown-toggle nav-link" data-bs-toggle="dropdown">
              <span className="user-img"><img src="/images/team/11.jpg" alt="User Image" />
                <span className="status online"></span></span>
              <span>Admin</span>
            </a>
            <div className="dropdown-menu">
              <Link className="dropdown-item" to="/profile">My Profile</Link>
              <Link className="dropdown-item" to="/settings">Settings</Link>
              <Link className="dropdown-item" to="/">Logout</Link>
            </div>
          </li>
        </ul>


        <div className="dropdown mobile-user-menu">
          <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i
            className="fa-solid fa-ellipsis-vertical"></i></a>
          <div className="dropdown-menu dropdown-menu-right">
            <a className="dropdown-item" href="profile.html">My Profile</a>
            <a className="dropdown-item" href="settings.html">Settings</a>
            <a className="dropdown-item" href="index.html">Logout</a>
          </div>
        </div>

      </div>

      <Sidebar/>

      <Outlet />
    </div>
  )
}

export default DashboardLayout