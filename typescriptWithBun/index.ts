import express from "express";



const app = express()

const Port = 3000



app.get("/",(req,res)=>{

    res.json({server:"is running fine."})
})



app.listen(Port,()=>{
    console.log("server is running on port 3000");
    
})
