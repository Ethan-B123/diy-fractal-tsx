import React, { ChangeEvent } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { AppState } from "../../Store/store";
import {
  FractalPointsState,
  FractalPointActionTypes,
  GCO_Value
} from "../../Store/FractalPoints/Types";
import {
  addPoint,
  editPoint,
  removePoint,
  setGCO,
  setIterDelay
} from "../../Store/FractalPoints/actions";
import { FractalPoint } from "../../FractalCanvas/Types";
import "./IndexItem.css";
import "./Index.css";
import { FractalPointIndexItem } from "./FractalPointIndexItem";

interface FractalPointIndexProps {
  fractalPoints: FractalPointsState;
  addFractalPoint: () => void;
  editFractalPoint: (point: FractalPoint) => FractalPointActionTypes;
  removeFractalPoint: (point: FractalPoint) => FractalPointActionTypes;
  setGCO: (newGCO: GCO_Value) => FractalPointActionTypes;
  setIterDelay: (newDelay: number) => FractalPointActionTypes;
}

const onTypeChange = (props: FractalPointIndexProps) => (
  e: ChangeEvent<HTMLSelectElement>
) => {
  const val: GCO_Value = e.currentTarget.value as
    | "source-over"
    | "destination-over";
  props.setGCO(val);
};

const FractalPointIndex: React.FC<FractalPointIndexProps> = (
  props: FractalPointIndexProps
) => {
  return (
    <div>
      <div className="index-nav">
        <p>FractalPoints</p>
        <button onClick={props.addFractalPoint}>Add</button>
        <button onClick={() => alert("not working yet")}>Randomize</button>
        <select
          onChange={onTypeChange(props)}
          value={props.fractalPoints.globalCompositeOperation}
        >
          <option value="source-over">new over</option>
          <option value="destination-over">new under</option>
        </select>
      </div>
      {props.fractalPoints.points.map(point => (
        <FractalPointIndexItem
          key={point.id}
          point={point}
          editPoint={props.editFractalPoint}
          removePoint={props.removeFractalPoint}
        />
      ))}
    </div>
  );
};

const MSTP = (state: AppState) => ({
  fractalPoints: state.fractalPoints
});

const MDTP = (dispatch: Dispatch) => {
  const defaultFractalPoint: FractalPoint = {
    x: 175,
    y: 175,
    w: 350,
    h: 350,
    id: -1,
    iters: 5
  };
  return {
    addFractalPoint: () => dispatch(addPoint(defaultFractalPoint)),
    editFractalPoint: (point: FractalPoint) => dispatch(editPoint(point)),
    removeFractalPoint: (point: FractalPoint) => dispatch(removePoint(point)),
    setGCO: (newGCO: GCO_Value) => dispatch(setGCO(newGCO)),
    setIterDelay: (newDelay: number) => dispatch(setIterDelay(newDelay))
  };
};

const connected = connect(
  MSTP,
  MDTP
)(FractalPointIndex);

export default connected;
