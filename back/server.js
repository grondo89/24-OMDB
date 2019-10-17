const express = require ('express')
const bodyParser = require ('body-parser')
const cookieParser = require ('cookie-parser')
const session = require('express-session')
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy
const router = require('./routes/index')
const path = require('path')
const db = require('./db/db')
const User = require('./models/Users')

const app = express()

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(session({ secret: 'keyboard cat' }));
app.use(passport.initialize());
app.use(passport.session());
app.use("/", router)

app.use(express.static(path.join(__dirname,"public")));

/* ------------ PASSPORT -----------*/
// Passport Flow: http://toon.io/understanding-passportjs-authentication-flow/

// passport init and session connection
app.use(passport.initialize());
app.use(passport.session()); // Express stuffs the id of the session object into a cookie on the client's browser, which gets passed back to express in a header on every request. This is how Express identifies multiple requests as belonging to a single session even if the user is not logged in.

// serialize: how we save the user and stored in session object by express-session
passport.serializeUser(function(user, done) {
  done(null, user.id);
}); 

// deserialize: how we look for the user
passport.deserializeUser(function(id, done) {
  User.findByPk(id)
    .then(user => done(null, user))
});

// auth strategy definition | localstrategy | http://www.passportjs.org/packages/passport-local/
passport.use(new LocalStrategy({
    usernameField: 'email', // input name for username
    passwordField: 'password' // input name for password
  },
  function(inputEmail, inputPassword, done) {
    User.findOne({ where: {email: inputEmail} }) // searching for the User
      .then(user => {
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        if (!user.validPassword(inputPassword)) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user); // the user is authenticated ok!! pass user to the next middleware in req object (req.user)
      })
      .catch(done); // this is returning done(error)
  }
));
/* ------------ PASSPORT -----------*/

// app.use ((err,req,res,next) => {
//     res.status(500).send(err)
// })

app.get('/*', function(req,res){
    res.sendFile(path.join(__dirname + '/public', 'index.html'))
})

db.sync({ force: false })
     .then(c => {
        console.log(`connected to OMDB DB ${c.config.database}`);
        app.listen(3000, () => console.log('listening at port 3000!'));
    }) 