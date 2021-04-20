import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import photoReducer from "./PhotoStore/PhotoStore";
import postReducer from "./PostStore/PostStore";
import userReducer from "./UserStore/UserStore";

const rootReducer = combineReducers({
   users: userReducer,
   posts: postReducer,
   photos: photoReducer
});



export const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;