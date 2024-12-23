// import user from "../model/userModel.js"


// export const  create = async (req, res)=>{

//     try {
//        const userData = new User(req.body); 
//        const {email }= userData;
       
//        const userExist = await User.findOne({email})

//        if (userExist){
//         return res.status(400).json({messagr : "user already exists"});
//        }
// const savedUser = await userData.save();
// res.status(200).json(savedUser);
//     } catch (error) {
//         res.status(500).json({error: "internal server error "});  
//     }
// };

// export const getALLusers = async (req, res) => {
//     try {

//     //   return  res.json("Hello World!");
//     const users = await User.find();
//     if(users.length == 0)
//     {
//         return res.status(404).json({message:"users not found"});
//     }
//     res.status(400).json(users)
        
//     } catch (error) {
//         res.status(500).json({error: "internal server error "});
//     }
// }



// export const update = async (req, res) => {
//     try {
//         const id = req.params.id;
//         const userExist = await User.findOne({_id:id})
//         if(!userExist)
//         {
//             return res.status(404).json({message:"user not Found."})
//         }
//         const updateUser = await User.findByIdAndUpdate(id, req.body,{new:true})
//         res.status(201).json(updateUser);

//     } catch (error) {
//         res.status(500).json({error: "internal server error "});  
//     }
// };

// export const update = async (req, res) => {
//     try {
//         const id = req.params.id;
//         const userExist = await User.findOne({_id:id})
//         if(!userExist)
//         {
//             return res.status(404).json({message:"user not Found."})
//         }
//         const updateUser = await User.findByIdAndUpdate(id, req.body,{new:true})
//         res.status(201).json(updateUser);

//     } catch (error) {
//         res.status(500).json({error: "internal server error "});  
//     }
// };


// export const deleteUser = async (req, res) => {
//     try {
//         const id = req.params.id;
//         const userExist = await User.findById({_id: id})
//         if(!userExist)
//         {
//             return res.status(404).json({message:"user not Found."})
//         }
//        // await User.findByIdAndDelete(id);
//        await User.findByIdAndDelete(id); 
//        res.status(201).json({message:"user delete seccessfully."});
        
//     } catch (error) {
//         res.status(500).json({error: "internal server error "});  
//     }
// };


import User from "../model/userModel.js";

export const create = async (req, res) => {
    try {
      const newUser = new User(req.body);
      const { email } = newUser;
  
      // Check if the user already exists
      const userExist = await User.findOne({ email });
      if (userExist) {
        return res.status(400).json({ message: "User already exists" });
      }
  
      // Save the new user data
    //   const savedUser = await userData.save();
    const saveData = await newUser.save();
    //   res.status(200).json(saveData);
    res.status(200).json({message:"user Created successfully"});
    //     {
    //     message: "User inserted successfully",
    //     user: savedUser
    //   }
    
    } catch (error) {
    //   res.status(500).json({ error: "Internal server error" });
    res.status(500).json({errorMessage:error.message})
    }
  };
  


// export const getALLusers = async (req, res) =>{
//     try {
//         const userData = await User.find();
//         if(!userData || userData.length == 0)
//         {
//             return res.status(404).json({message:"users not found"});
//         }
//         res.status(400).json(userData)
//     } catch (error) {
//         res.status(500).json({errorMessage:error.message})
//     }

// }
export const getALLusers = async (req, res) => {
    try {
        const userData = await User.find();
        if (!userData || userData.length === 0) {
            return res.status(404).json({ message: "Users not found" });
        }
        res.status(200).json(userData);  // Change 400 to 200
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
}



export const getUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findById(id)
        if(!userExist)
        {
            return res.status(404).json({message:"user not Found."})
        }
       // await User.findByIdAndDelete(id);
    //    await User.findByIdAndDelete(id); 
    //    res.status(201).json({message:"user delete seccessfully."});
        res.status(200).json(userExist);
    } catch (error) {
        res.status(500).json({error: "internal server error "});  
    }
};

export const update = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findById(id)
        if(!userExist)
        {
            return res.status(404).json({message:"user not Found."})
        }
       // await User.findByIdAndDelete(id);
    //    await User.findByIdAndDelete(id); 
    //    res.status(201).json({message:"user delete seccessfully."});
       // res.status(200).json(userExist);
       const updatedData = await User.findByIdAndUpdate(id, req.body,{new:true})
    //    res.status(200).json(updatedData);
    res.status(200).json({message:" User Update  successfully"});
    } catch (error) {
        res.status(500).json({error: "internal server error "});  
    }
};

// export const deleteUser = async (req, res) => {
//     try {
//         const id = req.params.id;
//         const userExist = await User.findById(id);
//         if(!userExist)
//         {
//             return res.status(404).json({message:"user not Found."})
//         }
//        // await User.findByIdAndDelete(id);
//        await User.findByIdAndDelete(id); 
//        res.status(201).json({message:"user delete seccessfully."});
        
//     } catch (error) {
//         res.status(500).json({error: "internal server error "});  
//     }
// };

export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);
        if (!userExist) {
            return res.status(404).json({ message: "User not found." });
        }

        // Delete the user
        await User.findByIdAndDelete(id);
        res.status(200).json({ message: "User deleted successfully." });
    } catch (error) {
        res.status(500).json({ error: "Internal server error." });
    }
};
