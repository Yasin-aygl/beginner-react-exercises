import { useState } from "react";

const StateUptade = () => {
  const [value, setValue] = useState({
    firsName: "",
    age: "",
  });

const handleNameChange = (e)=> {
   setValue({
    ...value,
    firsName : e.target.value
   })
}

const handleAgeChange = (e) => {
setValue({
  ...value,
  age: e.target.value
})
}

  return (
    <div className="state-uptade">
      <h1> State Uptade</h1>
      <div>
        <p>Show Name:{value.firsName}</p>
        <p>Show Age:{value.age}</p>
      </div>
      <div>
        <label htmlFor="">Name:</label>
        <input type="text" onChange={handleNameChange}/>
      </div>
      <div>
        <label htmlFor="">Age:</label>
        <input type="text" onChange={handleAgeChange} />
      </div>
    </div>
  );
};
export default StateUptade;

















// const handleNameChange = (e) => {
//   setValue({
//      ...value,
//      firsName: e.target.value
//   })
//    };
 
//    const handleAgeChange = (e) => {
//        setValue({
//          ...value,
//          age :  e.target.value
//        })
//    };