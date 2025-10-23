
import mongoose from "mongoose"


const BooksSchema = new mongoose.Schema({
bookname:{
    type:String,
},
bookauthor:{
    type:String,
}

},{timestamps:true})




export const Books =  mongoose.model("BooksSchema",BooksSchema)
