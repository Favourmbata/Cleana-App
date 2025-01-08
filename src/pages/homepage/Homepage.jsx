import React from 'react'
import Hero from './components/hero/Hero'
import ContactServices from './components/contactservices/ContactServices'
import Faqsection from './components/faqs/Faqsection'
import Rewards from './components/rewards/Rewards'

export const Homepage = () => {

  return (
    <div>
      <Hero />
      {/* <ContactServices /> */}
      <Faqsection />
      <Rewards />

    </div>
  )
}