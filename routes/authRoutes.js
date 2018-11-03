const passport=require('passport');

//on this route use  strategy google
module.exports=(app)=>{
app.get('/auth/google',passport.authenticate('google',{
    //you ask google to give us information for propile end email with scope, we can ask for image or.....
    scope:['profile','email']
   })
);

app.get('/auth/google/callback',passport.authenticate('google'))
}