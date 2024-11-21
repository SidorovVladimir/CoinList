import { createAsyncThunk } from '@reduxjs/toolkit';
import { coinGeckoApi } from '../../../utils/axios';

export const getFavoriteAssets = createAsyncThunk(
  'coins/markets',
  async (data: unknown, { rejectWithValue }) => {
    try {
      const assets = await coinGeckoApi.get(
        `coins/${data}/market_chart?vs_currency=usd&days=90`
      );
      const singleAsset = await coinGeckoApi.get(
        `coins/markets?vs_currency=usd&ids=${data}`
      );

      return {
        name: data,
        price_chart_data: assets.data.prices.slice(-24),
        singleAsset: singleAsset.data,
      };
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
