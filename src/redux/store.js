import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import homeReducer from "./reducers/home-reducer";
import navReducer from "./reducers/nav-reducer";
import { reducer as formReducer } from 'redux-form'
import postReducer from "./reducers/post-reducer";

let reducers = combineReducers({
	form: formReducer,
	nav: navReducer,
	homePage: homeReducer,
	postPage: postReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
window.store = store;