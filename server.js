const express = require("express");
const app = express();
const port = process.env.port || 4000;
const ejs = require("ejs");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(file, file.originalname);
  },
});

const uploads = multer({ storage: storage });
const uploadController = require("./controllers/uploadController");

app.set("view engine", "ejs");

app.get("/upload", uploadController.GET);
app.post("/upload", uploads.single("image"), uploadController.POST);

app.listen(port, () => {
  console.log(`https://localhost:${port}`);
});
