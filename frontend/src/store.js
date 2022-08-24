import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productsReducer,
  productDetailsReducer,
} from "./reducers/productReducer.js";
import { cartReducer } from "./reducers/cartReducer.js";

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
//reducers
const reducer = combineReducers({
  productList: productsReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
});
//Global initial state object
const initialState = {
  cart: { cartItems: cartItemsFromStorage },
};
//thunk middleware for extended capabilities to handle state changes
const middleware = [thunk];

//create store object
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

/*
We'll need to integrate the store object with our app
To do that, import store object in index.js and use react-redux to integrate
*/

export default store;