import React from "react";

const STEPS = ["cart", "checkout", "payment", "success"];
const LABELS = ["Cart", "Details", "Payment", "Done"];

const StepBar = ({ step }) => {
  const idx = STEPS.indexOf(step);

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 0, marginBottom: 36 }}>
      {LABELS.map((label, i) => (
        <React.Fragment key={label}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
            <div style={{
              width: 34, height: 34, borderRadius: "50%",
              background: i <= idx ? "#0f172a" : "#e2e8f0",
              color: i <= idx ? "#f8fafc" : "#94a3b8",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontWeight: 700, fontSize: 13,
              transition: "all 0.3s",
              boxShadow: i === idx ? "0 0 0 4px #bfdbfe" : "none",
            }}>
              {i < idx ? "✓" : i + 1}
            </div>
            <span style={{
              fontSize: 11,
              color: i <= idx ? "#0f172a" : "#94a3b8",
              fontWeight: i === idx ? 700 : 400,
            }}>
              {label}
            </span>
          </div>
          {i < LABELS.length - 1 && (
            <div style={{
              flex: 1, height: 2,
              background: i < idx ? "#0f172a" : "#e2e8f0",
              margin: "0 6px", marginBottom: 18,
              transition: "background 0.3s",
            }} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default StepBar;