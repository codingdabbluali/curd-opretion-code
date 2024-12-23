// import express from "express";
// import mongoose, { Mongoose } from "mongoose";
// import bodyParser from "body-parser";
// import dotenv from "dotenv";
// import route from "./routes/userRoute.js";
// import cors from "cors";


// const app = express();

// app.use(bodyParser.json());
// // app.use(cors());
// // Middleware
// app.use(cors()); // Enable CORS


// dotenv.config();
// const PORT = process.env.PORT || 500;
// const MONGOURL = process.env.MONGO_URL;


// mongoose.connect(MONGOURL).then(()=>{
//     console.log("Database connected Successful.");
//     app.listen(PORT,()=>{
//         console.log(`Server is runing on port${PORT}`);
//     });
// }).catch((error)=> console.log(error));

// // app.use("/api/user", route);
// app.use("/api", route);


import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import route from "./routes/userRoute.js";

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Enable CORS
dotenv.config();

// Environment Variables
const PORT = process.env.PORT || 8000;
const MONGOURL = process.env.MONGO_URL;

// Connect to MongoDB
mongoose
  .connect(MONGOURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected successfully.");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => console.log("Database connection error:", error));

// Routes
app.use("/api", route);

export default app;
