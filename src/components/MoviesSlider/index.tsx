import React from "react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import styles from "./MoviesSlider.module.scss";

import { Movie } from "@/interfaces/movies.interface";
import { useRouter } from "next/router";

SwiperCore.use([Navigation, Pagination, Autoplay]);
interface MoviesSliderProps {
  movies: Movie[];
}

export const MoviesSlider: React.FC<MoviesSliderProps> = ({ movies }) => {
  const navigate = useRouter().push;

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      modules={[Navigation, Pagination, Autoplay]}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
        1280: {
          slidesPerView: 6,
          spaceBetween: 50,
        },
        1440: {
          slidesPerView: 7,
          spaceBetween: 50,
        },
        1600: {
          slidesPerView: 8,
          spaceBetween: 50,
        },
        1920: {
          slidesPerView: 9,
          spaceBetween: 50,
        },
      }}
    >
      {movies.map((movie: Movie) => {
        if (movie.poster_path === null) return null;
        return (
          <SwiperSlide
            key={movie.id}
            className={styles.MovieSlide}
            onClick={() => {
              navigate(`/movie/${movie.id}`);
            }}
          >
            <img
              src={"https://image.tmdb.org/t/p/original/" + movie.poster_path}
              alt={movie.title}
              loading="lazy"
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
