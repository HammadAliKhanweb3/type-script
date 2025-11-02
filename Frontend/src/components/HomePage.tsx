import React, { useEffect } from 'react'
import { DataTable } from './dataTable'
import { columns } from './column'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { doGetAllBooks } from '@/store/bookSlice'
import BooksListHeader from './BooksListHeader'
import SideBar from './SideBar'

const HomePage = () => {


const dispatch = useAppDispatch()
const data = useAppSelector(state => state.book.items)

useEffect(()=>{
dispatch(doGetAllBooks())
},[dispatch])

  return (
    <div className='container mx-auto py-10'>
       <SideBar/>
       <BooksListHeader/>
        <DataTable columns={columns} data={data}/>
    </div>
  )
}

export default HomePage