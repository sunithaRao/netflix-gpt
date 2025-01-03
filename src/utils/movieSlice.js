import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    comedyMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addComedyMovies: (state, action) => {
      state.comedyMovies = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addComedyMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
