import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: false,
  message: '',
  response: null,
  token: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signin: (state) => {
      state.loading = true;
      state.error = false;
      state.message = '';
    },

    success: (state, { payload }) => {
      state.loading = false;
      state.response = payload;
      state.token = payload?.data?.access_token;
      state.error = false;
    },

    failed: (state, { payload }) => {
      state.loading = false;
      state.error = true;
      state.message = payload;
    },

    logout: (state) => {
      state.response = null;
      state.token = null;
      localStorage.removeItem('userToken');
      sessionStorage.removeItem('userToken');
    }
  }
});

export const { signin, success, failed, logout } = userSlice.actions;
export default userSlice.reducer;
