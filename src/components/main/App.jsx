import './App.css'
import React from 'react'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom' //Estratégia de roteamento a priori

import Routes from './Routes'

import Logo from '../template/logo'
import Footer from '../template/footer'
import Nav from '../template/nav'

export default (props) => (
  <BrowserRouter>
    <div className="app">
      <Logo></Logo>
      <Nav></Nav>
      <Routes></Routes>
      <Footer></Footer>
    </div>
  </BrowserRouter>
)
