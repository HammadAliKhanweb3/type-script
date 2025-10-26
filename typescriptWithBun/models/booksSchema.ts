
import mongoose from "mongoose"


export interface IBookSchema{
    _id:string,
    bookname:string,
    bookauthor:string,
    createdAt:Date,
    updatedAt:Date,

}


const BooksSchema = new mongoose.Schema<IBookSchema>({
bookname:{
    type:String,
},
bookauthor:{
    type:String,
}

},{timestamps:true})




const Books =  mongoose.model("BooksSchema",BooksSchema)
export default Books