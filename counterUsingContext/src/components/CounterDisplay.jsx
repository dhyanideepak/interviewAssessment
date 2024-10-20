import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const CounterDisplay = () => {
  const { counter } = useContext(CounterContext);

  return (
    <div>
      <h2 style={{fontSize:'24px', color:'#333'}}>Current Counter: {counter}</h2>
    </div>
  );
};

export default CounterDisplay;
