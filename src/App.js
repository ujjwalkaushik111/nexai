import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './components/Home';
import Footer from './components/Footer';
import Nexai from './components/Nexai';
import Blockchain from './components/Blockchain';
import 'slick-carousel/slick/slick.css' 
import 'slick-carousel/slick/slick-theme.css' 
import Topbutton from './components/Topbutton';
import { useEffect, useState } from 'react';
import Preloader from './components/Preloader';
import Aos from 'aos';
import 'aos/dist/aos.css'

function App() {
  
  // preloader-start
  const [loading, setLoading] =useState(true);
  // Aos-start
    useEffect (() => {
    Aos.init({once:true,});
    // Aos-end
   setTimeout(() => {
    setLoading(false);
    document.body.classList.remove("overflow-hidden")
  }, 3000)
  document.body.classList.add("overflow-hidden")
   }, [])

  //  preloader-end
  return (
    <>
    {loading &&  <Preloader/>}
   <Navbar/>
   <Home/>
   <Blockchain/>
   <Nexai/>
   <Footer/>
   <Topbutton/>
    </>
  );
}

export default App;
