var express = require("express");
var app = express();
var mysql = require("mysql");
 var bodyParser     =        require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

var con = mysql.createConnection({
  host: "localhost",
  user: "qoodboop",
  password: "qoodboop",
   database: "test1"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
   //
});

const hostname = '127.0.0.1';
const port = '3001';
app.listen(port);
console.log(`Server running at http://${hostname}:${port}/`);


app.get("/url", (req, res, next) => {
 res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});

 app.get('/', function (req, res) {
   res.end('Bonjour acceuil')

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
    var sql = "SELECT * FROM `TB_USER` ";
    con.query(sql, function (err, result) {
    if (err) throw err;
    //console.log(result);
    res.send(result)
  });
   });

//TEST GET AVEC PARAMS 

app.get('/api/users', function(req, res) {
  var user_id = req.params('id');
  var token = req.params('token');
  var geo = req.params('geo');  
  res.send('uid'+ user_id + ' token=' + token + 'geo= ' + geo);
});

// POST http://localhost:8080/api/users
// parameters sent with 
app.post('/api/users', function(req, res) {
    var user_id = req.body.id;
    var token = req.body.token;
    var geo = req.body.geo;
    res.send(user_id + ' ' + token + ' ' + geo);
});

//var methodes = require ('methodes.js');

// app.get('/:test/:id', function(req, res) {
//   var user_id = req.params.id;
//   var test = req.params.test;

//   res.send('uid'+ user_id + ' test=' + test );
// });

app.delete('/:test/:id/:yo', function(req, res) {
  var user_id = req.params.id;
  var test = req.params.test;
  var yo = req.params.yo;

  res.send('tu veux delete uid'+ user_id + ' test=' + test );
});


app.get('/users/:id', function(req, res) {
  var user_id = req.params.id;

   var sql = "SELECT * FROM `TB_USER` WHERE ID_Utilisateur = '"+user_id+"'   ";
     con.query(sql, function (err, result) {
     if (err) throw err;
     console.log(result);
     res.send(result); 
    });    

});
//POST USER AVEC ARGUMENTS   
app.post('/users', function(req, res) {
    
    let nom = req.body.Nom;
    let  user = req.body.Prenom;
    let mail = req.body.Mail;
    let mdp = req.body.Mdp;
    let co = req.body.Etat;

    console.log(req.body.Nom);

   // res.send(user_id + ' ' + token + ' ' + geo);
    var sql = "INSERT INTO `TB_USER` (`ID_Utilisateur`, `Nom_Utilisateur`, `Prenom_Utilisateur`, `Mail_Utilisateur`, `Mdp_Utilisateur`, `Etat_Connexion_Utilisateur`) VALUES (NULL,'"+nom+"','"+user+"','"+mail+"','"+mdp+"','"+co+"')";
    con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
    res.send(result); 
  });
});