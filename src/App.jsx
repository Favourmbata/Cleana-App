import { Route, Routes, useLocation } from 'react-router-dom'
import { Homepage } from './pages/homepage/Homepage'
import Office from './pages/office/Office'
import GeneralLayout from './layouts/GeneralLayout'
import Appointment from './pages/appointment/Appointment'
import Contactus from './pages/contactus/Contactus'
import AppointmentLayout from './layouts/AppointmentLayout'
import { useLayoutEffect } from 'react'
import DetailLayout from './layouts/DetailLayout'
import Frequency from './pages/appointment/frequency/Frequency'
import Requirement from './pages/appointment/requirement/Requirement'
import Details from './pages/appointment/detail/Details'
import Complete from './pages/appointment/complete/Complete'
import DashboardLayout from './layouts/DashboardLayout/DashboardLayout'
import Dashboard from './pages/dashboard/Dashboard'
import Settings from './pages/dashboard/Settings'
import "../public/css/style.css"
import Recruitment from './pages/recruitment/Recruitment'
import LocalOffice from './pages/homepage/components/localOffice/LocalOffice'


function App() {

  const { pathname } = useLocation()

  useLayoutEffect(() => {
    window.scroll(0, 0)
  }, [pathname])

  return (
    <>
      <Routes>
        <Route element={<GeneralLayout />}>
          <Route path='/' element={<Homepage />} />
          <Route path='/about' element={<Office />} />
          <Route path='/recruitment' element={<Recruitment />} />
          <Route element={<AppointmentLayout />}>
            <Route path='/appointment' element={<Appointment />} />
          </Route>

          <Route element={<DetailLayout />}>
            <Route path='/appointment/frequency' element={<Frequency />} />
            <Route path='/appointment/requirement' element={<Requirement />} />
            <Route path='/appointment/details' element={<Details />} />
            <Route path='/appointment/complete' element={<Complete />} />
          </Route>

          <Route path='/contact-us' element={<Contactus />} />
          <Route path='/local-office' element={<LocalOffice />} />
        </Route>
        <Route element={<DashboardLayout />} >
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/settings' element={<Settings />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
