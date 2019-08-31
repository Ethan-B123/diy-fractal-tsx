export interface FractalPoint {
  x: number;
  y: number;
  w: number;
  h: number;
  iters: number;
  id: number;
}

export interface SourcePoint {
  x: number;
  y: number;
  w: number;
  h: number;
  color: string;
  type: "Circle" | "Box";
  id: number;
}
