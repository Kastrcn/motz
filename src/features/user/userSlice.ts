import { createSlice } from '@reduxjs/toolkit'
import {  } from 'react-router-dom'
// let history = useHistory()
export const userSlice = createSlice({
  name: 'user',
  initialState: {
    status: false,
  },
  reducers: {
    login: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.status = true;
      localStorage.setItem("status","1");
      // history.push("/");
    },
    logout: (state) => {
      state.status = false;
      localStorage.removeItem("status");
    },
  },
})

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions

export default userSlice.reducer