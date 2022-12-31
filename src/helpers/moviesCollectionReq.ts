export const moviesReq = async (
  page: number,
  language: string
): Promise<any> => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}&language=${language}&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => data);

    return res;
  } catch (err) {
    return console.log(err);
  }
};
