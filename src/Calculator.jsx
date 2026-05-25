import React, { useState } from "react";
import './calculator.css'

function Calculator() {
  const [value, setValue] = useState("");

  const handleClick = (e) => {
    setValue(value + e.target.innerText);
  };

  const calculate = () => {
    try {
      setValue(eval(value));
    } catch {
      setValue("Error");
    }
  };

  const clear = () => {
    setValue("");
  };

  return (
    <div className="calculator">
      <h2>Calculator</h2>

      <input
        type="text"
        value={value}
        readOnly
        className="display"
      />

      <div className="buttons">
        <button onClick={handleClick}>7</button>
        <button onClick={handleClick}>8</button>
        <button onClick={handleClick}>9</button>
        <button onClick={handleClick}>+</button>

        <button onClick={handleClick}>4</button>
        <button onClick={handleClick}>5</button>
        <button onClick={handleClick}>6</button>
        <button onClick={handleClick}>-</button>

        <button onClick={handleClick}>1</button>
        <button onClick={handleClick}>2</button>
        <button onClick={handleClick}>3</button>
        <button onClick={handleClick}>*</button>

        <button onClick={handleClick}>0</button>
        <button onClick={clear}>C</button>
        <button onClick={calculate}>=</button>
        <button onClick={handleClick}>/</button>
      </div>
    </div>
  );
}

export default Calculator;
