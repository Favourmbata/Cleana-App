import React from 'react'
import { Link } from 'react-router-dom'
import { CircleGauge, Bolt } from 'lucide-react';


export const sidebarConst = {
  dashboard: [
    {
      name: "Dashboard",
      link: "/dashboard",
      icon: <CircleGauge />
    },
    {
      name: "Recruitments",
      link: "/recruitments",
      icon: <Bolt />
    },

    {
      name: "Enquires",
      link: "/enquires",
      icon: <Bolt />
    },

    {
      name: "Contacts",
      link: "/contacts",
      icon: <Bolt />
    },
  ],

}


const Sidebar = () => {
  return (
    <>
      <div className="sidebar" id="sidebar" style={{ overflow: "scroll" }}>
        <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul className="sidebar-vertical">
              {sidebarConst.dashboard.map((res, index)=>(
                <li key={index}><Link to={res.link}>{res.icon} <span>{res.name}</span></Link></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
