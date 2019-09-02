import {
  FractalPointActionTypes,
  ADD_FRACTAL_POINT,
  EDIT_FRACTAL_POINT,
  REMOVE_FRACTAL_POINT,
  FractalPointsState
} from "./Types";
import {
  ADD_SOURCE_POINT,
  EDIT_SOURCE_POINT,
  REMOVE_SOURCE_POINT
} from "../SourcePoints/Types";
import { PointActionType } from "../Types";
import { FractalPoint } from "../../FractalCanvas/Types";

const initialState: FractalPointsState = {
  points: [],
  maxId: 0,
  updateId: 0
};

export function FractalPointsReducer(
  state: FractalPointsState = initialState,
  action: PointActionType
): FractalPointsState {
  switch (action.type) {
    case ADD_FRACTAL_POINT:
      const newPoint0 = JSON.parse(
        JSON.stringify(action.point)
      ) as FractalPoint;
      const FPsCopy0 = JSON.parse(JSON.stringify(state)) as FractalPointsState;
      FPsCopy0.updateId++;
      newPoint0.id = ++FPsCopy0.maxId;
      FPsCopy0.points.push(newPoint0);
      return FPsCopy0;
    case EDIT_FRACTAL_POINT:
      const newPoint1 = JSON.parse(
        JSON.stringify(action.point)
      ) as FractalPoint;
      const FPsCopy1 = JSON.parse(JSON.stringify(state)) as FractalPointsState;
      FPsCopy1.updateId++;
      for (let i = 0; i < FPsCopy1.points.length; i++) {
        if (FPsCopy1.points[i].id === newPoint1.id) {
          FPsCopy1.points[i] = newPoint1;
          break;
        }
      }
      return FPsCopy1;
    case REMOVE_FRACTAL_POINT:
      const removePoint5 = JSON.parse(
        JSON.stringify(action.point)
      ) as FractalPoint;
      const FPsCopy5 = JSON.parse(JSON.stringify(state)) as FractalPointsState;
      for (let i = 0; i < FPsCopy5.points.length; i++) {
        if (FPsCopy5.points[i].id === removePoint5.id) {
          FPsCopy5.points.splice(i, 1);
          break;
        }
      }
      FPsCopy5.updateId++;
      return FPsCopy5;
    case ADD_SOURCE_POINT:
      const FPsCopy2 = JSON.parse(JSON.stringify(state)) as FractalPointsState;
      FPsCopy2.updateId++;
      return FPsCopy2;
    case EDIT_SOURCE_POINT:
      const FPsCopy3 = JSON.parse(JSON.stringify(state)) as FractalPointsState;
      FPsCopy3.updateId++;
      return FPsCopy3;
    case REMOVE_SOURCE_POINT:
      const FPsCopy4 = JSON.parse(JSON.stringify(state)) as FractalPointsState;
      FPsCopy4.updateId++;
      return FPsCopy4;
    default:
      return state;
  }
}
