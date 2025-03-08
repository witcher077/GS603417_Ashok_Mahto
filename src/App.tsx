import { useState } from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom'

import './App.css'
import Home from './Pages/store'
import Profile from './Pages/Profile'
import Header from './components/Header'
import Nevigation from './components/Nevigation'
import Store from './Pages/store'
import Sku from './Pages/Sku'
import Charts from './Pages/Charts'
import Planing from './Pages/Planing'

function App() {

  return (
    <BrowserRouter> 
        <Header/>

    <div className='main-container'>
    <Nevigation/>

    {/* Router */}
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/planing" element={<Planing/>} />
      <Route path="/sku" element={<Sku/>} />
      <Route path="/charts" element={<Charts/>} />
    </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
