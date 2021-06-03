const ADD_HOME_LOGIN = 'ADD_HOME';

let initialState = {
	homePosts: [
		{ id: 1, message: 'qqq' },
		{ id: 2, message: 'www' },
		{ id: 3, message: 'eee' },
		{ id: 4, message: 'rrr' },
		{ id: 5, message: 'ttt' },
	]
}

const homeReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_HOME_LOGIN:
			let newHomePost = { id: state.homePosts.length + 1, message: action.values }
			return {
				...state,
				homePosts: [...state.homePosts, newHomePost]
			}
		default:
			return state;
	}
}

export const addHomeLogin = (values) => {
	return {
		type: ADD_HOME_LOGIN,
		values
	}
}


export default homeReducer;