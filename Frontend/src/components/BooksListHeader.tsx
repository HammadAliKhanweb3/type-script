import React, { useState } from 'react'
import { Button } from './ui/button'
import { NewBookDialog } from './NewBookDialog'

const BooksListHeader = () => {
  const [isDialogOpen,setIsDialogOpen] = useState<boolean>(false)
  

  return (
   
    <div className='flex justify-between p-5'>
      <h5 className='text-xl font-bold'>All Books</h5>
      <Button variant="outline" onClick={()=>setIsDialogOpen(true)}>Add Book</Button>
      <NewBookDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} title="Add new Book" description='Add a new book to your collection'/>
    </div>  
  )
}

export default BooksListHeader