const db = require("../db");
const shortid = require("shortid");
var emailMiddleware = require("../middleware/email.middleware");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const myPlaintextPassword = "s0//P4$$w0rD";
const someOtherPlaintextPassword = "not_bacon";

module.exports.customer = (req, res) => {
  var listBook = db.get("list").value();
  var rentalList = db.get("rentalList").value();
  res.render("userOnly/customer", {
    list: db.get("list").value(),
    rentalList: rentalList
  });
};
module.exports.userLogin = (req, res) => {
  if (req.cookies.userId) {
    var user = db
      .get("user")
      .find({ id: req.cookies.userId })
      .value();

    res.render("userOnly/index", {
      user: user
    });
    return;
  }
};
module.exports.index = (req, res) => {
  var page = parseInt(req.query.page) || 1;
  var perPage = 2;
  var start = (page - 1) * perPage;
  var end = (page - 1) * perPage + perPage;
  var maxPage =  Math.ceil(db.get("user").value().length / perPage);
  // mình lấy nhầm, lấy tổng số user có trong mảng / số user hiển hiện trên 1 trang.. ồ 
  res.render("users/index", {
    n: 1,
    firstPage: page-2,
    currPage: page,
    maxPage,
    // products: db.get('products').value().slice(start,end)
    userList: db
      .get("user")
      .drop(start)
      .take(perPage)
      .value()
  });
};
module.exports.view = (req, res) => {
  var id = req.params.id;
  var user = db
    .get("user")
    .find({ id: id })
    .value();
  console.log(user);
  res.render("users/view", {
    user: user
  });
};

module.exports.delete = function(req, res) {
  db.get("user")
    .remove({ id: req.params.id })
    .write();

  res.redirect("/users/index");
};
module.exports.createUser = (req, res) => {
  res.render("users/create", {});
};
