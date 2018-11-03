const passport=require('passport');
const GoogleStrategy=require('passport-google-oauth20').Strategy;
const keys=require('../config/keys');

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
  },(accessToken, refreshToken, profile,done)=> {
      console.log('accestoken:',accessToken);
      console.log('refreshtoken:',refreshToken);
      console.log('propfile:',profile);
      console.log('id:',profile.id);
       
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return cb(err, user);
    })
);