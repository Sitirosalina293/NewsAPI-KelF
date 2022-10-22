import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import conAPI from '../components/API/getAPI';

const initialState = {
  article: [],
  loading: false,
}

export const fetchData = createAsyncThunk('search/fetchData',async (search) => {
    const response = await axios.get(conAPI({req:`everything?q=${search}&sortBy=publishedAt`}))
    return response.data.articles
  }
)

export const searchSlice = createSlice({
  name: 'search',
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
})

export default searchSlice.reducer
