export function loadImgPromise(
  img: HTMLImageElement,
  src: string
): Promise<HTMLImageElement> {
  return new Promise((resolve) => {
    img.src = src;
    img.addEventListener("load", () => {
      resolve(img);
    });
  });
}
