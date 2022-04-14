import "./App.css";
import CalculatorClass from "./Components/CalculatorClass";
import Header from "./Components/Header";

function App() {
  const newCalculatorHandler = () => {
    <CalculatorClass />;
  };

  return (
    <div className="App">
      <Header/>
      <CalculatorClass />
      <button onClick={newCalculatorHandler}> Add a new Calculator </button>
    </div>
  );
}

export default App;
