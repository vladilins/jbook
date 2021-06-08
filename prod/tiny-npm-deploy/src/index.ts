import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.render("hi there");
});

app.listen(3005, () => {
  console.log("running on port 3005");
});
