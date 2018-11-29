import * as types from '../constants/ActionTypes';

export const userChat = (state = [], action)  => {
	switch (action.type) {
		case types.USER_SELECT:
			return state.concat([
				{
					id: action.id,
					name: action.name
				}
			]);
		default:
			return state;
	}
}

