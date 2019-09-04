import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App/App";
import * as serviceWorker from "./serviceWorker";
import FractalCanvas from "./FractalCanvas/FractalCanvas";
import createStore from "./Store/store";
import { Provider } from "react-redux";

document.addEventListener("DOMContentLoaded", () => {
  const HTMLFractalCanvas = document.getElementById(
    "fractal-canvas"
  ) as HTMLCanvasElement;
  const HTMLSourceCanvas = document.getElementById(
    "input-canvas"
  ) as HTMLCanvasElement;
  const store = createStore();
  const fractalCanvas = new FractalCanvas(HTMLFractalCanvas, HTMLSourceCanvas);

  //@ts-ignore
  window.store = store;

  fractalCanvas.receiveUpdates(store.getState());
  store.subscribe(() => {
    fractalCanvas.receiveUpdates(store.getState());
  });

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("react-root")
  );
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
