const SIMPLE_ADD_POST = 'add_post/simple/SIMPLE_ADD_POST';

let initialState = {
	simplePost: [
		{ id: 1, firstName: 'ivan', lastName: 'fedorov', email: 'ivfed@mail.com', sex: 'male', favoriteColor: 'red', rememberMe: true, message: 'some message' }
	]
}

const simpleReducer = (state = initialState, action) => {
	switch (action.type) {
		case SIMPLE_ADD_POST:
			let newSimplePost = {
				id: state.simplePost.length + 1,
				firstName: action.values.firstName,
				lastName: action.values.lastName,
				email: action.values.email,
				sex: action.values.sex,
				favoriteColor: action.values.favoriteColor,
				rememberMe: action.values.rememberMe,
				message: action.values.message
			};
			return {
				...state,
				simplePost: [...state.simplePost, newSimplePost]
			}
		default:
			return state;
	}
}

export const addSimplePost = (values) => {
	return {
		type: SIMPLE_ADD_POST,
		values
	}
}

export default simpleReducer;