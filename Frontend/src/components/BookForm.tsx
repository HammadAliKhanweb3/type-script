import { useState, type FormEvent } from "react"
import { Button } from "./ui/button"
import { DialogFooter } from "./ui/dialog"
import { doCreateBook, updateBook } from "@/store/bookSlice"
import { useAppDispatch } from "@/store/hooks"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import type { Book } from "types/book"


interface createBookFormProps{
onCancel:()=>void
initialValues?:Book
}


const CreateBookForm = ({onCancel,initialValues}:createBookFormProps) => {

  
const [bookname, setBookname] = useState<string>("")
const [bookauthor, setBookauthor] = useState<string>("")
const dispatch =  useAppDispatch()

const isEdit = !!initialValues?._id
  

const onSubmit = (e:FormEvent<HTMLFormElement>)=>{
e.preventDefault()

 if (isEdit) {
 const updateBookDetails = ()=>{

 dispatch(updateBook({_id: initialValues?._id,bookname,bookauthor}))
 }  
 updateBookDetails()
 }else{
const addBook = ()=>{
 dispatch(doCreateBook({data:{bookname,bookauthor},next:()=>{
   console.log("Successfully added book");
   setBookauthor("")
   setBookname("")
 }}))
 }
 addBook()
 }

}


    return (
    <div>
        <form onSubmit={(e)=>{
    onSubmit(e)
  }}>
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
        <Button type="button" variant="outline" onClick={()=>onCancel()}>Cancel</Button>
      <Button type="submit" onClick={()=>onCancel()}>{isEdit ? "Update" : "Create"}</Button>
    </DialogFooter>
  </form>
    </div>
  )
}

export default CreateBookForm