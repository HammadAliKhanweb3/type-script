import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { createBook, deleteBook, getAllBooks } from "lib/api/book";
import type { Book } from "types/book";




interface BookState {
    items:Book[],
    selectedBook?:Book;
}

const initialState:BookState ={
    items:[]
}

export const doGetAllBooks = createAsyncThunk(
    "book/get",
    async (_,thunkAPI)=>{
        try {
            const response = await getAllBooks()
            return response.data.data
        } catch (error) {
                return thunkAPI.rejectWithValue(error)
        }
    }
) 

export const doCreateBook = createAsyncThunk<Book,{data:Omit<Book,"_id">; next:()=>void}>(
    "book/create",
    async ({data,next},thunkAPI)=>{
        try {
            const response = await createBook(data)
            next()
            return response.data.createdBook 
        } catch (error) {
                return thunkAPI.rejectWithValue(error)
        }
    }
) 

export const doDeleteBook = createAsyncThunk<string,{_id:string; next:()=>void}>(
    "book/delete",
    async ({_id,next},thunkAPI)=>{
        try {
            const response = await deleteBook(_id)
            next()
            return _id
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)


const updateBookState =  (state:Book[],payload:Book)=>{
   
    const index = state.findIndex(item => item._id === payload._id)
    if(index>-1){
     state[index] = payload      
    }       
}

const bookSlice = createSlice({
    name:"book",
    initialState,
    reducers:{
        updateBook(state,action:PayloadAction<Book>){
            updateBookState(state.items,action.payload)
    },
    clearSelectedBook: (state)=>{
        state.selectedBook = undefined
    },},
    extraReducers:(builder)=>{
        builder.addCase(doGetAllBooks.fulfilled,(state,{payload})=>{
         state.items = payload
        }),
         builder.addCase(doCreateBook.fulfilled,(state,{payload})=>{
         state.items.push(payload)
        }),
        builder.addCase(doDeleteBook.fulfilled,(state,{payload:_id})=>{
          state.items = state.items.filter((book)=>book._id !== _id)
        })
    },
},
)


export const {updateBook} = bookSlice.actions
export default bookSlice.reducer