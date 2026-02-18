import { Link } from "react-router-dom";
import { ShoppingCart, User, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#0f172a] text-white fixed w-full z-50 shadow-lg">
      <div className="w-full px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-[#ffba00]">
          MyShop
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link to={"/"} className="hover:text-[#ffba00] transition">Home</Link>
          <Link to={"/shop"} className="hover:text-[#ffba00] transition">Shop</Link>
          <Link  to={"/about"} className="hover:text-[#ffba00] transition">About</Link>
          <Link to={"/contact"} className="hover:text-[#ffba00] transition">Contact</Link>

          <Link to={"/cart"} className="relative hover:text-[#ffba00] transition">
            <ShoppingCart />
            <span className="absolute -top-2 -right-3 bg-[#ffba00] text-black text-xs px-2 rounded-full">
              2
            </span>
          </Link>
            <Link to={"/auth"} className="hover:text-[#ffba00] transition">
          <User className="hover:text-[#ffba00] cursor-pointer" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          <Menu />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#1e293b] px-6 pb-4 flex flex-col gap-4 text-sm">
            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
    
    <Link to="/shop" onClick={() => setOpen(false)}>Shop</Link>
    
    <Link to="/about" onClick={() => setOpen(false)}>About</Link>
    
    <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
    
    <Link to="/cart" onClick={() => setOpen(false)}>Cart</Link>
    
    <Link to="/auth" onClick={() => setOpen(false)}>Login</Link>
        </div>
      )}
    </nav>
  );
}
