import About from './components/About/About.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home/Home';
import NavBar from './components/Navbar.jsx';
import Certificate from './components/Certificates/Certificate.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Preloader from '../src/components/Pre.jsx';



function App() {

  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (

    <BrowserRouter>
      <Preloader load={load} />
      <div className='App' id={load ? "no-scroll" : "scroll"}>
        <NavBar />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/certificate' element={<Certificate />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;
