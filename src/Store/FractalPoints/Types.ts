import { FractalPoint } from "../../FractalCanvas/Types";

export const ADD_FRACTAL_POINT = "UC_ADD_FRACTAL_POINT";
export const EDIT_FRACTAL_POINT = "UC_EDIT_FRACTAL_POINT";

export interface AddFractalPointAction {
  type: typeof ADD_FRACTAL_POINT;
  point: FractalPoint;
}

export interface EditFractalPointAction {
  type: typeof EDIT_FRACTAL_POINT;
  point: FractalPoint;
}

export interface FractalPointsState {
  points: Array<FractalPoint>;
  maxId: number;
}

export type FractalPointActionTypes = AddFractalPointAction | EditFractalPointAction;
