import axios from 'axios';
import type { CreateBookParams, UpdateBookParams } from 'types/book';

const API_BASE = 'http://localhost:3001/books';

export const createBook = async (params: CreateBookParams) => {
  return await axios.post(`${API_BASE}/create`, params);
}

export const getAllBooks = async () => {
  return await axios.get(`${API_BASE}/get`);
}

export const updateBook = async (params: UpdateBookParams) => {
  return await axios.put(`${API_BASE}/${params.id}`, params);
}

export const deleteBook = async (_id: string) => {
  // Backend expects DELETE /books/delete with JSON body { id }
  return await axios.delete(`${API_BASE}/delete`, { data: { _id } });
}

export const getBookById = async (id: number) => {
  return await axios.get(`${API_BASE}/${id}`);
}