import React from 'react'
import './App.css'
import Navbar from './components/Nav/Navbar'
import Cities from './components/Cities/Cities'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home/Home';
import CityInfo from './components/Cities/CityInfo';
function App() {
  return (
    <>
     
      <Navbar />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cities' element={<Cities />} />
          <Route path='/cities/:name' element={<CityInfo/>} />

        </Routes>
      </Router>
      

    </>
  )
}

export default App
