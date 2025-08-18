import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to AWS deployed api");
});

app.get("/health", (req, res) => {
  res.send("Everything is OK");
});

app.listen(8080, () => console.log("Sever is listening on Port 8080"));
