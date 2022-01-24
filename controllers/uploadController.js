module.exports = (req, res) => {
  try {
    console.log(req.file);
    res.send("ok");
  } catch (err) {
    console.log(err);
  }
};
