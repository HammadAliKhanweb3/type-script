
import type { Request,Response } from "express"
import Books from "../models/booksSchema"



const getAllBooks = async(req:Request,res:Response)=>{
    try {
        const allBooks = await Books.find({})
        
        res.status(200).json({
            success: true,
            count: allBooks.length,
            data: allBooks
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching books",
            error: error
        })
    }
}

const getOneBook = async(req:Request,res:Response)=>{
    try {
         console.log("inside");
         
        const {_id} = req.params  
        console.log(_id);
        
        const book = await Books.findById(_id)          
        if (!book) {
            return res.status(404).json({
                success: false,
                message: "Book not found"
            })
        }
        
        res.status(200).json({
            success: true,
            data: book
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching book",
            error: error
        })
    }
}



const createBook = async(req:Request,res:Response)=>{
    
    
    const {bookname,bookauthor}=req.body

   const createdBook =  await Books.create({bookname,bookauthor})

   res.status(200).json(
    {createdBook}
   )

}

const updateBook = async(req:Request,res:Response)=>{
    try {
         console.log("inside");
         
        const {_id,bookname,bookauthor} = req.body 
        console.log(_id);
        
        const book = await Books.updateOne({
            _id,
            bookname,
            bookauthor
        })  
    
        if (!book) {
            return res.status(404).json({
                success: false,
                message: "Book not updated"
            })
        }
        
        res.status(200).json({
            success: true,
            data: book
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error updating book",
            error: error
        })
    }
}



const deleteBook = async (req:Request,res:Response)=>{

    console.log("in delete");
    

    const {_id} = req.body
    console.log(_id);
    

   const deletedBook = await Books.deleteOne({_id})
   if(!deletedBook){
    res.status(400).json(
        {success:false,
        message:"book deleted unsuccessfull",}
    )
   }
   
    res.status(200).json({
        success:true,
        message:"book deleted successfully",
        data:{}
    })

}



export {createBook, getAllBooks,deleteBook,getOneBook,updateBook}