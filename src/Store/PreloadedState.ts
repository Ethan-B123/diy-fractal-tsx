import { AppState } from "./rootReducer";

export default (): AppState => ({
  fractalPoints: [{ x: 0, y: 0, w: 100, h: 100, iters: 10 }]
});
