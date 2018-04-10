import { SHOW_FILM, FILM_LIST, FILM_SEARCH } from './types';
import net from 'axios';

export const getMovieSuccess = movie => ({
  type: SHOW_FILM,
  payload: { movie }
});

const getMoviesSuccess = movies => ({
  type: FILM_LIST,
  payload: { movies },
});

const searchMoviesSuccess = movies => ({
  type: FILM_SEARCH,
  payload: { movies },
});

export const getMoviesList = () => dispatch =>
  net.get('http://www.omdbapi.com/?apikey=c2180afa&s=batman').then((response) => {
    const movies = response.data.Search;
    dispatch(getMoviesSuccess(movies));
  })
  .catch(error => {
    console.log('get movies error', error);
  });

export const getMovie = (movieId) => dispatch =>
  net.get('http://www.omdbapi.com/?apikey=c2180afa&i=' + movieId).then((response) => {
    const movie = response.data;
    dispatch(getMovieSuccess(movie));
  })
  .catch(error => {
    console.log('get movie error', error);
  });

export const searchMovies = (phrase) => dispatch =>
  net.get('http://www.omdbapi.com/?apikey=c2180afa&s=' + phrase).then((response) => {
    const movies = response.data.Search;
    dispatch(searchMoviesSuccess(movies));
  })
  .catch(error => {
    console.log('get movies error', error);
  });
