import { useState } from "react";

export const DecreaseIncrease = () => {
  const [value, setValue] = useState(0);

  const increase = () => {
    setValue(value + 1);
  };

  const decrease = () => {
    setValue(value - 1);
  };

  return (
    <div className="decrease-increase">
      <h1> Decrease Increase</h1>
      <h2>{value}</h2>
      <button onClick={decrease}>Decrease</button>
      <button onClick={increase}>İncrease</button> 
    </div>
  );
};
