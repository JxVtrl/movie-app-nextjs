// export const moviesDiscoverBySorReq = async (
//   page: number,
//   language: string,
//   sort_by: string,
// ): Promise<any> => {
//   try {
//     const res = await fetch(
//       `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}&language=${language}&include_adult=true&page=${page}&with_genres=${with_genres}&with_people=${with_people}&with_keywords=${with_keywords}&with_vote_average.gte=${with_vote_average_gte}&with_vote_average.lte=${with_vote_average_lte}&with_vote_count.gte=${with_vote_count_gte}&with_vote_count.lte=${with_vote_count_lte}&with_original_language=${with_original_language}`
//     )
//       .then((res) => res.json())
//       .then((data) => data);
//     return res;
//   } catch (err) {
//     return console.log(err);
//   }
// };

export const moviesDiscoverByGenreReq = async(
    page: number,
    language: string,
    with_genres: string,
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
}
