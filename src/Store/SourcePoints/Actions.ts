import {
  ADD_SOURCE_POINT,
  EDIT_SOURCE_POINT,
  REMOVE_SOURCE_POINT,
  SourcePointActionTypes
} from "./Types";
import { SourcePoint } from "../../FractalCanvas/Types";

export function addPoint(point: SourcePoint): SourcePointActionTypes {
  return {
    type: ADD_SOURCE_POINT,
    point
  };
}

export function editPoint(point: SourcePoint): SourcePointActionTypes {
  return {
    type: EDIT_SOURCE_POINT,
    point
  };
}

export function removePoint(point: SourcePoint): SourcePointActionTypes {
  return {
    type: REMOVE_SOURCE_POINT,
    point
  };
}
