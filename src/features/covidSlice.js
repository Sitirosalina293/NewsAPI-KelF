import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import conAPI from '../components/API/getAPI';
import latestMonth from '../components/API/latestMonth';

const API = conAPI({req:`everything?q=covid&from=${latestMonth()}&sortBy=publishedAt&pageSize=21`});

const initialState = {
  article: [],
  loading: false,
};

export const fetchData = createAsyncThunk('covid/fetchData', async() => {
  const res = await axios.get(API)
  return res.data.articles
});

const covidSlice = createSlice({
  name: 'covid',
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

export default covidSlice.reducer;
