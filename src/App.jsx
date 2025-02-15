import React from 'react'
import Service from './Service/Service'
import Details from './Details/Details'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Faq from './FAQ\'s/Faq'
import Mashina from './Mashina/Mashina'

import About from './about/About'

const App = () => {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/service' element={<Service />} />
          <Route path='/details' element={<Details />} />
          <Route path='/faq' element={<Faq />} />
          <Route path='/cars' element={<Mashina />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App