import React from "react";
import "./CalcInput.css";

export default function CalcInput({
  clickHandler,
  calculator,
  setCalculator,
  equal,
}) {
  return (
    <div className="screen">
      <form onSubmit={equal}>
        <input
          type="text"
          className="input"
          value={calculator.value}
          onChange={(e) => {
            setCalculator({
              ...calculator,
              value: e.target.value,
            });
          }}
        />
      </form>
    </div>
  );
}
