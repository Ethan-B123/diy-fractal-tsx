import { combineReducers } from "redux";
import { FractalPointsReducer } from "./FractalPoints/Reducer";
import { SourcePointsReducer } from "./SourcePoints/Reducer";

export const rootReducer = combineReducers({
  fractalPoints: FractalPointsReducer,
  sourcePoints: SourcePointsReducer
});

export type AppState = ReturnType<typeof rootReducer>;
