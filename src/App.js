import { useState } from "react";
import "./App.css";
import CalculatorClass from "./Components/CalculatorClass";
import Header from "./Components/Header";
import background from "./bg.jpeg";

function App() {
  const [calcArray, setCalcArray] = useState([1]);
  const calculatorAddHandler = () => {
    setCalcArray((prev) => [...prev, 1]);
  };

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <Header />
      <div className="all-calculators">
        {calcArray.map((item) => (
          <CalculatorClass />
        ))}
      </div>

      <button onClick={calculatorAddHandler} className="calculator-add-button">Add a new Calculator</button>
    </div>
  );
}

export default App;
