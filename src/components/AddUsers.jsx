import { useState } from "react";

const AddUsers = () => {
  // const [input, setInput] = useState("");
  // const [users, setUsers] = useState([]);

  // const addUser = () => {
  //   setUsers([...users, input]);
  // };

  // return (
  //   <div className="addUsers">
  //   <h1>Add Users</h1>
  //     <div>
  //       <input
  //         type="text"
  //         onChange={(e) => setInput(e.target.value)}
  //         value={input}
  //       />
  //       <button onClick={addUser}>Add</button>
  //     </div>
  //     <h2>{users ? users.length : 0}</h2>
  //    <ul>{users.map((user)  => (
  //       <li>{user}</li>
  //    ))}</ul>
  //   </div>
  // );

  const [input, setInput] = useState("");
  const [users, setUsers] = useState([]);

  const addUsers = () => {
    if (!input) {
      alert("Enter a user!");
      return;
    }

    setUsers([...users, input]);
    setInput("");
  };

  return (
    <div className="addUsers">
      <h1>Add Users</h1>
      <div>
        <input type="text" onChange={(e) => setInput(e.target.value)} />
        <button onClick={addUsers}>Add</button>
      </div>
      <h2>{users ? users.length : 0}</h2>
      <ul>
        {users.map((user) => {
          return <li>{user}</li>;
        })}
      </ul>
    </div>
  );
};
export default AddUsers;
