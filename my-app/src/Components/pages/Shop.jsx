import { useState } from "react";
import { useCart } from "../context/CartContext.jsx";  // ← Step 1: Import

export default function Shop() {
  const { addToCart } = useCart();                    // ← Step 2: Hook se addToCart lo
  const [toast, setToast] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const allProducts = [
    { id: 101, name: "Wireless Headphones", price: 1999, category: "electronics", image: "https://via.placeholder.com/300" },
    { id: 102, name: "Smart Watch",         price: 2499, category: "electronics", image: "https://via.placeholder.com/300" },
    { id: 103, name: "Running Shoes",       price: 1799, category: "fashion",     image: "https://via.placeholder.com/300" },
    { id: 104, name: "Backpack",            price: 999,  category: "fashion",     image: "https://via.placeholder.com/300" },
    { id: 105, name: "Bluetooth Speaker",   price: 1499, category: "electronics", image: "https://via.placeholder.com/300" },
    { id: 106, name: "T-Shirt",             price: 699,  category: "fashion",     image: "https://via.placeholder.com/300" },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? allProducts
      : allProducts.filter((p) => p.category === selectedCategory);

  // ← Step 3: Handler — price already number hai toh seedha pass karo
  const handleAddToCart = (product) => {
    addToCart({ ...product, numericPrice: product.price });
    setToast(product.name);
    setTimeout(() => setToast(null), 2000);
  };

  return (
    <div className="pt-24 min-h-screen bg-[#0f172a] text-white">

      {/* Toast Notification */}
      {toast && (
        <div style={{
          position: "fixed", top: 80, right: 24, zIndex: 9999,
          background: "#22c55e", color: "#fff",
          padding: "12px 20px", borderRadius: 12,
          fontWeight: 600, fontSize: 14,
          boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
          animation: "slideIn 0.3s ease",
        }}>
          ✅ {toast} added to cart!
        </div>
      )}
      <style>{`@keyframes slideIn { from { opacity:0; transform:translateX(40px) } to { opacity:1; transform:translateX(0) } }`}</style>

      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#ffba00]">Shop Products</h1>
        <p className="text-gray-400 mt-3">Browse our premium collection</p>
      </div>

      {/* Category Filter */}
      <div className="flex justify-center gap-6 mb-12 flex-wrap">
        {["all", "electronics", "fashion"].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full font-semibold transition 
              ${selectedCategory === cat
                ? "bg-[#ffba00] text-black"
                : "bg-[#1e293b] hover:bg-[#ffba00] hover:text-black"
              }`}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pb-20">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-[#1e293b] p-5 rounded-xl shadow-lg hover:scale-105 transition duration-300">
            <img src={product.image} alt={product.name} className="rounded-lg mb-4 w-full" />
            <h3 className="font-semibold text-lg">{product.name}</h3>
            <p className="text-[#ffba00] font-bold mt-2">₹{product.price}</p>

            {/* ← Step 3: onClick mein handleAddToCart call karo */}
            <button
              onClick={() => handleAddToCart(product)}
              className="mt-4 w-full bg-[#ffba00] text-black py-2 rounded-lg font-semibold hover:bg-yellow-400 active:scale-95 transition"
            >
              🛒 Add to Cart
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}