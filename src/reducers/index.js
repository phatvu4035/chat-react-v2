import { combineReducers } from 'redux';
import {messages} from './messages';
import {users} from './users';
import {userChat} from './userChat';

const chatReducer = combineReducers({
	messages,
	users,
	userChat
});


export default chatReducer;