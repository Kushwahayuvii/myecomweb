import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './App.css' 
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Components/pages/Home'
import Shop from './Components/pages/Shop'
import About from './Components/pages/About'
import Contact from './Components/pages/Contact'
import Cart from './Components/pages/CartPage'
import Auth from './Components/pages/Auth'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="w-full min-h-screen bg-[#0f172a]">
      <Navbar />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/auth' element={<Auth />} />
      </Routes>
      <Footer />
    </div>
    </>
  )
}

export default App
