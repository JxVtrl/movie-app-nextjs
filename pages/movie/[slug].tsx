import React, { useEffect, useState } from "react";
import { useApp } from "src/context/AppContext";
import { useRouter } from "next/router";
import { movieReq } from "src/helpers/movieSearchReq";
import { Movie } from "@/interfaces/movies.interface";

const Movie: React.FC = () => {
  const { slug } = useRouter().query;
  const [movie, setMovie] = useState<Movie>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (slug) {
      setLoading(true);
      movieReq(`${slug}`).then((res: Movie) => {
        setMovie(res);
        setLoading(false);
      });
    } else return;
  }, [slug]);

  useEffect(() => {
    console.log(movie);
  }, [movie]);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>{JSON.stringify(movie, null, "\t")}</div>
      )}
    </>
  );
};

export default Movie;
