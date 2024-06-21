import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const BASE_URL = 'https://newsapi.org/v2';

export const fetchArticles = createAsyncThunk(
  'articles/fetchArticles',
  async ({ category, page }) => {
    const response = await axios.get(
      `${BASE_URL}/top-headlines`,
      {
        params: {
          apiKey: '252633f6e86e420a91294f5d4714d6c1',
          category,
          page,
          pageSize: 10,
          country: 'us',
        },
      }
    );
    return response.data;
  }
);

const articleSlice = createSlice({
  name: 'articles',
  initialState: {
    articles: [],
    status: 'idle',
    error: null,
    category: 'general',
    page: 1,
  },
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
      state.page = 1;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.articles = action.payload.articles;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setCategory, setPage } = articleSlice.actions;

export default articleSlice.reducer;
