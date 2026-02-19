import React from "react";
import { Link } from "react-router-dom";

const SUCCESS_INFO = [
  { icon: "📧", text: "Confirmation email sent" },
  { icon: "🚚", text: "Estimated delivery: 3–5 days" },
  { icon: "📍", text: "You can track your order anytime" },
];

const Success = () => {
  const orderId = "ORD" + Math.floor(Math.random() * 9000000 + 1000000);

  return (
    <div style={{ textAlign: "center", padding: "20px 0 40px" }}>
      <style>{`@keyframes pop { 0%{transform:scale(0.5);opacity:0} 80%{transform:scale(1.1)} 100%{transform:scale(1);opacity:1} }`}</style>

      <div style={{
        width: 80, height: 80, borderRadius: "50%", background: "#dcfce7",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 36, margin: "0 auto 20px", animation: "pop 0.4s ease",
      }}>✅</div>

      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, color: "#0f172a", marginBottom: 8 }}>
        Order Placed!
      </h2>
      <p style={{ color: "#64748b", fontSize: 15, marginBottom: 4 }}>Thank you for your purchase 🎉</p>
      <p style={{ color: "#94a3b8", fontSize: 13, marginBottom: 28 }}>
        Order ID: <strong style={{ color: "#0f172a" }}>{orderId}</strong>
      </p>

      <div style={{ background: "#f8fafc", borderRadius: 16, padding: "20px 24px", textAlign: "left", maxWidth: 320, margin: "0 auto 28px" }}>
        {SUCCESS_INFO.map(({ icon, text }) => (
          <div key={text} style={{ display: "flex", gap: 12, alignItems: "center", padding: "8px 0", borderBottom: "1px solid #f1f5f9" }}>
            <span>{icon}</span>
            <span style={{ fontSize: 13, color: "#475569" }}>{text}</span>
          </div>
        ))}
      </div>
         
         <Link to={"/shop"}>
      <button
        
        style={{
          padding: "14px 32px", background: "#0f172a", color: "#fff",
          border: "none", borderRadius: 14, fontSize: 15, fontWeight: 700,
          cursor: "pointer", fontFamily: "'DM Sans', sans-serif",
        }}
      >
        Continue Shopping
      </button>
      </Link>
    </div>
  );
};

export default Success;