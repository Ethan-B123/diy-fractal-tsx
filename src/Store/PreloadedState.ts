import { AppState } from "./rootReducer";

const normal = (): AppState => ({
  fractalPoints: {
    maxId: 3,
    updateId: 0,
    globalCompositeOperation: "destination-over",
    points: [
      // { x: 350, y: 150, w: 300, h: 300, iters: 6, id: 0 },
      // { x: 550, y: 350, w: 300, h: 300, iters: 2, id: 1 },
      // { x: 350, y: 550, w: 300, h: 300, iters: 6, id: 2 },

      // { x: 350, y: 175, w: 350, h: 350, iters: 6, id: 0 },
      // { x: 525, y: 350, w: 350, h: 350, iters: 2, id: 1 },
      // { x: 350, y: 525, w: 350, h: 350, iters: 6, id: 2 },

      { x: 250, y: 350, w: 300, h: 300, iters: 4, id: 0 },
      { x: 350, y: 200, w: 300, h: 300, iters: 4, id: 1 },
      { x: 450, y: 350, w: 300, h: 300, iters: 4, id: 2 },
      { x: 350, y: 500, w: 300, h: 300, iters: 4, id: 3 }
    ],
    forceFullPlay: true,
    iterationDelay: 0
  },
  sourcePoints: {
    maxId: 6,
    points: [
      { type: "Box", x: 100, y: 350, w: 100, h: 100, color: "#00ffff", id: 1 },
      { type: "Box", x: 200, y: 250, w: 100, h: 100, color: "#ff0000", id: 3 },
      {
        type: "Circle",
        x: 200,
        y: 350,
        w: 100,
        h: 100,
        color: "#0000ff",
        id: 4
      },
      { type: "Box", x: 200, y: 450, w: 100, h: 100, color: "#00ff00", id: 5 },
      // { type: "Circle", x: 350, y: 350, w: 75, h: 75, color: "#ffffff", id: 6 },
      { type: "Box", x: 275, y: 350, w: 50, h: 100, color: "#ffffff", id: 6 }
    ]
  }
});

const other = (): AppState => ({
  fractalPoints: {
    forceFullPlay: true,
    globalCompositeOperation: "source-over",
    iterationDelay: 0,
    maxId: 3,
    updateId: 0,
    points: [
      { h: 300, id: 0, iters: 4, w: 300, x: 250, y: 350 },
      { h: 300, id: 1, iters: 1, w: 300, x: 350, y: 200 },
      { h: 300, id: 2, iters: 4, w: 300, x: 450, y: 350 },
      { h: 300, id: 3, iters: 4, w: 300, x: 350, y: 500 }
    ],
  },
  sourcePoints: {
    maxId: 7,
    points: [
      { color: "#285288", h: 210, id: 4, type: "Circle", w: 210, x: 350, y: 150 },
      { color: "#f4d297", h: 150, id: 6, type: "Circle", w: 150, x: 350, y: 125 },
      { color: "#fffffe", h: 60, id: 7, type: "Circle", w: 60, x: 350, y: 350 }
    ]
  }
})

export default other;
