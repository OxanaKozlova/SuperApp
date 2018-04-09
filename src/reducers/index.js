import { SHOW_FILM, FILM_LIST } from '../actions/types';

const initalState = {
	movies: null,
	currentMovie: null,
};

export default (state = initalState, action) => {
	console.log('Doroy');
	switch (action.type) {
		case FILM_LIST: {
			console.log("reducer list");
			return Object.assign({}, state, { movies: action.payload.movies });
		}
    case SHOW_FILM: {
			console.log("reducer film");
      return {
        id: action.id
      }
    }
		default:
		{
			console.log("reducer");
			return state
		}
	}
};
