export class DrawerService {
  drawImage(ctx, matrix) {
    var imageData = ctx.getImageData(0, 0, matrix.length, matrix.length);
    var data = imageData.data;

    for (var y = 0; y < matrix.length; y++) {
      for (var x = 0; x < matrix.length; x++) {
        var index = (y * matrix.length + x) * 4;

        var value = matrix[y][x] == 0 ? 255 : 0;

        data[index]   = value;	// red
        data[++index] = value;	// green
        data[++index] = value;	// blue
        data[++index] = 255;	  // alpha
      }
    }

    ctx.putImageData(imageData, 0, 0);
  }
}