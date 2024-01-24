import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  pageState: "home",
};

function createReducer(pageInitialState) {
  return function reducer(state = pageInitialState, action) {
    switch (action.type) {
      default:
        return state;
    }
  };
}

const store = configureStore({
  reducer: {
    pageState: createReducer(initialState.pageState),
  },
  preloadedState: initialState,
});

export default store;
