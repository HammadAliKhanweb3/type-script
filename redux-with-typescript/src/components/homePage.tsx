import React, { useEffect } from 'react'
import { DataTable } from './dataTable'
import { columns } from './column'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { doGetAllBooks } from '@/store/bookSlice'

const HomePage = () => {


const dispatch = useAppDispatch()
const data = useAppSelector(state => state.book.items)

useEffect(()=>{
dispatch(doGetAllBooks())
},[])

  return (
    <div className='text-white'>
      
      <h1>Hammad</h1>
        {/* <DataTable columns={columns} data={data}/> */}
    </div>
  )
}

export default HomePage