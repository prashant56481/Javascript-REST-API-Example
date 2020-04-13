const express=require('express');
const routes=require('./routes/api')
const bodyParser=require('body-parser')
const mongoose=require('mongoose');


const app=express();

//connect to mongodb
mongoose.connect('mongodb://localhost/servergo');
//setting mongoose promise to global promise
mongoose.Promise=global.Promise;


app.use(bodyParser.json());

//initialise route
app.use('/api',routes);

//for errors
app.use((err,req,res,next)=>{
   console.log(err); 
   res.status(422).send({error:err.message});
});

//listen for request
app.listen(process.env.port||4000,function(){
    console.log('listening');
});
