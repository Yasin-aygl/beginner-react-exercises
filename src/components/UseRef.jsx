import React, { useState, useRef } from "react";

const UseRef = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  //Yukarıdaki örnekte, useRef ile bir inputRef oluşturduk ve ardından bu referansı <input> öğesine atadık. focusInput fonksiyonu, düğmeye tıklandığında bu referansı kullanarak <input> öğesine odaklanır.

  return (
    <div className="use-ref">
      <h1>useRef alıştırma</h1>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Input'a Odaklan</button>
      <Counter />
    </div>
  );
};

function Counter() {
  const count = useRef(0); // useRef ile bir değer saklayın, ancak yeniden render edilmez.
  const [renderCount, setRenderCount] = useState(0); // State kullanarak bileşenin yeniden render edilmesini izleyin.

  const increment = () => {
    count.current++;
    setRenderCount(renderCount + 1);
  };

  //Yukarıdaki örnekte, useRef ile bir count değeri saklandı ve bu değer bileşen yeniden çizilse bile aynı kalır. Ancak renderCount durumu, bileşenin yeniden render edilmesini tetikler ve artışları izler.

  return (
    <div>
        <hr />
      <p>Count: {count.current}</p>
      <p>Render Count: {renderCount}</p>
      <button onClick={increment}>Artır</button>
      <hr />
    </div>
  );
}

export default UseRef;
