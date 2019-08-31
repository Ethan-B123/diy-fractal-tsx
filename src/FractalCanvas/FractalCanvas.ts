// import { useState, useRef, useEffect } from "react";
import { FractalPoint } from "./Types";
import { loadImgPromise } from "../Helpers"

class FractalCanvas {
  public fractalBorder = "#F0F";
  public fractalPoints: FractalPoint[] = [];
  private myImg = new Image();
  constructor(public canvas: HTMLCanvasElement) {
    this.canvas = canvas;
  }

  async print(srcCanvas: HTMLCanvasElement) {
    if (
      srcCanvas.width !== this.canvas.width ||
      srcCanvas.height !== this.canvas.height
    )
      return false;
    const ctx = this.canvas.getContext("2d");
    if (ctx === null) return false;
    let fractalPointsCopy = <FractalPoint[]>(
      JSON.parse(JSON.stringify(this.fractalPoints))
    );
    this.myImg = await loadImgPromise(this.myImg, srcCanvas.toDataURL());
    ctx.drawImage(this.myImg, 0, 0, this.canvas.width, this.canvas.height);
    // ctx.globalCompositeOperation = "destination-over";
    // ctx.globalCompositeOperation = "difference";
    while (fractalPointsCopy.length) {
      console.log("iter");
      this.myImg = await loadImgPromise(this.myImg, this.canvas.toDataURL());
      for (let i = 0; i < fractalPointsCopy.length; i++) {
        const fractalPoint = fractalPointsCopy[i];
        const x = fractalPoint.x - fractalPoint.w / 2;
        const y = fractalPoint.y - fractalPoint.h / 2;
        ctx.drawImage(this.myImg, x, y, fractalPoint.w, fractalPoint.h);
        fractalPoint.iters--;
      }
      fractalPointsCopy = fractalPointsCopy.filter(
        (fp: FractalPoint) => fp.iters > 0
      );
    }
    return true;
  }

  addFractalPoint(fp: FractalPoint) {
    this.fractalPoints.push(fp);
  }
}
export default FractalCanvas;
