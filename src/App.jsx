import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './Components/Hero/Hero'
import Services from './Components/Services/Services'
import WeAre from './Components/WeAre/WeAre'
import Showcase from './Components/Showcase/Showcase'
import Process from './Components/Process/Process'
import ClientReveiw from './Components/ClientReveiw/ClientReveiw'
import Blog from './Components/Blog/Blog'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <>
     <Hero />
     <Services />
     <WeAre />
     <Showcase />
     <Process />
     <ClientReveiw />
     <Blog />
     <Footer />
    </>
  )
}

export default App
