const getHomepage = (req, res) => {
  res.send("Hello World!!!!!!!!!!!!!");
};
const getDao = (req, res) => {
  res.render("sample.ejs");
};
module.exports = {
  getHomepage: getHomepage,
  getDao: getDao,
};
