var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "qoodboop",
  password: "qoodboop",
   database: "test1"
});

module.exports = con ; 