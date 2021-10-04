const express= require("express");
const mongoose=require('mongoose');
const passport = require("passport");
const Keys = require("./confige/Keys");
const coolieSession=require('cookie-session');

require('./models/user');
require('./services/passport');

mongoose.connect(Keys.mongoURI);

const app=express();


app.use(coolieSession({
    maxAge:30*24*60*60*1000,
    keys:[Keys.cookieKey]
}))

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

const PORT=process.env.PORT || 2000

app.listen(PORT)