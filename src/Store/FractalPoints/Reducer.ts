import { FractalPointActionTypes, ADD_FRACTAL_POINT, FractalPointsState } from "./Types";
import { FractalPoint } from "../../FractalCanvas/Types";

const initialState: FractalPoint[] = [];

export function FractalPointsReducer(
  state: FractalPointsState = initialState,
  action: FractalPointActionTypes
): FractalPointsState {
  switch (action.type) {
    case ADD_FRACTAL_POINT:
      const copy = <FractalPoint[]>JSON.parse(JSON.stringify(state));
      copy.push(action.point);
      return copy;
    default:
      return state;
  }
}
