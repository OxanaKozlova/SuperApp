import { SHOW_FILM, FILM_LIST, FILM_SEARCH } from '../actions/types';

export const initalState = {
	movies: null,
	currentMovie: null,
};

export default (state = initalState, action) => {
	switch (action.type) {
		case FILM_LIST: {
			return Object.assign({}, state, { movies: action.payload.movies });
		}
    case SHOW_FILM: {
      return Object.assign({}, state, { currentMovie: action.payload.movie });
    }
		case FILM_SEARCH: {
			return Object.assign({}, state, { movies: action.payload.movies });
		}
		default:
		{
			return state
		}
	}
};
