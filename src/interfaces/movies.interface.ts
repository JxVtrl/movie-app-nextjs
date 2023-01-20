export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  poster: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MovieGenre {
  id: number;
  name: string;
}

export interface MoviesByGender {
  gender_id: number;
  gender_name: string;
  movies: Movie[];
}

export interface MoviesRes {
  results: Movie[];
  total_results: number;
  total_pages: number;
}

export interface MovieGenreRes {
  genres: MovieGenre[];
}

export interface MoviesGenreSearchReq {
  results: Movie[];
  total_results: number;
  total_pages: number;
  page: number;
}
