module.exports = {
  GET: (_, res) => {
    try {
      res.render("upload");
    } catch (err) {
      console.log(err);
    }
  },
  POST: (_, res) => {
    try {
      res.redirect("/upload");
    } catch (err) {
      console.log(err);
    }
  },
};
