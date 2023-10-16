import React from "react";
import { useState } from "react";
import BillInput from "./BillInput";
import SelectPercentage from "./SelectPercentage";
import Output from "./Output";
import Reset from "./Reset";

export default function App() {
  const [bill, setBill] = useState("");
  const [servicePercentage1, setServicePercentage1] = useState(0);
  const [servicePercentage2, setServicePercentage2] = useState(0);

  const [alone, setAlone] = useState(true);

  const tips = bill * ((servicePercentage1 + servicePercentage2) / 2 / 100);

  function handleReset() {
    setBill("");
    setServicePercentage1(0);
    setServicePercentage2(0);
  }

  return (
    <div>
      <h1 className="title">
        <span>Tip</span> calculator
      </h1>

      <div className="app">
        <BillInput bill={bill} onSetBill={setBill} />
        <SelectPercentage
          servicePercentage={servicePercentage1}
          onSetServicePercentage={setServicePercentage1}
        >
          How did you like the service?
        </SelectPercentage>
        {/* <p>Set alone</p> */}
        {/* <SelectPercentage
          servicePercentage={servicePercentage2}
          onSetServicePercentage={setServicePercentage2}
        >
          How did your friend like the service?
        </SelectPercentage>
        {bill > 0 && (
          <React.Fragment>
            <Output bill={bill} tips={tips} />
            <Reset onReset={handleReset} />
          </React.Fragment>
        )} */}

        <Output bill={bill} tips={tips} />
        <Reset onReset={handleReset} />
      </div>
    </div>
  );
}
