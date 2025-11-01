import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { createBook, getAllBooks } from "lib/api/book";
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

export const doCreateBook = createAsyncThunk<Book,{data:Omit<Book,"id">; next:()=>void}>(
    "book/create",
    async ({data,next},thunkAPI)=>{
        try {
            const response = await createBook(data)
            next()
            return response.data 
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
        })
    },
    
},
   
   
)


export const {updateBook} = bookSlice.actions
export default bookSlice.reducer