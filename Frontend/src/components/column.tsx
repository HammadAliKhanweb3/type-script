import {type ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import type { Book } from "types/book"
import { useAppDispatch } from "@/store/hooks"
import { doDeleteBook, updateBook } from "@/store/bookSlice"
import { ResponsiveDialog } from "./ResponsiveDialog"
import { useState } from "react"
import CreateBookForm from "./BookForm"




export const columns: ColumnDef<Book>[] = [

  {
    accessorKey: "bookName",
    header: "Book Name",
    cell:({row})=>{
     return (
  
      <div className="font-medium text-left">
      {row.original.bookname}
      </div>
      
    
     )  
  }},
  {
    accessorKey: "authorName",
    header: "Author Name",
    cell:({row})=>{
 return(
  
  <div className="font-medium text-left">
  {row.original.bookauthor}
</div>
 )
  }},
  {
    id:"actions",
    cell:({row})=>{
      const detail = row.original
      const dispatch = useAppDispatch()
   
      const [isDialogOpen,setIsDialogOpen] = useState(false)
    
const handleDelete = () => {
         dispatch(doDeleteBook({
          _id: detail._id,
          next: () => { 
            console.log("Successfully Deleted Book");
          }
        }));
      }
 return(
  <>
  <DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="ghost" className="h-8 w-8 p-0">
      <span className="sr-only">Open menu</span>
      <MoreHorizontal className="h-4 w-4" />
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent align="end">
    <DropdownMenuLabel>Actions</DropdownMenuLabel>
    <DropdownMenuItem
      onClick={() => navigator.clipboard.writeText(detail._id)}
    >
      Copy book ID
    </DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem onClick={()=>setIsDialogOpen(true)}>Update Book</DropdownMenuItem>
    <DropdownMenuItem onClick={handleDelete}>Delete Book</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

<ResponsiveDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}  title="Update Book" description="update your book" >
  <CreateBookForm onCancel={()=>setIsDialogOpen(false)} initialValues={detail}/>
  </ResponsiveDialog>
</>
 )
  }},
]