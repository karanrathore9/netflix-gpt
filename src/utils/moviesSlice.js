import { createSlice } from "@reduxjs/toolkit";
const moviesSlice= createSlice({
    name:"movies",
    initialState:{
        nowplayingMovies:null,
        popularMovies:null,
        trailerVideo:null,
    },
    reducers:{
        addNowPlayingMovies:(state, action) => {
            state.nowplayingMovies = action.payload;
        },
        addTrailerVideo:(state, action)=>{
            state.trailerVideo = action.payload
        },
        addPopularMovies:(state, action)=>{
            state.popularMovies = action.payload
        }

    }
});
export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies } = moviesSlice.actions;
export default moviesSlice.reducer;