const API_KEY = '98070d02cf807b8b32bb1761f39db75f';

export default {
    fetchTrending:`/trending/all/week?api_key=${API_KEY}`,
    // fetchTopRated:`/movie/all/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchTopRated:`/movie/all/top_rated?api_key=${API_KEY}`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchMystery:`/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    fetchSciFi:`/discover/movie?api_key=${API_KEY}&with_genres=878`,
    fetchWestern:`/discover/movie?api_key=${API_KEY}&with_genres=37`,
    fetchAnimation:`/discover/movie?api_key=${API_KEY}&with_genres=16`,
    fetchTv:`/discover/movie?api_key=${API_KEY}&with_genres=10770`,

}