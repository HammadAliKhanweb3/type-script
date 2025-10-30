import React, { useEffect } from 'react'
import { DataTable } from './dataTable'
import { columns } from './column'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { doGetAllBooks } from '@/store/bookSlice'
import {type Book } from 'types/book'

const HomePage = () => {


const dispatch = useAppDispatch()
const data = useAppSelector(state => state.book.items)
const parsedData = JSON.stringify(data)
console.log("simpleData:",data);
console.log("parsedData:",parsedData);

useEffect(()=>{
dispatch(doGetAllBooks())
},[])

  return (
    <div className='text-white'>
      
      <h1>{data.map((item:Book)=>item.bookname)}</h1>
        {/* <DataTable columns={columns} data={data}/> */}
    </div>
  )
}

export default HomePage