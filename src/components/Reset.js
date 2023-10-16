import React from "react";

export default function Reset({ onReset }) {
  return (
    <button onClick={onReset} className="btn">
      Reset
    </button>
  );
}
