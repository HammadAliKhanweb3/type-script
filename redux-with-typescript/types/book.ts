// types/models/book.ts
export interface Book {
    id: number;
    book_name: string;
    author: string;
  }
  
  export interface CreateBookParams {
    book_name: string;
    author: string;
  }
  
  export interface UpdateBookParams extends CreateBookParams {
    id: number;
  }


  