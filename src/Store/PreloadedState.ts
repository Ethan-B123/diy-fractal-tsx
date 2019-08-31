import { AppState } from "./rootReducer";

export default (): AppState => ({
  fractalPoints: {
    maxId: 0,
    points: [{ x: 50, y: 50, w: 100, h: 100, iters: 10, id: 0 }]
  },
  sourcePoints: {
    maxId: 0,
    points: [
      { type: "Circle", x: 0, y: 0, w: 100, h: 100, color: "#fff", id: 0 }
    ]
  }
});
