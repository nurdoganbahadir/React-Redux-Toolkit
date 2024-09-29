import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getData = createAsyncThunk("haberSlice/getData", async () => {
  const response = await axios(
    "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=81a4163ea7eb4bccb489151972100adb"
  );
  return response.data.articles;
});

export const haberSlice = createSlice({
  name: "haberSlice",
  initialState: {
    haberler: [],
    loading: true,
    status: "idle",
    error: null,
  },
  reducers: {
    clearHaber: (state, action) => {
      state.haberler = state.haberler.filter(
        (haber, index) => index !== action.payload
      );
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.haberler = action.payload;
        state.loading = false;
      });
    // .addCase(getData.rejected, (state, action) => {
    //   state.error = action.payload;
    //   state.status = "fail"
    // });
  },
});
export const { clearHaber } = haberSlice.actions;
export default haberSlice.reducer;
