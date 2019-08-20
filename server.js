let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let mysql = require('mysql');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  

let dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'dashboardDB',
    port: '8889'
});

dbConn.connect();

app.get('/', function(req, res) {
    return res.send({ error: true, message: 'hello' })
});

app.get('/top', function(req, res) {
    dbConn.query('SELECT * FROM top', function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'top table' });
    })
})

app.get('/weekly', function(req, res) {
    dbConn.query('SELECT * FROM weekly', function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'weekly table' });
    })
})

let port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log('Node app is running on port 3000');
})

module.exports = app;