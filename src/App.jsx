import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'
import Header from './component/Header'
import Home from './component/Home'
import Fotter from './component/Fotter'
import Videos from './component/Videos'
import Upload from './component/Upload'
import LogIn from './component/LogIn'
import SignUp from './component/SignUp'




function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Fotter />
    </Router>
  )
}

export default App
