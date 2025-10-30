// types/models/book.ts
export interface Book {
    id: number;
    bookname: string;
    bookauthor: string;
  }
  
  export interface CreateBookParams {
    bookname: string;
    bookauthor: string;
  }
  
  export interface UpdateBookParams extends CreateBookParams {
    id: number;
  }


  