const ADD_POST_POSTS = 'ADD_POST_POSTS';
const POST_SUBMIT_SUCCESS = 'POST_SUBMIT_SUCCESS';

let initialState = {
	posts: [
		{ id: 1, login: 'qqq', password: 'sss' },
		{ id: 2, login: 'www', password: 'ddd' },
		{ id: 3, login: 'eee', password: 'fff' },
		{ id: 4, login: 'rrr', password: 'ggg' },
		{ id: 5, login: 'ttt', password: 'hhh' },
	]
}

const postReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST_POSTS:
			console.log(action.values.login);
			let newPost = { id: state.posts.length + 1, login: action.values.login, password: action.values.password }
			return {
				...state,
				posts: [...state.posts, newPost]
			}
		default:
			return state;
	}
}

export const addPostPosts = (values) => {
	return {
		type: ADD_POST_POSTS,
		values
	}
}

export const submitSuccess = () => {
	return {
		type: POST_SUBMIT_SUCCESS
	}
}

export default postReducer;