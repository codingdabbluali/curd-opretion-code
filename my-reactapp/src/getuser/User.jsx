// rafce


import React, {  useEffect, useState } from 'react'
import "./user.css";
import axios from "axios";
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
const User = () => {
    const [users, setUsers] =useState([])
useEffect(()=>{
    const fetchData = async () =>{

        try {
           const response = await axios.get("http://localhost:8000/api/users");
           setUsers(response.data)
            
        } catch (error) {
            console.log("error while  fetching data ",error)
        }
    };
    fetchData();

} ,[] );


const deleteUser = async (userId) => {
  try {
    // Perform the delete operation
    const response = await axios.delete(`http://localhost:8000/api/delete/user/${userId}`);

    // Update the state by filtering out the deleted user
    setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));

    // Show a success message
    toast.success(response.data.message, { position: "top-right" });
  } catch (error) {
    // Handle errors
    console.error("Error deleting user:", error);
    toast.error("Failed to delete user. Please try again.", { position: "top-right" });
  }
};
    


 
    return (
    <div className='userTable'>
        <Link to="add" type="button" class="btn btn-primary">Add user <i class="fa-solid fa-user-plus"></i></Link>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th scope='col'>S. no.</th>
                    <th scope='col'>Name</th>
                    <th scope='col'>Email</th>
                    <th scope='col'>Address</th>
                    <th scope='col'>Action</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index)=>{
                    return(
                  <tr>
                    <td>{index+1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.address}</td>
                    <td className='actionButtons'>
                    <Link to={`/update/`+user._id} type="button" class="btn btn-info"> 
                        <i class="fa-solid fa-pen-to-square"></i>
                         </Link>                       
                    <button 
                    onClick={()=>deleteUser(user._id)}
                    type="button" class="btn btn-danger"> 
                          <i class="fa-solid fa-trash"></i>
                          </button>
                  </td>
                </tr>
                    )
                })}
                {/* <tr>
                    <td>1</td>
                    <td>Rahul kumar singh</td>
                    <td>rahulkumar@gmail.com</td>
                    <td>India</td>
                    <td className='actionButtons'>
                    <button type="button" class="btn btn-info"> 
                        <i class="fa-solid fa-pen-to-square"></i>
                         </button>                       
                    <button type="button" class="btn btn-danger"> 
                          <i class="fa-solid fa-trash"></i>
                          </button>
                  </td>
                </tr> */}
            </tbody>
        </table>

    </div>
  )
}

export default User



// import React, { useEffect, useState } from "react";
// import "./user.css";
// import axios from "axios";

// const User = () => {
//     const [users, setUsers] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 // const response = await axios.get("http://localhost:8000/api/users");
//                 const response = await axios.get("http://localhost:8000/api/users");

//                 setUsers(response.data);
//             } catch (error) {
//                 console.error(
//                     "Error while fetching data: ",
//                     error.response ? error.response.data : error.message
//                 );
//             }
//         };
//         fetchData();
//     }, []);

//     return (
//         <div className="userTable">
//             <button type="button" className="btn btn-primary">
//                 Add user <i className="fa-solid fa-user-plus"></i>
//             </button>
//             <table className="table table-bordered">
//                 <thead>
//                     <tr>
//                         <th scope="col">S. no.</th>
//                         <th scope="col">Name</th>
//                         <th scope="col">Email</th>
//                         <th scope="col">Address</th>
//                         <th scope="col">Action</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {users.length > 0 ? (
//                         users.map((user, index) => (
//                             <tr key={user.id || index}>
//                                 <td>{index + 1}</td>
//                                 <td>{user.name}</td>
//                                 <td>{user.email}</td>
//                                 <td>{user.address}</td>
//                                 <td className="actionButtons">
//                                     <button type="button" className="btn btn-info">
//                                         <i className="fa-solid fa-pen-to-square"></i>
//                                     </button>
//                                     <button type="button" className="btn btn-danger">
//                                         <i className="fa-solid fa-trash"></i>
//                                     </button>
//                                 </td>
//                             </tr>
//                         ))
//                     ) : (
//                         <tr>
//                             <td colSpan="5" className="text-center">
//                                 No users found
//                             </td>
//                         </tr>
//                     )}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default User;







// import React, { useEffect, useState } from "react";
// import "./user.css";
// import axios from "axios";

// const User = () => {
//     const [users, setUsers] = useState([]);
  

//     useEffect(() => {
//         fetch("http://localhost:8000/api/users")
//           .then((res) => res.json())
//           .then((data) => {
//             console.log("Fetched Data:", data);
//             setUsers(data); // Update state
//           })
//           .catch((error) => console.error("Error fetching data:", error));
//       }, []);


//     return (
//         <div className="userTable">
//             <button type="button" className="btn btn-primary">
//                 Add user <i className="fa-solid fa-user-plus"></i>
//             </button>
//             <table className="table table-bordered">
//                 <thead>
//                     <tr>
//                         <th scope="col">S. no.</th>
//                         <th scope="col">Name</th>
//                         <th scope="col">Email</th>
//                         <th scope="col">Address</th>
//                         <th scope="col">Action</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {users.length > 0 ? (
//                         users.map((user, index) => (
//                             <tr key={user.id || index}>
//                                 <td>{index + 1}</td>
//                                 <td>{user.name}</td>
//                                 <td>{user.email}</td>
//                                 <td>{user.address}</td>
//                                 <td className="actionButtons">
//                                     <button type="button" className="btn btn-info">
//                                         <i className="fa-solid fa-pen-to-square"></i>
//                                     </button>
//                                     <button type="button" className="btn btn-danger">
//                                         <i className="fa-solid fa-trash"></i>
//                                     </button>
//                                 </td>
//                             </tr>
//                         ))
//                     ) : (
//                         <tr>
//                             <td colSpan="5" className="text-center">
//                                 No users found
//                             </td>
//                         </tr>
//                     )}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default User;  


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./user.css";

// const User = () => {
//   const [users, setUsers] = useState([]);
//   const [newUser, setNewUser] = useState({ name: "", email: "", address: "" });
//   const [editingUser, setEditingUser] = useState(null);
//   const [showAddUserForm, setShowAddUserForm] = useState(false);

 
//   useEffect(() => {
//             fetch("http://localhost:8000/api/users")
//               .then((res) => res.json())
//               .then((data) => {
//                 console.log("Fetched Data:", data);
//                 setUsers(data); // Update state
//               })
//               .catch((error) => console.error("Error fetching data:", error));
//           }, []);


// const handleAddUser = () => {
//     const config = {
//       headers: {
//         "Content-Type": "application/json", // Ensure the server expects JSON
//       },
//     };
  
    
//     axios
//       .post("http://localhost:8000/api/update/user", newUser, config)
//       .then((res) => {
//         console.log("User added successfully:", res.data);
//         setUsers([...users, res.data]); // Update the state with the new user
//         setNewUser({ name: "", email: "", address: "" }); // Reset the form
//       })
//       .catch((err) => {
//         if (err.response) {
//           // The request was made, and the server responded with a status code
//           console.error("Server Error:", err.response.data);
//         } else if (err.request) {
//           // The request was made but no response was received
//           console.error("No response from server:", err.request);
//         } else {
//           // Other errors
//           console.error("Error:", err.message);
//         }
//       });
//   };
  



  

//   // // Update a user
//   // const handleUpdate = async (userId, updatedData) => {
//   //   try {
//   //     const response = await axios.put(
//   //       `http://localhost:8000/api/update/user/${userId}`,
//   //       updatedData
//   //     );
//   //     console.log("User updated successfully:", response.data);
//   //     // Optionally update the users list after update
//   //     setUsers(users.map(user => user.id === userId ? response.data : user));
//   //   } catch (error) {
//   //     console.error("Error updating user:", error);
//   //   }
//   // };
//   // Handle form submission for updating the user
// const handleUpdate = async (userId, updatedData) => {
//   try {
//     const response = await axios.put(
//       `http://localhost:8000/api/update/user/${userId}`,
//       updatedData
//     );
//     console.log("User updated successfully:", response.data);
//     // Optionally update the users list after update
//     setUsers(users.map(user => user.id === userId ? response.data : user));
//   } catch (error) {
//     console.error("Error updating user:", error);
//   }
// };
  
//   const handleDelete = (id) => {
//     axios.delete(`http://localhost:8000/api/users/${id}`)
//       .then(() => setUsers(users.filter((user) => user.id !== id)))
//       .catch((err) => console.error("Error deleting user:", err));
//   };

//   return (
//     <div className="userTable">
//       <button
//         type="button"
//         className="btn btn-primary"
//         onClick={() => setShowAddUserForm(true)}
//       >
//         Add User <i className="fa-solid fa-user-plus"></i>
//       </button>
//       {showAddUserForm && (
//         <div className="addUserForm">
//           <h3>Add New User</h3>
//           <input
//             type="text"
//             placeholder="Name"
//             value={newUser.name}
//             onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             value={newUser.email}
//             onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
//           />
//           <input
//             type="text"
//             placeholder="Address"
//             value={newUser.address}
//             onChange={(e) => setNewUser({ ...newUser, address: e.target.value })}
//           />
//           <button onClick={handleAddUser}>Add</button>
//           <button onClick={() => setShowAddUserForm(false)}>Cancel</button>
//         </div>
//       )}
//       <table className="table table-bordered">
//         <thead>
//           <tr>
//             <th scope="col">S. no.</th>
//             <th scope="col">Name</th>
//             <th scope="col">Email</th>
//             <th scope="col">Address</th>
//             <th scope="col">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.length > 0 ? (
//             users.map((user, index) => (
//               <tr key={user.id}>
//                 <td>{index + 1}</td>
//                 <td>{user.name}</td>
//                 <td>{user.email}</td>
//                 <td>{user.address}</td>
//                 <td>
//                   <button
//                     type="button"
//                     className="btn btn-info"
//                     onClick={() => setEditingUser(user)}
//                   >
//                     <i className="fa-solid fa-pen-to-square"></i>
//                   </button>
//                   <button
//                     type="button"
//                     className="btn btn-danger"
//                     onClick={() => handleDelete(user.id)}
//                   >
//                     <i className="fa-solid fa-trash"></i>
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="5" className="text-center">No users found</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//       {editingUser && (
//         <div className="editModal">
//           <h3>Edit User</h3>
//           <input
//             type="text"
//             value={editingUser.name}
//             onChange={(e) => setEditingUser({ ...editingUser, name: e.target.value })}
//           />
//           <input
//             type="email"
//             value={editingUser.email}
//             onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
//           />
//           <input
//             type="text"
//             value={editingUser.address}
//             onChange={(e) => setEditingUser({ ...editingUser, address: e.target.value })}
//           />
//           <button onClick={handleUpdate}>Update</button>
//           <button onClick={() => setEditingUser(null)}>Cancel</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default User;
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./user.css";

// const User = () => {
//   const [users, setUsers] = useState([]);
//   const [newUser, setNewUser] = useState({ name: "", email: "", address: "" });
//   const [editingUser, setEditingUser] = useState(null);
//   const [showAddUserForm, setShowAddUserForm] = useState(false);

//   // Fetch users on component mount
//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get("http://localhost:8000/api/users");
//       setUsers(response.data);
//     } catch (error) {
//       console.error("Error fetching users:", error);
//     }
//   };

//   const handleAddUser = async () => {
//     if (!newUser.name || !newUser.email || !newUser.address) {
//       alert("All fields are required!");
//       return;
//     }

//     try {
//       const response = await axios.post("http://localhost:8000/api/users", newUser, {
//         headers: { "Content-Type": "application/json" },
//       });
//       setUsers([...users, response.data]);
//       setNewUser({ name: "", email: "", address: "" });
//       setShowAddUserForm(false);
//     } catch (error) {
//       console.error("Error adding user:", error);
//     }
//   };

//   const handleUpdateUser = async () => {
//     if (!editingUser.name || !editingUser.email || !editingUser.address) {
//       alert("All fields are required!");
//       return;
//     }

//     try {
//       const response = await axios.put(
//         `http://localhost:8000/update/user/${editingUser._id}`, // Use _id for MongoDB
//         editingUser,
//         { headers: { "Content-Type": "application/json" } }
//       );
//       const updatedUsers = users.map((user) =>
//         user._id === editingUser._id ? response.data : user // Use _id for MongoDB
//       );
//       setUsers(updatedUsers);
//       setEditingUser(null); // Close the edit modal
//     } catch (error) {
//       console.error("Error updating user:", error);
//     }
//   };

//   const handleDeleteUser = async (id) => {
//     if (!id) {
//       console.error("User ID is missing");
//       return;
//     }

//     try {
//       await axios.delete(`http://localhost:8000/api/users/${id}`);
//       setUsers(users.filter((user) => user._id !== id)); // Use _id for MongoDB
//     } catch (error) {
//       console.error("Error deleting user:", error);
//     }
//   };

//   return (
//     <div className="userTable">
//     <h1>User Management</h1>
  
//     {/* Add User Button */}
//     <button
//       type="button"
//       className="btn btn-primary"
//       onClick={() => setShowAddUserForm(true)}
//     >
//       Add User <i className="fa-solid fa-user-plus"></i>
//     </button>
  
//     {/* Add User Form */}
//     {showAddUserForm && (
//       <div className="addUserForm">
//         <h3>Add New User</h3>
//         <input
//           type="text"
//           placeholder="Name"
//           value={newUser.name}
//           onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={newUser.email}
//           onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Address"
//           value={newUser.address}
//           onChange={(e) => setNewUser({ ...newUser, address: e.target.value })}
//         />
//         <button onClick={handleAddUser}>Add</button>
//         <button onClick={() => setShowAddUserForm(false)}>Cancel</button>
//       </div>
//     )}
  
//     {/* User Table */}
//     <table className="table table-bordered">
//       <thead>
//         <tr>
//           <th scope="col">S. no.</th>
//           <th scope="col">Name</th>
//           <th scope="col">Email</th>
//           <th scope="col">Address</th>
//           <th scope="col">Actions</th>
//         </tr>
//       </thead>
//       <tbody>
//         {users.length > 0 ? (
//           users.map((user, index) => (
//             <tr key={user.id}>
//               <td>{index + 1}</td>
//               <td>{user.name}</td>
//               <td>{user.email}</td>
//               <td>{user.address}</td>
//               <td>
//                 <button
//                   type="button"
//                   className="btn btn-info"
//                   onClick={() => setEditingUser(user)}
//                 >
//                   <i className="fa-solid fa-pen-to-square"></i>
//                 </button>
//                 <button
//                   type="button"
//                   className="btn btn-danger"
//                   onClick={() => handleDeleteUser(user.id)}
//                 >
//                   <i className="fa-solid fa-trash"></i>
//                 </button>
//               </td>
//             </tr>
//           ))
//         ) : (
//           <tr>
//             <td colSpan="5" className="text-center">
//               No users found
//             </td>
//           </tr>
//         )}
//       </tbody>
//     </table>
  
//     {/* Edit User Modal */}
//     {editingUser && (
//       <div className="editModal">
//         <h3>Edit User</h3>
//         <input
//           type="text"
//           value={editingUser.name}
//           onChange={(e) =>
//             setEditingUser({ ...editingUser, name: e.target.value })
//           }
//         />
//         <input
//           type="email"
//           value={editingUser.email}
//           onChange={(e) =>
//             setEditingUser({ ...editingUser, email: e.target.value })
//           }
//         />
//         <input
//           type="text"
//           value={editingUser.address}
//           onChange={(e) =>
//             setEditingUser({ ...editingUser, address: e.target.value })
//           }
//         />
//         <button onClick={handleUpdateUser}>Update</button>
//         <button onClick={() => setEditingUser(null)}>Cancel</button>
//       </div>
//     )}
//   </div>
  
//   );
// };

// export default User;
