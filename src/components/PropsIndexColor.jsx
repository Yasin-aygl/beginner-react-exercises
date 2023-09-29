// import { useState } from "react";

import { useState } from "react";

// export const PropsIndexColor = () => {
//   const [colors, setColors] = useState([]);
//   //Yeni bir renk eklemek için kullanılacak fonksiyon tanımlanır
//   const addColorAtIndex = (newColor, index) => {
//     // Mevcut renklerin bir kopyası oluşturulur
//     const colorsCopy = [...colors];
//     // Yeni rengi, belirtilen endekse eklemek için splice kullanılır
//     colorsCopy.splice(index, 0, newColor);
//     // Renklerin kopyasını state'e atar ve bileşenin yeniden render edilmesini sağlar
//     setColors(colorsCopy.slice());
//   };

//   const renderedColors = colors.map((color, i) => {
//     return <li key={i}>{color}</li>;
//   });

//   return (
//     <div style={{ marginTop: "60px", textAlign: "center", backgroundColor: "#ccc" }}>
//       <h1>İnput İndex Color</h1>
//       <Input onSubmit={addColorAtIndex} max={colors.length} />
//       <ul>{renderedColors}</ul>
//     </div>
//   );
// };

// // INPUT KISMI

// //  Input bileşeni, yeni renk ve endeks girişini alır
// const Input = ({ onSubmit, max }) => {
//   // Yeni renk ve endeks bilgilerini tutacak state'ler oluşturulur
//   const [text, setText] = useState("");
//   const [number, setNumber] = useState(0);

//   //  Form gönderildiğinde çağrılacak olan işlev tanımlanır
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     //  Yeni renk ve endeks bilgileri onSubmit işlevine iletilir
//     onSubmit(text, number);
//     setText("");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Renk</label>
//         <input value={text} onChange={(e) => setText(e.target.value)} />
//       </div>
//       <div>
//         <label>Index'e Ekle</label>
//         <input
//           type="number"
//           min={0}
//           max={max}
//           value={number}
//           onChange={(e) => setNumber(parseInt(e.target.value))}
//         />
//       </div>
//       <button>Gönder</button>
//     </form>
//   );
// };

// TEKRAR 1 ==============================

// import { useState } from "react";

// export const PropsIndexColor = () => {
//   const [colors, setColors] = useState([]);

//   // Yeni bir element eklemek için kulanılan fonksiyon
//   const addColorAtIndex = (newColor, index) => {
//     const ColorsCopy = [...colors];

//     ColorsCopy.splice(index, 0, newColor);

//     setColors(ColorsCopy.slice());
//   };

//   const renderedColors = colors.map((color, i) => {
//     return <li key={i}>{color}</li>;
//   });

//   return (
//     <div style={{ marginTop: "60px", textAlign: "center" }}>
//       <h1>Props İnput Color</h1>
//       <Input onSubmit={addColorAtIndex} max={colors.length} />
//       <ul>{renderedColors}</ul>
//     </div>
//   );
// };

// // INPUT KISMI

// const Input = ({ onSubmit, max }) => {
//   const [text, setText] = useState("");
//   const [number, setNumber] = useState(0);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // yeni bir renk ve index bilgileri onSubmit e iletrilir
//     onSubmit(text, number);
//     setText("");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Renk</label>
//         <input
//           type="text"
//           onChange={(e) => setText(e.target.value)}
//           value={text}
//         />
//       </div>
//       <div>
//         <label>Number</label>
//         <input
//           type="number"
//           value={number}
//           min={0}
//           max={max}
//           onChange={(e) => setNumber(parseInt(e.target.value))}
//         />
//       </div>
//       <button>gönder</button>
//     </form>
//   );
// };

// TEKRAR 2 ====================================

// export const PropsIndexColor = () => {
//   const [colors, setColor] = useState([]);

//   const addColorAtIndex = (newColor, index) => {
//     const colorsCopy = [...colors];
//     colorsCopy.splice(index, 0, newColor);

//     setColor(colorsCopy.slice);
//   };

//   const renderedColors = colors.map((color, i) => {
//     return <li key={i}>{color}</li>;
//   });

//   return (
//     <div style={{ marginTop: "60px", textAlign: "center" }}>
//       <h1>İnput İndex Colors</h1>
//       <Input onSubmit={addColorAtIndex} max={colors.length} />
//       <ul>{renderedColors}</ul>
//     </div>
//   );
// };

// const Input = ({ onSubmit, max }) => {
//   const [text, setText] = useState("");
//   const [number, setNumber] = useState(0);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     onSubmit(number, text);
//     setText("");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Text</label>
//         <input
//           type="text"
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//         />
//       </div>
//       <div>
//         <label>Number</label>
//         <input
//           type="number"
//           value={number}
//           min={0}
//           max={max}
//           onChange={(e) => setNumber(parseInt(e.target.value))}
//         />
//       </div>
//     </form>
//   );
// };

// TEKRAR 3 ===============================

export const PropsIndexColor = () => {
  const [colors, setColors] = useState([]);

  const addColorAtIndex = (newColor, index) => {
    const colorCopy = [...colors];
    colorCopy.splice(index, 0, newColor);
    setColors(colorCopy.slice());
  };

  const renderedColor = colors.map((color, i) => {
    return <li key={i}>{color}</li>;
  });

  return (
    <div style={{textAlign:"center", backgroundColor:"#ccc"}}>
      <h1>ADD İNDEX AT COLOR</h1>
      <Input onSubmit={addColorAtIndex} max={colors.length} />
      <ul>{renderedColor}</ul>
    </div>
  );
};

const Input = ({ onSubmit, max }) => {
  const [text, setText] = useState("");
  const [number, setNumber] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(text, number);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>TEXT:</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <label>Number:</label>
        <input
          type="number"
          max={max}
          min={0}
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
      </div>
      <button>gönder</button>
    </form>
  );
};
