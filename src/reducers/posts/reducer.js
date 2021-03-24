import { types } from "../../actions/types";
const postReducer = (state = [], action) => {
  switch (action.type) {
    case types.GET_POSTS:
      return action.payload;
    
    default:
      return state;
  }
};

export default postReducer;
