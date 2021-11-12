import { createStore } from "redux";

import { REF, PROPS, SHOW } from "./actionTypes";

const initialState = {
  ref: {
    current: null
  },
  props: null
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOW:
      if (state.ref.current) {
        state.ref.current.show(payload);
      }
      return state;
    case PROPS:
      return { ...state, props: payload };
    case REF:
      return { ...state, ref: payload };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
