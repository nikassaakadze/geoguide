require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const connectDB = require('./config/db')
const Routes = require('./routes/routes')
const passport = require('passport')
const bcrypt = require('bcryptjs')
const session = require('express-session')
const User = require('./models/userModel')
const MongoStore = require('connect-mongo')
const path = require('path')

connectDB();

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors({
  origin: process.env.ORIGIN,
  Credential: true
}))

app.use(express.json());

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: 'mongodb+srv://sysadmin:pQufO5kHQsIdVspc@ecommerce.opg746s.mongodb.net/?retryWrites=true&w=majority' })
}))

app.use(passport.initialize())
app.use(passport.session())
require('./config/passport')(passport)

app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("0");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send(req.user)
      });
    }
  })(req, res, next);
});

app.post("/register", (req, res) => {
  User.findOne({username: req.body.username }, async (err, doc) => {
    if (err) res.send(err)
    if (doc) res.send("1");
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const newUser = new User({
        username: req.body.username,
        password: hashedPassword
      });
      await newUser.save();
      res.send("0")
    }
  });
});

app.get("/user", (req, res) => { 
  req.user ? res.send({session: req.session.passport.user, user: req.user}) : res.send("")
});

app.post('/logout', function(req, res, next) {
  req.logout(function(err) {
    if (err) { return next(err); }
    res.send('deauthenticated');
  });
});
app.use("/", Routes);
app.use("/", Routes);
app.use("/", Routes);
app.use("/", Routes);
app.use("/", Routes);
app.use("/", Routes);
app.use("/", Routes);
app.use("/", Routes);
app.use("/", Routes);
app.use("/", Routes);

app.get("/", (req, res) => {
  res.send("Running...")
})

if(process.env.NODE_ENV = "production"){
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const port = process.env.PORT;
app.listen(port)
// exports.app = functions.https.onRequest(app)