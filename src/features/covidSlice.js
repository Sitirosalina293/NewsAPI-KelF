import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import conAPI from '../components/API/getAPI';
import latestMonth from '../components/API/latestMonth';

const API = conAPI({req:`everything?q=covid&from=${getPreviousMonth()}&sortBy=publishedAt&pageSize=21`});

const initialState = {
  article: [],
  loading: false,
};
function getPreviousMonth() {
  const date = new Date();
  const year = date.getFullYear();
  const previousMonth = date.getMonth();
  const day = date.getDate();

  const joinDate = [year, previousMonth, day].join('-');
  return joinDate;
}

export const fetchData = createAsyncThunk('covid/fetchData', async () => {
  const res = await axios.get(API)
  return res.data.articles
});


const covidSlice = createSlice({
  name: 'covid',
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

export default covidSlice.reducer;
