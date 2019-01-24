var con=require('../dbconnection'); //reference of dbconnection.js

app.delete('/users/:id/', function(req, res) {
  var user_id = req.params.id;
  var sql = "DELETE FROM `TB_USER` WHERE ID_Utilisateur  = '"+user_id+"' ";
    con.query(sql, function (err, result) {
    if (err) throw err;
    res.send(result);
});
});

let USER = {
  DeleteUser:function($id){
    var sql = "DELETE FROM `TB_USER` WHERE ID_Utilisateur  = '"+user_id+"' ";
    con.query(sql, function (err, result) {
      if (err) throw err;
      res.send(result);
    });
    return 
  },
  GetUser:function($id){
    var sql = "SELECT * FROM `TB_USER` WHERE ID_Utilisateur = '"+user_id+"'  ";
    con.query(sql, function (err, result) {
      if (err) throw err;
      res.send(result);
    });
    return 
  },
  GetUserAll:function(){

  },
  PostUser:function(){

  },
  PutUser:function(){

  }

}

app.get('/users', function (req, res) {
    var sql = "SELECT * FROM `TB_USER` ";
    con.query(sql, function (err, result) {
    if (err) throw err;
    //console.log(result);
    res.send(result)
  });
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
//P XXXX PUT 
app.put('/users', function(req, res) {

  let id = req.body.ID ;
  let nom = req.body.Nom;
  let  user = req.body.Prenom;
  let mail = req.body.Mail;
  let mdp = req.body.Mdp;
  let co = req.body.Etat;
  let sql = "UPDATE `TB_USER` SET  Nom_Utilisateur = '"+nom+"' WHERE ID_Utilisateur="+id+"";

  if(id) {

        if(nom) {
 
              console.log(sql);
                con.query(sql, function (err, response) {
                  if (err) throw err;
                  console.log('TEST1');
                  //console.log(response);
                  //res.end(response); 
                });  
        } 
             if(user){

               sql = "UPDATE `TB_USER` SET  Prenom_Utilisateur = '"+user+"' WHERE ID_Utilisateur="+id+"";
              console.log(sql);
                con.query(sql, function (err, response) {
                  if (err) throw err;
                                    console.log('TEST2');

                  //console.log(response);
                  //res.end(response); 
                });
             }
                if (mail){

              sql = "UPDATE `TB_USER` SET  Mail_Utilisateur = '"+mail+"' WHERE ID_Utilisateur="+id+"";
              console.log(sql);
                con.query(sql, function (err, result) {
                  if (err) throw err;
                  //console.log(result);
                  //res.end(result); 
                });
             }
             if (mdp){

                sql = "UPDATE `TB_USER` SET  Mdp_Utilisateur = '"+mdp+"' WHERE ID_Utilisateur="+id+"";
                console.log(sql);
                con.query(sql, function (err, result) {
                  if (err) throw err;
                  //console.log(result);
                  //res.end(result); 
                });
             }
                if (co){
                 sql = "UPDATE `TB_USER` SET  Etat_Connexion_Utilisateur = '"+co+"' WHERE ID_Utilisateur="+id+"";
                console.log(sql);
                  con.query(sql, function (err, result) {
                    if (err) throw err;
                    //console.log(result);
                    //res.end(result); 
                  });
               };
    };
});