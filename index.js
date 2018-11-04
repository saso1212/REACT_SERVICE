const express=require('express');
const cookieSession=require('cookie-session');
const passport=require('passport');

const mongoose=require('mongoose');
const authRoutes=require('./routes/authRoutes');
const keys=require('./config/keys');
//its very inportant witch is first
require('./models/Users');
require('./services/passport');

mongoose.connect(keys.mongoURI,{useNewUrlParser:true});


const app=express();
//enable cookie in express
app.use(cookieSession({
    //30 deys
   maxAge:30*24*60*60*1000,
   //encripting the keys
   keys:[keys.cookieKey]
 })
);

app.use(passport.initialize());
app.use(passport.session());
authRoutes(app);
//this is beetter  way
//require('./routes/authRoutes')(app);
const PORT=process.env.PORT || 5000;
//to try auth with faceebook
console.log('listen to port 5000');
app.listen(PORT);