import React, { useEffect, useState } from "react";
import { Nav } from "@/components";
import { useApp } from "@/context/AppContext";
import styles from "./home.module.scss";
import { useRouter } from "next/router";
import { MoviesSlider } from "../MoviesSlider";
import { moviesGenreSearchReq } from "@/helpers/moviesGenresReq";
import {
  Movie,
  MoviesByGender,
} from "@/interfaces/movies.interface";

const HomeIndex: React.FC = () => {
  const { allMovies, allGenres, language }: any = useApp();
  const navigate = useRouter().push;
  const [moviesByGender, setMoviesByGender] = useState<MoviesByGender[]>([]);

  const getMoviesByGender = async () => {
    const moviesByGender: MoviesByGender[] = [];
    for (let i = 0; i < allGenres.length; i++) {
      const movies = await moviesGenreSearchReq(1, language, allGenres[i].id);
      moviesByGender.push({
        gender_id: allGenres[i].id,
        gender_name: allGenres[i].name,
        movies: movies.results,
      });
    }
    setMoviesByGender(moviesByGender);
  };

  useEffect(() => {
    getMoviesByGender();
  }, [allGenres]);

  return (
    <main className={styles.homeMain}>
      <div className={styles.moviesSliderContainer}>
        {moviesByGender?.map((movie: any, index: number) => {
          return (
            <div key={index}>
              <h1>{movie.gender_name}</h1>
              <MoviesSlider movies={movie.movies} />
            </div>
          );
        })}
      </div>

      <div className={styles.allMoviesContainer}>
        {allMovies?.map((movie: any) => {
          return (
            <div
              key={movie.id}
              className={styles.movieCard}
              onClick={() => {
                navigate(`/movie/${movie.id}`);
              }}
            >
              <h1>{movie.title}</h1>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default HomeIndex;
