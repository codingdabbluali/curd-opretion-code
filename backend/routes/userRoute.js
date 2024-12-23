import express from "express"
// import { fetch, create, update, deleteUser, getALLusers ,} from "../controller/userController.js"
import {create, getALLusers, getUserById, update, deleteUser} from "../controller/userController.js"


const route = express.Router();



route.post("/user",create);

route.get("/users",getALLusers);

// route.get("/user/:id",getUserById);
route.get("/user/:id",getUserById);
route.put("/update/user/:id",update);
route.delete("/delete/user/:id",deleteUser)

export default route;


// route.post("/create",create);

// route.get("/getALLusers",fetch);

// route.put("/update/:id", update);

// route.delete("/delete/:id",deleteUser);
