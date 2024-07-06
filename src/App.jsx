import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Experience from './components/Experience'
import Project from './components/Project'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className="fixed top-0 -z-10 h-full w-full"></div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="container mx-auto px-8">
        
        <div className='fixed top-0 left-0 right-0 bg-transparent z-10 px-8'>
        <Navbar/>
        </div>
        <Hero/>
        <About/>
        <Technologies/>
        <Experience/>
        <Project/>
        <Contact/>
      </div>
      
    </div>
  )
}

export default App
