import React, { useState } from "react";
import CalcInput from "./CalcInput";

import "../Components/CalculatorClass.css";
import Keyboard from "./Keyboard";

export default function CalculatorClass() {

  const [calculator, setCalculator] = useState({
    sign: "",
    value: "",
    result: 0,
  });

  const clickHandler = (e) => {
    setCalculator({ ...calculator, value: calculator.value + e.target.innerText });
  }

  const equal = () => {
   setCalculator({
     ...calculator,
     value: eval(calculator.value),
   });
  }
  
    const reset = (e) => {
      setCalculator({
        sign: "",
        value: "",
        result: 0,
      });
    };

  return (
    <div className="calculator">
      <CalcInput clickHandler={clickHandler} calculator={calculator} />
      <Keyboard clickHandler={clickHandler} equal={equal} reset={reset} />
    </div>
  );
}
