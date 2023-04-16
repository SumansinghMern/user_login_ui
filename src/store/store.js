import { configureStore } from "@reduxjs/toolkit";

import counterReducer from './features/global/globalSlice'

export default configureStore({
  reducer: {
    globalData: counterReducer,
  },
});
