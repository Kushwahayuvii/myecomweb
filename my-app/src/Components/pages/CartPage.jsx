import React, { useState } from "react";
import Cart from "./Cart";
import Checkout from "./Checkout";
import Payment from "./Payment";
import Success from "./Success";
import StepBar from "./Stepbar.jsx";

const STEPS = ["cart", "checkout", "payment", "success"];

const INITIAL_ITEMS = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 1999,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1518449038197-48f0c7b9b2a3?w=500",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 2999,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?w=500",
  },
];

const CartPage = () => {
  const [step, setStep]   = useState("cart");
  const [items, setItems] = useState(INITIAL_ITEMS);
  const [form, setForm]   = useState({ name: "", phone: "", address: "", city: "", pincode: "" });

  const next = () => setStep(STEPS[STEPS.indexOf(step) + 1]);
  const back = () => setStep(STEPS[STEPS.indexOf(step) - 1]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@400;500;600;700&display=swap');
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px) } to { opacity: 1; transform: translateY(0) } }
      `}</style>

      <div style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
        display: "flex", alignItems: "flex-start", justifyContent: "center",
        padding: "40px 16px", fontFamily: "'DM Sans', sans-serif",
      }}>
        <div style={{
          background: "#fff", borderRadius: 24, padding: "36px 32px",
          maxWidth: 480, width: "100%",
          boxShadow: "0 25px 60px rgba(15,23,42,0.10)",
          animation: "slideUp 0.4s ease",
        }}>
          {step !== "success" && <StepBar step={step} />}

          {step === "cart"     && <Cart     items={items} setItems={setItems} onNext={next} />}
          {step === "checkout" && <Checkout form={form}  setForm={setForm}   onNext={next} onBack={back} />}
          {step === "payment"  && <Payment  items={items}                    onSuccess={next} onBack={back} />}
          {step === "success"  && <Success />}
        </div>
      </div>
    </>
  );
};

export default CartPage;