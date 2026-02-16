import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css' 
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Components/pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="w-full min-h-screen bg-[#0f172a]">
      <Navbar />
      <Home />
      <Footer />
    </div>
    </>
  )
}

export default App
