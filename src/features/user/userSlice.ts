import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { notification } from 'antd';
import { push } from 'connected-react-router'


export const login = createAsyncThunk(
  'account/login',
  async (params:any) => {
    if (params.password == "admin" && params.username == "admin") {
      return true
    } else {
      return false;
    }

  }
)
export const logout= createAsyncThunk(
  'account/logout',
  async () => {
    return true
  }
)
export const userSlice = createSlice({
  name: 'user',
  initialState: {
    status: false,
    token: "",
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, { payload }) => {
      if(payload){
        state.status = true;
        localStorage.setItem("status", "1");
      }
    }).addCase(logout.fulfilled, (state, { payload }) => {
      state.status = false;
      localStorage.removeItem("status");
    })
  },
})

// Action creators are generated for each case reducer function

export default userSlice.reducer