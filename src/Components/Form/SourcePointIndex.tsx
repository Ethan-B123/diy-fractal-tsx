import React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { AppState } from "../../Store/store";
import {
  SourcePointsState,
  SourcePointActionTypes
} from "../../Store/SourcePoints/Types";
import { addPoint, editPoint } from "../../Store/SourcePoints/Actions";
import { SourcePoint } from "../../FractalCanvas/Types";
import { SourcePointIndexItem } from "./SourcePointIndexItem";
import "./IndexItem.css"

interface SourcePointIndexProps {
  sourcePoints: SourcePointsState;
  addSourcePoint: () => void;
  editSourcePoint: (point: SourcePoint) => SourcePointActionTypes;
}

const SourcePointIndex: React.FC<SourcePointIndexProps> = (
  props: SourcePointIndexProps
) => {
  // if (!props.sourcePoints) return <></>;
  // if (!props.addSourcePoint) return <></>;
  // if (!props.editSourcePoint) return <></>;
  return (
    <div>
      <button onClick={props.addSourcePoint}>Add</button>
      {props.sourcePoints.points.map(point => (
        <SourcePointIndexItem
          key={point.id}
          point={point}
          editPoint={props.editSourcePoint}
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
    type: "Circle",
    color: "#fff",
    x: 0,
    y: 0,
    w: 0,
    h: 0,
    id: -1
  };
  return {
    addSourcePoint: () => dispatch(addPoint(defaultSourcePoint)),
    editSourcePoint: (point: SourcePoint) => dispatch(editPoint(point))
  };
};

const connected = connect(
  MSTP,
  MDTP
)(SourcePointIndex);

export default connected;
