"use client";

import { useState } from "react";

type TPropTypes = {
  increaseCounter: () => void;
  decreaseCounter: () => void;
}

export default function CounterVariable({ increaseCounter, decreaseCounter }: TPropTypes) {
  const [counter, setCounter] = useState(0);

  function increase() {
    console.log(counter);
    setCounter(counter + 1);
    increaseCounter();
  }

  function decrease() {
    console.log(counter);
    setCounter(counter - 1);
    decreaseCounter();
  }

  console.log("rerender child counter");
  return (
    <div>
      <h3 className={"text-2xl"}>{counter}</h3>
      <button className={"p-6 bg-sky-400 rounded-lg w-20 text-2xl"} onClick={() => increase()}>
        +
      </button>
      <button className={"p-6 bg-indigo-400 ml-4 rounded-lg w-20 text-2xl"} onClick={() => decrease()}>
        -
      </button>
    </div>
  );
}
