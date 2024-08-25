import express from "express";
import dotenv from "dotenv";
dotenv.config();
import routes from "./routes/index.mjs";

const app = express();
const PORT = process.env.PORT || 3001;

//Middlewares
app.use(express.json());
app.use(routes);

//entry page
app.get("/", (req, res) => {
  res.cookie("user", "Mark", { maxAge: 60000 });
  res.send("Please login");
});

app.listen(PORT, () => {
  console.log(`The server is listening on port ${PORT}`);
});
