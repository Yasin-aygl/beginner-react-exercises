import { useState } from "react";

export const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(0);

  const handleCalculate = () => {
    setResult(num1 + num2);
  };

  return (
    <div className="calculate">
      <h1>Calculate</h1>
      <div>
        <input type="number" onChange={(e) => setNum1(+e.target.value)} />
        <p style={{ display: "inline-block" }}>+</p>
        <input type="number" onChange={(e) => setNum2(+e.target.value)} />
      </div>
      <button onClick={handleCalculate}>calculate</button>
      <h1>{result || 0}</h1>
    </div>
  );
};
