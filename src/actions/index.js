import { SHOW_FILM, FILM_LIST } from './types';
import net from 'axios';


export const getFilmList = () => ({
  type: FILM_LIST
});


export const goToFilm = movie => ({
  type: SHOW_FILM,
  payload: { movie }
});

const getMoviesSuccess = movies => ({
  type: FILM_LIST,
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
