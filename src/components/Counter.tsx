"use client";

import React, { useState } from 'react';

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const generateRandomDigit = () => {
    const randomDigit = Math.floor(Math.random() * 10) + 1;
    setCounter(randomDigit);
  }

  return (
    <div>
      <h2 className="text-5xl text-center mb-4">{counter}</h2>
      <button className="p-6 m-2 text-2xl bg-green-700 w-20 rounded-lg" onClick={() => setCounter(counter + 1)}>+</button>
      <button className="p-6 m-2 text-2xl bg-orange-400 w-20 rounded-lg" onClick={() => generateRandomDigit()}>🎲</button>
      <button className="p-6 m-2 text-2xl bg-red-700 w-20 rounded-lg" onClick={() => setCounter(counter - 1)}>-</button>
    </div>
  )
}
