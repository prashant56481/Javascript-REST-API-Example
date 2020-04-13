const mongoose=require('mongoose')
const Schema=mongoose.Schema;

const ServerSchema=new Schema({
   name:{
       type:String
   },
   id:{
       type:String
   },
   Language:{
       type:String
   },
   Framework:{
       type:String
   } 

   //
})
//creating server model
const Server=mongoose.model('server',ServerSchema);

module.exports=Server;