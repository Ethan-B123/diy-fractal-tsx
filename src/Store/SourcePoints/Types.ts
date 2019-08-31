import { SourcePoint } from "../../FractalCanvas/Types";

export const ADD_SOURCE_POINT = "UC_ADD_SOURCE_POINT";
export const EDIT_SOURCE_POINT = "UC_EDIT_SOURCE_POINT";

export interface AddSourcePointAction {
  type: typeof ADD_SOURCE_POINT;
  point: SourcePoint;
}

export interface EditSourcePointAction {
  type: typeof EDIT_SOURCE_POINT;
  point: SourcePoint;
}

export interface SourcePointsState {
  points: Array<SourcePoint>;
  maxId: number;
}

export type SourcePointActionTypes = AddSourcePointAction | EditSourcePointAction;
