import React, { ChangeEvent, useState } from "react";
import { SourcePoint } from "../../FractalCanvas/Types";
import { SourcePointActionTypes } from "../../Store/SourcePoints/Types";

interface SourcePointIndexItemProps {
  point: SourcePoint;
  editPoint: (point: SourcePoint) => SourcePointActionTypes;
  removePoint: (point: SourcePoint) => SourcePointActionTypes;
}

const onChangeInt = (
  props: SourcePointIndexItemProps,
  hookSetFn: React.Dispatch<React.SetStateAction<string>>,
  changeVal: "x" | "y" | "w" | "h"
) => (e: ChangeEvent<HTMLInputElement>) => {
  const val = e.currentTarget.value;
  const copy = JSON.parse(JSON.stringify(props.point)) as SourcePoint;
  if (val === "") {
    hookSetFn(val);
  } else if (!isNaN(parseInt(val))) {
    hookSetFn(val);
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
  const [x, set_x] = useState(props.point.x.toString());
  const [y, set_y] = useState(props.point.y.toString());
  const [w, set_w] = useState(props.point.w.toString());
  const [h, set_h] = useState(props.point.h.toString());

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
        onChange={onChangeInt(props, set_x, "x")}
        value={x}
      />
      <p>y:</p>
      <input
        type="number"
        onChange={onChangeInt(props, set_y, "y")}
        value={y}
      />
      <p>w:</p>
      <input
        type="number"
        onChange={onChangeInt(props, set_w, "w")}
        value={w}
      />
      <p>h:</p>
      <input
        type="number"
        onChange={onChangeInt(props, set_h, "h")}
        value={h}
      />
    </div>
  );
};
