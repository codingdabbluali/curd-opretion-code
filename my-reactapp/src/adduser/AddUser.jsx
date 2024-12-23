import React, { useState } from 'react'
import "./adduser.css";
import { Link ,useNavigate} from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
const AddUser = () => {

    const users ={
        name:"",
        email:"",
        address:"",
    };
    const [User, setUsers] = useState(users); // Correct syntax for useState
    const navigate = useNavigate();
  
  const inputHandler = (e) => {
    const { name, value } = e.target; // Destructure name and value from e.target
    console.log(name,value);
    setUsers({ ...User, [name]: value }); // Spread previous state and update the specific field
  };
  const SubmitFrom = async(e)=>{
    e.preventDefault();
    await axios.post("http://localhost:8000/api/user",User)
    .then((Response)=>{
        // console.log("user created successfully");
        toast.success(Response.data.message,{position:"top-right"});
        navigate("/");
    })
.catch((error)=>{
    console.log(error);
})
  }
  return (
    <div className="addUser">
        <Link to="/" type="button" class="btn btn-secondary">
        <i class="fa-solid fa-backward"></i> Back
         </Link>
        <h3> Add New User</h3>
        <form className="addUserForm" onSubmit={SubmitFrom}>
            <div className="inputGroup">
                <label htmlFor="name">Name:</label> 
                <input type="text" id="name"
                 name="name" 
                 onChange={inputHandler}
                autoComlate="off"
                placeholder="Enter the name"/>
                            </div>
                            <div className="inputGroup">
                <label htmlFor="email">Email:</label> 
                <input type="text"
                 id="email" name="email" 
                 onChange={inputHandler}
                autoComlate="off"
                placeholder="Enter the Email"/>
                            </div>
                            <div className="inputGroup">
                <label htmlFor="address">Address:</label> 
                <input type="text" id="address" 
                name="address" 
                autoComlate="off"
                onChange={inputHandler}
                placeholder="Enter the Address"/>
                            </div>
                            <div className="inputGroup">
                            <button type="submit" class="btn btn-primary">Primary</button>
                            </div>
        </form>
    </div>
  )
}

export default AddUser
