import { createSlice } from '@reduxjs/toolkit';
import { getPublicUser, loginUser, registerUser } from '../../thunks/auth';
import { IAuthState } from '../../../common/types/auth';

const initialState: IAuthState = {
  user: [],
  isLogged: false,
  isLoading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state, action) => {
      state.isLogged = false;
      state.isLoading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLogged = true;
      state.isLoading = false;
      state.user = action.payload;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLogged = false;
      state.isLoading = false;
    });
    builder.addCase(registerUser.pending, (state, action) => {
      state.isLogged = false;
      state.isLoading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.isLogged = true;
      state.user = action.payload;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.isLogged = false;
      state.isLoading = false;
    });
    builder.addCase(getPublicUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export default authSlice.reducer;
