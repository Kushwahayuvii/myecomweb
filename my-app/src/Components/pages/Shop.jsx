import { useState } from "react";

export default function Shop() {

  const allProducts = [
    { id: 1, name: "Wireless Headphones", price: 1999, category: "electronics", image: "https://via.placeholder.com/300" },
    { id: 2, name: "Smart Watch", price: 2499, category: "electronics", image: "https://via.placeholder.com/300" },
    { id: 3, name: "Running Shoes", price: 1799, category: "fashion", image: "https://via.placeholder.com/300" },
    { id: 4, name: "Backpack", price: 999, category: "fashion", image: "https://via.placeholder.com/300" },
    { id: 5, name: "Bluetooth Speaker", price: 1499, category: "electronics", image: "https://via.placeholder.com/300" },
    { id: 6, name: "T-Shirt", price: 699, category: "fashion", image: "https://via.placeholder.com/300" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts =
    selectedCategory === "all"
      ? allProducts
      : allProducts.filter(p => p.category === selectedCategory);

  return (
    <div className="pt-24 min-h-screen bg-[#0f172a] text-white">

      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#ffba00]">Shop Products</h1>
        <p className="text-gray-400 mt-3">Browse our premium collection</p>
      </div>

      {/* Category Filter */}
      <div className="flex justify-center gap-6 mb-12 flex-wrap">
        {["all", "electronics", "fashion"].map(cat => (
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

        {filteredProducts.map(product => (
          <div
            key={product.id}
            className="bg-[#1e293b] p-5 rounded-xl shadow-lg hover:scale-105 transition duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="rounded-lg mb-4 w-full"
            />

            <h3 className="font-semibold text-lg">
              {product.name}
            </h3>

            <p className="text-[#ffba00] font-bold mt-2">
              ₹{product.price}
            </p>

            <button className="mt-4 w-full bg-[#ffba00] text-black py-2 rounded-lg font-semibold hover:bg-yellow-400 transition">
              Add to Cart
            </button>
          </div>
        ))}

      </div>
    </div>
  );
}
