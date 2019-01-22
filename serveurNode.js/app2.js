var express = require("express");
var app = express();
var mysql = require("mysql");


var con = mysql.createConnection({
  host: "localhost",
  user: "qoodboop",
  password: "qoodboop",
   database: "test"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
   //var sql = "SELECT * FROM `users` ";
  //con.query(sql, function (err, result) {
    //if (err) throw err;
    //console.log(result);
 // });
});

app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.get("/url", (req, res, next) => {
 res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});

app.get('/', function (req, res) {
  res.send('hello world')
})

app.post('/', function (req, res) {
  res.send('POST request to the homepage')
})

app.put('/', function (req, res) {
  res.send('PUT request to the homepage')
})

app.delete('/', function (req, res) {
  res.send('POST request to the homepage')
})

app.get('/list', function (req, res) {
    var sql = "SELECT * FROM `users` ";
    con.query(sql, function (err, result) {
    if (err) throw err;
    //console.log(result);
    res.send(result)
  });
   });