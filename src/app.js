export class App {
  message = 'Hello, Jovanny!';

  constructor() {
    this.canvasHeight = 700;
    this.canvasWidth = 700;
  }

  fetchLocations() {
    alert('Siii');
  }

  plotImageData(ctx, binaryPixelArray) {
    const pixelArray = binaryPixelArray
      .map(v => {
        const pixel = v ? 255 : 0;
        const color = [pixel, pixel, pixel];
        return [...color, 255];
      })
      .flat();
    const pictureSize = Math.sqrt(binaryPixelArray.length);
    const imageData = new ImageData(
      new Uint8ClampedArray(pixelArray),
      pictureSize,
      pictureSize
    );
    ctx.putImageData(imageData, 0, 0);
  }
}
