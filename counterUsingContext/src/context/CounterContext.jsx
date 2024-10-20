import React, { createContext, useState } from "react";
export const CounterContext = createContext();
export const CounterProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);
  const increaseCounter = () => setCounter(counter + 1);
  const decreaseCounter = () => setCounter(counter - 1);

  return (
    <CounterContext.Provider value={{ counter, increaseCounter, decreaseCounter }}>
      {children}
    </CounterContext.Provider>
  );
};
