export function loadImgPromise(
  img: HTMLImageElement,
  src: string
): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    img.src = src;
    img.addEventListener("load", e => {
      resolve(img);
    });
  });
}
