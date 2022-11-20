import React from "react";
import { useState } from "react";

export const CounterPage = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);
  const [valueToAdd, setValueToAdd] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    setValueToAdd(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setCount(count + valueToAdd);
    setValueToAdd(0);
  };
  return (
    <div>
      <p>Count is {count}</p>
      <button onClick={increment}>Add</button>
      <button onClick={decrement}>Sub</button>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name=""
          id=""
          value={valueToAdd || ""}
          onChange={handleChange}
        />
        <button>Add it</button>
      </form>
    </div>
  );
};
