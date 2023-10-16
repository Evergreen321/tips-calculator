import React from "react";

export default function Output({ bill, tips }) {
  return (
    <div>
      <h4>
        Tip amount: <span className="total">${tips}</span>
      </h4>
      <h4>
        Total amount: <span className="total">${bill + tips}</span>
      </h4>
      <h4 className="text">
        You pay ${bill + tips} (${bill} + ${tips} tips)
      </h4>
    </div>
  );
}
