'use strict';

// api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});
// Import contact controller
// var contactController = require('./contactController');
// // Contact routes
// router.route('/contacts')
//     .get(contactController.index)
//     .post(contactController.new);
// router.route('/contacts/:contact_id')
//     .get(contactController.view)
//     .patch(contactController.update)
//     .put(contactController.update)
//     .delete(contactController.delete);
// // Export API routes
// module.exports = router;

const jwt = require('jsonwebtoken');




var user = require("../model/methodes")

/** verifyToken method - this method verifies token */
function verifyToken(req, res, next){
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
        next();
	}else{
		res.sendStatus(403);
	}
}


router.route('/users/:id/')
        .delete(user.DeleteUser)
        .get(user.GetUser)
        
router.route('/users')
        .get(user.GetUserAll)
        .post(user.PostUser)
        .put(user.PutUser)

router.route('/signin')
		.post(user.Signin)

/*router.route('/products')
		.post(user.test)
*/		
router.post('/products',verifyToken, (req, res) => {

    jwt.verify(req.token, 'secret', (err, authData)=>{
        if(err){
            res.sendStatus(403);
            //res.send(req.token)
            //console.log(err);
        }else{
            res.json({
                msg: "A new post is created",
                authData
            });
        }
    });
});


module.exports = router;




// module.exports = function(app) {
//   var todoList = require('../controllers/todoListController');

//   // todoList Routes
//   app.route('/tasks')
//     .get(todoList.list_all_tasks)
//     .post(todoList.create_a_task);
   
//    app.route('/tasks/:taskId')
//     .get(todoList.read_a_task)
//     .put(todoList.update_a_task)
//     .delete(todoList.delete_a_task);
//     };
