import React, { useState } from "react";
import CalcInput from "./CalcInput";

import "../Components/CalculatorClass.css";
import Keyboard from "./Keyboard";

export default function CalculatorClass() {

  const [result, setResult] = useState();

  const clickHandler = () => {
    setResult(e.target.innerHTML);
  }
  return (
    <div className="calculator">
      <CalcInput clickHandler={clickHandler} />
      <Keyboard clickHandler={clickHandler} />
    </div>
  );
}
