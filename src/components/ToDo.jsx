import { useState } from "react";

const ToDo = () => {
  //   const [input, setInput] = useState("");
  //   const [items, setItems] = useState([]);

  //   const addItems = () => {
  //     if (!input) {
  //       alert("Enter a İtem");
  //       return;
  //     }

  //     const item = {
  //       id: Math.floor(Math.random() * 1000),
  //       value: input,
  //     };

  //     setItems((oldItems) => [...oldItems, item]);
  //     setInput("");
  //   };

  //   const deleteItem = (id) => {
  //     const newArray = items.filter((item) => item.id !== id);
  //     setItems(newArray);
  //   };

  //   return (
  //     <div className="to-do">
  //       <h1>TO DO</h1>
  //       <input type="text" onChange={(e) => setInput(e.target.value)} />
  //       <button onClick={addItems}>Add</button>
  //       <div>
  //         <ul>
  //           {items.map((todo) => {
  //             return (
  //               <li key={todo.id}>
  //                 {todo.value}
  //                 <button onClick={() => deleteItem(todo.id)}>X</button>
  //               </li>
  //             );
  //           })}
  //         </ul>
  //       </div>
  //     </div>
  //   );

  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const addItems = () => {
    if (!input) {
      alert("Enter an item");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: input,
    };

    setItems((oldItems) => [...oldItems, item]);
    setInput("")
  };

  const deleteItems = (id) => {
    const newArray = items.filter((todo) => todo.id !== id);
    setItems(newArray);
  };

  return (
    <div className="to-do">
      <h1>TO DO</h1>
      <input
        type="text"
        placeholder="Enter an item"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addItems}>Enter</button>
      <div>
        <ul>
          {items.map((todo) => {
            return (
              <li key={todo.id}>
                {todo.value}
                <button onClick={() => deleteItems(todo.id)}>X</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default ToDo;
