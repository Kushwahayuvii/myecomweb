import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import StepBar from "./StepBar";
import Checkout from "./Checkout";
import Payment from "./Payment";
import Success from "./Success";

const STEPS = ["cart", "checkout", "payment", "success"];

const fmt = (n) => `₹${n.toLocaleString("en-IN")}`;

// ── Inline Cart Screen (reads from Context) ──────────────────
const CartScreen = ({ onNext }) => {
  const { cartItems, updateQuantity, removeItem, totalPrice } = useCart();

  if (cartItems.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "60px 0", color: "#94a3b8" }}>
        <div style={{ fontSize: 48 }}>🛍️</div>
        <p style={{ marginTop: 12, fontSize: 16 }}>Your cart is empty</p>
        <p style={{ fontSize: 13, marginTop: 8 }}>Go to Home and add some products!</p>
      </div>
    );
  }

  return (
    <div>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, marginBottom: 20, color: "#0f172a" }}>
        🛒 Your Cart
      </h2>

      {cartItems.map((item) => (
        <div key={item.id} style={{
          display: "flex", alignItems: "center", gap: 16,
          padding: "16px 0", borderBottom: "1px solid #f1f5f9",
        }}>
          <img src={item.image} alt={item.name}
            style={{ width: 72, height: 72, borderRadius: 12, objectFit: "cover" }} />

          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 600, color: "#1e293b", fontSize: 15 }}>{item.name}</div>
            <div style={{ color: "#64748b", fontSize: 13, marginTop: 2 }}>{fmt(item.numericPrice)} each</div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 10 }}>
              <button onClick={() => item.quantity > 1 && updateQuantity(item.id, item.quantity - 1)}
                style={{ width:30, height:30, border:"1px solid #e2e8f0", borderRadius:8, background:"#f8fafc", cursor:"pointer", fontSize:16, fontWeight:700 }}>−</button>
              <span style={{ fontWeight: 700, minWidth: 20, textAlign: "center" }}>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}
                style={{ width:30, height:30, border:"1px solid #e2e8f0", borderRadius:8, background:"#f8fafc", cursor:"pointer", fontSize:16, fontWeight:700 }}>+</button>
              <button onClick={() => removeItem(item.id)}
                style={{ background:"none", border:"none", color:"#ef4444", fontSize:12, cursor:"pointer", marginLeft:8 }}>
                Remove
              </button>
            </div>
          </div>

          <div style={{ fontWeight: 700, color: "#0f172a", fontSize: 16 }}>
            {fmt(item.numericPrice * item.quantity)}
          </div>
        </div>
      ))}

      <div style={{ display:"flex", justifyContent:"space-between", marginTop:24, fontWeight:700, fontSize:18, color:"#0f172a" }}>
        <span>Total</span>
        <span>{fmt(totalPrice)}</span>
      </div>

      <button onClick={onNext} style={{
        display:"block", width:"100%", padding:"15px",
        background:"#0f172a", color:"#fff", border:"none",
        borderRadius:14, fontSize:15, fontWeight:700,
        cursor:"pointer", marginTop:24, fontFamily:"'DM Sans', sans-serif",
      }}>
        Proceed to Checkout →
      </button>
    </div>
  );
};

// ── Main CartPage ────────────────────────────────────────────
const CartPage = () => {
  const [step, setStep] = useState("cart");
  const [form, setForm] = useState({ name:"", phone:"", address:"", city:"", pincode:"" });
  const { cartItems } = useCart();

  const next = () => setStep(STEPS[STEPS.indexOf(step) + 1]);
  const back = () => setStep(STEPS[STEPS.indexOf(step) - 1]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@400;500;600;700&display=swap');
        @keyframes slideUp { from { opacity:0; transform:translateY(20px) } to { opacity:1; transform:translateY(0) } }
      `}</style>

      <div style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
        display: "flex", alignItems: "flex-start", justifyContent: "center",
        padding: "100px 16px 40px", fontFamily: "'DM Sans', sans-serif",
      }}>
        <div style={{
          background: "#fff", borderRadius: 24, padding: "36px 32px",
          maxWidth: 480, width: "100%",
          boxShadow: "0 25px 60px rgba(15,23,42,0.10)",
          animation: "slideUp 0.4s ease",
        }}>
          {step !== "success" && <StepBar step={step} />}

          {step === "cart"     && <CartScreen onNext={next} />}
          {step === "checkout" && <Checkout form={form} setForm={setForm} onNext={next} onBack={back} />}
          {step === "payment"  && <Payment  items={cartItems} onSuccess={next} onBack={back} />}
          {step === "success"  && <Success />}
        </div>
      </div>
    </>
  );
};

export default CartPage;