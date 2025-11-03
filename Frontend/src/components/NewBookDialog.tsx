import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { doCreateBook } from "@/store/bookSlice"
import { useAppDispatch } from "@/store/hooks"

import { useState, type FormEvent } from "react"

export interface DialogProps{
open:boolean,
onOpenChange:(open:boolean)=>void,
title:string,
description:string,
}




export function NewBookDialog({open,onOpenChange,title,description}:DialogProps) {

const [bookname, setBookname] = useState<string>("")
const [bookauthor, setBookauthor] = useState<string>("")

 const dispatch =  useAppDispatch()
  
 const addBook = (e:FormEvent<HTMLFormElement>)=>{
  e.preventDefault()
  dispatch(doCreateBook({data:{bookname,bookauthor},next:()=>{
    console.log("Successfully added book");
    setBookauthor("")
    setBookname("")
  }}))

  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={(e)=>{
          addBook(e)
        }}>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>
              {description}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="bookname">Book Name</Label>
              <Input 
                id="bookname" 
                value={bookname}
                onChange={(e) => setBookname(e.target.value)}
                placeholder="Enter book name"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="bookauthor">Author</Label>
              <Input 
                id="bookauthor" 
                value={bookauthor}
                onChange={(e) => setBookauthor(e.target.value)}
                placeholder="Enter author name"
                required
              />
            </div>
          </div>
          <DialogFooter>
              <Button type="button" variant="outline" onClick={()=>onOpenChange(false)}>Cancel</Button>
            <Button type="submit" onClick={()=>onOpenChange(false)}>Add Book</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
