import React from 'react'


import './App.css'

import Layout from './layouts/Layout/Layout'
import Home from './pages/HomePage/Home'
import ManageUser from './pages/ManageUser/ManageUser'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';



import { HashRouter, Routes, Route } from 'react-router-dom'



function App() {

  return (
    <div>
     <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/manage-user" element={<ManageUser />} />
        </Route>
      </Routes>
     </HashRouter>
    </div>
  )
}

export default App
