import { createStore } from "redux";

const reducerFunction = (state = { basket: [] }, action) => {
  if (action.type === "add") {
    return {
      basket: [...state.basket, action.value],
    };
  }
  return state;
};
const Store = createStore(reducerFunction);

export default Store;
