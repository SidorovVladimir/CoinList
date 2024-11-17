import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slice/auth/index';
import assetSlice from './slice/assets';

const store = configureStore({
  reducer: {
    auth: authReducer,
    assets: assetSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
