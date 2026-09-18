"use client";
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  console.log("Counter component rendered");
  const handleIncrese = () => {
    console.log("increse button clicked");
    setCount(count + 1);
  };
  return (
    <div>
      <h2 className="text-4xl font-bold mb-4">Component Counter : {count}</h2>
      <button
        onClick={handleIncrese}
        className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded text-white"
      >
        Increse
      </button>
    </div>
  );
};

export default Counter;
