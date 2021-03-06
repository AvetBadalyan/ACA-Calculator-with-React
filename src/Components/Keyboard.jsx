import React from "react";
import "./Keyboard.css";

export default function Keyboard({ clickHandler, equal, reset, slicer }) {
  const buttons = [
    "(",
    "CE",
    ")",
    "C",
    "1",
    "2",
    "3",
    "+",
    "4",
    "5",
    "6",
    "-",
    "7",
    "8",
    "9",
    "*",
    ".",
    "0",
    "=",
    "/",
  ];

  return (
    <div className="keyboard">
      {buttons.map((item) => {
        if (item === "CE") {
          return <button onClick={reset}> {item} </button>;
        } else if (item === "=") {
          return <button onClick={equal}> {item} </button>;
        } else if (item === "C") {
          return <button onClick={slicer}> {item} </button>;
        } else {
          return <button onClick={clickHandler}> {item} </button>;
        }
      })}

      {/* <button name="(" onClick={clickHandler}>
        (
      </button>
      <button name="CE" onClick={reset}>
        CE
      </button>
      <button name=")" onClick={clickHandler}>
        )
      </button>
      <button name="C" onClick={clickHandler}>
        C
      </button>

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
        *
      </button>

      <button name="." onClick={clickHandler}>
        .
      </button>
      <button name="0" onClick={clickHandler}>
        0
      </button>
      <button name="=" onClick={equal}>
        =
      </button>
      <button name="/" onClick={clickHandler}>
        /
      </button> */}
    </div>
  );
}
