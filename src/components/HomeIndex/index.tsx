import React from "react";
import { Nav } from "@/components";
import { useApp } from "@/context/AppContext";
import styles from "./home.module.scss";

const HomeIndex: React.FC = () => {
  const { movies }: any = useApp();
  return (
    <main>
      <div className={styles.cardsContainer}>
        {movies?.map((movie: any) => (
          <div key={movie.id} className={styles.movieCard}>
            <h1>{movie.title}</h1>
          </div>
        ))}
      </div>
    </main>
  );
};

export default HomeIndex;
