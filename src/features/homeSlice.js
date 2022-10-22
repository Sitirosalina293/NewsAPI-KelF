import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import conAPI from '../components/API/getAPI';

const API = conAPI({req:'top-headlines?country=id&pageSize=21'});

const initialState = {
  article: [],
  loading: false,
};

export const fetchData = createAsyncThunk('home/fetchData', async() => {
  const res = await axios.get(API)
  return res.data.articles
});

const homeSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchData.pending]: (state) => {
      state.loading = true;
    },
    [fetchData.fulfilled]: (state, {payload}) => {
      state.article = payload;
      state.loading = false;
    },
    [fetchData.rejected]: (state, action) => {
      state.loading = true;
      state.error = action.error.message;
    },
  }
});

export default homeSlice.reducer;
