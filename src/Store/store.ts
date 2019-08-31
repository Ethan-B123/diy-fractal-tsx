import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import { rootReducer } from "./rootReducer";
import makePreloadedState from "./PreloadedState";
import { AppState } from "./rootReducer"

export default () => {
  const state = makePreloadedState()
  const store = createStore(
    rootReducer,
    makePreloadedState(),
    applyMiddleware(logger)
    );
    debugger
  return store;
};

export type AppState = AppState