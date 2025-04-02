import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills'
import Work from './components/Work/Work'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
     <Navbar />
     <div className='container'>
     <Hero />
     <Skills />
     <Work />
     <Contact />
     </div>
    <Footer /> 
     
    </>
  )
}

export default App
