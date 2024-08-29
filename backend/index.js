import express from "express";
import dotenv from "dotenv";
dotenv.config();
import routes from "./routes/index.mjs";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3001;
const students = [
  { id: 1, name: "Mark", age: 14 },
  { id: 2, name: "Naomi", age: 27 },
  { id: 3, name: "Juma", age: 29 },
];
//Middlewares
app.use(cors());
app.use(express.json());
app.use(routes);

//entry page
app.get("/", (req, res) => {
  res.cookie("user", "Mark", { maxAge: 60000 });
  res.send("Please login");
});
app.delete("/delete", (req, res) => {
  res.send({ message: "user deleted" });
});
app.listen(PORT, () => {
  console.log(`The server is listening on port ${PORT}`);
});
