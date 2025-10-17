import express from "express";



const app = express()





app.get("/",(req,res)=>{

    res.json({"server:":"is running fine."})
})



app.listen("3000",()=>{
    console.log("server is running on port 3000");
    
})