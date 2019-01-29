var con=require('./bdd'); //reference of dbconnection.js

/*app.delete('/users/:id/', function(req, res) {
  var user_id = req.params.id;
  var sql = "DELETE FROM `TB_USER` WHERE ID_Utilisateur  = '"+user_id+"' ";
    con.query(sql, function (err, result) {
    if (err) throw err;
    res.send(result);
});
});


   var user_id = req.params.id;
    var sql = "DELETE FROM `TB_USER` WHERE ID_Utilisateur  = '"+user_id+"' ";
    con.query(sql, function (err, result) {
      if (err) throw err;
      res.send(result);

*/
const jwt = require('jsonwebtoken');





let USER = {
  Signin:function(req,res){
     /*const user = {
        id: 2,
        username: "Ammar",
        email: "john.doe@test.com"
    } */const user = {
        username:req.body.Nom,
        email: req.body.Mail,
        mdp : req.body.mdp
    };
    let user_mail = req.body.Mail;
    //console.log(user_mail);
    let sql = "SELECT * FROM `TB_USER` WHERE Mail_Utilisateur = '"+user_mail+"' ";
    con.query(sql, function (err, result) { 
      if (err) throw err ;
      if(!result.length){
               console.log("error");
                res.send("Mauvais mail");
                 //return ;
      }else {
              //res.send(result);}
              if(/*result[0].Nom_Utilisateur == user.username && */  result[0].Mdp_Utilisateur == user.mdp ){        
            console.log("condition validée");
              jwt.sign({user},'secret', { expiresIn: 60 * 60 * 60 }, (err, token) => {
                res.json({token});
                });
              } else {
                res.send("Mauvais mot de passe");
              }


            };  
      
      // //res.send(result);
      //  console.log(result[0].Nom_Utilisateur);
      //  console.log(user.username);
      //  console.log(result[0].Mdp_Utilisateur);
      //  console.log(user.mdp);
      
      //}else if(/*result[0].Nom_Utilisateur == user.username && */  //result[0].Mdp_Utilisateur == user.mdp ){        
            //console.log("condition validée");
        /*    jwt.sign({user},'secret', { expiresIn: 60 * 60 * 60 }, (err, token) => {
                res.json({token});
                });
          }*/
       });   
  return;},
  test:function(req,res){
        //Request header with authorization key
    const bearerHeader = req.headers['authorization'];
    
    //Check if there is  a header
    if(typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(' ');
        
        //Get Token arrray by spliting
        const bearerToken = bearer[1];
        req.token = bearerToken;
        //call next middleware
        //console.log(req.token);


        jwt.verify(req.token, 'SuperSecRetKey', (err, authData)=>{
        if(err){
            console.log(req.token);
            res.sendStatus(403);
        }else{
            res.json({
                msg: "A new post is created",
                authData
            });
        }
    });
    }else{
        res.sendStatus(403);
    };
       /*jwt.verify(req.token, 'SuperSecRetKey', (err, authData)=>{
        if(err){
            console.log(req.token);
            res.sendStatus(403);
        }else{
            res.json({
                msg: "A new post is created",
                authData
            });
        }*/
   // });
  },
  DeleteUser:function(req,res){
      var user_id = req.params.id;
    var sql = "DELETE FROM `TB_USER` WHERE ID_Utilisateur  = '"+user_id+"' ";
    con.query(sql, function (err, result) {
      if (err) throw err;
      res.send(result);
    });
    return 
  },
  GetUser:function(req,res){
          var user_id = req.params.id;
    var sql = "SELECT * FROM `TB_USER` WHERE ID_Utilisateur = '"+user_id+"'  ";
    con.query(sql, function (err, result) {
      if (err) throw err;
      res.send(result);
    });
    return 
  },
  GetUserAll:function(req,res){
    var sql = "SELECT * FROM `TB_USER` ";
    con.query(sql, function (err, result) {
    if (err) throw err;
    //console.log(result);
    res.send(result)
    });
  },
  PostUser:function(req,res){
    let nom = req.body.Nom;
    let  user = req.body.Prenom;
    let mail = req.body.Mail;
    let mdp = req.body.Mdp;
    let co = req.body.Etat;

      let sql = "INSERT INTO `TB_USER` (`ID_Utilisateur`, `Nom_Utilisateur`, `Prenom_Utilisateur`, `Mail_Utilisateur`, `Mdp_Utilisateur`, `Etat_Connexion_Utilisateur`) VALUES (NULL,'"+nom+"','"+user+"','"+mail+"','"+mdp+"','"+co+"')";
    con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
    res.send(result); 
    });
  },
  PutUser:function(req,res){
  
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
  }

}

/*app.get('/users', function (req, res) {
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
}); */

module.exports = USER ; 