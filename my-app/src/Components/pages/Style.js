export const primaryBtn = {
  display: "block", width: "100%", padding: "15px",
  background: "#0f172a", color: "#fff", border: "none",
  borderRadius: 14, fontSize: 15, fontWeight: 700,
  cursor: "pointer", marginTop: 24, letterSpacing: 0.3,
  fontFamily: "'DM Sans', sans-serif",
};

export const secondaryBtn = {
  padding: "15px 20px", background: "#f1f5f9", color: "#475569",
  border: "none", borderRadius: 14, fontSize: 15, fontWeight: 600,
  cursor: "pointer", fontFamily: "'DM Sans', sans-serif",
};

export const qBtnStyle = {
  width: 30, height: 30, border: "1px solid #e2e8f0",
  borderRadius: 8, background: "#f8fafc", cursor: "pointer",
  fontSize: 16, fontWeight: 700, color: "#0f172a",
  display: "flex", alignItems: "center", justifyContent: "center",
};

export const inputStyle = {
  width: "100%", padding: "12px 14px",
  border: "1.5px solid #e2e8f0", borderRadius: 12,
  fontSize: 14, outline: "none", fontFamily: "'DM Sans', sans-serif",
  color: "#1e293b", background: "#fafafa",
};

export const labelStyle = {
  display: "block", fontSize: 13, fontWeight: 600,
  color: "#475569", marginBottom: 6,
};

export const fmt = (n) => `₹${n.toLocaleString("en-IN")}`;