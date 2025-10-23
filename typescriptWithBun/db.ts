import mongoose from "mongoose";



const connnectDB =async ()=>{

   try {
     const connectionInstance = await mongoose.connect(
         `${process.env.MONGODB_SECRET}/booksStore`
     )
    console.log(`/n MongoDb Connected !DB HOST: ${connectionInstance.connection.host}`);
    
   } catch (error) {
    console.error("Mongodb Connection error:",error);
   }


}



export {connnectDB}