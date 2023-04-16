import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import request from "../../../utils/request";

import { doLogin } from "../../../utils/api/api";

const initialState = {
  isAuth: false,
  privilegeRank: 0,
};

export const doSiteLogin = createAsyncThunk("posts/getPosts", async (data) => {
  console.log("🚀 ~ file: globalSlice.js:14 ~ doLogin ~ data:", data);
  //   const res = await fetch("https://jsonplaceholder.typicode.com/posts").then(
  //     (data) => data.json()
  //   );
  const res = doLogin(data);
  console.log("🚀 ~ file: globalSlice.js:18 ~ doLogin ~ res:", res);
  return res;
});

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [doSiteLogin.pending]: (state) => {
      state.loading = true;
    },
    [doSiteLogin.fulfilled]: (state, { payload }) => {
      console.log(payload, "FFFFFFFFFFFFFFFFFFFFFFFFFFFF");
      state.loading = false;
      state.isAuth = true;
      state.privilegeRank = payload.data.privilegeRank;
    },
    [doSiteLogin.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default postSlice.reducer;
