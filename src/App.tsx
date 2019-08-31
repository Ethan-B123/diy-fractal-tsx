import React from "react";
import "./App.css";
import { AppState } from "./Store/store";
import { FractalPointsState } from "./Store/FractalPoints/Types";
import { connect } from "react-redux";

interface AppProps {
  fractalPoints?: FractalPointsState;
}

const App: React.FC<AppProps> = props => {
  console.log(props);
  return (
    <div className="App">
      <p>I am the react root</p>
    </div>
  );
};

const mstp = (store: AppState) => ({
  fractalPoints: store.fractalPoints
});

const connected = connect(
  mstp,
  null
)(App);

export default connected
