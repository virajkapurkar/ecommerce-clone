import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

//reducers
const reducer = combineReducers({});
//Global initial state object
const initialState = {};
//thunk middleware for extended capabilities to handle state changes
const middleware = [thunk];

//create store object
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware([...middleware]))
);

/*
We'll need to integrate the store object with our app
To do that, import store object in index.js and use react-redux to integrate
*/

export default store;
