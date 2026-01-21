import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const contactUsSlice = createSlice({
  name: 'contactUs',
  initialState,
  reducers: {
    getContactUs: (state) => {
      state.loading = true;
      state.error = null;
    },

    successContactUs: (state, action) => {
      state.loading = false;
      state.data = action.payload; // ✅ ALWAYS ARRAY
    },

    failedContactUs: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    removeContactUs: (state) => {
      state.loading = true;
    },
  },
});

export const {
  getContactUs,
  successContactUs,
  failedContactUs,
  removeContactUs,
} = contactUsSlice.actions;

export default contactUsSlice.reducer;
