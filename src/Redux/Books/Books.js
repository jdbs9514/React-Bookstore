import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import uniqid from 'uniqid';

const ADD_BOOK = 'bookstore-react-app/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore-react-app/books/REMOVE_BOOK';
const LOAD_BOOKS = 'bookstore-react-app/books/LOAD_BOOKS';

const apiId = 'vLQEXE4To5sPvRWJWora';
const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';

export const booksLoadThunk = createAsyncThunk(LOAD_BOOKS, async () => {
  const response = await axios.get(`${URL}/${apiId}/books`).catch((err) => {
    console.log('Error', err);
  });
  const call = response.data;
  const setData = Object.keys(call).map((key) => ({
    id: key,
    ...call[key][0],
  }));
  return setData;
});

export const bookAddThunk = createAsyncThunk(ADD_BOOK, async (
  { title, author, category },
  thunkAPI,
) => {
  const book = {
    item_id: uniqid(),
    title,
    author,
    category,
  };
  await axios.post(`${URL}/${apiId}/books`, book)
    .then(() => thunkAPI.dispatch(booksLoadThunk()))
    .catch((err) => { console.log('Error', err); });

  const books = thunkAPI.getState().booksList;
  return books;
});

export const deleteBookThunk = createAsyncThunk(REMOVE_BOOK, async (id, thunkAPI) => {
  await axios.delete(`${URL}/${apiId}/books/${id}`)
    .then(() => thunkAPI.dispatch(booksLoadThunk()))
    .catch((err) => { console.log('Error', err); });
  const books = thunkAPI.getState().booksList;
  return books;
});

const storeSlice = createSlice({
  name: 'bookstore-react-app/books',
  initialState: [],
  extraReducers: {
    [booksLoadThunk.fulfilled]: (state, action) => action.payload,
    [bookAddThunk.fulfilled]: (state, action) => action.payload,
    [deleteBookThunk.fulfilled]: (state, action) => action.payload,
  },
});

export const booksList = (state) => state.bookList;
export default storeSlice.reducer;
