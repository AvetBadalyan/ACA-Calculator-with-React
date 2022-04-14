import React from 'react';
import "./CalcInput.css";

export default function CalcInput() {
  return (
    <div className='screen'>
      <input type="text" />
      <input type="text" readOnly />
    </div>
  )
}
