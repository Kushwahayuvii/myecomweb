import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import { CartProvider } from './Components/context/CartContext'   // ← Context import
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Components/pages/Home'
import Shop from './Components/pages/Shop'
import About from './Components/pages/About'
import Contact from './Components/pages/Contact'
import CartPage from './Components/pages/CartPage'     // ← CartPage (not Cart)
import Auth from './Components/pages/Auth'
import ProductDetail from './Components/pages/ProductDetail';


function App() {
  return (
    <CartProvider>                                     {/* ← Wrap everything */}
      <div className="w-full min-h-screen bg-[#0f172a]">
        <Navbar />
        <Routes>
          <Route path="/"       element={<Home />}     />
          <Route path="/shop"   element={<Shop />}     />
          <Route path="/about"  element={<About />}    />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart"   element={<CartPage />} />
          <Route path="/auth"   element={<Auth />}     />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;