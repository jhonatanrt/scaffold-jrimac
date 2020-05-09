import { SAVE, REMOVE, UPDATE } from './actions';

const goalsReducer = (state = {}, action: any) => {
	switch (action.type) {
		case SAVE:
			return {
				...action.payload
			};

		case UPDATE:
			return {
				...state,
				...action.payload
			};

		case REMOVE:
			return {
				...action.payload
			};

		default:
			return state;
	}
}

export default goalsReducer;