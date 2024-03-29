import React from 'react'
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/about';
import Experience from './components/experience/Experience';
// import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Testmonial from './components/testimonials/Testmonial';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
const App = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    {/* <Services/> */}
    <Portfolio/>
    <Testmonial/>
    <Contact/>
    <Footer/>
    
    </>
  )
}

export default App;