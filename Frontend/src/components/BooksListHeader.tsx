import { useState } from "react"
import { Button } from "./ui/button"
import { ResponsiveDialog } from "./ResponsiveDialog"
import CreateBookForm from "./BookForm"


const BooksListHeader = () => {
  const [isDialogOpen,setIsDialogOpen] = useState<boolean>(false)
  

  return (
   
    <div className='flex justify-between p-5'>
      <h5 className='text-xl font-bold'>All Books</h5>
      <Button variant="outline" onClick={()=>setIsDialogOpen(true)}>Add Book</Button>
      <ResponsiveDialog 
       open={isDialogOpen}
       onOpenChange={setIsDialogOpen}
        title="Add new Book"
         description='Add a new book to your collection'>
       <CreateBookForm onCancel={()=>setIsDialogOpen(false)}/>
        </ResponsiveDialog>
    </div>  
  )
}

export default BooksListHeader