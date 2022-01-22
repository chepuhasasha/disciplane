import express from "express";
import { userRouter } from "./users/users.js";

const port = 8000;
const app = express();

app.use((req, res, next) => {
  console.log(`time: ${Date.now()}`);
  next();
});
app.use("/users", userRouter);

app.get("/hello", (req, res) => {
  throw new Error("Errrrrrror!");
});
app.post("/hello", (req, res) => {
  res.send("disciplane API");
});

app.use((err, req, res, next) => {
  console.log(err.message);
  res.status(500).send(err.message);
});

app.listen(port, () => {
  console.log(port);
});
