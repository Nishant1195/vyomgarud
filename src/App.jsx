import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Capabilities from './pages/Capabilities'
import Highlights from './pages/Highlights'
import Footer from './pages/Footer'

const App = () => {
  return (
    <div className="scroll-smooth">
      <Home />
      <About />
      <Capabilities />
      <Highlights />
      <Footer />
    </div>
  )
}

export default App