import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { push, replace } from "connected-react-router";

export const fetchUserById = createAsyncThunk(
  "users/fetchByIdStatus",
  async (userId, thunkAPI) => {
    const response = await fetch("http://api.free52.com/v1/app/config");
    return "fetchUserByIdCT";
  }
);
export const login = createAsyncThunk(
  "users/fetchByIdStatus",
  async (userId, thunkAPI) => {
    const response = await fetch("http://api.free52.com/v1/app/config");
    return true;
  }

  // async (userId, thunkAPI) => {
  //   const response: any = await new Promise((resolve) => {
  //     setTimeout(() => {
  //       return "123456"
  //       // resolve();
  //     }, 1000);

  //   }
  //   )
  //   return response
  // })
);

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

      state.value += 1;
      replace("/tools/config");
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  }, // 处理异步请求结果的reducer
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, { payload }) => {
      console.log(payload);
    });
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
