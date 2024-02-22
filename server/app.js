import express from "express";
const app = express();
const PORT = 5000;
const api = "api/v1";


// CORS
import cors from "cors"
app.use(cors());

// ROUTER
import { router } from "./routes/todosRouter.js";
app.use(`/${api}/todos`, router);


app.listen(PORT, (req, res) => {
  console.log("Server is Running ....");
});


