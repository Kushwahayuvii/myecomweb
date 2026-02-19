import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import { allProducts } from "../data/productsData.js";

const Stars = ({ rating, size = 16 }) => (
  <div style={{ display: "flex", gap: 2 }}>
    {[1, 2, 3, 4, 5].map((s) => (
      <span key={s} style={{ fontSize: size, color: s <= Math.round(rating) ? "#ffba00" : "#334155" }}>★</span>
    ))}
  </div>
);

const RatingBar = ({ label, percent, color }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
    <span style={{ fontSize: 12, color: "#94a3b8", width: 20 }}>{label}★</span>
    <div style={{ flex: 1, height: 6, background: "#0f172a", borderRadius: 4 }}>
      <div style={{ width: `${percent}%`, height: "100%", background: color, borderRadius: 4, transition: "width 0.5s" }} />
    </div>
    <span style={{ fontSize: 12, color: "#64748b", width: 30 }}>{percent}%</span>
  </div>
);

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = allProducts.find((p) => p.id === parseInt(id));
  const [toast, setToast] = useState(null);
  const [activeTab, setActiveTab] = useState("highlights");
  const [selectedQty, setSelectedQty] = useState(1);
  const [activeImg, setActiveImg] = useState(0);

  if (!product) {
    return (
      <div className="pt-24 min-h-screen bg-[#0f172a] text-white flex items-center justify-center px-4">
        <div className="text-center">
          <div className="text-6xl mb-4">😕</div>
          <h2 className="text-2xl font-bold mb-6">Product not found!</h2>
          <button onClick={() => navigate("/")}
            className="bg-[#ffba00] text-black px-6 py-3 rounded-xl font-bold">
            ← Back to Home
          </button>
        </div>
      </div>
    );
  }

  const similar = allProducts.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < selectedQty; i++) addToCart({ ...product });
    setToast(`${selectedQty}x ${product.name}`);
    setTimeout(() => setToast(null), 2500);
  };

  const handleBuyNow = () => { handleAddToCart(); navigate("/cart"); };

  const ratingBars = [
    { label: 5, percent: 62, color: "#22c55e" },
    { label: 4, percent: 22, color: "#86efac" },
    { label: 3, percent: 9,  color: "#ffba00" },
    { label: 2, percent: 4,  color: "#f97316" },
    { label: 1, percent: 3,  color: "#ef4444" },
  ];

  return (
    <div className="pt-20 min-h-screen bg-[#0f172a] text-white">

      {/* Toast */}
      {toast && (
        <div className="fixed top-20 right-4 z-50 bg-green-500 text-white px-5 py-3 rounded-xl font-semibold text-sm shadow-2xl"
          style={{ animation: "slideIn 0.3s ease" }}>
          ✅ {toast} added to cart!
        </div>
      )}

      <style>{`
        @keyframes slideIn { from { opacity:0; transform:translateX(40px) } to { opacity:1; transform:translateX(0) } }
        @keyframes fadeUp  { from { opacity:0; transform:translateY(20px) } to { opacity:1; transform:translateY(0) } }
        .prod-card { transition: transform 0.2s; }
        .prod-card:hover { transform: scale(1.04); }
        .tab-btn { background: none; border: none; cursor: pointer; padding: 12px 16px; font-size: 14px; font-weight: 600; transition: all 0.2s; white-space: nowrap; }
      `}</style>

      <div className="max-w-6xl mx-auto px-4 py-6">

        {/* Breadcrumb */}
        <div className="flex flex-wrap gap-1 items-center mb-6 text-xs text-slate-500">
          <Link to="/" className="text-[#ffba00] no-underline hover:underline">Home</Link>
          <span>›</span>
          <span className="capitalize">{product.category}</span>
          <span>›</span>
          <span className="text-slate-300 truncate max-w-[180px] sm:max-w-none">{product.name}</span>
        </div>

        {/* ── Main Product Card ── */}
        <div className="bg-[#1e293b] rounded-2xl p-4 sm:p-6 lg:p-8 mb-6"
          style={{ animation: "fadeUp 0.4s ease" }}>

          {/* Grid: stacks on mobile, side-by-side on lg */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">

            {/* LEFT — Images */}
            <div className="flex flex-col items-center gap-4">
              {/* Main image */}
              <div className="w-full bg-[#0f172a] rounded-2xl p-4 flex items-center justify-center min-h-[220px] sm:min-h-[300px]">
                <img src={product.image} alt={product.name}
                  className="w-full max-h-64 sm:max-h-80 object-contain rounded-xl" />
              </div>
              {/* Thumbnails */}
              <div className="flex gap-3 justify-center flex-wrap">
                {[0, 1, 2].map((i) => (
                  <div key={i} onClick={() => setActiveImg(i)}
                    className="w-16 h-16 bg-[#0f172a] rounded-xl overflow-hidden cursor-pointer"
                    style={{ border: activeImg === i ? "2px solid #ffba00" : "2px solid transparent" }}>
                    <img src={product.image} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — Info */}
            <div className="flex flex-col gap-4">

              {/* Stock badge */}
              <span className="self-start text-xs font-bold px-3 py-1 rounded-full"
                style={{
                  background: product.stock < 10 ? "#ef444420" : "#22c55e20",
                  color: product.stock < 10 ? "#ef4444" : "#22c55e",
                }}>
                {product.stock < 10 ? `⚠ Only ${product.stock} left!` : "✓ In Stock"}
              </span>

              {/* Name */}
              <h1 className="text-xl sm:text-2xl font-bold text-slate-100 leading-snug">
                {product.name}
              </h1>

              {/* Rating row */}
              <div className="flex items-center gap-3 flex-wrap">
                <div className="flex items-center gap-2 bg-green-500 px-3 py-1 rounded-lg">
                  <span className="font-bold text-sm text-white">{product.rating}</span>
                  <span className="text-white text-sm">★</span>
                </div>
                <span className="text-slate-400 text-sm">{product.reviews.toLocaleString()} ratings</span>
              </div>

              {/* Price */}
              <div className="border-t border-b border-slate-700 py-4">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#ffba00]">{product.price}</div>
                <div className="text-green-400 text-sm mt-1">✓ Free Delivery &nbsp;·&nbsp; ✓ 7-day return</div>
              </div>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed">{product.description}</p>

              {/* Qty Selector */}
              <div className="flex items-center gap-4">
                <span className="text-slate-400 text-sm">Qty:</span>
                <div className="flex items-center gap-3 bg-[#0f172a] rounded-xl px-4 py-2">
                  <button onClick={() => setSelectedQty(Math.max(1, selectedQty - 1))}
                    className="text-white text-xl font-bold bg-transparent border-none cursor-pointer leading-none">−</button>
                  <span className="font-bold w-5 text-center">{selectedQty}</span>
                  <button onClick={() => setSelectedQty(Math.min(product.stock, selectedQty + 1))}
                    className="text-white text-xl font-bold bg-transparent border-none cursor-pointer leading-none">+</button>
                </div>
              </div>

              {/* CTA Buttons — stacks on very small, row on sm+ */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button onClick={handleAddToCart}
                  className="flex-1 py-3 sm:py-4 rounded-xl font-bold text-[#ffba00] text-sm sm:text-base transition hover:brightness-110"
                  style={{ background: "#1e3a5f", border: "2px solid #ffba00" }}>
                  🛒 Add to Cart
                </button>
                <button onClick={handleBuyNow}
                  className="flex-1 py-3 sm:py-4 rounded-xl font-bold text-black text-sm sm:text-base bg-[#ffba00] border-none transition hover:brightness-110">
                  ⚡ Buy Now
                </button>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-x-4 gap-y-2 pt-1">
                {["🔒 Secure Payment", "🚚 Fast Delivery", "↩️ Easy Returns", "✅ Genuine"].map((b) => (
                  <span key={b} className="text-xs text-slate-500">{b}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Tabs: Highlights / Specs ── */}
        <div className="bg-[#1e293b] rounded-2xl mb-6 overflow-hidden">
          {/* Tab buttons — scrollable on mobile */}
          <div className="flex overflow-x-auto border-b border-slate-700">
            {["highlights", "specs"].map((tab) => (
              <button key={tab} className="tab-btn"
                onClick={() => setActiveTab(tab)}
                style={{
                  color: activeTab === tab ? "#ffba00" : "#64748b",
                  borderBottom: activeTab === tab ? "2px solid #ffba00" : "2px solid transparent",
                }}>
                {tab === "highlights" ? "📌 Highlights" : "📋 Specifications"}
              </button>
            ))}
          </div>

          <div className="p-4 sm:p-6">
            {activeTab === "highlights" && (
              <ul className="space-y-3">
                {product.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="text-[#ffba00] font-bold mt-0.5">✓</span> {h}
                  </li>
                ))}
              </ul>
            )}
            {activeTab === "specs" && (
              <div className="overflow-x-auto">
                <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
                  <tbody>
                    {Object.entries(product.specs).map(([key, val], i) => (
                      <tr key={key} style={{ background: i % 2 === 0 ? "#0f172a" : "transparent" }}>
                        <td className="px-4 py-3 text-slate-400 font-semibold w-2/5">{key}</td>
                        <td className="px-4 py-3 text-slate-200">{val}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        {/* ── Ratings & Reviews ── */}
        <div className="bg-[#1e293b] rounded-2xl p-4 sm:p-6 mb-6">
          <h2 className="text-lg sm:text-xl font-bold mb-6 text-slate-100">⭐ Ratings & Reviews</h2>

          {/* Rating summary — stacks on mobile */}
          <div className="flex flex-col sm:flex-row gap-6 mb-8">
            <div className="text-center sm:min-w-[140px]">
              <div className="text-5xl font-extrabold text-[#ffba00] leading-none mb-2">{product.rating}</div>
              <Stars rating={product.rating} size={18} />
              <div className="text-slate-500 text-xs mt-2">{product.reviews.toLocaleString()} ratings</div>
            </div>
            <div className="flex-1">
              {ratingBars.map((b) => <RatingBar key={b.label} {...b} />)}
            </div>
          </div>

          {/* User reviews */}
          <div className="space-y-4">
            {product.userReviews.map((r, i) => (
              <div key={i} className="bg-[#0f172a] rounded-xl p-4"
                style={{ borderLeft: "3px solid #ffba00" }}>
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <div className="w-9 h-9 rounded-full bg-[#ffba00] text-black flex items-center justify-center font-bold text-base flex-shrink-0">
                    {r.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-slate-100">{r.name}</div>
                    <div className="text-xs text-slate-500">{r.date}</div>
                  </div>
                  <div className="sm:ml-auto">
                    <Stars rating={r.rating} size={13} />
                  </div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{r.comment}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Similar Products ── */}
        {similar.length > 0 && (
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-[#ffba00] mb-5">🔗 Similar Products</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
              {similar.map((p) => (
                <Link to={`/product/${p.id}`} key={p.id} style={{ textDecoration: "none" }}>
                  <div className="prod-card bg-[#1e293b] rounded-2xl p-3 sm:p-4 cursor-pointer h-full">
                    <img src={p.image} alt={p.name}
                      className="w-full h-28 sm:h-36 object-cover rounded-xl mb-3" />
                    <div className="text-xs sm:text-sm font-semibold text-slate-100 mb-2 leading-snug line-clamp-2">{p.name}</div>
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded-md font-bold">
                        {p.rating}★
                      </span>
                      <span className="text-slate-500 text-xs">{p.reviews.toLocaleString()}</span>
                    </div>
                    <div className="text-[#ffba00] font-bold text-sm">{p.price}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* ── Sticky Bottom Bar on Mobile ── */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#1e293b] border-t border-slate-700 p-3 flex gap-3 lg:hidden z-40">
        <button onClick={handleAddToCart}
          className="flex-1 py-3 rounded-xl font-bold text-[#ffba00] text-sm"
          style={{ background: "#1e3a5f", border: "2px solid #ffba00" }}>
          🛒 Add to Cart
        </button>
        <button onClick={handleBuyNow}
          className="flex-1 py-3 rounded-xl font-bold text-black text-sm bg-[#ffba00]">
          ⚡ Buy Now
        </button>
      </div>

      {/* Bottom padding to avoid sticky bar overlap on mobile */}
      <div className="h-20 lg:hidden" />
    </div>
  );
}