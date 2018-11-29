let initialUsers = [
	{
		id: 0,
		name: 'Dan'
	},
	{
		id: 1,
		name: 'Tu'
	}
];

export const users = (state = [], action) => {
	state = initialUsers;
	return state;
}