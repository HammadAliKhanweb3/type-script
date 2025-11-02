// types/models/book.ts
export interface Book {
    _id: string;
    bookname: string;
    bookauthor: string;
  }
  
  export interface CreateBookParams {
    bookname: string;
    bookauthor: string;
  }
  
  export interface UpdateBookParams extends CreateBookParams {
    _id: number;
  }


  