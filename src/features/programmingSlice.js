import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import latestMonth from '../components/API/latestMonth';
import conAPI from '../components/API/getAPI';

const API = conAPI({req:`everything?q=programming&from=${latestMonth()}&sortBy=publishedAt&pageSize=21`});

const initialState = {
  article: [],
  loading: false,
};

export const fetchData = createAsyncThunk('programming/fetchData', async () => {
  const res = await axios.get(API)
  return res.data.articles
});

const programmingSlice = createSlice({
  name: 'programming',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchData.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchData.fulfilled]: (state, { payload }) => {
      state.article = payload;
      state.isLoading = false;
    },
    [fetchData.rejected]: (state, action) => {
      state.isLoading = true;
      state.error = action.error.message;
    },
  }
});

export default programmingSlice.reducer;
