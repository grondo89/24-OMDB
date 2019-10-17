const express = require("express");
const passport = require("passport");
const S = require("sequelize");

const templates = require("../templates");
const User = require("../models/Users");

const router = express.Router();

//---------- MIDDLEWARE isLogedIn: check if the user is logged
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    // passport method that check if a user is authenticated or not
    next();
  } else {
    res.redirect("/login");
  }
}

function isLogged(req, res, next) {
  if (req.isAuthenticated()) {
    // passport method that check if a user is authenticated or not
    res.redirect("/");
  } else {
    next();
  }
}
// ------------ //

// router.get('/', (req, res) => {
//   /*console.log("---------------------------")
//   console.log("req.session: ", req.session) // express-session
//   console.log("req.sessionID: ", req.sessionID) // express-session
//   console.log("req.cookies: ", req.cookies) // cookie-parser
//   console.log("---------------------------")*/
//   res.send(req.user ? templates.index(req.user) : templates.indexGuest );
// });

router.get("/login", isLogged, (req, res) => {
  res.send(templates.login);
});

router.get("/register", isLogged, (req, res) => {
  res.send(templates.register);
});

router.get("/public", (req, res) => {
  res.send(templates.public);
});

router.get("/usercheck", function(req, res) {
  res.send(req.user);
});

router.get("/private", isLoggedIn, (req, res) => {
  res.send(templates.private);
});

router.post("/users", (req, res) => {
  // Creating new User
  User.create(req.body).then(user => {
    res.send(templates.login);
  }); // New Json User Object returned
});

router.put("/addmovie/:userId", (req, res) => {
  //  console.log("SOY EL REQ.BODY", req.body);
  User.update(
    // console.log(req.body),
    {
      favorites: S.fn("array_append", S.col("favorites"), req.body.peli)
    },
    {
      where: {
        id: req.body.userId
      }
    }
  ).then(data => {
    res.send(data);
  });
});

router.put("/remmovie/:userId", (req, res) => {
  let peli2 = req.body.peli;
  let user2 = req.body.userId;
  User.findByPk(req.body.userId)
    .then(data => {
      let favs = data.favorites;
      console.log(favs, peli2);
      let editFavs = favs.filter(fav => {
        return fav !== peli2;
      });
      console.log("SOY EDITFAVS", editFavs);
      return editFavs;
    })
    .then(editFavs => {
      User.update(
        {
          favorites: editFavs
        },
        {
          where: {
            id: user2
          }
        }
      ).then(data => {
        console.log("UPDATED USER", data);
        res.send(data);
      });
    });
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  // Passport strategy for authenticating with a username and password. | http://www.passportjs.org/packages/passport-local/
  console.log("Welcome User !!!", req.user);
  res.redirect("/");
});

router.post("/logout", (req, res) => {
  if (req.isAuthenticated()) {
    req.logout(); // passport method for logout
    res.redirect("/");
  } else {
    res.redirect("/");
  }
});

router.get("/findusers/:user", function(req, res) {
  console.log("SOY REQ.BODY", req.body);
  console.log("SOY REQ.PARAMS", req.params.user);
  let nombre = req.params.user;

  User.findAll({
    where: {
      email: S.where(S.fn("LOWER", S.col("email")), "LIKE", "%" + nombre + "%")
    }
  }).then(users => {
    return res.json(users);
  });
});

router.get("/findsingleuser/:userId", function(req, res) {
  console.log("SOY REQ.BODY", req.body);
  console.log("SOY REQ.PARAMS", req.params.userId);
  let nombre = req.params.userId;

  User.findAll({
    where: {
      id: nombre
    }
  }).then(user => {
    return res.json(user);
  });
});

// let nombre = req.params.user.toLowerCase();
module.exports = router;
