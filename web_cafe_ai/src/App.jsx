import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Coffees from './components/Coffees'
import About from './components/About'
import Footer from './components/Footer'
import React, { use, useEffect, useRef, useState } from "react";
import ChatbotIcon from "./components/ChatbotIcon"
import ChatForm from "./components/ChatForm"
import ChatMessage from "./components/ChatMessage";
import { companyInfo } from "./CompanyInfo";

const App = () => {
  return (
    <div>
      <Navbar />

      <main>
        <div id="home">
          <Home/>
        </div>

        <div id="menu">
          <Coffees />
        </div>

        <div id="about">
          <About />
        </div>




      </main>
      <Footer />
    </div>
  )
}

export default App