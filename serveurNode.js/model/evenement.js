 Deleteevenement:function(req,res){
      var evenement_id = req.params.id;
    var sql = "DELETE FROM `evenement` WHERE ID  = '"+evenement_id+"' ";
    con.query(sql, function (err, result) {
      if (err) throw err;
      res.send(result);
    });
    return 
  },
  Getevenement:function(req,res){
          var evenement_id = req.params.id;
    var sql = "SELECT * FROM `evenement` WHERE ID= '"+evenement_id+"'  ";
    con.query(sql, function (err, result) {
      if (err) throw err;
      res.send(result);
    });
    return 
  },
  GetevenementAll:function(req,res){
    var sql = "SELECT * FROM `evenement` ";
    con.query(sql, function (err, result) {
    if (err) throw err;
    //console.log(result);
    res.send(result)
    });
  },
  Postevenement:function(req,res){
    let nom = req.body.Nom;
    let description = req.body.Description;
    let date = req.body.Date;
    let lieu = req.body.Lieu;
    let nbparticipant = req.body.Nombre_participants;
    let image = req.body.img_event;
    

      let sql = "INSERT INTO `evenement` (`ID`, `Nom`, `Description`, `Date`, `Lieu`, `Nombre_participants`,`img_event`,) VALUES (NULL,'"+nom+"','"+ description+"','"+date+"','"+lieu+"','"+nbparticipant+"','"+image+"')";
    con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
    res.send(result); 
    });
  },
  Putevenement:function(req,res){
  
  let id = req.body.ID ;
   let nom = req.body.Nom;
    let description = req.body.Description;
    let date = req.body.Date;
    let lieu = req.body.Lieu;
    let nbparticipant = req.body.Nombre_participants;
    let image = req.body.img_event;

  let sql = "UPDATE `evenement` SET  Nom = '"+nom+"' WHERE ID="+id+"";

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
             if(description){

               sql = "UPDATE `evenement` SET  Description = '"+description+"' WHERE ID="+id+"";
              console.log(sql);
                con.query(sql, function (err, response) {
                  if (err) throw err;
                   console.log('TEST2');

                  //console.log(response);
                  //res.end(response); 
                });
             }
                if (date){

                      sql = "UPDATE `evenement` SET  Date = '"+date+"' WHERE ID="+id+"";
                      console.log(sql);
                      con.query(sql, function (err, result) {
                      if (err) throw err;
                      //console.log(result);
                      //res.end(result); 
                    });
             }
             if (lieu){

                sql = "UPDATE `evenement` SET  Lieu = '"+lieu+"' WHERE ID="+id+"";
                console.log(sql);
                con.query(sql, function (err, result) {
                  if (err) throw err;
                  //console.log(result);
                  //res.end(result); 
                });
             }
                if (nbparticipant){
                 sql = "UPDATE `evenement` SET  Nombre_participants = '"+nbparticipant+"' WHERE ID="+id+"";
                console.log(sql);
                  con.query(sql, function (err, result) {
                    if (err) throw err;
                    //console.log(result);
                    //res.end(result); 
                  });

                  }
                if (image){
                 sql = "UPDATE `evenement` SET  Stock = '"+image+"' WHERE ID="+id+"";
                console.log(sql);
                  con.query(sql, function (err, result) {
                    if (err) throw err;
                    //console.log(result);
                    //res.end(result); 
                  });

                 

               };

    };
  }


