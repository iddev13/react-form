const ADD_POST_POSTS = 'ADD_POST_POSTS';
const POST_SUBMIT_SUCCESS = 'POST_SUBMIT_SUCCESS';

let initialState = {
	posts: [
		{ id: 1, message: 'qqq' },
		{ id: 2, message: 'www' },
		{ id: 3, message: 'eee' },
		{ id: 4, message: 'rrr' },
		{ id: 5, message: 'ttt' },
	]
}

const postReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST_POSTS:
			console.log(action.values);
			let newPost = { id: state.posts.length + 1, message: action.values }
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