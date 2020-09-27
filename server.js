const express =require('express');
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
const passport = require('passport');
const cors = require('cors');
const session = require('express-session');
require('dotenv').config();

require('./config/passport')(passport);



const db = require('./config/keys').MongoURI;
const mongoose = require('mongoose')
mongoose.connect(db,{ useNewUrlParser: true,useUnifiedTopology: true },() => console.log('connected to DB')) 

app.use(cors());

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }))

  app.use(passport.initialize());
  app.use(passport.session());



app.use('/', require('./routes/index'));
app.use('/user', require('./routes/user'));




const port = 5000;
app.listen(port,() => `server running at${port}`);

module.exports = app;