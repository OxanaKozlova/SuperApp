import { SHOW_FILM, FILM_LIST } from '../actions/types';

const initalState = {
	movies: null,
	currentMovie: null,
};

export default (state = initalState, action) => {
	switch (action.type) {
		case FILM_LIST: {
			console.log("reducer");
			return Object.assign({}, state, { movies: action.payload.movies });
		}
    case SHOW_FILM: {
      return {
        id: action.id
      }
    }
		default:
		{
			return state
		}
	}
};
