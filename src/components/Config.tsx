import { useState } from "react";

import { Operation, MaxNumber, Configuration } from "../types";

interface ConfigProps {
  onStart: (config: Configuration) => void;
}

function Config({ onStart }: ConfigProps) {
  const [operation, setOperation] = useState<Operation>("+");
  const [maxNumber, setMaxNumber] = useState<MaxNumber>(11);

  return (
    <form
      className="card"
      onSubmit={(e) => {
        e.preventDefault();
        onStart({ operation, maxNumber });
      }}
    >
      <div>
        I want to{" "}
        <label className={operation === "+" ? "selected button" : "button"}>
          add
          <input
            type="radio"
            value="+"
            name="operation"
            checked={operation === "+"}
            onChange={(e) => setOperation(e.target.value as Operation)}
          />
        </label>
        <label className={operation === "-" ? "selected button" : "button"}>
          subtract
          <input
            type="radio"
            value="-"
            name="operation"
            checked={operation === "-"}
            onChange={(e) => setOperation(e.target.value as Operation)}
          />
        </label>
        <label className={operation === "x" ? "selected button" : "button"}>
          multiply
          <input
            type="radio"
            value="x"
            name="operation"
            checked={operation === "x"}
            onChange={(e) => setOperation(e.target.value as Operation)}
          />
        </label>
        <label className={operation === "/" ? "selected button" : "button"}>
          divide
          <input
            type="radio"
            value="/"
            name="operation"
            checked={operation === "/"}
            onChange={(e) => setOperation(e.target.value as Operation)}
          />
        </label>
        {"  "}
        numbers{" "}
        <label className={maxNumber === 11 ? "selected button" : "button"}>
          upto 10
          <input
            type="radio"
            value="11"
            name="maxNumber"
            checked={maxNumber === 11}
            onChange={(e) => setMaxNumber(Number(e.target.value) as MaxNumber)}
          />
        </label>
        <label className={maxNumber === 101 ? "selected button" : "button"}>
          upto 100
          <input
            type="radio"
            value="101"
            name="maxNumber"
            checked={maxNumber === 101}
            onChange={(e) => setMaxNumber(Number(e.target.value) as MaxNumber)}
          />
        </label>
        <label className={maxNumber === 1001 ? "selected button" : "button"}>
          upto 1000
          <input
            type="radio"
            value="1001"
            name="maxNumber"
            checked={maxNumber === 1001}
            onChange={(e) => setMaxNumber(Number(e.target.value) as MaxNumber)}
          />
        </label>
      </div>
      <button type="submit">Start!</button>
    </form>
  );
}

export default Config;
