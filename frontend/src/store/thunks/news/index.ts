import { createAsyncThunk } from '@reduxjs/toolkit';
import { instanceNews } from '../../../utils/axios';

export const getNews = createAsyncThunk(
  'get-news',
  async (_, { rejectWithValue }) => {
    try {
      const news = await instanceNews('news/?lang=EN');
      return news.data.Data;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
