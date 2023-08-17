const express = require("express")

var cors = require('cors')

 const {connection}=require("./db")

const {postRouter} = require("./routes/post.routes")


const app = express()

//app.use(express.json())

//app.use(cors())

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

app.get("/",(req,res)=>{
    res.send("welcome")
})

app.use("/post", postRouter)

app.listen(8080,async()=>{
    try{
      await connection
      console.log("db is connected")
    }
    catch(err){
      crossOriginIsolated.log(err.message)
    }
    console.log("server is running at port 8080")
})