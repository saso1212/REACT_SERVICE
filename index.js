const express=require('express');
require('./services/passport');
const authRoutes=require('./routes/authRoutes');


const app=express();
authRoutes(app);
//this is beetter  way
//require('./routes/authRoutes')(app);
const PORT=process.env.PORT || 5000;
//32 mongoo db
app.listen(PORT);