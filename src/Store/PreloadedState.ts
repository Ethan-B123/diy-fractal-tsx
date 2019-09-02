import { AppState } from "./rootReducer";

export default (): AppState => ({
  fractalPoints: {
    maxId: 3,
    updateId: 0,
    points: [
      { x: 350, y: 150, w: 300, h: 300, iters: 7, id: 0 },
      { x: 550, y: 350, w: 300, h: 300, iters: 7, id: 1 },
      { x: 350, y: 550, w: 300, h: 300, iters: 7, id: 2 },
      { x: 150, y: 350, w: 300, h: 300, iters: 7, id: 3 }
    ]
  },
  sourcePoints: {
    maxId: 5,
    points: [
      { type: "Circle", x: 100, y: 100, w: 200, h: 200, color: "#ff00ff", id: 0 },
      { type: "Box", x: 100, y: 200, w: 100, h: 100, color: "#00ffff", id: 1 },
      { type: "Circle", x: 100, y: 300, w: 100, h: 100, color: "#ffff00", id: 2 },
      { type: "Box", x: 200, y: 100, w: 100, h: 100, color: "#ff0000", id: 3 },
      { type: "Circle", x: 200, y: 200, w: 100, h: 100, color: "#0000ff", id: 4 },
      { type: "Box", x: 200, y: 300, w: 100, h: 100, color: "#00ff00", id: 5 },
    ]
  }
});
