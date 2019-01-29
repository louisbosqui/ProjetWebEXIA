 Deleteproduit:function(req,res){
      var produit_id = req.params.id;
    var sql = "DELETE FROM `produit` WHERE ID  = '"+produit_id+"' ";
    con.query(sql, function (err, result) {
      if (err) throw err;
      res.send(result);
    });
    return 
  },
  Getproduit:function(req,res){
          var produit_id = req.params.id;
    var sql = "SELECT * FROM `produit` WHERE ID= '"+produit_id+"'  ";
    con.query(sql, function (err, result) {
      if (err) throw err;
      res.send(result);
    });
    return 
  },
  GetproduitAll:function(req,res){
    var sql = "SELECT * FROM `produit` ";
    con.query(sql, function (err, result) {
    if (err) throw err;
    //console.log(result);
    res.send(result)
    });
  },
  Postproduit:function(req,res){
    let nom = req.body.Nom_Produit;
    let description = req.body.Description_Produit;
    let image = req.body.Img_Produit;
    let prix = req.body.Prix_Produit;
    let nbvendu = req.body.Nombre_Vendu;
    let stock = req.body.Stock;
    let categorie = req.body.ID_Categorie;

      let sql = "INSERT INTO `produit` (`ID`, `Nom_Produit`, `Description_Produit`, `Img_Produit`, `Prix_Produit`, `Nombre_Vendu`,`Stock`,`ID_Categorie`) VALUES (NULL,'"+nom+"','"+ description+"','"+image+"','"+prix+"','"+nbvendu+"','"+stock+"','"+categorie+"')";
    con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
    res.send(result); 
    });
  },
  PutUser:function(req,res){
  
  let id = req.body.ID ;
  let nom = req.body.Nom_Produit;
    let description = req.body.Description_Produit;
    let image = req.body.Img_Produit;
    let prix = req.body.Prix_Produit;
    let nbvendu = req.body.Nombre_Vendu;
    let stock = req.body.Stock;
    let categorie = req.body.ID_Categorie;

  let sql = "UPDATE `produit` SET  Nom_Produit = '"+nom+"' WHERE ID="+id+"";

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

               sql = "UPDATE `produit` SET  Description_Produit = '"+description+"' WHERE ID="+id+"";
              console.log(sql);
                con.query(sql, function (err, response) {
                  if (err) throw err;
                   console.log('TEST2');

                  //console.log(response);
                  //res.end(response); 
                });
             }
                if (image){

                      sql = "UPDATE `produit` SET  Img_Produit = '"+image+"' WHERE ID="+id+"";
                      console.log(sql);
                      con.query(sql, function (err, result) {
                      if (err) throw err;
                      //console.log(result);
                      //res.end(result); 
                    });
             }
             if (prix){

                sql = "UPDATE `produit` SET  Prix_Produit = '"+prix+"' WHERE ID="+id+"";
                console.log(sql);
                con.query(sql, function (err, result) {
                  if (err) throw err;
                  //console.log(result);
                  //res.end(result); 
                });
             }
                if (nbvendu){
                 sql = "UPDATE `produit` SET  Nombre_Vendu = '"+nbvendu+"' WHERE ID="+id+"";
                console.log(sql);
                  con.query(sql, function (err, result) {
                    if (err) throw err;
                    //console.log(result);
                    //res.end(result); 
                  });

                  }
                if (stock){
                 sql = "UPDATE `produit` SET  Stock = '"+stock+"' WHERE ID="+id+"";
                console.log(sql);
                  con.query(sql, function (err, result) {
                    if (err) throw err;
                    //console.log(result);
                    //res.end(result); 
                  });

                   }
                if (categorie){
                 sql = "UPDATE `produit` SET  ID_Categorie = '"+categorie+"' WHERE ID="+id+"";
                console.log(sql);
                  con.query(sql, function (err, result) {
                    if (err) throw err;
                    //console.log(result);
                    //res.end(result); 
                  });

               };

    };
  }