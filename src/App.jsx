import React from 'react'
import './App.css'
import {Routes, Route, Navigate} from 'react-router-dom'

import Header from './components/header/Header'
import Home from './pages/home/Home'
import Create from './pages/create/Create'
import Contact from './pages/contact/Contact'
import UpdateRecords from './components/updateRecords/UpdateRecords'

export default function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Navigate to='/home'/>}/>
        <Route path="/home" element={< Home/>}/>
        <Route path="/create" element={< Create/>}/>
        <Route path="/contact" element={< Contact/>}/>
        <Route path='/:id' element={<UpdateRecords/>} />
      </Routes>
    </div>
  )
}
