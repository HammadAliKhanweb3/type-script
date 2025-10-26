
import type { Request,Response } from "express"
import Books from "../models/booksSchema"



// const getAllBooks = async(req:Request,res:Response)=>{

//     const allBooks = await Books

// }



const createBook = async(req:Request,res:Response)=>{


    
    const {bookname,bookauthor}=req.body()

    console.log(bookname);
    
   const createdBook =  await Books.create({bookname,bookauthor})

   res.status(200).json(
    {createdBook}
   )

}






export {createBook}