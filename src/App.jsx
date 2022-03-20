import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import NoMatch from "./components/NoMatch";

function App() {
  const [darkMode, setDarkMode] = React.useState(false);

  function onHandleDarkMode() {
    console.log("Clicked");
    setDarkMode((prevState) => !prevState);
  }

  return (
    <div>
      <Navbar darkMode={darkMode} toggleDarkMode={onHandleDarkMode} />
      <Routes>
        <Route path="/" element={<Home darkMode={darkMode} />} />
        <Route path="/about" element={<About darkMode={darkMode} />} />
        <Route path="/services" element={<Services darkMode={darkMode} />} />
        <Route path="/contact" element={<Contact darkMode={darkMode} />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
