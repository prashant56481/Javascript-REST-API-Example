const express=require('express');
const router=express.Router();
const Server=require('../models/server')



// get a list of server from database
router.get('/server',(req,res,next)=>{
     Server.find({}).then((server)=>{
         res.send(server);
     })
});

router.get('/server/:name',(req,res,next)=>{
    Server.findById({name:req.params.name}).then((server)=>{
        res.send(server);
    })
});

//add a new server in db
router.post('/server',(req,res,next)=>{
    //let server=new Server(req.body);
    //server.save();
    Server.create(req.body).then((server)=>{
        res.send(server);
    }).catch(next);
});

//update the server in db
router.put('/server/:id',(req,res,next)=>{
    Server.findByIdAndUpdate({_id:req.params.id},req.body).then(()=>{
        Server.findOne({_id:req.params.id}).then((server)=>{
            res.send(server);
        })
    })
});

//delete a server from db
router.delete('/server/:id',(req,res)=>{
    Server.findByIdAndRemove({_id:req.params.id}).then((server)=>{
        res.send(server);
    })
});

module.exports=router;

