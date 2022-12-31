import React, { createContext, useContext, useEffect, useState } from "react";
import { moviesReq } from "@/helpers/moviesCollectionReq";
import { Movie, MoviesCollection } from "@/interfaces/movies.interface";
const AppContext = createContext({});

export function AppProvider({ children }: any) {
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [totalResults, setTotalResults] = useState<number>(0);
  const [language, setLanguage] = useState<string>("en-US");
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    moviesReq(page, language).then((res: MoviesCollection) => {
      setMovies(res.results);
      setTotalPages(res.total_pages);
      setTotalResults(res.total_results)
    });
  }, []);

  useEffect(() => {
    console.log(movies)
  },[movies])

  const value = {
    movies,
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
