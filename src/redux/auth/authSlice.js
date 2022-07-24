import { createSlice } from '@reduxjs/toolkit';
import { resetError } from './authActions';
import { register, logIn, logOut, refreshCurrentUser } from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshingUser: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled]: (state, { payload }) => {
      state.error = null;
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [register.rejected]: (state, { payload }) => {
      state.error = payload;
    },
    [logIn.fulfilled]: (state, { payload }) => {
      state.error = null;
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [logIn.rejected]: (state, { payload }) => {
      state.error = payload;
    },
    [logOut.fulfilled]: () => {
      return initialState;
    },
    [refreshCurrentUser.pending]: state => {
      state.isRefreshingUser = true;
    },
    [refreshCurrentUser.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.isLoggedIn = true;
      state.isRefreshingUser = false;
    },
    [refreshCurrentUser.rejected]: state => {
      state.isRefreshingUser = false;
    },
    [resetError]: (state, _) => {
      state.error = null;
    },
  },
});

export default authSlice.reducer;
