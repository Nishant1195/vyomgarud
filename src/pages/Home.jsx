import React from 'react'
import videoBg from '/videoBg.mp4'

const Home = () => {
  return (
    <div id="home">
      <div className='w-full h-screen'>
        <video className="object-cover w-full h-full" src={videoBg} autoPlay loop muted/>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 pointer-events-none"></div>

      <nav className="absolute top-10 right-10 pt-6 pr-6 z-10">
        <ul className="flex gap-8 text-white text-2xl font-bold">
          <li><a href="#home" className="cursor-pointer hover:text-gray-300 transition-colors">Home</a></li>
          <li><a href="#about" className="cursor-pointer hover:text-gray-300 transition-colors">About</a></li>
          <li><a href="#capabilities" className="cursor-pointer hover:text-gray-300 transition-colors">Capabilities</a></li>
          <li><a href="#highlights" className="cursor-pointer hover:text-gray-300 transition-colors">Highlights</a></li>
          <li><a href="#contact" className="cursor-pointer hover:text-gray-300 transition-colors">Contact</a></li>
        </ul>
      </nav>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center">
          <h1 className="text-white text-7xl font-bold mb-4">
            Welcome to VyomGarud
          </h1>
          <p className="text-white text-2xl mb-8 p-12">
            Building high-performance drones that bring precision and impact to every flight.
          </p>
          <a 
            href="#about" 
            className="pointer-events-auto inline-block p-16 bg-transparent border-2 border-white 
text-white text-2xl font-bold 
hover:bg-white hover:text-black transition-all duration-300"

          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home