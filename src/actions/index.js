import * as types from '../constants/ActionTypes';

let nextMessageId = 0;


export const addMess = (message, author) => {
	return {
		type: types.ADD_MESSAGE,
		id: nextMessageId++,
		message,
		author
	}
};

export const selectUser = (id, name) => {
	return {
		type: types.USER_SELECT,
		id,
		name
	}
};
