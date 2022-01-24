const express = require("express");
const app = express();
const port = process.env.port || 4000;
const ejs = require("ejs");
const multer = require("multer");
const uploads = multer({ dest: "uploads/" });
const uploadController = require("./controllers/uploadController");

app.set("view engine", "ejs");

app.post("/upload", uploads.single("image"), uploadController);

app.listen(port, () => {
  console.log(`https://localhost:${port}`);
});
