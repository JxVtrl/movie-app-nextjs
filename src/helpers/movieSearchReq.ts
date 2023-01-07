export const movieReq = async (movieId: string) => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}`
    );
    const data = await res.json();
    return data;
  } catch (err) {
    return console.log(err);
  }
};
