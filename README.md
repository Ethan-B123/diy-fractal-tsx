# typescript-fractals

This project allows you to create your own fractals. You can create shapes on the canvas and then pick areas to repeatedly print the canvas back onto itself, resulting in fractal patterns. </br></br>
Check out the project [here](https://typescript-fractals.netlify.com/). You can use the "source points" menu section to build the source image, and the "fractal points" menu to decide how you want the image to repeat onto itself.</br></br>
The key component of this entire project is the loadImgPromise function. This function allows me to asynchronously load the pixel data of the canvas into an image, and wait for that image to load. Once it has, I am able to use the ctx drawImage method to print the contents of the source image back onto the canvas.

```typescript
export function loadImgPromise(
	img: HTMLImageElement,
	src: string
): Promise<HTMLImageElement> {
	return new Promise(resolve => {
		img.src = src;
		img.addEventListener('load', () => {
			resolve(img);
		});
	});
}
```

```typescript
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
```
