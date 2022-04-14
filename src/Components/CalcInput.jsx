import React from 'react';
import "./CalcInput.css";

export default function CalcInput({ clickHandler, calculator }) {
  return (
    <div className="screen">
      <form>
        <input type="text" className="input" value={calculator.value} />
        <input type="text" readOnly className="input" />
      </form>
    </div>
  );
}
