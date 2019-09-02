// import { useState, useRef, useEffect } from "react";
import { FractalPoint, SourcePoint } from "./Types";
import { loadImgPromise } from "../Helpers";
import { AppState } from "../Store/store";

class FractalCanvas {
  // private fractalBorder = "#F0F";
  private fractalPoints: FractalPoint[] = [];
  private myImg = new Image();
  private updateId = -1;
  constructor(
    private fCanvas: HTMLCanvasElement,
    private sCanvas: HTMLCanvasElement
  ) {}

  receiveUpdates(store: AppState) {
    const ctx = this.sCanvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, this.sCanvas.width, this.sCanvas.height);
    store.sourcePoints.points.forEach(point => {
      this.drawSourcePoint(ctx, point);
    });
    if (this.updateId !== store.fractalPoints.updateId) {
      this.fractalPoints = store.fractalPoints.points;
      this.printFractal(store.fractalPoints.updateId);
      // debugger;
    }
  }

  private drawSourcePoint(ctx: CanvasRenderingContext2D, point: SourcePoint) {
    ctx.save();
    ctx.translate(point.x, point.y);
    ctx.fillStyle = point.color;
    if (point.type === "Circle") {
      ctx.beginPath();
      ctx.ellipse(0, 0, point.w / 2, point.h / 2, 0, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
    } else {
      ctx.fillRect(-point.w / 2, -point.h / 2, point.w, point.h);
    }
    ctx.restore();
  }

  private async printFractal(thisUpdateId: number) {
    this.updateId = thisUpdateId;
    if (
      this.sCanvas.width !== this.fCanvas.width ||
      this.sCanvas.height !== this.fCanvas.height
    )
      return false;
    const ctx = this.fCanvas.getContext("2d");
    if (ctx === null) return false;
    ctx.clearRect(0,0,this.fCanvas.width,this.fCanvas.height)
    let fractalPointsCopy = JSON.parse(
      JSON.stringify(this.fractalPoints)
    ) as FractalPoint[];
    this.myImg = await loadImgPromise(this.myImg, this.sCanvas.toDataURL());
    if (this.updateId !== thisUpdateId) return false;
    ctx.drawImage(this.myImg, 0, 0, this.fCanvas.width, this.fCanvas.height);
    // ctx.globalCompositeOperation = "destination-over";
    // ctx.globalCompositeOperation = "difference";
    while (fractalPointsCopy.length) {
      this.myImg = await loadImgPromise(this.myImg, this.fCanvas.toDataURL());
      if (this.updateId !== thisUpdateId) return false;
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
