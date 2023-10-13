import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from 'utils/axios';

// Get Login User
export const fetchLoginUser = createAsyncThunk('user/fetchLoginUser', async () => {
  const url = `/user/self`;
  const res = await axiosInstance().get(url);
  return { data: res.data };
});
