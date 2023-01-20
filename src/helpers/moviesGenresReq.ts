export const moviesGenreSearchReq = async (
  page: number,
  language: string,
  with_genres: string
): Promise<any> => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}&language=${language}&include_adult=true&include_video=false&page=${page}&with_genres=${with_genres}`
    )
      .then((res) => res.json())
      .then((data) => data);
    return res;
  } catch (err) {
    return console.log(err);
  }
};

export const moviesAllGenresReq = async (language: string): Promise<any> => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}&language=${language}`
    )
      .then((res) => res.json())
      .then((data) => data);
    return res;
  } catch (err) {
    return console.log(err);
  }
};
