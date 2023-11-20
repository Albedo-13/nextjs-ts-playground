"use client";

import React, { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const generateRandomDigit = () => {
    const randomDigit = Math.floor(Math.random() * 21) - 10;
    setCounter(randomDigit);
  };

  const increaseCounter = () => {
    setCounter(counter + 1);
  }

  const decreaseCounter = () => {
    setCounter(counter - 1);
  }

  return (
    <div>
      <h2 className="text-5xl text-center mb-4">{counter}</h2>
      <div className="flex flex-wrap justify-center" role="group">
        <button className="p-6 m-2 text-2xl bg-green-700 w-20 rounded-lg" onClick={() => increaseCounter()}>
          +
        </button>
        <button className="p-6 m-2 text-2xl bg-orange-400 w-20 rounded-lg" onClick={() => generateRandomDigit()}>
          🎲
        </button>
        <button className="p-6 m-2 text-2xl bg-red-700 w-20 rounded-lg" onClick={() => decreaseCounter()}>
          -
        </button>
      </div>
    </div>
  );
};
