import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Coffees from "./components/Coffees";
import About from "./components/About";
import Footer from "./components/Footer";
import ChatbotPopup from "./pages/ChatbotPopup";


function App() {
  return (
    <div className="relative">
      {<div>
      <Navbar />

      <main>
        <div id="home">
          <Home />
        </div>

        <div id="menu">
          <Coffees />
        </div>

        <div id="about">
          <About />
        </div>
      </main>
      <Footer />
    </div>}
      <ChatbotPopup />
    </div>
  );
}

 export default App;
