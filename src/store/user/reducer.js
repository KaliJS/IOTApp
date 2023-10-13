import { createSlice } from '@reduxjs/toolkit';
import { STATUSES } from 'store/common';

import { fetchLoginUser } from './actions';

const initialState = {
  fetchLoginUserStatus: STATUSES.IDLE,
  loginUser: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLoginUser.pending, (state) => {
        state.fetchLoginUserStatus = STATUSES.LOADING;
      })
      .addCase(fetchLoginUser.fulfilled, (state, action) => {
        state.fetchLoginUserStatus = STATUSES.IDLE;
        state.loginUser = action.payload.data;
      })
      .addCase(fetchLoginUser.rejected, (state) => {
        state.fetchLoginUserStatus = STATUSES.ERROR;
      });
  },
});

export default userSlice.reducer;
