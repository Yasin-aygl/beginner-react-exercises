import { useEffect, useState } from "react";

const FetchUser = () => {
  const url = "https://jsonplaceholder.typicode.com/users/1";
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        // console.log(data);
      });
  }, []);

  return (
    <div className="fetch-user">
      <h1>Fetch User</h1>
      <h3>User Data</h3>
      <div>
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Username:</strong> {user.username}
        </p>
        <p>
          <strong>Website:</strong> {user.website}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
      </div>
    </div>
  );
};
export default FetchUser;
