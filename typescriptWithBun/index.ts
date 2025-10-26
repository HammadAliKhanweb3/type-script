import { app } from "./app";
import { connnectDB } from "./db";





const Port = 3000



connnectDB().then(()=>{
    app.listen(Port,()=>{

        console.log("server is running on port 3000");
    })
}).catch((error)=>{
    console.log(error);
    
})

