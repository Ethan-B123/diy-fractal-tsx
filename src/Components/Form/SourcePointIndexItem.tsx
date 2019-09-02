import React, { ChangeEvent } from "react";
import { SourcePoint } from "../../FractalCanvas/Types";
import { SourcePointActionTypes } from "../../Store/SourcePoints/Types";

interface SourcePointIndexItemProps {
  point: SourcePoint;
  editPoint: (point: SourcePoint) => SourcePointActionTypes;
  removePoint: (point: SourcePoint) => SourcePointActionTypes;
}

const onChangeInt = (
  props: SourcePointIndexItemProps,
  changeVal: "x" | "y" | "w" | "h"
) => (e: ChangeEvent<HTMLInputElement>) => {
  const val = e.currentTarget.value;
  const copy = JSON.parse(JSON.stringify(props.point)) as SourcePoint;
  if (val === "") {
    copy[changeVal] = 0;
    props.editPoint(copy);
  } else if (!isNaN(parseInt(val))) {
    copy[changeVal] = parseInt(val);
    props.editPoint(copy);
  }
};

const onColorChange = (props: SourcePointIndexItemProps) => (
  e: ChangeEvent<HTMLInputElement>
) => {
  const val = e.currentTarget.value;
  const copy = JSON.parse(JSON.stringify(props.point)) as SourcePoint;
  copy.color = val;
  props.editPoint(copy);
};

const onTypeChange = (props: SourcePointIndexItemProps) => (
  e: ChangeEvent<HTMLSelectElement>
) => {
  const val: "Box" | "Circle" = e.currentTarget.value as "Box" | "Circle";
  const copy = JSON.parse(JSON.stringify(props.point)) as SourcePoint;
  copy.type = val;
  props.editPoint(copy);
};

const onRemove = (props: SourcePointIndexItemProps) => () => {
  props.removePoint(props.point);
};

export const SourcePointIndexItem: React.FC<SourcePointIndexItemProps> = (
  props: SourcePointIndexItemProps
) => {
  return (
    <div className="point-index-item">
      <p>shape:</p>
      <select onChange={onTypeChange(props)} value={props.point.type}>
        <option value="Circle">Circle</option>
        <option value="Box">Box</option>
      </select>
      <p>color:</p>
      <input
        type="color"
        onChange={onColorChange(props)}
        value={props.point.color}
      />
      <p>remove:</p>
      <button onClick={onRemove(props)}>Click to remove</button>
      <p>x:</p>
      <input
        type="number"
        onChange={onChangeInt(props, "x")}
        value={props.point.x}
      />
      <p>y:</p>
      <input
        type="number"
        onChange={onChangeInt(props, "y")}
        value={props.point.y}
      />
      <p>w:</p>
      <input
        type="number"
        onChange={onChangeInt(props, "w")}
        value={props.point.w}
      />
      <p>h:</p>
      <input
        type="number"
        onChange={onChangeInt(props, "h")}
        value={props.point.h}
      />
    </div>
  );
};
