import React from "react";

export default function SelectPercentage({
  servicePercentage,
  onSetServicePercentage,
  children,
}) {
  return (
    <form className="form">
      <h3>{children}</h3>
      <select
        value={servicePercentage}
        onChange={(e) => onSetServicePercentage(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing (20%)</option>
      </select>
    </form>
  );
}
