import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import { rootReducer } from "./rootReducer";
import makePreloadedState from "./PreloadedState";
import { AppState } from "./rootReducer";

export default () => {
  const store = createStore(
    rootReducer,
    makePreloadedState(),
    applyMiddleware(logger)
  );
  return store;
};

export type AppState = AppState;
