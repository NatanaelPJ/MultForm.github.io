import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'

import Form1 from './pages/FormStep1'
import Form2 from './pages/FormStep2'
import Form3 from './pages/FormStep3'
import TheEnd from './pages/TheEnd'
import ErrorPage from './pages/ErrorPage'



export const Routers = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Form1/>} />
          <Route path="/step2"  element={<Form2/>} />
          <Route path="/step3"  element={<Form3/>} />
          <Route path="/theEnd" element={<TheEnd/>} />
          <Route path="*"  element={<ErrorPage/>} />
        </Routes>
      </Router>
    </>
  )
}

