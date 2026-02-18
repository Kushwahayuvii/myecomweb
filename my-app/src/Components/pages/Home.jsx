import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Home() {
  const { addToCart, totalItems } = useCart();
  const [toast, setToast] = useState(null);

  const showToast = (name) => {
    setToast(name);
    setTimeout(() => setToast(null), 2000);
  };

  const handleAddToCart = (item) => {
    // Price string "₹41,999" → number 41999
    const numericPrice = parseInt(item.price.replace(/[₹,]/g, ""), 10);
    addToCart({ ...item, numericPrice });
    showToast(item.name);
  };

  const categories = {
    watches: [
      { id: 1, name: "Apple Watch Series 9",     price: "₹41,999", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRrDkwIMdorBq_1r6dO7CFw8z7Y6tG2CJUmYzYZehlAzpwriX8H_e00XpLsWmjNWKPDZDOleWtCRy9fBE1MRjK_Q6_3UptuUg8pLkkzaO8" },
      { id: 2, name: "Samsung Galaxy Watch 6",   price: "₹28,999", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRrDkwIMdorBq_1r6dO7CFw8z7Y6tG2CJUmYzYZehlAzpwriX8H_e00XpLsWmjNWKPDZDOleWtCRy9fBE1MRjK_Q6_3UptuUg8pLkkzaO8" },
      { id: 3, name: "Fitbit Versa 4",           price: "₹19,999", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRrDkwIMdorBq_1r6dO7CFw8z7Y6tG2CJUmYzYZehlAzpwriX8H_e00XpLsWmjNWKPDZDOleWtCRy9fBE1MRjK_Q6_3UptuUg8pLkkzaO8" },
      { id: 4, name: "Noise ColorFit Pro 4",     price: "₹3,499",  image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRrDkwIMdorBq_1r6dO7CFw8z7Y6tG2CJUmYzYZehlAzpwriX8H_e00XpLsWmjNWKPDZDOleWtCRy9fBE1MRjK_Q6_3UptuUg8pLkkzaO8" },
    ],
    shoes: [
      { id: 5, name: "Nike Air Max 270",         price: "₹12,999", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRgH-a_MeOy5ie7ixiEvLuHqdPixYnQwucMDhyySuhuYOEK5OrjxYu9ouJ7GbPdz9gMRSb6OtS08Hu3fc4mnkqL8M9vrcIanVVziHzWG5yh" },
      { id: 6, name: "Adidas Ultraboost 22",     price: "₹15,999", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRgH-a_MeOy5ie7ixiEvLuHqdPixYnQwucMDhyySuhuYOEK5OrjxYu9ouJ7GbPdz9gMRSb6OtS08Hu3fc4mnkqL8M9vrcIanVVziHzWG5yh" },
      { id: 7, name: "Puma RS-X3",               price: "₹8,999",  image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRgH-a_MeOy5ie7ixiEvLuHqdPixYnQwucMDhyySuhuYOEK5OrjxYu9ouJ7GbPdz9gMRSb6OtS08Hu3fc4mnkqL8M9vrcIanVVziHzWG5yh" },
      { id: 8, name: "Campus North Plus",        price: "₹2,499",  image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRgH-a_MeOy5ie7ixiEvLuHqdPixYnQwucMDhyySuhuYOEK5OrjxYu9ouJ7GbPdz9gMRSb6OtS08Hu3fc4mnkqL8M9vrcIanVVziHzWG5yh" },
    ],
    smartphones: [
      { id: 9,  name: "iPhone 15 Pro Max",        price: "₹1,59,900", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRNbqQq2Umlm6VO7EQOY8UfrXmBB6Vnexm-J9Ka-UHGxtKmK9lzr9jdxhfbU1cmod_pPvuDOJgJ3QySwoJ1SDuhgT3QJJW76kbkqEOT9riauSCv4KPPWMy2IA" },
      { id: 10, name: "Samsung Galaxy S24 Ultra", price: "₹1,29,999", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRNbqQq2Umlm6VO7EQOY8UfrXmBB6Vnexm-J9Ka-UHGxtKmK9lzr9jdxhfbU1cmod_pPvuDOJgJ3QySwoJ1SDuhgT3QJJW76kbkqEOT9riauSCv4KPPWMy2IA" },
      { id: 11, name: "OnePlus 12",               price: "₹64,999",   image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRNbqQq2Umlm6VO7EQOY8UfrXmBB6Vnexm-J9Ka-UHGxtKmK9lzr9jdxhfbU1cmod_pPvuDOJgJ3QySwoJ1SDuhgT3QJJW76kbkqEOT9riauSCv4KPPWMy2IA" },
      { id: 12, name: "Nothing Phone 2",          price: "₹44,999",   image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRNbqQq2Umlm6VO7EQOY8UfrXmBB6Vnexm-J9Ka-UHGxtKmK9lzr9jdxhfbU1cmod_pPvuDOJgJ3QySwoJ1SDuhgT3QJJW76kbkqEOT9riauSCv4KPPWMy2IA" },
    ],
    perfumes: [
      { id: 13, name: "Dior Sauvage EDT",       price: "₹8,999",  image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcStHekzBqzVcVyaO4BU2IU8H8-6fCN3om9gYWQfBhPWytsamYhQ5huqB93zW2_crQ98JpqxNI05ANSWnagsQRqbAKKx8h0JzOVa-X8jprZAU4OdtVsOgM5vaQg" },
      { id: 14, name: "Chanel Bleu de Chanel",  price: "₹11,999", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcStHekzBqzVcVyaO4BU2IU8H8-6fCN3om9gYWQfBhPWytsamYhQ5huqB93zW2_crQ98JpqxNI05ANSWnagsQRqbAKKx8h0JzOVa-X8jprZAU4OdtVsOgM5vaQg" },
      { id: 15, name: "Versace Eros",           price: "₹6,499",  image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcStHekzBqzVcVyaO4BU2IU8H8-6fCN3om9gYWQfBhPWytsamYhQ5huqB93zW2_crQ98JpqxNI05ANSWnagsQRqbAKKx8h0JzOVa-X8jprZAU4OdtVsOgM5vaQg" },
      { id: 16, name: "Hugo Boss Bottled",      price: "₹4,999",  image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcStHekzBqzVcVyaO4BU2IU8H8-6fCN3om9gYWQfBhPWytsamYhQ5huqB93zW2_crQ98JpqxNI05ANSWnagsQRqbAKKx8h0JzOVa-X8jprZAU4OdtVsOgM5vaQg" },
    ],
    backpacks: [
      { id: 17, name: "The North Face Borealis",    price: "₹7,999", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcStHekzBqzVcVyaO4BU2IU8H8-6fCN3om9gYWQfBhPWytsamYhQ5huqB93zW2_crQ98JpqxNI05ANSWnagsQRqbAKKx8h0JzOVa-X8jprZAU4OdtVsOgM5vaQg" },
      { id: 18, name: "Nike Heritage Backpack",     price: "₹2,999", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcStHekzBqzVcVyaO4BU2IU8H8-6fCN3om9gYWQfBhPWytsamYhQ5huqB93zW2_crQ98JpqxNI05ANSWnagsQRqbAKKx8h0JzOVa-X8jprZAU4OdtVsOgM5vaQg" },
      { id: 19, name: "Wildcraft Laptop Backpack",  price: "₹1,799", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcStHekzBqzVcVyaO4BU2IU8H8-6fCN3om9gYWQfBhPWytsamYhQ5huqB93zW2_crQ98JpqxNI05ANSWnagsQRqbAKKx8h0JzOVa-X8jprZAU4OdtVsOgM5vaQg" },
      { id: 20, name: "American Tourister Zip",     price: "₹1,299", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcStHekzBqzVcVyaO4BU2IU8H8-6fCN3om9gYWQfBhPWytsamYhQ5huqB93zW2_crQ98JpqxNI05ANSWnagsQRqbAKKx8h0JzOVa-X8jprZAU4OdtVsOgM5vaQg" },
    ],
  };

  const sections = [
    { key: "watches",     label: "⌚ Smart Watches",      bg: "bg-[#1e293b]", card: "bg-[#0f172a]" },
    { key: "shoes",       label: "👟 Premium Shoes",       bg: "bg-[#0f172a]", card: "bg-[#1e293b]" },
    { key: "smartphones", label: "📱 Latest Smartphones",  bg: "bg-[#1e293b]", card: "bg-[#0f172a]" },
    { key: "perfumes",    label: "🌸 Luxury Perfumes",     bg: "bg-[#0f172a]", card: "bg-[#1e293b]" },
    { key: "backpacks",   label: "🎒 Stylish Backpacks",   bg: "bg-[#1e293b]", card: "bg-[#0f172a]" },
  ];

  return (
    <div className="pt-24 bg-[#0f172a] text-white">

      {/* ── Toast Notification ── */}
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

      {/* ── Hero ── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 items-center gap-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Discover Amazing Products
            </h1>
            <p className="mt-6 text-gray-400">Best quality products at unbeatable prices.</p>
            <div className="flex items-center gap-4 mt-8">
              <Link to="/shop">
                <button className="bg-[#ffba00] text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition">
                  Shop Now
                </button>
              </Link>
              {totalItems > 0 && (
                <Link to="/cart">
                  <button className="border border-[#ffba00] text-[#ffba00] px-6 py-3 rounded-lg font-semibold hover:bg-[#ffba00] hover:text-black transition">
                    🛒 View Cart ({totalItems})
                  </button>
                </Link>
              )}
            </div>
          </div>
          <img
            src="https://www.shutterstock.com/shutterstock/photos/2238692967/display_1500/stock-photo-creative-d-photo-collage-artwork-graphics-painting-of-superhero-hurrying-shopping-isolated-drawing-2238692967.jpg"
            className="w-full rounded-xl"
          />
        </div>
      </section>

      {/* ── Product Sections ── */}
      {sections.map(({ key, label, bg, card }) => (
        <section key={key} className={`py-20 ${bg}`}>
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#ffba00]">{label}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {categories[key].map((item) => (
                <div key={item.id} className={`${card} p-5 rounded-xl hover:scale-105 transition shadow-lg`}>
                  <img src={item.image} className="rounded-lg mb-4 h-48 w-full object-cover" alt={item.name} />
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-[#ffba00] font-bold mt-2">{item.price}</p>
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="mt-4 w-full bg-[#ffba00] text-black py-2 rounded-lg font-semibold hover:bg-yellow-400 active:scale-95 transition"
                  >
                    🛒 Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ── CTA ── */}
      <section className="py-20 text-center bg-[#0f172a]">
        <h2 className="text-3xl font-bold">Get 20% Off Today</h2>
        <p className="mt-4 text-gray-400">Sign up now & enjoy special deals.</p>
        <button className="mt-6 bg-[#ffba00] text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition">
          Sign Up
        </button>
      </section>
    </div>
  );
}