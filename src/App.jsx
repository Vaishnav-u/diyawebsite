import { useState } from 'react'
import heroImg from './assets/hero.png'
import Hero from './hero'
import AboutClinic from './about'
import Treatments from './treatments'
import Doctor from './doctor'
import Journey from './journey'
import Reels from './reels'
import CosmeticAcupuncture from './cosmetic'
import Testimonials from './testimonials'
import Footer from './footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero />
      <AboutClinic />
      <Treatments />
      <Doctor />
      <Journey />
      <Reels />
      <CosmeticAcupuncture />
      <Testimonials />
      <Footer />
    </>
  )
}

export default App
