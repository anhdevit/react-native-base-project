import { createReducer } from '@reduxjs/toolkit';
import { showLoading, stopLoad } from './actions';

const loadingReducer = createReducer(
  {
    isLoading: false,
    loadingText: 'Vui lòng chờ',
  },
  {
    [showLoading]: (state, action) => {
    console.log("showLoading", state)
      state.isLoading = true;
      // state.loadingText = action.payload ? action.payload : 'Vui lòng chờ';
    },
    [stopLoad]: (state, action) => {
      state.isLoading = false;
      // state.loadingText = '';
    },
  },
);

export default loadingReducer;
