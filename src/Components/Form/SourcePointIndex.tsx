import React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { AppState } from "../../Store/store";
import {
  SourcePointsState,
  SourcePointActionTypes
} from "../../Store/SourcePoints/Types";
import { addPoint, editPoint, removePoint } from "../../Store/SourcePoints/Actions";
import { SourcePoint } from "../../FractalCanvas/Types";
import { SourcePointIndexItem } from "./SourcePointIndexItem";
import "./IndexItem.css";
import "./Index.css";

interface SourcePointIndexProps {
  sourcePoints: SourcePointsState;
  addSourcePoint: () => void;
  editSourcePoint: (point: SourcePoint) => SourcePointActionTypes;
  removeSourcePoint: (point: SourcePoint) => SourcePointActionTypes;
}

const SourcePointIndex: React.FC<SourcePointIndexProps> = (
  props: SourcePointIndexProps
) => {
  // if (!props.sourcePoints) return <></>;
  // if (!props.addSourcePoint) return <></>;
  // if (!props.editSourcePoint) return <></>;
  return (
    <div>
      <div className="index-nav">
        <p>source points</p>
        <button onClick={props.addSourcePoint}>Add</button>
        <button onClick={() => alert("not working yet")}>Randomize</button>
      </div>
      {props.sourcePoints.points.map(point => (
        <SourcePointIndexItem
          key={point.id}
          point={point}
          editPoint={props.editSourcePoint}
          removePoint={props.removeSourcePoint}
        />
      ))}
    </div>
  );
};

const MSTP = (state: AppState) => ({
  sourcePoints: state.sourcePoints
});

const MDTP = (dispatch: Dispatch) => {
  const defaultSourcePoint: SourcePoint = {
    type: "Box",
    color: "#ffffff",
    x: 350,
    y: 350,
    w: 30,
    h: 30,
    id: -1
  };
  return {
    addSourcePoint: () => dispatch(addPoint(defaultSourcePoint)),
    editSourcePoint: (point: SourcePoint) => dispatch(editPoint(point)),
    removeSourcePoint: (point: SourcePoint) => dispatch(removePoint(point)),
  };
};

const connected = connect(
  MSTP,
  MDTP
)(SourcePointIndex);

export default connected;
