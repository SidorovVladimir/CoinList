import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slice/auth/index';
import assetSlice from './slice/assets';
import watchlistReducer from './slice/watchlist';

const store = configureStore({
  reducer: {
    auth: authReducer,
    assets: assetSlice,
    watchlist: watchlistReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
