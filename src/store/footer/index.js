import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { apiGetFooterSettings } from 'API/footer';

export const fetchFooterSettings = createAsyncThunk('footer/fetchFooterSettings', async () => {
  if (localStorage.getItem('footerSettings')) {
    return JSON.parse(localStorage.getItem('footerSettings'));
  }
  const { data } = await apiGetFooterSettings();
  localStorage.setItem('footerSettings', JSON.stringify({ contactInfo: data.contactInfo, pages: data.pages }));
  return data;
});

const initialState = {
  footerInfo: null,
};

const { reducer } = createSlice({
  name: 'footer',
  initialState,
  extraReducers: {
    [fetchFooterSettings.fulfilled]: (state, { payload }) => ({
      ...state,
      footerInfo: { contactInfo: payload.contactInfo, pages: payload.pages },
    }),
  },
});

export default reducer;
