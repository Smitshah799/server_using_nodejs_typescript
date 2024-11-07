import express from "express";
import * as bodyParser from "body-parser";
import router from "./routes/routes"; // this already includes the calculator routes

// app variable holding express Server
const app = express();

// using bodyParser to send response and get request in JSON format
app.use(bodyParser.json());
app.use("/", router);

// Start the server on port 3000
app.listen(3000, () => {
    console.log("Server is running on the port 3000");
});
