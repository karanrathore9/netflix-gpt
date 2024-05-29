import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  console.log(movies.popularMovies, "MOVIESSSS");
  return (
    movies.nowplayingMovies && movies.popularMovies && (
      <div className="bg-black">
        <div className="-mt-50 pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowplayingMovies} />
          <MovieList title={"Trending"} movies={movies.popularMovies} />
          <MovieList title={"Popular"} movies={movies.nowplayingMovies} />
          <MovieList title={"Upcoming"} movies={movies.nowplayingMovies} />
          <MovieList title={"Horror"} movies={movies.nowplayingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
