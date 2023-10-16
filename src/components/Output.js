import React from "react";

export default function Output({ bill, tips }) {
  return (
    <h3 className="text">
      You pay ${bill + tips} (${bill} + ${tips} tips)
    </h3>
  );
}
