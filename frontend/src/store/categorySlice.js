import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getAllCategory = createAsyncThunk(
  "api/getAllCategory",
  async (category, getState) => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/getAllCategory",
        category
      );
      console.log("response category==>", response);
      return response.data;
    } catch (e) {
      return getState.rejectWithValue(e.response.data);
    }
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState: {
    loading: false,
    getdata:{},
    error: "",
  },
  reducers: {
    getdata: (state, action) => {
      state.getdata = {};
    },
  },
  extraReducers: {
    [getAllCategory.fulfilled]: (state, action) => {
      state.getdata = action.payload;
      state.loading = false;
    },
    [getAllCategory.pending]: (state, action) => {
      state.loading = true;
    },
    [getAllCategory.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { clearState } = categorySlice.actions;
export default categorySlice.reducer;

