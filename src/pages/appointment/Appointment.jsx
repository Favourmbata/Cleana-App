import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Input from './components/Input'

const Appointment = () => {
  const navigate = useNavigate()
  const [payload, setPayload] = useState({
    post_code: "",
    email: ""
  })

  const handleChange = (e) => {
    const {name, value} = e.target;
    setPayload({...payload, [name] : value})
  }

  const handleSubmit = () => {
    if(!payload.email || !payload.post_code){
      return null;
    }
    return navigate("/appointment/frequency")
  }

  return (
    <>
      <div className="col-lg-6 col-12">
        <div className="section__header wow fadeInUp" data-wow-delay=".5s">
          {/* <h5>Get a Free Estimate <img src="/images/header/section/01.png" alt="rajibraj" /></h5> */}
          <h2>Book Services with a cleaner</h2>
        </div>
        <div className="section__wrapper wow fadeInUp" data-wow-delay=".5s">
          <form onSubmit={handleSubmit}>
            <div className="row g-4">
              <Input
                className={""}
                placeholder={"Post code*"}
                type={"text"}
                onChange={handleChange}
                value={payload.post_code}
                name={"post_code"}
              />

              <Input
                className={""}
                placeholder={"email address*"}
                type={"email"}
                onChange={handleChange}
                value={payload.email}
                name={"email"}
              />
              <div className="col-12">
                  <button type="submit" className="lab-btn">Proceed</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Appointment
