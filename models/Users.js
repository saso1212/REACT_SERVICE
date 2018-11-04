const mongoose=require('mongoose'); 
//const Schema=mongoose.Schema; the same
const {Schema}=mongoose;

const userSchema= new Schema ({
googleId:String
})
//cretae new colection users in mlab
mongoose.model('users',userSchema);