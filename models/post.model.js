const mongoose = require("mongoose")

const postSchema = mongoose.Schema({
Name:String,
Email: String,
Destination : String,
No_of_travelers :Number,
Budget_Per_Person:Number
})

const PostModel = mongoose.model("post",postSchema)

module.exports = {PostModel}