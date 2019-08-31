import { FractalPoint } from "../../FractalCanvas/Types";

export const ADD_FRACTAL_POINT = "UC_ADD_FRACTAL_POINT";

export interface AddFractalPointAction {
  type: typeof ADD_FRACTAL_POINT;
  point: FractalPoint;
}

export type FractalPointActionTypes = AddFractalPointAction;

export type FractalPointsState = Array<FractalPoint>