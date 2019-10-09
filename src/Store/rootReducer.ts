import { combineReducers } from "redux";
import { FractalPointsReducer } from "./FractalPoints/Reducer";
import { SourcePointsReducer } from "./SourcePoints/Reducer";
import {SavesReducer} from "./Saves/Reducer"

export const rootReducer = combineReducers({
  fractalPoints: FractalPointsReducer,
  sourcePoints: SourcePointsReducer,
  saves: SavesReducer
});

export type AppState = ReturnType<typeof rootReducer>;
