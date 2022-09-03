import './App.css';
import MenuWrap from './Components/MenuWrap';
import Navbar from './Components/Navbar';
import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import Hobbies from './Components/Hobbies';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Home from './Components/Home';
import AboutMe from './Components/AboutMe';
import Footer from './Components/Footer';


function App() {
  return (
    <>
    <Router>
    <Navbar/>
      <div>
        <Routes>
        <Route path="about" element={<AboutMe/>} />
        <Route path="hobbies" element={<Hobbies/>} />
        <Route path="skills" element={<Skills/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="/" element={<Home/>} />
        </Routes>
      </div>
    <MenuWrap/>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
