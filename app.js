var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Campground = require("./models/campground");
var Comment = require("./models/comment");
var seedDB = require("./seeds");
var passport = require('passport');
var localStrategy = require('passport-local');
var passportLocalMongoose = require('passport-local-mongoose');
var User = require('./models/user');
var commentRoutes = require("./routes/comments");
var campgroundRoutes = require("./routes/campgrounds");
var indexRoutes = require("./routes/index");
var methodOverride = require("method-override");
var flash = require("connect-flash");


//PASSPORT CONFIGURATION

app.use(require('express-session')({
  secret: "pawan is the best guy",
  resave: false,
  saveUninitialized: false
}));

app.use(flash());


app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function (req, res, next) {
  res.locals.currentUser = req.user;
  res.locals.error = req.flash("error");
  res.locals.success = req.flash("success");
  next();
});

// seedDB();
mongoose.connect('mongodb://localhost:27017/yelp_camp', { useUnifiedTopology: true, useNewUrlParser: true });
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));




// Campground.create({
//   name: "Granite Hill",
//   image: "https://images.pexels.com/photos/1840421/pexels-photo-1840421.jpeg?cs=srgb&dl=adventure-backpack-campers-1840421.jpg&fm=jpg",
//   description: "This is a huge Granite Hill"
// }, function (err, campground) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(campground);
//   }
// })


// app.get("/", function (req, res) {
//   res.render("landing");
// });
//1. Index Route
// app.get("/campgrounds", function (req, res) {
//   //res.render("campgrounds", { campgrounds: campgrounds });
//   //Get all Campgrounds from DB
//   Campground.find({}, function (err, allCampgrounds) {
//     if (err) {
//       console.log(err);
//     } else {
//       res.render("campgrounds/index", { campgrounds: allCampgrounds, currentUser: req.user });
//     }
//   })
// });

// //2. Create Route 
// app.post("/campgrounds", function (req, res) {
//   var name = req.body.name;
//   var image = req.body.image;
//   var desc = req.body.description;
//   var newCampground = { name: name, image: image, description: desc };
//   //Create a new Campground and save to Database
//   Campground.create(newCampground, function (err, newlyCreated) {
//     if (err) {
//       console.log(err);
//     } else {
//       res.redirect("/campgrounds")
//     }
//   })

// })

// //3. New route
// app.get("/campgrounds/new", function (req, res) {
//   res.render("campgrounds/new");
// })


// // 4.Show Route
// app.get("/campgrounds/:id", function (req, res) {
//   Campground.findById(req.params.id).populate('comments').exec(function (err, foundCampground) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(foundCampground);
//       res.render("campgrounds/show", { campground: foundCampground });
//     }
//   });
// });

// ======================
// Comment Routes
// =======================

// app.get("/campgrounds/:id/comments/new", isLoggedIn, function (req, res) {
//   Campground.findById(req.params.id, function (err, campground) {
//     if (err) {
//       console.log(err);
//     } else {
//       res.render("comments/new", { campground: campground });
//     }
//   });
// });

// app.post("/campgrounds/:id/comments", isLoggedIn, function (req, res) {
//   Campground.findById(req.params.id, function (err, campground) {
//     if (err) {
//       console.log(err);
//       res.redirect("/campgrounds");
//     } else {
//       Comment.create(req.body.comment, function (err, comment) {
//         if (err) {
//           console.log(err);
//         } else {
//           campground.comments.push(comment);
//           campground.save();
//           res.redirect("/campgrounds/" + campground._id);
//         }
//       });
//     }
//   });
// });

//AUTH ROUTES

//show registration form
// app.get("/register", function (req, res) {
//   res.render("register");
// });

// //handle sign up logic
// app.post("/register", function (req, res) {
//   User.register(new User({ username: req.body.username }), req.body.password, function (err, user) {
//     if (err) {
//       console.log(err);
//       return res.render("register");
//     }
//     passport.authenticate('local')(req, res, function () {
//       res.redirect("/campgrounds");
//     });
//   });
// });


// //shows login form
// app.get("/login", function (req, res) {
//   res.render("login");
// });

// //handle login logic
// //middleware
// app.post("/login", passport.authenticate('local', {
//   successRedirect: "/campgrounds",
//   failureRedirect: "/login"
// }), function (req, res) {

// });

// //logout route
// app.get("/logout", function (req, res) {
//   req.logout();
//   res.redirect("/campgrounds");
// });

// function isLoggedIn(req, res, next) {
//   if (req.isAuthenticated()) {
//     return next();
//   }
//   res.redirect("/login");
// }

app.use("/campgrounds/:id/comments", commentRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use(indexRoutes);

app.listen(3000, "127.0.0.1", function () {
  console.log("YelpCamp has Started");
});
