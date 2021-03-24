import { createStore, applyMiddleware } from "redux";
import rootReducer  from "../src/reducers/index";
import { middleware } from "../src/createStore";
export const testStore = (initialState = {}) => {
  const storeWithMiddleware = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
  );
  return storeWithMiddleware;
};
