import {SHOW_FILM, FILM_LIST, FILM_SEARCH, MAP} from './types';
import net from 'axios';

const API_KEY = 'c2180afa';
const URL = 'http://www.omdbapi.com/';

export const getMovieSuccess = movie => ({
    type: SHOW_FILM,
    payload: {movie}
});

const getMoviesSuccess = movies => ({
    type: FILM_LIST,
    payload: {movies},
});

const searchMoviesSuccess = movies => ({
    type: FILM_SEARCH,
    payload: {movies},
});

const navigationInfo = position => ({
    type: MAP,
    payload: {position},
});

export const getMoviesList = () => dispatch => {
    const randomWords = require('random-words');

    net.get(URL,
        {
            params:
                {
                    apikey: API_KEY,
                    s: randomWords(),
                },
        }).then((response) => {
        const movies = response.data.Search;
        dispatch(getMoviesSuccess(movies));
    })
        .catch(error => {
            console.log('get movies error', error);
        });

};


export const getMovie = (movieId) => dispatch =>
    net.get(URL,
        {
            params:
                {
                    apikey: API_KEY,
                    i: movieId,
                },
        }).then((response) => {
        const movie = response.data;
        dispatch(getMovieSuccess(movie));
    })
        .catch(error => {
            console.log('get movie error', error);
        });

export const searchMovies = (phrase) => dispatch =>
    net.get(URL,
        {
            parameters: {
                apikey: API_KEY,
                s: phrase,

            },
        }).then((response) => {
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
        (error) => {
            console.log('get location error', error)
        }
    )
};
