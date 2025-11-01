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


export const columns: ColumnDef<Book>[] = [

  {
    accessorKey: "bookName",
    header: "Book Name",
    cell:({row})=>{
     return (
  
      <div className="text-right font-medium">
      {row.original.bookname}
      </div>
      
    
     )
  }},
  {
    accessorKey: "authorName",
    header: "Author Name",
    cell:({row})=>{
 return(
  
  <div className="text-right font-medium">
  {row.original.bookauthor}
</div>
 )
  }},
  {
    id:"actions",
    cell:({row})=>{
      const detail = row.original
      console.log("in data table",detail._id);
      console.log("in data table",detail);
      console.log("in data table 2",detail.bookname);
      
 return(
  
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
    <DropdownMenuItem>View customer</DropdownMenuItem>
    <DropdownMenuItem>View More details</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
 )
  }},










]