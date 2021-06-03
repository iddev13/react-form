

let initialState = {
	headerNav: [
		{ id: 1, address: '/', page: 'home' },
		{ id: 3, address: '/post', page: 'post' },
		{ id: 4, address: '/simple', page: 'simple' },
		{ id: 5, address: '/dialog', page: 'dialog' },
		{ id: 6, address: '/message', page: 'message' },
		{ id: 7, address: '/register', page: 'register' },
		{ id: 8, address: '/login', page: 'login' },
	]
}

const navReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
}

export default navReducer;