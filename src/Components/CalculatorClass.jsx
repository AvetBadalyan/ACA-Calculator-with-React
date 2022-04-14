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
    setCalculator({
      ...calculator,
      value: calculator.value + e.target.innerText,
    });
  };

  const equal = (e) => {
    e.preventDefault();
    setCalculator({
      ...calculator,
      value: eval(calculator.value),
    });
  };

  const reset = (e) => {
    setCalculator({
      sign: "",
      value: "",
      result: 0,
    });
  };

  const slicer = () => {
    setCalculator({
      ...calculator,
      value: calculator.value.slice(0, calculator.value.length - 1),
    });
  };

  return (
    <div className="calculator">
      <CalcInput
        clickHandler={clickHandler}
        calculator={calculator}
        setCalculator={setCalculator}
        equal={equal}
      />
      <Keyboard
        clickHandler={clickHandler}
        equal={equal}
        reset={reset}
        slicer={slicer}
      />
    </div>
  );
}
