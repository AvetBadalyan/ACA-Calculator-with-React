import React from "react";
import "./Keyboard.css";

export default function Keyboard({ clickHandler }) {
  return (
    <div className="keyboard">
      <div>
        <button name="(" onClick={clickHandler}>
          (
        </button>
        <button name="CE" onClick={clickHandler}>
          CE
        </button>
        <button name=")" onClick={clickHandler}>
          )
        </button>
        <button name="C" onClick={clickHandler}>
          C
        </button>
      </div>
      <div>
        {" "}
        <button name="1" onClick={clickHandler}>
          1
        </button>
        <button name="2" onClick={clickHandler}>
          2
        </button>
        <button name="3" onClick={clickHandler}>
          3
        </button>
        <button name="+" onClick={clickHandler}>
          +
        </button>
      </div>
      <div>
        {" "}
        <button name="4" onClick={clickHandler}>
          4
        </button>
        <button name="5" onClick={clickHandler}>
          5
        </button>
        <button name="6" onClick={clickHandler}>
          6
        </button>
        <button name="-" onClick={clickHandler}>
          -
        </button>
      </div>

      <div>
        <button name="7" onClick={clickHandler}>
          7
        </button>
        <button name="8" onClick={clickHandler}>
          8
        </button>
        <button name="9" onClick={clickHandler}>
          9
        </button>
        <button name="*" onClick={clickHandler}>
          x
        </button>
      </div>

      <div>
        <button name="." onClick={clickHandler}>
          .
        </button>
        <button name="0" onClick={clickHandler}>
          0
        </button>
        <button name="=" onClick={clickHandler}>
          =
        </button>
        <button name="/" onClick={clickHandler}>
          ÷
        </button>
      </div>
    </div>
  );
}
