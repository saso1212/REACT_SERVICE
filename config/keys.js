if (process.env.NODE_EVN==='produvtion'){
// we are in production retur prod keys
module.exports=require('./prod');
}
else{
//we are in development return dev keys
module.exports=require('./dev');
}



//169918491812-g1loftiht4d4spmka8os02s5qsriftki.apps.googleusercontent.com
//kxlOvQBLdHa2akE_UA4ZZ6H7