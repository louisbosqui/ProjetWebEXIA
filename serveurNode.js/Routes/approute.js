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




var user = require("../model/methodes")

router.route('/users/:id/')
        .delete(user.DeleteUser)
        .get(user.GetUser)
        
router.route('/users')
        .get(user.GetUserAll)
        .post(user.PostUser)
        .put(user.PutUser)



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
