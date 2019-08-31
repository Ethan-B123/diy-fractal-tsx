import { AppState } from "./rootReducer";

export default (): AppState => ({
  fractalPoints: {
    maxId: 0,
    points: [{ x: 0, y: 0, w: 100, h: 100, iters: 10, id: 0 }]
  }
});
