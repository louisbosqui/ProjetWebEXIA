var express = require("express");
var app = express();
var mysql = require("mysql");


var con = mysql.createConnection({
  host: "localhost",
  user: "qoodboop",
  password: "qoodboop",
   database: "test1"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
   var sql = "SELECT * FROM `TB_USER` ";
   con.query(sql, function (err, result) {
   if (err) throw err;
    console.log(result);
  });
});

const hostname = '127.0.0.1';
const port = '3001';


console.log(`Server running at http://${hostname}:${port}/`);


app.get("/url", (req, res, next) => {
 res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});

 app.get('/', function (req, res) {
   res.send('acceuil')
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


//TEST GET AVEC PARAMS 

app.get('/api/users', function(req, res) {
  var user_id = req.param('id');
  var token = req.param('token');
  var geo = req.param('geo');  

  res.send(user_id + ' ' + token + ' ' + geo);
});

// POST http://localhost:8080/api/users
// parameters sent with 
app.post('/api/users', function(req, res) {
    var user_id = req.body.id;
    var token = req.body.token;
    var geo = req.body.geo;

    res.send(user_id + ' ' + token + ' ' + geo);
});