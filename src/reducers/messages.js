import * as types from '../constants/ActionTypes';

export const messages = (state = [], action) => {
	switch (action.type) {
		case types.ADD_MESSAGE:
			return state.concat([
				{
					message: action.message,
					author: action.author,
					id: action.id
				}
			])
		default:
			return state;
	}
}