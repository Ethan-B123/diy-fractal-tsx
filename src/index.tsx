import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// import FractalCanvas from "./FractalCanvas/FractalCanvas";
import createStore from "./Store/store";
import { addPoint, editPoint } from "./Store/FractalPoints/actions";
import * as SourcePointActions from "./Store/SourcePoints/Actions";
import { FractalPoint, SourcePoint } from "./FractalCanvas/Types";
import { Provider } from "react-redux";

document.addEventListener("DOMContentLoaded", () => {
  // const HTMLFractalCanvas = document.getElementById(
  //   "fractal-canvas"
  // ) as HTMLCanvasElement;
  const store = createStore();
  function addThing() {
    store.dispatch(addPoint(makeFP()));
  }
  function editThing(id: number, newVals: number) {
    const state = store.getState();
    const fractalPoints = state.fractalPoints;
    for (let i = 0; i < fractalPoints.points.length; i++) {
      if (fractalPoints.points[i].id === id) {
        const pointCopy = JSON.parse(
          JSON.stringify(fractalPoints.points[i])
        ) as FractalPoint;
        pointCopy.x = newVals;
        pointCopy.y = newVals;
        return store.dispatch(editPoint(pointCopy));
      }
    }
    store.dispatch(editPoint(makeFP()));
  }
  function addSource() {
    store.dispatch(SourcePointActions.addPoint(makeSP()));
  }
  function editSource(id: number, newVals: number) {
    const state = store.getState();
    const sourcePoints = state.sourcePoints;
    for (let i = 0; i < sourcePoints.points.length; i++) {
      if (sourcePoints.points[i].id === id) {
        const pointCopy = JSON.parse(
          JSON.stringify(sourcePoints.points[i])
        ) as SourcePoint;
        pointCopy.x = newVals;
        pointCopy.y = newVals;
        return store.dispatch(SourcePointActions.editPoint(pointCopy));
      }
    }
    // store.dispatch(editPoint(makeFP()));
  }
  //@ts-ignore
  window.addThing = addThing;
  //@ts-ignore
  window.editThing = editThing;
  //@ts-ignore
  window.addSource = addSource;
  //@ts-ignore
  window.editSource = editSource;
  // const fractalCanvas = new FractalCanvas(HTMLFractalCanvas);

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("react-root")
  );
});

function makeFP(): FractalPoint {
  return {
    x: 0,
    y: 0,
    w: 0,
    h: 0,
    iters: 0,
    id: -1
  };
}

function makeSP(): SourcePoint {
  return {
    type: "Box",
    x: 0,
    y: 0,
    w: 0,
    h: 0,
    color: "#eee",
    id: -1
  };
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
