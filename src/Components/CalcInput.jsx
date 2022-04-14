import React from 'react';
import "./CalcInput.css";

export default function CalcInput() {
  return (
    <div className="screen">
      <form>
        <input type="text" className="input" />
        <input type="text" readOnly className="input" />
      </form>
    </div>
  );
}
