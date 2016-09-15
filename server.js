var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var cors = require('cors');

var config = require('./config.json');
var profileCtrl = require('./controllers/profileCtrl.js');
var userCtrl = require('./controllers/userCtrl.js');

var corsOptions = {
  origin: 'http://localhost:8080'
}

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(session({
  secret: config.sessionSecret,
  saveUninitialized: true,
  resave: true
}))

app.post('/api/login', userCtrl.login);
app.get('/api/profiles', profileCtrl.friends)



app.listen(config.port, function(){
  console.log('got it workin on', config.port)
})
