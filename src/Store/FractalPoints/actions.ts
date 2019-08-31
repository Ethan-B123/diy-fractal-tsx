import { ADD_FRACTAL_POINT, FractalPointActionTypes } from "./Types";
import { FractalPoint } from "../../FractalCanvas/Types";

export function addPoint(point: FractalPoint): FractalPointActionTypes {
  return {
    type: ADD_FRACTAL_POINT,
    point
  };
}
