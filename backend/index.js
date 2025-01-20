import express from "express";
import dotenv from "dotenv";
dotenv.config();
import routes from "./routes/index.mjs";
import cors from "cors";
import { dbConnection } from "./dBconn.js";

const app = express();
const PORT = 5000;

//Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);

app.listen(PORT, () => {
  dbConnection();
  console.log(`The server is listening on port ${PORT}`);
});
