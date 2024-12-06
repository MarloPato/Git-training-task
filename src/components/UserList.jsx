import { useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState([
    { name: "Emma Andersson", age: 29, city: "Göteborg" },
    { name: "Lucas Karlsson", age: 34, city: "Stockholm" },
    { name: "Sofia Nilsson", age: 22, city: "Malmö" },
    { name: "Erik Johansson", age: 41, city: "Uppsala" },
    { name: "Ida Persson", age: 27, city: "Västerås" },
  ]);

  return (
    <>
      <h2>User list</h2>
      <ul className="flex-wrapper">
        {users.map((user, i) => {
          return (
            <li key={i}>
              Namn: {user.name}
              <p>{user.age} år</p>
              <p>Stad: {user.city}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UserList;
