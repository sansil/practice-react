import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import './App.css'
import Home from "./pages/home"
import About from "./pages/about"
import UserProfile from "./pages/userProfile"
import Invoices from "./pages/invoices"
import Invoice from "./pages/invoice"
import FetchPage from "./pages/fetchPage"


function App () {


  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path='/' element={<Home name="sansil" />}>
              <Route path='about' element={<About />}></Route>
              <Route path=':id' element={<FetchPage />}></Route>
              <Route path=':id' element={<UserProfile />}></Route>
              <Route path='invoices' element={<Invoices />}>
                <Route path=':invoice' element={<Invoice />}></Route>
              </Route>
              <Route path='*' element={<div>Nothing here!</div>}></Route>
            </Route>
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
