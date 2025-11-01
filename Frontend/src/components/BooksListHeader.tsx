import React from 'react'
import { Button } from './ui/button'
import { NewAgentDialog } from './NewAgentDialog'

const BooksListHeader = () => {
  return (
   
    <div className='flex justify-between p-5'>
      <h5>All Agents</h5>
      {/* <Button onClick={}>Add Book</Button> */}
      <NewAgentDialog/>
    </div>
  )
}

export default BooksListHeader