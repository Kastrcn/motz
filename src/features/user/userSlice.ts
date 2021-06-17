import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { notification } from "antd";
import { push } from "connected-react-router";

export const logout = createAsyncThunk("account/logout", async () => {
  return true;
});
export const userSlice = createSlice({
  name: "user",
  initialState: {
    status: false,
    token: "",
  },
  reducers: {
    login: (state, { payload }) => {
      state.status = true;
      state.token = payload.token;
      localStorage.setItem("status", "1");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logout.fulfilled, (state, { payload }) => {
      state.status = false;
      localStorage.removeItem("status");
    });
  },
});

export const { login } = userSlice.actions;

export default userSlice.reducer;
