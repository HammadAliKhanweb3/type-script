import { app } from "./app";
import { connnectDB } from "./db";





const Port = 3001



connnectDB().then(()=>{
    app.listen(Port,()=>{
        console.log("✅ Database connected successfully");
        console.log("🚀 Server is running on port 3000");
    })
}).catch((error)=>{
    console.error("❌ Database connection failed:", error);
    console.log("🛑 Server startup aborted");
    process.exit(1); // Exit the process if DB connection fails
})


