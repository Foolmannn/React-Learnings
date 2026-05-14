import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: null,
  loading: true // Starts as true when the app boots up
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload;
      state.loading = false; // Add this: stop loading when logged in
    },
    logout: (state) => {
      state.status = false;
      state.userData = null;
      state.loading = false; // Add this: stop loading when logged out
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    }
  }
});

export const { login, logout, setLoading } = authSlice.actions;

export default authSlice.reducer;