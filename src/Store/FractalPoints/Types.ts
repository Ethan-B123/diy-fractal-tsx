import { FractalPoint } from "../../FractalCanvas/Types";

export const ADD_FRACTAL_POINT = "UC_ADD_FRACTAL_POINT";
export const EDIT_FRACTAL_POINT = "UC_EDIT_FRACTAL_POINT";
export const SET_GCO = "SET_GCO";
export const REMOVE_FRACTAL_POINT = "REMOVE_FRACTAL_POINT";
export const SET_ITER_DELAY = "SET_ITER_DELAY";

export interface AddFractalPointAction {
  type: typeof ADD_FRACTAL_POINT;
  point: FractalPoint;
}

export interface EditFractalPointAction {
  type: typeof EDIT_FRACTAL_POINT;
  point: FractalPoint;
}

export type GCO_Value = "source-over" | "destination-over";

export interface SetGCOFractalPointAction {
  type: typeof SET_GCO;
  newGCO: GCO_Value;
}

export interface SetIterDelayAction {
  type: typeof SET_ITER_DELAY;
  newDelay: number;
}

export interface RemoveFractalPointAction {
  type: typeof REMOVE_FRACTAL_POINT;
  point: FractalPoint;
}

export interface FractalPointsState {
  points: Array<FractalPoint>;
  maxId: number;
  updateId: number;
  globalCompositeOperation: GCO_Value;
  iterationDelay: number;
}

export type FractalPointActionTypes =
  | AddFractalPointAction
  | EditFractalPointAction
  | RemoveFractalPointAction
  | SetGCOFractalPointAction
  | SetIterDelayAction;
