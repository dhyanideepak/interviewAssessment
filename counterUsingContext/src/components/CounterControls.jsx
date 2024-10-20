import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const CounterControls = () => {
  const { increaseCounter, decreaseCounter } = useContext(CounterContext);

  return (
    <div>
      <button
        onClick={decreaseCounter}
        style={{
          marginLeft: "10px",
          padding: "2px 60px",
          fontSize: "30px",
          cursor: "pointer",
        }}
      >
        -
      </button>
      <button
        onClick={increaseCounter}
        style={{
          marginLeft: "10px",
          padding: "2px 60px",
          fontSize: "30px",
          cursor: "pointer",

        }}
      >
        +
      </button>
    </div>
  );
};

export default CounterControls;
