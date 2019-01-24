var express = require('express')
var router = express.Router()


app.delete('/users/:id/', function(req, res) {
  
  if(req.params.id){
  		USER.DeleteUser(req.params.id)
  }

});





router.get('/:id?',function(req,res,next){
		if(req.params.id){

					Task.getTaskById(req.params.id,function(err,rows){

									if(err)
										  {
										  res.json(err);
										  }else{
											  res.json(rows);
											  }
					});
 		}
 });