import { SHOW_FILM, FILM_LIST, FILM_SEARCH, MAP } from './types';
import net from 'axios';

const API_KEY = 'c2180afa';
const URL = 'http://www.omdbapi.com/';
const YEAR = 2018;

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

const navigationInfo = position => ({
  type: MAP,
  payload: { position },
});

export const getMoviesList = () => dispatch =>
  net.get(`${URL}?apikey=${API_KEY}&s=batman&y=2018`).then((response) => {
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

  export const getLocation = () => dispatch => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        dispatch(navigationInfo(position.coords));

      },
      (error) => {console.log('get location error', error)}
  )
};
