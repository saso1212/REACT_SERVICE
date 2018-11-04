const passport=require('passport');
const GoogleStrategy=require('passport-google-oauth20').Strategy;
const keys=require('../config/keys');
const mongoose=require('mongoose');
//when is only one argument we want to catch something from mongoose, two argument we want to put something ('users',userSchema)
const User=mongoose.model('users');
passport.serializeUser((user,done)=>{
    //user.id id uniqe id from mongo 
    done(null,user.id);
});
passport.deserializeUser((id,done)=>{
    User.findById(id)
    .then(user=>{
        done(null,user);
    });
});

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
  },
  (accessToken, refreshToken, profile,done)=> {
      User.findOne({googleId:profile.id})
      .then(existingUsers=>{
        if(existingUsers){
            done(null,existingUsers) 
        }
        else{
            new User({googleId:profile.id})
            .save()
            .then(user=>{
                console.log(user);
                done(null,user)})
        }
      })
      .catch(error=>{
          console.log(error)
      })
      //for now jus exist in jscript with .save() we save in mlab
   
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return cb(err, user);
    })  
);

