import React, { ChangeEvent, useState } from "react";
import { FractalPoint } from "../../FractalCanvas/Types";
import { FractalPointActionTypes } from "../../Store/FractalPoints/Types";

interface FractalPointIndexItemProps {
  point: FractalPoint;
  editPoint: (point: FractalPoint) => FractalPointActionTypes;
  removePoint: (point: FractalPoint) => FractalPointActionTypes;
}

const onChangeInt = (
  props: FractalPointIndexItemProps,
  hookSetFn: React.Dispatch<React.SetStateAction<string>>,
  changeVal: "x" | "y" | "w" | "h" | "iters"
) => (e: ChangeEvent<HTMLInputElement>) => {
  const val = e.currentTarget.value;
  const copy = JSON.parse(JSON.stringify(props.point)) as FractalPoint;
  if (val === "") {
    hookSetFn(val);
  } else if (!isNaN(parseInt(val))) {
    hookSetFn(val);
    copy[changeVal] = parseInt(val);
    props.editPoint(copy);
  }
};

const onRemove = (props: FractalPointIndexItemProps) => () => {
  props.removePoint(props.point);
};

export const FractalPointIndexItem: React.FC<FractalPointIndexItemProps> = (
  props: FractalPointIndexItemProps
) => {
  const [x, set_x] = useState(props.point.x.toString());
  const [y, set_y] = useState(props.point.y.toString());
  const [w, set_w] = useState(props.point.w.toString());
  const [h, set_h] = useState(props.point.h.toString());
  const [iters, set_iters] = useState(props.point.iters.toString());
  return (
    <div className="point-index-item">
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
      <p>iters:</p>
      <input
        type="number"
        onChange={onChangeInt(props, set_iters, "iters")}
        value={iters}
      />
      <p>remove:</p>
      <button onClick={onRemove(props)}>Click to remove</button>
    </div>
  );
};
