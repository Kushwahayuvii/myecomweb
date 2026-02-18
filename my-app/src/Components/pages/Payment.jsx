import React, { useState } from "react";

const fmt = (n) => `₹${n.toLocaleString("en-IN")}`;

const styles = {
  input: {
    width: "100%", padding: "12px 14px",
    border: "1.5px solid #e2e8f0", borderRadius: 12,
    fontSize: 14, outline: "none", fontFamily: "'DM Sans', sans-serif",
    color: "#1e293b", background: "#fafafa",
  },
  label: {
    display: "block", fontSize: 13, fontWeight: 600,
    color: "#475569", marginBottom: 6,
  },
  primaryBtn: {
    padding: "15px", background: "#0f172a", color: "#fff",
    border: "none", borderRadius: 14, fontSize: 15, fontWeight: 700,
    cursor: "pointer", letterSpacing: 0.3, fontFamily: "'DM Sans', sans-serif", flex: 1,
  },
  secondaryBtn: {
    padding: "15px 20px", background: "#f1f5f9", color: "#475569",
    border: "none", borderRadius: 14, fontSize: 15, fontWeight: 600,
    cursor: "pointer", fontFamily: "'DM Sans', sans-serif",
  },
};

const METHODS = [
  { id: "upi",  label: "UPI",              icon: "📱" },
  { id: "card", label: "Card",             icon: "💳" },
  { id: "cod",  label: "Cash on Delivery", icon: "💵" },
];

const Payment = ({ items, onBack, onSuccess }) => {
  const [method, setMethod] = useState("upi");
  const [upiId, setUpiId]   = useState("");
  const [card, setCard]     = useState({ number: "", name: "", expiry: "", cvv: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError]   = useState("");

  const total = items.reduce((s, it) => s + it.price * it.quantity, 0);

  const formatCard   = (v) => v.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim();
  const formatExpiry = (v) => { const d = v.replace(/\D/g, "").slice(0, 4); return d.length >= 3 ? d.slice(0,2)+"/"+d.slice(2) : d; };

  const handlePay = () => {
    setError("");
    if (method === "upi" && (!upiId.includes("@") || upiId.length < 5))
      return setError("Please enter a valid UPI ID (e.g. name@upi)");
    if (method === "card") {
      if (card.number.replace(/\s/g,"").length < 16) return setError("Enter valid 16-digit card number");
      if (!card.name.trim())   return setError("Enter cardholder name");
      if (card.expiry.length < 5) return setError("Enter valid expiry (MM/YY)");
      if (card.cvv.length < 3) return setError("Enter valid CVV");
    }
    setLoading(true);
    setTimeout(() => { setLoading(false); onSuccess(); }, 2000);
  };

  return (
    <div>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, marginBottom: 4, color: "#0f172a" }}>
        💳 Payment
      </h2>
      <p style={{ color: "#64748b", fontSize: 13, marginBottom: 20 }}>
        Amount to pay: <strong style={{ color: "#0f172a" }}>{fmt(total)}</strong>
      </p>

      {/* Method Tabs */}
      <div style={{ display: "flex", gap: 10, marginBottom: 24 }}>
        {METHODS.map((m) => (
          <button key={m.id} onClick={() => setMethod(m.id)} style={{
            flex: 1, padding: "12px 8px",
            border: `2px solid ${method === m.id ? "#0f172a" : "#e2e8f0"}`,
            borderRadius: 12,
            background: method === m.id ? "#0f172a" : "#fff",
            color: method === m.id ? "#fff" : "#475569",
            cursor: "pointer", fontWeight: 600, fontSize: 13,
            display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
            transition: "all 0.2s",
          }}>
            <span style={{ fontSize: 20 }}>{m.icon}</span>
            {m.label}
          </button>
        ))}
      </div>

      {/* UPI */}
      {method === "upi" && (
        <div>
          <label style={styles.label}>UPI ID</label>
          <input placeholder="yourname@paytm" value={upiId}
            onChange={(e) => setUpiId(e.target.value)} style={styles.input} />
          <p style={{ color: "#64748b", fontSize: 12, marginTop: 6 }}>
            Supports: GPay, PhonePe, Paytm, BHIM & more
          </p>
        </div>
      )}

      {/* Card */}
      {method === "card" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div>
            <label style={styles.label}>Card Number</label>
            <input placeholder="1234 5678 9012 3456" value={card.number} maxLength={19}
              onChange={(e) => setCard({ ...card, number: formatCard(e.target.value) })}
              style={styles.input} />
          </div>
          <div>
            <label style={styles.label}>Cardholder Name</label>
            <input placeholder="RAHUL SHARMA" value={card.name}
              onChange={(e) => setCard({ ...card, name: e.target.value.toUpperCase() })}
              style={styles.input} />
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <div style={{ flex: 1 }}>
              <label style={styles.label}>Expiry</label>
              <input placeholder="MM/YY" value={card.expiry} maxLength={5}
                onChange={(e) => setCard({ ...card, expiry: formatExpiry(e.target.value) })}
                style={styles.input} />
            </div>
            <div style={{ flex: 1 }}>
              <label style={styles.label}>CVV</label>
              <input placeholder="•••" type="password" value={card.cvv} maxLength={4}
                onChange={(e) => setCard({ ...card, cvv: e.target.value.replace(/\D/g,"").slice(0,4) })}
                style={styles.input} />
            </div>
          </div>
        </div>
      )}

      {/* COD */}
      {method === "cod" && (
        <div style={{ background: "#f8fafc", borderRadius: 12, padding: "20px", textAlign: "center", color: "#475569" }}>
          <div style={{ fontSize: 36 }}>🚚</div>
          <p style={{ marginTop: 8, fontWeight: 600 }}>Pay {fmt(total)} when your order arrives!</p>
          <p style={{ fontSize: 13, marginTop: 4 }}>Available for all pin codes</p>
        </div>
      )}

      {/* Error */}
      {error && (
        <div style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: 10, padding: "10px 14px", color: "#ef4444", fontSize: 13, marginTop: 14 }}>
          ⚠ {error}
        </div>
      )}

      <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
        <button onClick={onBack} style={styles.secondaryBtn}>← Back</button>
        <button onClick={handlePay} disabled={loading}
          style={{ ...styles.primaryBtn, opacity: loading ? 0.7 : 1 }}>
          {loading ? "Processing..." : `Pay ${fmt(total)} 🔒`}
        </button>
      </div>

      <p style={{ textAlign: "center", color: "#94a3b8", fontSize: 11, marginTop: 16 }}>
        🔒 256-bit SSL secured · Your payment info is safe
      </p>
    </div>
  );
};

export default Payment;