import React from "react";

export default function BillInput({ bill, onSetBill }) {
  return (
    <form className="form">
      <h3>Bill amount: </h3>

      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </form>
  );
}
