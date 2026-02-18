import React, { useState } from "react";

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
    display: "block", width: "100%", padding: "15px",
    background: "#0f172a", color: "#fff", border: "none",
    borderRadius: 14, fontSize: 15, fontWeight: 700,
    cursor: "pointer", marginTop: 0, letterSpacing: 0.3,
    fontFamily: "'DM Sans', sans-serif", flex: 1,
  },
  secondaryBtn: {
    padding: "15px 20px", background: "#f1f5f9", color: "#475569",
    border: "none", borderRadius: 14, fontSize: 15, fontWeight: 600,
    cursor: "pointer", fontFamily: "'DM Sans', sans-serif",
  },
};

const FIELDS = [
  { key: "name",    label: "Full Name",        placeholder: "Rahul Sharma",          type: "text" },
  { key: "phone",   label: "Mobile Number",    placeholder: "9876543210",            type: "tel"  },
  { key: "address", label: "Delivery Address", placeholder: "House No, Street, Area...", type: "text" },
  { key: "city",    label: "City",             placeholder: "Mumbai",                type: "text" },
  { key: "pincode", label: "PIN Code",         placeholder: "400001",                type: "text" },
];

const Checkout = ({ form, setForm, onNext, onBack }) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name?.trim()) e.name = "Required";
    if (!form.phone?.trim() || !/^\d{10}$/.test(form.phone)) e.phone = "Valid 10-digit number required";
    if (!form.address?.trim()) e.address = "Required";
    if (!form.pincode?.trim() || !/^\d{6}$/.test(form.pincode)) e.pincode = "Valid 6-digit pincode required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  return (
    <div>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, marginBottom: 20, color: "#0f172a" }}>
        📦 Delivery Details
      </h2>

      {FIELDS.map((f) => (
        <div key={f.key} style={{ marginBottom: 16 }}>
          <label style={styles.label}>{f.label}</label>
          <input
            type={f.type}
            placeholder={f.placeholder}
            value={form[f.key] || ""}
            onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
            style={{ ...styles.input, borderColor: errors[f.key] ? "#ef4444" : "#e2e8f0" }}
          />
          {errors[f.key] && (
            <div style={{ color: "#ef4444", fontSize: 12, marginTop: 4 }}>⚠ {errors[f.key]}</div>
          )}
        </div>
      ))}

      <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
        <button onClick={onBack} style={styles.secondaryBtn}>← Back</button>
        <button onClick={() => { if (validate()) onNext(); }} style={styles.primaryBtn}>
          Continue to Payment →
        </button>
      </div>
    </div>
  );
};

export default Checkout;