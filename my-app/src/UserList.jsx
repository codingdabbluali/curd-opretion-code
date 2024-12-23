// import React, { useEffect, useState } from "react";

// const UserList = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     // Replace with your actual API endpoint
//     fetch("http://localhost:8003/api/user/getALLusers")
//       .then((response) => response.json())
//       .then((data) => {
//         setUsers(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching users:", error);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>User List</h1>
//       {users.length > 0 ? (
//         <ul>
//           {users.map((user) => (
//             <li key={user.id}>{user.name}</li>
            
//           ))}
//         </ul>
//       ) : (
//         <p>No users found.</p>
//       )}
//     </div>
//   );
// };

// export default UserList;


import { useEffect, useState } from "react";

function App() {
  const [data, setData] = 
  useState([]);
  
  useEffect(() => {
    fetch("/api/users") // Use relative path
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((json) => {
        console.log(json); // Log the fetched data to check its structure
        setData(json);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  
  console.log(data); // Log the data state to see if it updates

  return (
    <div>
      <h1>User Data</h1>
      <ul>
        {data.length > 0 ? (
          data.map((user) => (
            <li key={user._id}>
              <p>Name: {user.name}</p>
              {user.email && <p>Email: {user.email}</p>}
              {user.address && <p>Address: {user.address}</p>}
            </li>
          ))
        ) : (
          <p>No data available</p>
        )}
      </ul>
    </div>
  );
}

export default App;



