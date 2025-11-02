import React, { useState } from 'react'
import { Button } from './ui/button'
import { NewBookDialog } from './NewAgentDialog'

const BooksListHeader = () => {
  const [isDialogOpen,setIsDialogOpen] = useState<boolean>(false)
  

  return (
   
    <div className='flex justify-between p-5'>
      <h5 className='text-xl font-bold'>All Books</h5>
      <NewBookDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}/>
    </div>  
  )
}

export default BooksListHeader