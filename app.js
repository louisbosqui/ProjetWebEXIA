var mysql = require("mysql");
var express = require('express');
var app = express();
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
console.log('todo list RESTful API server started on: ' + port);

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
var con = mysql.createConnection({
  host: "localhost",
  user: "qoodboop",
  password: "qoodboop",
   database: "test"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
   var sql = "SELECT * FROM `users` ";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
/*
app.use('/',index);
app.use ('/users',users);*/