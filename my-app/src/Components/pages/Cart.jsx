import React from "react";

const fmt = (n) => `₹${n.toLocaleString("en-IN")}`;

const styles = {
  primaryBtn: {
    display: "block", width: "100%", padding: "15px",
    background: "#0f172a", color: "#fff", border: "none",
    borderRadius: 14, fontSize: 15, fontWeight: 700,
    cursor: "pointer", marginTop: 24, letterSpacing: 0.3,
    fontFamily: "'DM Sans', sans-serif",
  },
  qBtn: {
    width: 30, height: 30, border: "1px solid #e2e8f0",
    borderRadius: 8, background: "#f8fafc", cursor: "pointer",
    fontSize: 16, fontWeight: 700, color: "#0f172a",
    display: "flex", alignItems: "center", justifyContent: "center",
  },
};

const Cart = ({ items, setItems, onNext }) => {
  const inc = (id) =>
    setItems(items.map((it) => (it.id === id ? { ...it, quantity: it.quantity + 1 } : it)));

  const dec = (id) =>
    setItems(items.map((it) =>
      it.id === id && it.quantity > 1 ? { ...it, quantity: it.quantity - 1 } : it
    ));

  const remove = (id) => setItems(items.filter((it) => it.id !== id));

  const total = items.reduce((s, it) => s + it.price * it.quantity, 0);

  return (
    <div>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, marginBottom: 20, color: "#0f172a" }}>
        🛒 Your Cart
      </h2>

      {items.length === 0 ? (
        <div style={{ textAlign: "center", padding: "60px 0", color: "#94a3b8" }}>
          <div style={{ fontSize: 48 }}>🛍️</div>
          <p style={{ marginTop: 12, fontSize: 16 }}>Your cart is empty</p>
        </div>
      ) : (
        <>
          {items.map((item) => (
            <div key={item.id} style={{
              display: "flex", alignItems: "center", gap: 16,
              padding: "16px 0", borderBottom: "1px solid #f1f5f9",
            }}>
              <img
                src={item.image}
                alt={item.name}
                style={{ width: 72, height: 72, borderRadius: 12, objectFit: "cover" }}
              />
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, color: "#1e293b", fontSize: 15 }}>{item.name}</div>
                <div style={{ color: "#64748b", fontSize: 13, marginTop: 2 }}>{fmt(item.price)} each</div>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 10 }}>
                  <button onClick={() => dec(item.id)} style={styles.qBtn}>−</button>
                  <span style={{ fontWeight: 700, minWidth: 20, textAlign: "center" }}>{item.quantity}</span>
                  <button onClick={() => inc(item.id)} style={styles.qBtn}>+</button>
                  <button
                    onClick={() => remove(item.id)}
                    style={{ background: "none", border: "none", color: "#ef4444", fontSize: 12, cursor: "pointer", marginLeft: 8 }}
                  >
                    Remove
                  </button>
                </div>
              </div>
              <div style={{ fontWeight: 700, color: "#0f172a", fontSize: 16 }}>
                {fmt(item.price * item.quantity)}
              </div>
            </div>
          ))}

          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 24, fontWeight: 700, fontSize: 18, color: "#0f172a" }}>
            <span>Total</span>
            <span>{fmt(total)}</span>
          </div>

          <button onClick={onNext} style={styles.primaryBtn}>
            Proceed to Checkout →
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;