"use client";

import React, { useState } from "react";
import CounterVariable from "./CounterVariable";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const generateRandomDigit = () => {
    const randomDigit = Math.floor(Math.random() * 21) - 10;
    setCounter(randomDigit);
  };

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const decreaseCounter = () => {
    setCounter(counter - 1);
  };

  console.log("rerender root counter")
  return (
    <div>
      <h2 className="text-5xl mb-4">{counter}</h2>
      <div className="flex flex-wrap justify-center">
        <button
          className="p-6 m-2 text-2xl bg-green-700 hover:bg-green-900 transition duration-200 w-20 rounded-lg"
          onClick={() => increaseCounter()}
        >
          +
        </button>
        <button
          className="p-6 m-2 text-2xl bg-orange-400 hover:bg-orange-500 transition-all duration-200 w-20 rounded-lg"
          onClick={() => generateRandomDigit()}
        >
          🎲
        </button>
        <button
          className="p-6 m-2 text-2xl bg-red-700 hover:bg-red-900 transition-all duration-200 w-20 rounded-lg"
          onClick={() => decreaseCounter()}
        >
          -
        </button>
      </div>
      <CounterVariable increaseCounter={increaseCounter} decreaseCounter={decreaseCounter} />
    </div>
  );
};
