import {
  ADD_FRACTAL_POINT,
  EDIT_FRACTAL_POINT,
  REMOVE_FRACTAL_POINT,
  FractalPointActionTypes
} from "./Types";
import { FractalPoint } from "../../FractalCanvas/Types";

export function addPoint(point: FractalPoint): FractalPointActionTypes {
  return {
    type: ADD_FRACTAL_POINT,
    point
  };
}

export function editPoint(point: FractalPoint): FractalPointActionTypes {
  return {
    type: EDIT_FRACTAL_POINT,
    point
  };
}

export function removePoint(point: FractalPoint): FractalPointActionTypes {
  return {
    type: REMOVE_FRACTAL_POINT,
    point
  };
}
