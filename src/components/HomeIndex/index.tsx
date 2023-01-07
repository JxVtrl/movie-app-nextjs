import React from "react";
import { Nav } from "@/components";
import { useApp } from "@/context/AppContext";
import styles from "./home.module.scss";
import { useRouter } from "next/router";

const HomeIndex: React.FC = () => {
  const { movies }: any = useApp();
  const navigate = useRouter().push;
  return (
    <main className={styles.homeMain}>
      <div className={styles.cardsContainer}>
        {movies?.map((movie: any) => {
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
