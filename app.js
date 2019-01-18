var mysql = require("mysql");
//Database connection
var app = express(),
app.listen(process.env.PORT || 3000);

app.use(function(req, res, next){
	res.locals.connection = mysql.createConnection({
		host     : 'localhost',
		user     : 'root',
		password : ' ',
		database : 'test'
	});
	res.locals.connect();
	next();
});
app.use('/',index);
app.use ('/users',users);