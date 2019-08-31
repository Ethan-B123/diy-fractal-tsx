import {
  FractalPointActionTypes,
  ADD_FRACTAL_POINT,
  EDIT_FRACTAL_POINT,
  FractalPointsState
} from "./Types";
import { FractalPoint } from "../../FractalCanvas/Types";

const initialState: FractalPointsState = {
  points: [],
  maxId: 0
};

export function FractalPointsReducer(
  state: FractalPointsState = initialState,
  action: FractalPointActionTypes
): FractalPointsState {
  switch (action.type) {
    case ADD_FRACTAL_POINT:
      const newPoint0 = JSON.parse(
        JSON.stringify(action.point)
      ) as FractalPoint;
      const FPsCopy0 = JSON.parse(JSON.stringify(state)) as FractalPointsState;
      newPoint0.id = ++FPsCopy0.maxId;
      FPsCopy0.points.push(newPoint0);
      return FPsCopy0;
    case EDIT_FRACTAL_POINT:
      const newPoint1 = JSON.parse(
        JSON.stringify(action.point)
      ) as FractalPoint;
      const FPsCopy1 = JSON.parse(JSON.stringify(state)) as FractalPointsState;
      for (let i = 0; i < FPsCopy1.points.length; i++) {
        if (FPsCopy1.points[i].id === newPoint1.id) {
          FPsCopy1.points[i] = newPoint1;
          break;
        }
      }
      return FPsCopy1;
    default:
      return state;
  }
}
