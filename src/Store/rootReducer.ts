import { combineReducers } from "redux";
import { FractalPointsReducer } from "./FractalPoints/Reducer"

export const rootReducer = combineReducers({
  fractalPoints: FractalPointsReducer
})

export type AppState = ReturnType<typeof rootReducer>

