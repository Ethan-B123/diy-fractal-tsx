import { FractalPoint, SourcePoint } from "./Types";
import { loadImgPromise } from "../Helpers";
import { AppState } from "../Store/store";
import { GCO_Value } from "../Store/FractalPoints/Types";

class FractalCanvas {
  private fractalPoints: FractalPoint[] = [];
  private myImg = new Image();
  private updateId = -1;
  private pendingUpdate: AppState | null = null;
  private globalCompositeOperation: GCO_Value = "source-over";
  constructor(
    private fCanvas: HTMLCanvasElement,
    private sCanvas: HTMLCanvasElement
  ) {}

  receiveUpdates(store: AppState) {
    const ctx = this.sCanvas.getContext("2d");
    if (!ctx) return;
    this.globalCompositeOperation =
      store.fractalPoints.globalCompositeOperation;
    ctx.clearRect(0, 0, this.sCanvas.width, this.sCanvas.height);
    store.sourcePoints.points.forEach(point => {
      this.drawSourcePoint(ctx, point);
    });
    if (this.updateId !== store.fractalPoints.updateId) {
      this.fractalPoints = store.fractalPoints.points;
      this.printFractal(store.fractalPoints.updateId);
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
    ctx.clearRect(0, 0, this.fCanvas.width, this.fCanvas.height);
    let fractalPointsCopy = JSON.parse(
      JSON.stringify(this.fractalPoints)
    ) as FractalPoint[];
    await new Promise(res => setTimeout(res, 500));
    this.myImg = await loadImgPromise(this.myImg, this.sCanvas.toDataURL());
    if (this.updateId !== thisUpdateId) return false;
    ctx.globalCompositeOperation = this.globalCompositeOperation;
    ctx.drawImage(this.myImg, 0, 0, this.fCanvas.width, this.fCanvas.height);
    while (fractalPointsCopy.length) {
      this.myImg = await loadImgPromise(this.myImg, this.fCanvas.toDataURL());
      if (this.updateId !== thisUpdateId) return false;
      fractalPointsCopy = fractalPointsCopy.filter(
        (fp: FractalPoint) => fp.iters > 0
      );
      for (let i = 0; i < fractalPointsCopy.length; i++) {
        const fractalPoint = fractalPointsCopy[i];
        const x = fractalPoint.x - fractalPoint.w / 2;
        const y = fractalPoint.y - fractalPoint.h / 2;
        ctx.drawImage(this.myImg, x, y, fractalPoint.w, fractalPoint.h);
        fractalPoint.iters--;
      }
    }
    return true;
  }
}
export default FractalCanvas;
