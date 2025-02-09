import React from 'react'
import Service from './Service/Service'
import Details from './Details/Details'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Faq from './FAQ\'s/Faq'



const App = () => {
  return (
    <div >
<<<<<<< Updated upstream
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/service' element={<Service />} />
          <Route path='/details' element={<Details />} />
          <Route path='/faq' element={<Faq />} />
        </Routes>
      </BrowserRouter>
=======
<Service></Service>
<Details></Details>
<Cars></Cars>

>>>>>>> Stashed changes
    </div>
  )
}

export default App