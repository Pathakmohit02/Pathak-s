
import './App.css'
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import About from './components/About/About'
import Services from './components/Services/Services'
import AboutUs from './components/AboutUs/AboutUs'
import SplashCursor from './components/common/SplashCursor/SplashCursor'
import MentalHealth from './components/MentalHealth/MentalHealth'
import Locations from './components/Locations/Locations'
import Footer from './components/Footer/Footer'
import Products from './components/Products/Products'

function App() {
  

  return (
    <>
     <SplashCursor />
     <Navbar/>
     <Hero/>
     <About/>
     <MentalHealth/>
     <Products/>

     {/* <Services/>
     <AboutUs/> */}
     
     <Locations/>
     <Footer/>
    </>
  )
}

export default App
