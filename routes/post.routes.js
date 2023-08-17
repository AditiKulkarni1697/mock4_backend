const express = require("express")

const {PostModel} = require("../models/post.model")

const postRouter = express.Router()

postRouter.get("/",async(req,res)=>{
    try{
    const postData = await PostModel.find()
    res.send(postData)
    }
    catch(err){
        res.send(err.message)
    }
})

postRouter.get("/filter",async(req,res)=>{
    const destination = req.query.destination
    try{
    const postData = await PostModel.find({Destination:destination})
    res.send(postData)
    }
    catch(err){
        res.send(err.message)
    }
})

postRouter.get("/sort",async(req,res)=>{
    const sort = req.query.sort
    try{
        if(sort=="ascending"){
    const postData = await PostModel.aggregate([{$sort:{Budget_Per_Person:1}}])
    res.send(postData)
        }
        else{
            const postData = await PostModel.aggregate([{$sort:{Budget_Per_Person:-1}}])
            res.send(postData)
        }

    
    }
    catch(err){
        res.send(err.message)
    }
})

postRouter.post("/create",async(req,res)=>{
    const {Name,Email,Destination,No_of_travelers,Budget_Per_Person}=req.body
    try{
    const post = new PostModel({Name,Email,Destination,No_of_travelers,Budget_Per_Person})
    
    await post.save()

    res.send("post created")
    }
    catch(err){
        res.send(err.message)
    }

})

postRouter.delete("/delete/:post_id",async(req,res)=>{
    const post_id = req.params.post_id

    try{
        await PostModel.findByIdAndDelete({_id:post_id})
        res.send("post deleted")
    }
    catch(err){
        res.send(err.message)
    }
})

module.exports = {postRouter}