const express = require("express");
const app = express();
const port = process.env.port || 4000;
const ejs = require("ejs");

app.set("view engine", "ejs");

app.listen(port, () => {
  console.log(`https://localhost:${port}`);
});
