import React from 'react'
import './App.css'
import {Routes, Route, Navigate} from 'react-router-dom'

import Header from './components/header/Header'
import Home from './pages/home/Home'
import Create from './pages/create/Create'
import Contact from './pages/contact/Contact'
import UpdateRecords from './components/updateRecords/UpdateRecords'
import LogIn from './pages/login/LogIn'
import SignUp from './pages/signup/SignUp'

export default function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Navigate to='/login'/>}/>

        <Route path='/login' element={<LogIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path="/home" element={< Home/>}/>

        <Route path="/create" element={< Create/>}/>
        <Route path='/:id' element={<UpdateRecords/>} />
        
        <Route path="/contact" element={< Contact/>}/>

      </Routes>
    </div>
  )
}
