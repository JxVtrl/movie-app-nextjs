import React, { createContext, useContext, useEffect, useState } from "react";
import { allMoviesReq } from "@/helpers/moviesCollectionReq";
import {
  Movie,
  MovieGenre,
  MovieGenreRes,
  MoviesGenreSearchReq,
  MoviesRes,
} from "@/interfaces/movies.interface";
import {
  moviesGenreSearchReq,
  moviesAllGenresReq,
} from "@/helpers/moviesGenresReq";
const AppContext = createContext({});

export function AppProvider({ children }: any) {
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [totalResults, setTotalResults] = useState<number>(0);
  const [language, setLanguage] = useState<string>("pt-BR");

  const [allMovies, setAllMovies] = useState<Movie[]>([]);
  const [allGenres, setAllGenres] = useState<MovieGenre[]>([]);
  const [genreSearched, setGenreSearched] = useState<Movie[]>([]);

  useEffect(() => {
    allMoviesReq(page, language).then((res: MoviesRes) => {
      setAllMovies(res.results);
      setTotalPages(res.total_pages);
      setTotalResults(res.total_results);
    });

    moviesAllGenresReq(language).then((res: MovieGenreRes) => {
      setAllGenres(res.genres);
    });

    // moviesGenreSearchReq(1, language, "28").then(
    //   (res: MoviesGenreSearchReq) => {
    //     setGenreSearched(res.results);
    //   }
    // );
  }, []);

  const value = {
    allMovies,
    allGenres,
    totalResults,
    totalPages,
    setLanguage,
    setPage,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  return useContext(AppContext);
}
