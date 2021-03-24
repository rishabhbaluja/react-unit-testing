import postReducer from "./posts/reducer";
import { combineReducers } from "redux";

export default combineReducers({
  posts: postReducer,
});
