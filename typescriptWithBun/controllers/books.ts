import { Books } from "../models/booksSchema"
import type { Request,Response } from "express"


const createBook = async(req:Request,res:Response)=>{

    const {bookname,bookauthor}=req.body()

   const createdBook =  await Books.create({bookname,bookauthor})
   



}



export {createBook}