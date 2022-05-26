import axios from 'axios';
import FantasyMovie from '../entities/FantasyMovie';

export default {
    getMovie: async (movieId) => {
        const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.TMDB_KEY}`
          );
          return response.data;
    },
    getUpcomingMovie: async (query) => {
      const response = await axios.get(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${query['page']}`
        );
        return response.data;
    },
    find: async (query) => {

        const response = await axios.get(
            `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${query['page']}`
          );
          return response.data;
    },

    createFantasyMovie: async  (title, overview, genres, runtime, release_date, {moviesRepository}) => {
      const fantasymovie = new FantasyMovie(undefined, title, overview, genres,runtime, release_date);
      return moviesRepository.createFantasyMovie(fantasymovie);
    },
    getFantasyMovie: (fantasymovieid, {moviesRepository}) => {
      return moviesRepository.getFantasyMovie(fantasymovieid);
    },

  };