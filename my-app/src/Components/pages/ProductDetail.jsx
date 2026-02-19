import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import { allProducts } from "../data/productsData.js";

// ── Star Rating Component ──────────────────────────────────
const Stars = ({ rating, size = 16 }) => {
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {[1, 2, 3, 4, 5].map((s) => (
        <span key={s} style={{
          fontSize: size, color: s <= Math.round(rating) ? "#ffba00" : "#334155",
        }}>★</span>
      ))}
    </div>
  );
};

// ── Rating Bar (Flipkart-style) ───────────────────────────
const RatingBar = ({ label, percent, color }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
    <span style={{ fontSize: 12, color: "#94a3b8", width: 20 }}>{label}★</span>
    <div style={{ flex: 1, height: 6, background: "#1e293b", borderRadius: 4 }}>
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

  if (!product) {
    return (
      <div className="pt-24 min-h-screen bg-[#0f172a] text-white flex items-center justify-center">
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 64 }}>😕</div>
          <h2 style={{ fontSize: 24, marginTop: 16 }}>Product not found!</h2>
          <button onClick={() => navigate("/")}
            style={{ marginTop: 20, padding: "12px 28px", background: "#ffba00", color: "#000", borderRadius: 10, border: "none", fontWeight: 700, cursor: "pointer" }}>
            ← Back to Home
          </button>
        </div>
      </div>
    );
  }

  // Similar products — same category, exclude current
  const similar = allProducts.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < selectedQty; i++) addToCart({ ...product });
    setToast(`${selectedQty}x ${product.name}`);
    setTimeout(() => setToast(null), 2500);
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate("/cart");
  };

  // Fake rating distribution
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
        <div style={{
          position: "fixed", top: 80, right: 24, zIndex: 9999,
          background: "#22c55e", color: "#fff", padding: "12px 20px",
          borderRadius: 12, fontWeight: 600, fontSize: 14,
          boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
          animation: "slideIn 0.3s ease",
        }}>✅ {toast} added to cart!</div>
      )}
      <style>{`
        @keyframes slideIn { from { opacity:0; transform:translateX(40px) } to { opacity:1; transform:translateX(0) } }
        @keyframes fadeUp  { from { opacity:0; transform:translateY(20px) } to { opacity:1; transform:translateY(0) } }
        .tab-btn { background: none; border: none; cursor: pointer; padding: 10px 20px; font-size: 14px; font-weight: 600; transition: all 0.2s; }
        .prod-card:hover { transform: scale(1.04); }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* Breadcrumb */}
        <div style={{ display: "flex", gap: 6, alignItems: "center", marginBottom: 24, fontSize: 13, color: "#64748b" }}>
          <Link to="/" style={{ color: "#ffba00", textDecoration: "none" }}>Home</Link>
          <span>›</span>
          <span style={{ textTransform: "capitalize" }}>{product.category}</span>
          <span>›</span>
          <span style={{ color: "#e2e8f0" }}>{product.name}</span>
        </div>

        {/* ── Main Product Section ── */}
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40,
          background: "#1e293b", borderRadius: 20, padding: 32,
          animation: "fadeUp 0.4s ease",
        }} className="md:grid-cols-2 grid-cols-1">

          {/* Left — Image */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
            <div style={{
              width: "100%", background: "#0f172a", borderRadius: 16,
              padding: 24, display: "flex", alignItems: "center", justifyContent: "center",
              minHeight: 320,
            }}>
              <img src={product.image} alt={product.name}
                style={{ width: "100%", maxHeight: 300, objectFit: "cover", borderRadius: 12 }} />
            </div>

            {/* Thumbnail row (same image for demo) */}
            <div style={{ display: "flex", gap: 10 }}>
              {[1, 2, 3].map((i) => (
                <div key={i} style={{
                  width: 64, height: 64, background: "#0f172a", borderRadius: 10,
                  border: i === 1 ? "2px solid #ffba00" : "2px solid transparent",
                  overflow: "hidden", cursor: "pointer",
                }}>
                  <img src={product.image} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
              ))}
            </div>
          </div>

          {/* Right — Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div>
              <span style={{
                background: product.stock < 10 ? "#ef444420" : "#22c55e20",
                color: product.stock < 10 ? "#ef4444" : "#22c55e",
                padding: "3px 12px", borderRadius: 20, fontSize: 12, fontWeight: 600,
              }}>
                {product.stock < 10 ? `Only ${product.stock} left!` : "In Stock ✓"}
              </span>
            </div>

            <h1 style={{ fontSize: 24, fontWeight: 700, lineHeight: 1.3, color: "#f8fafc" }}>
              {product.name}
            </h1>

            {/* Rating */}
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{
                display: "flex", alignItems: "center", gap: 6,
                background: "#22c55e", padding: "4px 12px", borderRadius: 8,
              }}>
                <span style={{ fontWeight: 700, fontSize: 14 }}>{product.rating}</span>
                <span style={{ color: "#fff" }}>★</span>
              </div>
              <span style={{ color: "#64748b", fontSize: 14 }}>
                {product.reviews.toLocaleString()} ratings
              </span>
            </div>

            {/* Price */}
            <div style={{ borderTop: "1px solid #334155", borderBottom: "1px solid #334155", padding: "16px 0" }}>
              <div style={{ fontSize: 32, fontWeight: 800, color: "#ffba00" }}>
                {product.price}
              </div>
              <div style={{ fontSize: 13, color: "#22c55e", marginTop: 4 }}>
                ✓ Free Delivery · ✓ 7-day return
              </div>
            </div>

            {/* Description */}
            <p style={{ color: "#94a3b8", fontSize: 14, lineHeight: 1.7 }}>
              {product.description}
            </p>

            {/* Qty Selector */}
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <span style={{ color: "#94a3b8", fontSize: 14 }}>Qty:</span>
              <div style={{ display: "flex", alignItems: "center", gap: 12, background: "#0f172a", borderRadius: 10, padding: "6px 12px" }}>
                <button onClick={() => setSelectedQty(Math.max(1, selectedQty - 1))}
                  style={{ background: "none", border: "none", color: "#fff", fontSize: 20, cursor: "pointer", fontWeight: 700 }}>−</button>
                <span style={{ fontWeight: 700, minWidth: 20, textAlign: "center" }}>{selectedQty}</span>
                <button onClick={() => setSelectedQty(Math.min(product.stock, selectedQty + 1))}
                  style={{ background: "none", border: "none", color: "#fff", fontSize: 20, cursor: "pointer", fontWeight: 700 }}>+</button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div style={{ display: "flex", gap: 12 }}>
              <button onClick={handleAddToCart} style={{
                flex: 1, padding: "14px", background: "#1e3a5f",
                border: "2px solid #ffba00", color: "#ffba00",
                borderRadius: 12, fontWeight: 700, fontSize: 15, cursor: "pointer",
                transition: "all 0.2s",
              }}>
                🛒 Add to Cart
              </button>
              <button onClick={handleBuyNow} style={{
                flex: 1, padding: "14px", background: "#ffba00",
                border: "none", color: "#000",
                borderRadius: 12, fontWeight: 700, fontSize: 15, cursor: "pointer",
                transition: "all 0.2s",
              }}>
                ⚡ Buy Now
              </button>
            </div>

            {/* Trust Badges */}
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              {["🔒 Secure Payment", "🚚 Fast Delivery", "↩️ Easy Returns", "✅ Genuine Product"].map((b) => (
                <span key={b} style={{ fontSize: 12, color: "#64748b", display: "flex", alignItems: "center", gap: 4 }}>{b}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Tabs: Highlights / Specs ── */}
        <div style={{ background: "#1e293b", borderRadius: 20, marginTop: 24, overflow: "hidden" }}>
          <div style={{ display: "flex", borderBottom: "1px solid #334155" }}>
            {["highlights", "specs"].map((tab) => (
              <button key={tab} className="tab-btn" onClick={() => setActiveTab(tab)} style={{
                color: activeTab === tab ? "#ffba00" : "#64748b",
                borderBottom: activeTab === tab ? "2px solid #ffba00" : "2px solid transparent",
                textTransform: "capitalize",
              }}>
                {tab === "highlights" ? "📌 Highlights" : "📋 Specifications"}
              </button>
            ))}
          </div>

          <div style={{ padding: 28 }}>
            {activeTab === "highlights" && (
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {product.highlights.map((h) => (
                  <li key={h} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "#cbd5e1" }}>
                    <span style={{ color: "#ffba00", fontWeight: 700 }}>✓</span> {h}
                  </li>
                ))}
              </ul>
            )}
            {activeTab === "specs" && (
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <tbody>
                  {Object.entries(product.specs).map(([key, val], i) => (
                    <tr key={key} style={{ background: i % 2 === 0 ? "#0f172a" : "transparent" }}>
                      <td style={{ padding: "12px 16px", color: "#64748b", fontSize: 13, width: "35%", fontWeight: 600 }}>{key}</td>
                      <td style={{ padding: "12px 16px", color: "#e2e8f0", fontSize: 13 }}>{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>

        {/* ── Ratings & Reviews ── */}
        <div style={{ background: "#1e293b", borderRadius: 20, marginTop: 24, padding: 28 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 24, color: "#f8fafc" }}>
            ⭐ Ratings & Reviews
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: 32, marginBottom: 32 }}>
            {/* Big rating score */}
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 56, fontWeight: 800, color: "#ffba00", lineHeight: 1 }}>{product.rating}</div>
              <Stars rating={product.rating} size={20} />
              <div style={{ color: "#64748b", fontSize: 13, marginTop: 8 }}>{product.reviews.toLocaleString()} ratings</div>
            </div>

            {/* Bar chart */}
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              {ratingBars.map((b) => <RatingBar key={b.label} {...b} />)}
            </div>
          </div>

          {/* User reviews */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {product.userReviews.map((r, i) => (
              <div key={i} style={{
                background: "#0f172a", borderRadius: 12, padding: 20,
                borderLeft: "3px solid #ffba00",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: "50%",
                    background: "#ffba00", color: "#000",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontWeight: 700, fontSize: 16,
                  }}>
                    {r.name[0]}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14, color: "#f8fafc" }}>{r.name}</div>
                    <div style={{ fontSize: 12, color: "#64748b" }}>{r.date}</div>
                  </div>
                  <div style={{ marginLeft: "auto" }}>
                    <Stars rating={r.rating} size={14} />
                  </div>
                </div>
                <p style={{ color: "#94a3b8", fontSize: 14, lineHeight: 1.6 }}>{r.comment}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Similar Products ── */}
        {similar.length > 0 && (
          <div style={{ marginTop: 32 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 20, color: "#ffba00" }}>
              🔗 Similar Products
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 20 }}>
              {similar.map((p) => (
                <Link to={`/product/${p.id}`} key={p.id} style={{ textDecoration: "none" }}>
                  <div className="prod-card" style={{
                    background: "#1e293b", borderRadius: 16, padding: 16,
                    cursor: "pointer", transition: "transform 0.2s",
                  }}>
                    <img src={p.image} alt={p.name}
                      style={{ width: "100%", height: 140, objectFit: "cover", borderRadius: 10, marginBottom: 12 }} />
                    <div style={{ fontSize: 14, fontWeight: 600, color: "#f8fafc", marginBottom: 4 }}>{p.name}</div>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
                      <span style={{ background: "#22c55e", color: "#fff", fontSize: 11, padding: "2px 8px", borderRadius: 6, fontWeight: 700 }}>
                        {p.rating}★
                      </span>
                      <span style={{ color: "#64748b", fontSize: 11 }}>{p.reviews.toLocaleString()}</span>
                    </div>
                    <div style={{ color: "#ffba00", fontWeight: 700 }}>{p.price}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}