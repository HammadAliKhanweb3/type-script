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
   
    const index = state.findIndex(item => item.id === payload.id)
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
















// src/store/bookSlice.ts
// import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit';
// import axios from 'axios';
// import type { Book,CreateBookParams,UpdateBookParams} from '../../types/book';
// import { createBook } from 'lib/api/book';


// // // Book Interface
// // export interface Book {
// //   id: number;
// //   book_name: string;
// //   author: string;
// // }


// interface BookState {
//   items: Book[];
//   selectedBook?: Book;
// }

// // Defining the initial State
// const initialState: BookState = {
//   items: []
// };


// export const doGetAllBooks = createAsyncThunk(
//   'book/doGetAllBooks',
//   async (_, thunkAPI) => {
//     try {
//  //     const response = await bookAPI.getAllBooks();
//  //     return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// // CreateAsyncThunk explanation:
// // 1. First parameter: action type string
// // 2. Second parameter: payload creator function
// // 3. Third parameter (optional): options object
// export const doCreateBook = createAsyncThunk<Book, { data: Omit<Book, 'id'>; next: () => void }>(
//   'book/doCreateBook',
//   async ({ data, next }, thunkAPI) => {
//     try {
//       const response = await createBook(data);
//       next(); // Optional callback after success
//      return response.data; // Expecting the new Book (with id) as response
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// // Helper function for updating state
// const updateBookState = (state: Book[], payload: Book) => {
//   const index = state.findIndex(item => item.id === payload.id);
//   if (index > -1) {
//     state[index] = payload;
//   }
// };

// // (Optional) Define additional async thunks for update or delete if needed

// const bookSlice = createSlice({
//   name: 'book', // This name prefixes all generated action types, e.g., "book/updateBook"
//   initialState, // Default state for the book slice
//   reducers: {
//     // Synchronous reducer to update a book
//     updateBook(state, action: PayloadAction<Book>) {
//       updateBookState(state.items, action.payload);
//     },
//  clearSelectedBook: (state) => {
//       state.selectedBook = undefined;
//     }

//   },
//   extraReducers: (builder) => {
//     // Handling async thunk fulfilled actions
//     builder.addCase(doGetAllBooks.fulfilled, (state, { payload }) => {
//       // When getAllBooks is fulfilled, update the items array
//       state.items = payload;
//     });
//     builder.addCase(doCreateBook.fulfilled, (state, { payload }) => {
//       // When createBook is fulfilled, add the new book to the items array
//       state.items.push(payload);
//     });
//     // You can add similar cases for update and delete async thunks
//   }
// });

// export const { updateBook } = bookSlice.actions;
// export default bookSlice.reducer;