import React, { useState } from 'react'
import Input from '../../appointment/components/Input'
import SelectInput from '../../appointment/components/Select'
import { useMutation } from '@tanstack/react-query';
import { recruitmentApi } from '../../../../apis/contact';
import toast from 'react-hot-toast';

export const Apply = () => {

  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    landline: "",
    phoneNumber: "",
    emailAddress: "",
    street: "",
    town: "",
    postcode: "",
    rightToWork: "",
    immigrationCode: "",
    hoursPerWeek: "",
    workExperience: "",
    referrer: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Recruitment API Mutation
  const { mutateAsync, isPending: sumittingRecruitment } = useMutation({
    mutationKey: ["recruitment"],
    mutationFn: recruitmentApi
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await mutateAsync(formData);
      toast.success(response?.message || "Application submitted successfully!")
      setFormData({
        title: "",
        firstName: "",
        lastName: "",
        landline: "",
        phoneNumber: "",
        emailAddress: "",
        street: "",
        town: "",
        postcode: "",
        rightToWork: "",
        immigrationCode: "",
        hoursPerWeek: "",
        workExperience: "",
        referrer: "",
      });
    } catch (error) {
      toast.error(error?.message)
      console.log("rec error", error)
    }
  };

  const titleOption = ["Mr", "Mrs", "Miss", "DR"]
  const rightToWorkOption = ["UK Citizen / UK Passport", "Student Visa", "Graduate Visa", "Dependent Visa", "Family Visa", "Work Visa", "Business Visa", "Visitor Visa"]
  const hoursPerWeekOption = ["2 hours", "4 hours", "6 hours", "8 hours", "10 hours", "12 hours", "14 hours", "16 hours", "18 hours", "20 hours", "22 hours"]


  return (
    <div className='orderform__area'>

      <h5>Apply for reliable cleaning jobs near you with Perfect Maid Domestic Services Ltd</h5>

      {/* <div className="d-flex gap-4 my-3">
        <SelectInput className={"w-50"} type={"text"} />
        <Input placeholder={"landline"} className={"w-50"} type={"text"} />
      </div> */}
      <form action="" onSubmit={handleSubmit}>

        <div className="mt-5">

          <div className="row">
            <div className="col-6">
              <SelectInput before_select={"Title"}
                options={titleOption}
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </div>

          </div>

          <div className="d-flex gap-4 my-3">
            <Input placeholder={"firstname"} onChange={handleChange} value={formData?.firstName} name={"firstName"} className={"w-50"} type={"text"} />
            <Input placeholder={"lastname"} onChange={handleChange} value={formData?.lastName} name={"lastName"} className={"w-50"} type={"text"} />
          </div>

          <div className="d-flex gap-4 my-3">
            <Input onChange={handleChange} value={formData?.emailAddress} name={"emailAddress"} placeholder={"email address"} className={"w-50"} type={"email"} />
            <Input onChange={handleChange} value={formData?.phoneNumber} name={"phoneNumber"} placeholder={"phone number"} className={"w-50"} type={"number"} />
          </div>

          <div className=".col-6">
            <Input
              pattern="\d{0,11}"
              onInput={(e) => { e.target.value = e.target.value.slice(0, 11); }}
              onChange={handleChange} value={formData?.landline} placeholder={"Landnumber"} type={"text"} name="landline" />
          </div>

        </div>

        <div className='my-4'>
          <div className='fs-4'>Right to work</div>
          <hr className='w-full h-1' />

          <span>
            We need to make sure your Right to Work in the UK is sufficient to be able to work as self-employed with us - we are unable to provide work to anyone that does not meet the requirements for self-employed work.
          </span>
          <div className="row">
            <SelectInput className={"w-50 mt-4 col-6"}
              before_select="What is your Right to Work"
              options={rightToWorkOption}
              name="rightToWork"
              value={formData.rightToWork}
              onChange={handleChange}
            />

            <Input
              placeholder="Town"
              name="town"
              value={formData.town}
              onChange={handleChange}
              type="text"
              className={"w-50 col-6"}
            />

          </div>

        </div>

        <div>
          <div className='fs-4'>Your application</div>
          <hr className='w-full h-1' />

          <div className='d-flex gap-4 flex-column'>

            <div className="d-grid">
              <div className="row">
                <div className="col-6">
                  <SelectInput
                    before_select="Hours per Week"
                    options={hoursPerWeekOption}
                    name="hoursPerWeek"
                    value={formData.hoursPerWeek}
                    onChange={handleChange}
                  />
                </div>

                {/* <div className="col-6">
                  <SelectInput type={"text"} before_select="Do you have your own transport" />
                </div> */}
              </div>
            </div>

            <div className="d-flex gap-4">
              <Input
                placeholder="Postcode"
                name="postcode"
                value={formData.postcode}
                onChange={handleChange}
                type="text"
                className={"w-50"}
              />
              <Input
                placeholder="Immigration Code"
                name="immigrationCode"
                value={formData.immigrationCode}
                maxLength={9}
                onChange={handleChange}
                type="text"
                className={"w-50"}

              />
            </div>

            <textarea name="workExperience" onChange={handleChange} value={formData?.workExperience} id="" rows={5} placeholder="what's your relevant work experience ?" className='w-75'></textarea>
            <textarea name="street" onChange={handleChange} value={formData?.street} id="" rows={3} placeholder="Enter Street" className='w-75'></textarea>
            {/* <SelectInput className={"w-50"} type={"text"} before_select="How did you hear about us" /> */}

          </div>

        </div>

        {/* <div className='my-4'>
          <div className='fs-4'>Reference details</div>
          <hr className='w-full h-1' />

          <span>We require two references before any work is offered by us. To ensure there are no delays in processing your application, please fill in your reference details below. By entering reference details, you give us permission to contact these on your behalf as part of your application.</span>
          <br />
          <br />
          <br />
          <span className='text-danger'>If referee details are not provided below, our team will still request them during our application process.</span>

          <div>

            <div className='fs-4 my-4'>Referee 1</div>
            <div className="row">
              <div className="col-6">
                <SelectInput type={"text"} before_select="Type of Referee" />
              </div>
              <div className="col-6">
                <Input placeholder={"Contact telephone"} type={"number"} />
              </div>

            </div>

            <div className="d-flex gap-4 my-3">
              <Input placeholder={"Full name"} className={"w-50"} type={"text"} />
              <Input placeholder={"Email address"} className={"w-50"} type={"email"} />
            </div>

            <div className="d-flex gap-4 my-3">
              <Input placeholder={"Company name (if applicable)"} className={"w-50"} type={"text"} />
              <Input placeholder={"House no. & street name"} className={"w-50"} type={"text"} />
            </div>

            <div className="d-flex gap-4 my-3">
              <Input placeholder={"Town / city"} className={"w-50"} type={"text"} />
              <Input placeholder={"Postcode"} className={"w-50"} type={"text"} />
            </div>

          </div>


          <div>

            <div className='fs-4 my-4'>Referee 2</div>
            <div className="row">
              <div className="col-6">
                <SelectInput type={"text"} before_select="Type of Referee" />
              </div>
              <div className="col-6">
                <Input placeholder={"Contact telephone"} type={"number"} />
              </div>

            </div>

            <div className="d-flex gap-4 my-3">
              <Input placeholder={"Full name"} className={"w-50"} type={"text"} />
              <Input placeholder={"Email address"} className={"w-50"} type={"email"} />
            </div>

            <div className="d-flex gap-4 my-3">
              <Input placeholder={"Company name (if applicable)"} className={"w-50"} type={"text"} />
              <Input placeholder={"House no. & street name"} className={"w-50"} type={"text"} />
            </div>

            <div className="d-flex gap-4 my-3">
              <Input placeholder={"Town / city"} className={"w-50"} type={"text"} />
              <Input placeholder={"Postcode"} className={"w-50"} type={"text"} />
            </div>

          </div>


          <div>
            <div className='fs-4'>Declaration</div>
            <hr className='w-full h-1' />

            <div>Please select below to confirm you understand that all work through Maid2Clean is strictly on a self-employed basis & all work is built up over a period of time.</div>

            <div>I have read and understood the above statement.</div>

          </div>

        </div> */}

        <button type='submit' className="lab-btn mt-3" disabled={sumittingRecruitment} >
          {sumittingRecruitment ? (
            <span>submitting...</span>
          ) : (
            <span>Apply Now</span>
          )}

        </button>


      </form>






    </div>
  )
}