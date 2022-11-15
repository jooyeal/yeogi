export const drawLine = ({
  x,
  y,
  x1,
  y1,
  ctx,
}: {
  x: number;
  y: number;
  x1: number;
  y1: number;
  ctx: CanvasRenderingContext2D;
}) => {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x1, y1);
  ctx.strokeStyle = "#fff";
  ctx.lineWidth = 1;
  ctx.stroke();
};
