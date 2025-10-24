import axios from 'axios';
import type { CreateBookParams, UpdateBookParams } from 'types/book';

const API_BASE = '/api/books';

export const createBook = async (params: CreateBookParams) => {
  return await axios.post(API_BASE, params);
}

export const getAllBooks = async () => {
  return await axios.get(API_BASE);
}

export const updateBook = async (params: UpdateBookParams) => {
  return await axios.put(`${API_BASE}/${params.id}`, params);
}

export const deleteBook = async (id: number) => {
  return await axios.delete(`${API_BASE}/${id}`);
}

export const getBookById = async (id: number) => {
  return await axios.get(`${API_BASE}/${id}`);
}